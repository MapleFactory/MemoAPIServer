const Router = require('koa-router');
const model = require('../database/models');

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

module.exports = userApi;