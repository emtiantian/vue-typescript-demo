/**
 * koa主文件，实现jwt校验，token错误处理，加载全部路由，加载全局错误处理。
 *
 */

const koa = require('koa')
// 参数解析中间件
const koaBodyparser = require('koa-bodyparser')
// 日志中间件
const koaLogger = require('koa-logger')
// 自定义中间件读取并导入api文件中的接口
const controller = require('./util').controller
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



// 全部接口的自定义错误处理
// app.use(async (ctx,next)=>{
//   try{
//     await next().then((ctx,next)=>{
//       console.log(ctx.response.body)
//     });
//
//   }catch (err) {
//     ctx.status = err.statusCode || err.status || 500;
//     ctx.body = {
//       error: err.message || '服务器错误'
//     };
//   }
// })

// Custom 401 handling (first middleware)
app.use(function (ctx, next) {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = {
        error: err.originalError ? err.originalError.message : err.message
      };
    } else {
      throw err;
    }
  });
});

// 使用jwt实现路由检查是否有权限 是否是使用私有秘钥可以解密即认为token正确
// 这里就体现出ts的好处 使用的时候没有强制检查 不知道这里要传一个对象 示例中 使用的是es6 的简化模式 {secret} 这个表示 {secret: secret}
app.use(koaJwt({secret: secretKey}).unless({
  path: alowUrl,
}))

// 自定义token验证 ，比如说访问权限，是否超出最长时间，是否是重放攻击等

// app.use(async (ctx,next)=>{
//   let token =  ctx.header.authorization // 获取jwt,token
//   if(token){
//     // 解密载荷 // 获取载荷
//     let payload = await verify(token.split('')[1] ,secretKey)
//     console.dir(payload);
//   }else{
//     throw  error("token 不存在")
//   }
// })



// 导入自定义接口
app.use(route.routes())
// 调用route的aip在执行完所有next函数判断是否添加正确函数头，没有则添加
  .use(route.allowedMethods())

// // 自定义状态码处理 如果出错就不进入下方处理流程 并执行错误处理
// app.use(function (ctx, next) {
//   if(ctx.status === 401 || ctx.status === 400 ){
//     ctx.response.body = ctx.response.body ? ctx.response.body : "<h1>认证信息不正确</h1>"
//     next()
//   }else if(ctx.status === 200){
//     next()
//   }else if(ctx.status === 404){
//     ctx.response.body = ctx.response.body ? ctx.response.body : "<h1>路由不存在</h1> "
//     next()
//   }
//   else{
//     ctx.throw("500")
//     // throw error("未知状态码错误")
//   }
// })




app.listen(3000)
console.log('1 started at 3000')
