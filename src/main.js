import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 国际化
import vuei18n from 'vue-i18n';
// 饿了么ui
import element from 'element-ui';
// 引入自动切换语言和手动切换语言类
import myi18n from './components/common/Myi18n';
Vue.config.productionTip = false;
Vue.use(vuei18n); // 插件形式挂载国际化组件
Vue.use(element); // 引入饿了么ui
// 定义系统包含的语言，第一个为默认语言
Vue.prototype.language = ['zh-cn', 'en'];
// 初始化国际化配置
const i18n = new vuei18n({
    // locale: 'zh-cn',    // 语言标识
    fallbackLocale: 'zh-cn',
    locale: new myi18n().getLocalLanguage(),
    messages: {
        'zh-cn': require('./assets/lang/zh'),
        'en': require('./assets/lang/en'),
    },
});
// 绑定i18n到全局变量上
Vue.prototype.i18n = i18n;
// 自定义权限指令 需要权限判断的操作均引用这个
Vue.directive('has', {
    bind: (el, binding) => {
        if (!Vue.prototype.$_has(binding.value)) {
            el.parentNode.removeChild(el);
        }
    },
});
new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app');
//# sourceMappingURL=main.js.map