<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <router-link to="/login">login</router-link>
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

    @Component
    export default class App extends Vue {
        // private userData: object = null;
        // private menuData: object = null;

        private loginAss(newPath: string) {
            const localUser = sessionStorage.getItem('user-token');
            if (!localUser) {
                return this.$router.push({path: '/login', query: {from: this.$router.currentRoute.path}});
            }
            // 设置请求头统一携带token
            // instance.defaults.headers.common['Authorization'] = 'Bearer token';
            instance.defaults.headers.common['Authorization'] = 'Bearer ' + localUser;
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


                localStorage.setItem('menuData', data.data.menus);
                localStorage.setItem('userData', data.data.user);
                localStorage.setItem('routerData', data.data.resources);

                // 判断newPath是否存在
                // 是否有权限没有权限替换为404, ts的校验太严格了~
                let routerData = localStorage.getItem('routerData') || "";
                newPath = util.isAllow(newPath,routerData)?newPath:"404";

                // 对应路由表取出允许访问路由

                // 动态注入路由

                // 动态生成菜单 在首页中生成

                // 路由守护

                // 请求拦截

                // 默认跳转首页
                this.$router.replace({path: newPath || '/'});
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

    // @Component({
    //     data(){
    //         return {
    //             userData:null,
    //             menuData:null,
    //         }
    //     },
    //     methods:{
    //         loginAss: function ():void {
    //             this.$message({
    //                 message: '登录成功',
    //                 type: 'success',
    //                 duration: 0, // 不自动关闭
    //                 showClose: true, // 显示关闭按钮
    //             })
    //         }
    //     }
    //
    // })

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
