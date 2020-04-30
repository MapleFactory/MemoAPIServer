const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Memo API Server';
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});