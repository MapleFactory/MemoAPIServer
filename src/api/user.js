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

userApi.get('/tUsers', (ctx, next) => {
    const { userId } = ctx.query;

    model.sequelize.models.User.findOne({
        where: { userId: userId }
    }).then(result => {
        console.log("[User]Get user info test");

        ctx.body = result;
        ctx.status = 200;
    }).catch(err => {
        console.log(err);
        ctx.status = 500;
    });
});

module.exports = userApi;