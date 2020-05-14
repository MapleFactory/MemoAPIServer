const Router = require('koa-router');
const model = require('../database/models');
const crypto = require('crypto');

const userApi = new Router();

model.sequelize.sync().then(() => {
    console.log("DB connection success");
}).catch(err => {
    console.log("DB connection failed");
    console.log(err);
});

userApi.get('/test', (ctx, next) => {
    console.log('/test');

    ctx.body = "Test!";
    ctx.status = 200;
});

userApi.get('/tUsers', async (ctx, next) => {
    const { userId } = ctx.query;

    if (userId === undefined || userId === "") {
        ctx.status = 400;
        return;
    }

    await model.sequelize.models.Users.findOne({
        where: { userId: userId }
    }).then(result => {
        console.log("[User]Get user info test");

        if (result)
            ctx.body = result;
        else
            ctx.body = "There is no user.";
        ctx.status = 200;
    }).catch(err => {
        console.log(err);
        ctx.status = 500;
    });
});

userApi.post('/users', async (ctx, next) => {

    const { userId, userPw } = ctx.request.body;

    // 유저 비밀번호 암호화
    const salt = crypto.randomBytes(64).toString('base64');
    const encryptedPw = crypto.pbkdf2Sync(userPw, salt, 10000, 128, 'sha512').toString('base64');

    // DB에 유저 정보 등록
    await model.sequelize.models.Users.create({
        userId: userId, userPw: encryptedPw, salt: salt
    }).then(() => {
        console.log("[User]Create Success: Sign Up");
        ctx.status = 200;
    }).catch(err => {
        console.log(err);
        ctx.status = 500;
    });
});

userApi.delete('/users', async (ctx, next) => {

    const { userId } = ctx.request.body;

    // DB에서 유저 정보 제거
    await model.sequelize.models.Users.destroy({
        where: { userId: userId }
    }).then(() => {
        console.log("[User]Delete success: Sign Out");
        ctx.status = 200;
    }).catch(err => {
        console.log(err);
        ctx.status = 500;
    });
});

module.exports = userApi;