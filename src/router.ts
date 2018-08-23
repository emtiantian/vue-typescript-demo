import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Login from './views/Login.vue';
import Vue404 from './views/common/Error404.vue';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                appname: 'appname',
                btnText: '登录1',
            },
        },
        {
            path: '*',
            name: '404',
            component: Vue404,
            // meta: {
            //     errormassage: '404',
            // },
        },
    ],
});
