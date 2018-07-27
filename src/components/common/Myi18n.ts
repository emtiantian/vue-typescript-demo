
export default  new class Myi18n {
    //这个方法有问题
    public getCookie(name: string, defaultValue: string) {
        let arr: any;
        const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        if (reg) {
            arr = document.cookie.match(reg);
            return unescape(arr[2]);
        } else {
            return defaultValue;
        }
    }
    //切换语言  主要是修改this.$i18n.locale = this.lang;//关键语句
    // changeLangEvent() {
    // this.$confirm('确定切换语言吗?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    // }).then(() => {
    //     if ( this.lang === 'zh-CN' ) {
    //         this.lang = 'en-US';
    //         this.$i18n.locale = this.lang;//关键语句
    //     }else {
    //         this.lang = 'zh-CN';
    //         this.$i18n.locale = this.lang;//关键语句
    //     }
    // }).catch(() => {
    //     this.$message({
    //         type: 'info',
    //     });
    // });
};
