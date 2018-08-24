import instance from './index';
const preUrlPath = '';
// 获取登录信息
const login = {
    // 在自定义拦截器中使用，定义当前请求所属路由权限
    p: ['post,/public/login'],
    // 这个r方法用来发送请求
    r: (data: any) => {
        // 问题1：
        // 设置请求头 跨域的post请求要求是simple request 如果不是简单请求 则需要先请求options类型 确定服务器支持请求头
        // 参考
        // https://laravel-china.org/topics/6321/the-problem-of-sending-post-requests-to-options-when-axios-cross-domain-is-solved
        // 设置自定义server允许跨域就解决 options 请求类型问题
        // 问题2：
        // 这里给params加上大括号变成对象才能对应{"params":{params}} 只有get上才需要使用
        // 这里给data加上大括号变成对象才能对应{"data":{data}} 实际上不需要使用
        // es6的对象扩展
        // const foo = 'bar';
        // const baz = {foo};
        // baz // {foo: "bar"}
        // 等同于
        // const baz = {foo: foo};
        // 问题3：
        // aoxis 出现 Provisional headers are shown 错误
        // 是测试超时时候 处理超时的回调函数出错导致没有接受服务器响应值
        // public下所有请求不经过jwt
        return instance.post(`${preUrlPath}/public/login`, data);
    },
};
export default {
    login,
}
;
