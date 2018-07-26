import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuei18n from 'vue-i18n';

Vue.config.productionTip = false;

Vue.use(vuei18n); // 插件形式挂载国际化组件

const i18n = new vuei18n({
    locale: 'zh-CN',    // 语言标识
    // this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh-CN': require('./assets/lang/zh'),   // 中文语言包
        'en-US': require('./assets/lang/en'),    // 英文语言包
    },
});
new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app');
