const Router = require('koa-router');
const model = require('../database/models');

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

userApi.get('/tMemos', (ctx, next) => {
    const { memoId } = ctx.query;

    model.sequelize.models.Memos.findOne({
        where: { memoId: memoId }
    }).then(result => {
        console.log("[Memo]Get memo info test");

        ctx.body = result;
        ctx.status = 200;
    }).catch(err => {
        console.log(err);
        ctx.status = 500;
    });
});

module.exports = userApi;