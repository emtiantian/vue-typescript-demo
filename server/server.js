const koa = require('koa');
// 路由中间件
const koaRouter = require('koa-router');
// 参数解析中间件
const koaBodyparser =require('koa-bodyparser');
// 日志中间件
const koaLogger = require('koa-logger');
// 自定义中间件读取并导入api文件中的接口
const controller = require("./controller");


const app = new koa();
const router = new koaRouter();

app.use(koaBodyparser());
app.use(koaLogger());
app
  .use(router.routes())
  .use(router.allowedMethods());
// 导入自定义接口
app.use(controller());


router
  .get('/', (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>hello</h1>';
    next();
  })


app.listen(3000)
console.log('1 started at 3000');