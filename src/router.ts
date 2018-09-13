import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
// import About from './views/About.vue';
// import Login from './views/Login.vue';
// import Vue404 from './views/common/Error404.vue';
import DefaultRouter from './router/defaultRouter';
// import FullRouter from './router/fullRouter';

Vue.use(Router);

export default new Router(DefaultRouter.defaultRouter);
// export  default  new Router(FullRouter.fullRouter);
