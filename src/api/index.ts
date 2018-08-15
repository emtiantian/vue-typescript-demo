import axios from 'axios';
import Vue from 'vue';

const instance = axios.create({
    // baseURL: 'http://rap2api.taobao.org/app/mock/224',
    // baseURL: 'http://rap2api.taobao.org/app/mock/25126/v1',
    baseURL: 'http://127.0.0.1:3000',
    timeout: 10000,
});
const cacheErr = (error: any) => {


    if (error.response) {
        switch (error.response.status) {
            case 400:
                Vue.prototype.$message({
                    message: error.response.data.message || '请求参数异常',
                    type: 'error',
                    duration: 0,// 不自动关闭
                    showClose : true, // 显示关闭按钮
                });
                break;
            case 401:
                // 错误登录或者登录超时 需要清空session中的user
                sessionStorage.removeItem('user');
                Vue.prototype.$message({
                    message: error.response.data.message || '密码错误或账号不存在！',
                    type: 'warning',
                    onClose: () => {
                        location.reload();
                    },
                    duration: 0,// 不自动关闭
                    showClose : true, // 显示关闭按钮
                });
                break;
            case 403:
                Vue.prototype.$message({
                    message: error.response.data.message || '无访问权限，请联系企业管理员',
                    type: 'warning',
                    duration: 0,// 不自动关闭
                    showClose : true, // 显示关闭按钮
                });
                break;
            default:
                Vue.prototype.$message({
                    message: error.response.data.message || '服务端异常，请联系技术支持',
                    type: 'error',
                    duration: 0,// 不自动关闭
                    showClose : true, // 显示关闭按钮
                });
        }
    } else {
        // 请求超时处理
        Vue.prototype.$message({
            message: '网络连接超时请稍后重试',
            type: 'error',
            onClose: () => {
                location.reload();
            },
            duration: 0,// 不自动关闭
            showClose : true, // 显示关闭按钮
        });
    }
    return Promise.reject(error);
};
// 错误处理
instance.interceptors.response.use((response) => {
    return response;
}, cacheErr);

export default instance;
