<template>
    <Error>{{$t('m.'+errormassage)}}</Error>
    <h1>{{time+'s后跳转'}}</h1>
</template>

<script lang="ts">

    import {Component, Prop, Vue} from 'vue-property-decorator';
    // import Router from 'vue-router'

    @Component
    export default class Error extends Vue {
        @Prop() public errormassage?: string = '404';
        @Prop() public time?: number = 5;
        // 这里应该有接口定义
        @Prop() public routerPath?: any = this.$router;


        private reRouter() {
            const thisF = this;
            let timeMy = this.time;
            // thisF.$message({
            //     message: this.errormassage,
            //     type: 'error',
            //     duration: 0, // 不自动关闭
            //     showClose: true, // 显示关闭按钮
            //     onClose: ()=> void {
            //     //     setTimeout(()=> void {
            //     //
            //     // },timeMy);
            //         // setTimeout(function() {
            //         //     timeMy --;
            //         //     // TODO 跳转到指定页
            //         //     // 跳转到上一页
            //         //     thisF.$router.back();
            //         // }, timeMy*1000);
            //     },
            // });
        }
    }

</script>

<style scoped>

</style>
