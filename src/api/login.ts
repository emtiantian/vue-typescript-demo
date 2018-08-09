import instance from './index';
import json = Mocha.reporters.json;
const preUrlPath = '';
// 获取登录信息
const request = {
    // 在自定义拦截器中使用，定义当前请求所属路由权限
    p: ['post,/login'],
    // 这个r方法用来发送请求
    r: (params: any) => {
        // 设置请求头 跨域的post请求要求是simple request 如果不是简单请求 则需要先请求options类型 确定服务器支持请求头
        // 参考
        // https://laravel-china.org/topics/6321/the-problem-of-sending-post-requests-to-options-when-axios-cross-domain-is-solved
        // 设置自定义server允许跨域就解决 options 请求类型问题
        // 这里给params加上大括号变成对象才能对应{"params":{params}}
        // es6的对象扩展
        // const foo = 'bar';
        // const baz = {foo};
        // baz // {foo: "bar"}
        //
        // 等同于
        // const baz = {foo: foo};

        return instance.get(`${preUrlPath}/login`, {params});
    },
};
export default {
    request,
}
;
