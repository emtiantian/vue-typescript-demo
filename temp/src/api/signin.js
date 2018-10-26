import instance from './index';
const preurl = '';
const signin = {
    p: ['get,/signin'],
    r: (params) => {
        return instance.get('/signin', { params });
    },
};
export default {
    signin,
};
//# sourceMappingURL=signin.js.map