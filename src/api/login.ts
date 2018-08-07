import instance from './index';
const preUrlPath = '';
// 当前登录接口信息在rap2上
// 获取登录信息
const request = {
    p: ['get,/login'],
    r: (params: any) => {
        return instance.get(`${preUrlPath}/signin`, {params});
    },
};
export default {
    request,
}
;
