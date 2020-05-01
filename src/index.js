const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

const userApi = require('./api/user');

router.use(userApi.routes());

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(async ctx => {
  ctx.body = 'Memo API Server';
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});