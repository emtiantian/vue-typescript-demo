const koa = require('koa')
// 路由中间件
const koaRouter = require('koa-router')
// 参数解析中间件
const koaBodyparser = require('koa-bodyparser')
// 日志中间件
const koaLogger = require('koa-logger')
// 自定义中间件读取并导入api文件中的接口
const controller = require('./controller')
// 引入跨域处理 跨域范围可以自己定义
const koaCors = require('koa2-cors')
// 引入jwt进行实现jwt规范
const koaJwt = require('koa-jwt')
// 引入jsonwebtoken实现token生成
const jwtCreate = require('jsonwebtoken')
// 自定义jwt秘钥内容
const secretKey = 'xiaotou?'
// 自定义不校验的路径数组
const alowUrl = [/^\/public/]

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

const app = new koa()
const route = controller()

app.use(koaCors())
app.use(koaBodyparser())
app.use(koaLogger())

// 使用jwt实现路由检查是否有权限
app.use(koaJwt({secretKey}).unless({
  path: alowUrl,
}))
// 自定义token检查错误处理 如果出错就不进入下方真实地址
app.use(function (ctx, next) {
  return next().cache((err) => {
    if (err.status == '401') {
      ctx.status = 401;
      ctx.body = {
        error : err.originalError ? err.originalError.message : err.message
      };
    }else{
      throw  err
    }
  })
})

// 导入自定义接口
app.use(route.routes())
// 调用route的aip在执行完所有next函数判断是否添加正确函数头，没有则添加
  .use(route.allowedMethods())

app.listen(3000)
console.log('1 started at 3000')