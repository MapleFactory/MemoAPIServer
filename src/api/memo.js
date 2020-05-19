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

userApi.get('/tMemos', async (ctx, next) => {
    const { memoId } = ctx.query;

    if (memoId === undefined || memoId === "") {
        ctx.status = 400;
        return;
    }

    await model.sequelize.models.Memos.findOne({
        where: { memoId: memoId }
    }).then(result => {
        console.log("[Memo]Get memo info test");

        if (result)
            ctx.body = result;
        else
            ctx.body = "There is no memo.";
        ctx.status = 200;
    }).catch(err => {
        console.log(err);
        ctx.status = 500;
    });
});

userApi.post('/memos', async (ctx, next) => {

    const { memoName, memoOpen, memoContent, upMemoId } = ctx.request.body;

    // DB에 메모 정보 등록
    await model.sequelize.models.Memos.create({
        memoName: memoName, memoAuthor: "testAuthor", memoOpen: memoOpen,
        memoContent: memoContent, upMemoId: upMemoId, downMemoId: null
    }).then(() => {
        console.log("[Memo]Create Success!");
        ctx.status = 200;
    }).catch(err => {
        console.log(err);
        ctx.status = 500;
    });
});

userApi.delete('/memos', async (ctx, next) => {

    const { memoId } = ctx.request.body;

    // DB에서 메모 정보 제거
    await model.sequelize.models.Memos.destroy({
        where: { memoId: memoId }
    }).then(() => {
        console.log("[Memo]Delete success!");
        ctx.status = 200;
    }).catch(err => {
        console.log(err);
        ctx.status = 500;
    });
});

module.exports = userApi;