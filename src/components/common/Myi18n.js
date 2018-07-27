export default new class Myi18n {
    //这个方法有问题
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
};
//# sourceMappingURL=myi18n.js.map