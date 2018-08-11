/**
 * 方法是自定义一个中间件 用来遍历对应文件夹下面的所有接口定义
 * 参考 https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471133885340dad9058705804899b1cc2d0a10e7dc80000
 */
const fs = require('fs')

// 把请求路径和对应的处理方法意义映射到路由中
function addMapping (router, mapping) {
  for (let url in mapping) {
    if (url.startsWith('GET ')) {
      let path = url.substring(4)
      router.get(path, mapping[url])
      console.log(`register URL mapping: GET ${path}`)
    } else if (url.startsWith('POST ')) {
      let path = url.substring(5)
      router.post(path, mapping[url])
      console.log(`register URL mapping: POST ${path}`)
    } else {
      console.log(`invalid URL: ${url}`)
    }
  }
}

// 读取api文件夹下所有js文件读取对应接口
function addControllers (router, dir) {
  let files = fs.readdirSync(__dirname + '/' + dir)
  let js_files = files.filter((f) => {
    return f.endsWith('.js')
  })

  for (let f of js_files) {
    console.log(`process controller: ${f}...`)
    let mapping = require(__dirname + '/' + dir + '/' + f)
    addMapping(router, mapping)
  }
}

// 实现读取api文件夹下所有aip的功能
const controller = (dir = 'api') => {
  let
    controllers_dir = dir, // 如果不传参数，扫描目录默认为'api'
    router = require('koa-router')()// 自执行相当于 引入之后直接初始化 router = new require("koa-router")
  addControllers(router, controllers_dir)
  // 返回路由可访问对象
  // return router.routes();
  // 返回路由完整对象
  return router
}

//实现koa2 模拟服务器睡眠
const delay = (times = 2000) => {
  return new Promise((resolve, reject) => {
    console.log('开始服务器睡眠')
    setTimeout(() => {
      console.log('结束服务器睡眠')
      resolve()
    }, times)
  })
}

// 把对象数组转换为多维数组
// const objToArr = (arr) => {
//   let lenth = arr.length,
//     i = 0,
//     arrs = []
//   for (i; i < lenth; i++) {
//     if(typeof arr[i] == 'object'){
//       this(arr[i]);
//     }else{
//       let j = {},
//         arrNext = []
//       for (j in arr[i]){
//         arrNext.push([])
//       }
//       arrs.push()
//     }
//   }
// }

// 判断对象数组中是否有对应值并且其他值也一样
const isInDB = (obj,DB)=>{
return DB.some((ele,index,arr)=>{

})
}

module.exports = {
  delay,
  controller,
}