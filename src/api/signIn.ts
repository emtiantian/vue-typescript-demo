import instance from './index';
const preurl = ''

const sigin = {
    p:['get,/sigin'],
    r:(params)=>{
        return instance.get('/sigin',{params})
    }
}
export  default {
    sigin
}
