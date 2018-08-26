import instance from './index';

const preurl = '';

const signin = {
    p: ['get,/signin'],
    r: (params: any) => {
        return instance.get('/signin', {params});
    },
};
export default {
    signin,
};
