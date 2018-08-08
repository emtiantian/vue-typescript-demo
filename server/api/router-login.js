let login = async (ctx, next) =>{
  let obj = ctx.request.params

  if(!obj){
    ctx.status = 400
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>账号密码不能为空</h1>';
    next();
    return
  }
  console.log("拿到的data"+obj.name);
  if(obj.name == 'admin' && obj.password == '123456'){
    ctx.response.type = 'application/json';
    ctx.response.body = {'token':"123456"}
    next();
  }else{
    ctx.status = 401
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>账号或密码不正确</h1>';
    next();
  }
}
// 导出模块格式要注意下 这个格式和controller中解析有关系 当前解析还不支持get 和post之外的请求
module.exports = {
  'GET /login' : login
}