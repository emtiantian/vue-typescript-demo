const koa = require('koa');
// 路由中间件
const koaRouter = require('koa-router');
// 参数解析中间件
const koaBodyparser =require('koa-bodyparser');
// 日志中间件
const koaLogger = require('koa-logger');
// 自定义中间件读取并导入api文件中的接口
const controller = require("./controller");
// 引入跨域处理 跨域范围可以自己定义
const koaCors = require('koa2-cors');

// 自定义跨域规则
// app.use(cors({
//   origin: function(ctx) {
//     if (ctx.url === '/test') {
//       return false;
//     }
//     return '*';
//   },
//   exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//   maxAge: 5,
//   credentials: true,
//   allowMethods: ['GET', 'POST', 'DELETE'],
//   allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
// }));


const app = new koa();
const router = new koaRouter();


app.use(koaCors());
app.use(koaBodyparser());
app.use(koaLogger());
app
  .use(router.routes())
  .use(router.allowedMethods());
// 导入自定义接口
app.use(controller());





app.listen(3000)
console.log('1 started at 3000');