<template>
    <div>
        <h1>{{$t(errormassages)}}</h1>
        <h1>{{timeing}}s后跳转到首页</h1>
    </div>
</template>

<script lang="ts">

    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Error extends Vue {
        @Prop({default: 'notfound'}) private errormassage!: string;
        // 这里要注意在创建组件的时候 传参设置
        @Prop({default: 5000}) private timer!: number;

        // 计算属性
        //  computed: {
        //     timeing(): string {
        //         return this.time;a
        //     };
        // }
        //
        private timeing: number = this.timer;

        // get timeing(): number {
        //     return this.timer;
        // }
        //
        // set timeing(newtimeing) {
        //     this.timeing = newtimeing;
        // }

        get errormassages() {
            return this.errormassage;
        }


        // vue中渲染完成自动执行
        private mounted() {
            this.change();
        }

        private changeRouter(): void {
            this.$router.push('/');
        }

        private changeTimer(): void {
            this.timeing--;

        }

        private change(): void {
            let a: any;
            let b: any;
            a = setTimeout(() => this.changeRouter(), this.timer * 1000);

            b = setInterval(() => this.changeTimer(), 1000);
        }

    }

</script>

<style scoped>

</style>
