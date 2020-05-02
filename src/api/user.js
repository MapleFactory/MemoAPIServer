const Router = require('koa-router');

const userApi = new Router();

userApi.get('/test', (ctx, next) => {
    console.log('/test');

    ctx.body = "Test!";
    ctx.status = 200;
});

module.exports = userApi;