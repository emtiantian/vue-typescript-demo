import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Vue404 from '../views/common/Error404.vue';
const defaultRouter = {
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
        },
        {
            path: '*',
            name: '404',
            component: Vue404,
        },
    ],
};
export default {
    defaultRouter,
};
//# sourceMappingURL=defaultRouter.js.map