const Router = require('koa-router');
const model = require('../../models');

const userApi = new Router();

model.sequelize.sync().then(() => {
    console.log("DB connection success");
}).catch(err => {
    console.log("DB connection failed");
    console.log(err);
});

userApi.get('/test/:str', (ctx, next) => {
    const { str } = ctx.params;
    
    ctx.body = "Input: " + str;
    ctx.status = 200;
});

module.exports = userApi;