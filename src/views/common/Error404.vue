<template>
    <div>
        <h1>{{$t('m.'+errormassage)}}</h1>
        <h1>{{time}}s后跳转到首页</h1>
    </div>
</template>

<script lang="ts">

    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Error extends Vue {
        @Prop({default: 'notfound'}) private errormassage!: string;
        // 这里要注意在创建组件的时候 传参设置
        @Prop({default: 5}) private time!: number;

        // private time: number = 5;
        // 这里应该有接口定义
        // @Prop() public routerPath?: any = this.$router;

        // vue中渲染完成自动执行
        private mounted() {
            this.change();
        }

        private changeRouter(): void {
            this.$router.push('/');
        }

        private changeTimer(): void {
            this.time --;
        }

        private change(): void {
            let a: any;
            let b: any;
            a = setTimeout(() => this.changeRouter(), this.time * 1000);

            b = setInterval(() => this.changeTimer(), 1000);

            // const thisF = this;
            // let timeMy = this.time;
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
