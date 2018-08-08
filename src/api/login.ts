import instance from './index';
const preUrlPath = '';
// 当前登录接口信息在rap2上
// 获取登录信息
const request = {
    // 在自定义拦截器中使用，定义当前请求所属路由权限
    p: ['post,/login'],
    // 这个r方法用来发送请求
    r: (params: any) => {
        return instance.post(`${preUrlPath}/login`, {params});
    },
};
export default {
    request,
}
;
