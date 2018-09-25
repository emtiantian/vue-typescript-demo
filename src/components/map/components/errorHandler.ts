
// // 本类参考 https://segmentfault.com/a/1190000011481099#articleHeader11
// // 自定义错误处理类
// function DevError(message: string = '未知错误') {
//     this.name = 'DevError';
//     this.message = message;
//     this.stack = (new Error()).stack;
// }
//
// // 参考 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// // 这个是继承父类原型上的所有方法
// DevError.prototype = Object.create(Error.prototype);
// // 确定子类的构造方法
// DevError.prototype.constructor = DevError;


function errorHandler(error: Error) {
    // if (err instanceof 'DevError') {
    //     DevError(error.message);
    //     console.error('DevError' + error.message);
    // } else {
    //     // 去Stack Overflow查找相关错误信息
    //     error.message += ` https://stackoverflow.com/questions?q=${encodeURI(error.message)}`;
    //     console.error(err.message);
    // }
    error.message += ` https://stackoverflow.com/questions?q=${encodeURI(error.message)}`;
    console.error(error.message);
}

window.onerror = (msg, url, line, col, err:Error) => {
    errorHandler(err);
};

// 获取promise的错误 这里ts报错
// window.onunhandledrejection = (event) => {
//     errorHandler(event.reason);
// };

export default errorHandler;
