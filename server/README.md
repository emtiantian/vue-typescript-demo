# 自定义项目接口
## 使用koa自己模拟后台逻辑
1.  路由中间件
 `const koaRouter = require('koa-router');`
2.  参数解析中间件
`const koaBodyparser =require('koa-bodyparser');`
3. 日志中间件
`const koaLogger = require('koa-logger');`
4. 自定义中间件读取并导入api文件中的接口
`const controller = require("controller");`
5. 引入跨域处理 跨域范围可以自己定义
`const koaCors = require('koa2-cors')`
6. 引入jwt进行实现jwt规范
`const koaJwt = require('koa-jwt')`
7. 引入jsonwebtoken实现token生成
`const jwtCreate = require('jsonwebtoken')`


### TODO
6. 添加统一的错误处理


## 使用mock自动生成对应数据