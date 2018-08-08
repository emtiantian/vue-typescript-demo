const router = require('koa-router');

let login = new router();

login.get('/login',(ctx,next)=>{
  const obj = ctx.body
  if(obj == {}){
     ctx.status = 401
     next();
     return
  }
  if(obj.name == "admin" && obj.password == '123456' ){
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>login 了</h1>';
    next();
  }
})
module.exports = login