/**
 * koa主文件，实现jwt校验，token错误处理，加载全部路由，加载全局错误处理。
 *
 */

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

// 引入jwt配置文件
const  jwtConfig = require('./jwtConfig')
// 自定义jwt秘钥内容
const secretKey = jwtConfig.secretKey
// 自定义不校验的路径数组
const alowUrl = jwtConfig.alowUrl

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
// 自动化载入api中的所有路由
const route = controller()

app.use(koaCors())
app.use(koaBodyparser())
app.use(koaLogger())

// 使用jwt实现路由检查是否有权限
app.use(koaJwt({secretKey}).unless({
  path: alowUrl,
}))

// 自定义token检查错误处理 如果出错就不进入下方处理流程
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
// 全部接口的自定义错误处理

app.listen(3000)
console.log('1 started at 3000')