const Router = require('koa-router');

const userApi = new Router();

userApi.get('/test/:str', (ctx, next) => {
    const { str } = ctx.params;
    
    ctx.body = "Input: " + str;
    ctx.status = 200;
});

module.exports = userApi;