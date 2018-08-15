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

#### 具体实现 jwt
1. 登录 login post账号和密码 （密码要加密）
2. 验证是否登录成功发放token 载荷一般包含如上信息 （如果要刷新则还有个刷新token refresh token）
3. 正常访问token验证 （签名是否与载荷一致，是否过期，是否强制过期，是否有权限访问对应资源，是否是重放攻击）
4. token注销
> 全部注销(修改秘钥)   
> 部分注销（不建议？）（无状态与撤销是互斥的）   
> 需要撤销的场景 （需要数据库 使用token-用户名键值对）   
>  1. 发生在退出登录（在某一端退出销毁token，或refresh token）   
>  2. 修改密码（删除对应用户下所有token，或refresh token）   
>  3. 黑名单（删除对应用户下所有token，或refresh token并登录失败）
5.  token 续1s
> access toekn 是用户凭证
> refines token （保存在数据库中？ 参考[auth0-refines token](https://auth0.com/docs/tokens/refresh-token/current)）

## 使用mock自动生成对应数据