<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <router-link to="/login">login</router-link>
            |
            <router-link to="/monitor">monitor</router-link>
        </div>
        <!-- 触发器要写在路由引入部分上面 -->
        <router-view @login="loginAss" @logout="logoutAss"/>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import signin from './api/signin';
    import instance from './api/index';
    import util from './util/util';
    import fullRouter from './router/fullRouter';
    import defaultRouter from './router/defaultRouter';

    // FIXED vue 刷新会重新实例化 是否需要判断sessionStorage中是否有路由信息
    // TODO vue 在现有路由下添加子路由会有问题
    // https://github.com/vuejs/vue-router/issues/1156
    @Component
    export default class App extends Vue {
        // private userData: object = null;
        // private menuData: object = null;
        private loginAss(newPath: string) {
            const localUser = sessionStorage.getItem('user-token');
            const that = this;
            if (!localUser) {
                return this.$router.push({path: '/login', query: {from: this.$router.currentRoute.path}});
            }
            // 设置请求头统一携带token
            // instance.defaults.headers.common['Authorization'] = 'Bearer token';
            // instance.defaults.headers.common['Authorization'] = 'Bearer ' + localUser;
            instance.defaults.headers.common.Authorization = 'Bearer ' + localUser;
            // console.log('token：' + sessionStorage.getItem('user-token'));
            // 绑定token到拦截器上
            // 通过token获得 动态路由和动态菜单
            signin.signin.r({}).then((data) => {

                // 调试用代码
                // this.$message({
                //     message: '获取到了内容',
                //     type: 'success',
                //     duration: 0, // 不自动关闭
                //     showClose: true, // 显示关闭按钮
                // });

                // localStorage 不能存储对象，并且localStorage不能设置存储时间 会一直存储直到手动删除
                // 这里选用sessionStorage，当需要保持登录状态的时候使用localStorage 并在退出的时候删除token
                sessionStorage.setItem('menuData', JSON.stringify(data.data.menus));
                sessionStorage.setItem('userData', JSON.stringify(data.data.user));
                sessionStorage.setItem('routerData', JSON.stringify(data.data.resources));
                const routerData = sessionStorage.getItem('routerData') || '';

                // 对应路由表取出允许访问路由
                const Router = util.getRouter(fullRouter.fullRouter.routes, routerData);


                // 拼接允许路由和默认路由
                const allowRouter = Router.concat(defaultRouter.defaultRouter.routes);

                // 判断newPath是否存在
                if (newPath) {
                    // 是否有权限没有权限替换为404, ts的校验太严格了~
                    newPath = util.isAllow(newPath, JSON.stringify(allowRouter)) ? newPath : '/404';
                } else {
                    // 默认跳转首页
                    newPath = '/';
                }

                // 动态注入路由
                // 最后在添加默认路由 不然动态路由在默认路由之后不会被访问到 这个问题不存在了 官方已经在代码中吧*路由自动放在最后了
                // that.$router.addRoutes(Router.concat([{path: '*', redirect: '/404'}]) as any);
                that.$router.addRoutes(Router as any);
                // debugger;
                // const arr = [{
                //     path: '/monitor',
                //     name: 'monitor',
                //     component:monitor,
                // }];
                // that.$router.addRoutes(arr)
                // 动态生成菜单 在首页中生成

                // 路由守护 路由守护和请求拦截

                // 跳转页面
                that.$router.push({path: newPath});
            });
        }

        private logoutAss() {
            this.$message({
                message: '准备登出',
                type: 'success',
                duration: 0, // 不自动关闭
                showClose: true, // 显示关闭按钮
            });
        }
    }
</script>
<style lang="less">
    @import "assets/common.css";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
