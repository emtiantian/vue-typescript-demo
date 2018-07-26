import Vue from 'vue';

export class myi18n {

    getCookie(name: string, defaultValue: string) {
        let arr,
            reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        }
        else {
            return defaultValue;
        }
    }

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
}


// 这个是切换语言的方法
// export default changeLangEvent() {
//     this.$confirm('确定切换语言吗?', '提示', {
//         confirmButtonText: '确定',
//         cancelButtonText: '取消',
//         type: 'warning'
//     }).then(() => {
//         if ( this.lang === 'zh-CN' ) {
//             this.lang = 'en-US';
//             this.$i18n.locale = this.lang;//关键语句
//         }else {
//             this.lang = 'zh-CN';
//             this.$i18n.locale = this.lang;//关键语句
//         }
//     }).catch(() => {
//         this.$message({
//             type: 'info',
//         });
//     });
// };
