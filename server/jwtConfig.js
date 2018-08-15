// 自定义jwt秘钥内容
const secretKey = 'xiaotou?'
// 自定义不校验的路径数组
const alowUrl = [/^\/public/]
// 自定义超时时间
const expiresTime = '1h'
// 自定义加密方式
const algorithm = 'RS256'

// es6 对象扩展，变量名为对象key
module.exports = {
  secretKey,
  alowUrl ,
  expiresTime ,
  algorithm,
}