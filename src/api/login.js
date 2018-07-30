import instance from './index';
const preUrlPath = '';
//获取登录信息
const request = {
    p: ['get,/login'],
    r: (params) => {
        return instance.get(`${preUrlPath}/login`, { params });
    }
};
export { request, };
//# sourceMappingURL=login.js.map