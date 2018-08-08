const koa = require('koa');
const koaRouter = require('koa-router');
const koaBodyparser =require('koa-bodyparser');
const koaLogger = require('koa-logger');
// 自定义api
const login = require('api/router-login');

const app = new koa();
const router = new koaRouter();

app.use(koaBodyparser());
app.use(koaLogger());
app
  .use(router.routes())
  .use(router.allowedMethods());
app.use(login.routes());


router
  .get('/', (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>hello</h1>';
  })
  .post('/users', (ctx, next) => {
    // ...
  })
  .put('/users/:id', (ctx, next) => {
    // ...
  })
  .del('/users/:id', (ctx, next) => {
    // ...
  })
  .all('/users/:id', (ctx, next) => {
    // ...
  });

app.listen(3000)
console.log('1 started at 3000');