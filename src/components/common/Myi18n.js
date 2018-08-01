class Myi18n {
    // 这个是在用户自定义了语言，保存在cookies中
    getCookie(name, defaultValue) {
        let arr;
        const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        if (reg) {
            arr = document.cookie.match(reg);
            return unescape(arr[2]);
        }
        else {
            return defaultValue;
        }
    }
    // 获得当前操作系统的语言设置,判断是否有对应语言包，没有则使用第一个语言包
    getLocalLanguage() {
        // @ts-ignore：隐藏兼容ie时出现的，navigator不存在browserLanguage属性的错误
        return (navigator.language || navigator.browserLanguage).toLowerCase();
    }
    // 动态修改语言包
    changeLanguage(i18n, language) {
        i18n.locale = language;
    }
}
export default Myi18n;
//# sourceMappingURL=myi18n.js.map