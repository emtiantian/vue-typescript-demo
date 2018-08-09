//实现koa2 模拟服务器睡眠
module.exports = (times = 2000)=>{
  return new Promise((resolve,reject)=>{
    console.log("开始服务器睡眠")
    setTimeout(()=>{
      console.log("结束服务器睡眠")
      resolve();
    },times)
  })
}