let login = async (ctx, next) =>{
  let obj = ctx.body
  if(!obj){
    // ctx.status = 401
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>没有账号和密码</h1>';
    next();
    return
  }
  if(obj.name == 'admin' && obj.password == '123456'){
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>login 了</h1>';
    next();
  }
}
// 导出模块格式要注意下 这个格式和controller中解析有关系 当前解析还不支持get 和post之外的请求
module.exports = {
  'POST /login' : login
}