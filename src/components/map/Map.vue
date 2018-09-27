<template>
    <div :name=name :zoom=zoom :center=center :mapkey=mapkey></div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    // 全局错误处理
    import err from './components/errorHandler';
    // 加载不同地图api
    import loadMaps from './components/loadMap';


    // 测试
    // TODO 暂时先把所有的方法写在一起,后面分成模块可使用option来配置是否启用

    @Component
    export default class Map extends Vue {
        // @Prop private mapsOption!: Maplib.mapOption;
        // @Prop private marksOption!: Maplib.markOption;

        // 基础参数部分
        @Prop(Number) private zoom!: number;
        @Prop(String) private name!: string;
        @Prop(Maplib) private center!: Maplib.latLng;
        @Prop(Maplib) private mapkey!: Maplib.mapKey[];
        @Prop({default: 5}) private allowTime!: number;
        @Prop({default: '100%'}) private width: string;
        @Prop({default: '100%'}) private height: string;
        @Prop({default: true}) private autoChange: boolean;
        @Prop({default: ''}) private style: string;
        @Prop({default: true}) private draggable: boolean;
        @Prop({default: false}) private hideLogo: boolean;
        @Prop({default: true}) private loadCN: boolean;
        // mark 参数部分
        @Prop({default: ''}) private marks: Maplib.mark[];
        @Prop({default: true}) private autoMarksContent: boolean;

        private loadMap: Promise;

        // 生命周期钩子 在页面加载完成是触发
        public mounted() {
            this.loadMap = loadMaps.loadMap(this.mapkey, this.allowTime, this.autoChange);
            console.log('开始加载地图');
            //  implements 实现抽象类
            throw new class implements Error {
                public message: string = '测试错误';
                public name: string = 'DevError';
                public stack: string = (new Error()).stack;
            };
        }

        // 全局错误处理

        // err
        // 引入google地图api或者百度地图aip 返回一个promise对象


        // loadMap(mapKey, allowTime, autoChange);

        // 初始化地图及地图事件

        // 处理地图样式

        // 处理韩国地图部分

        // 处理mark内容，及mark事件

        // 处理mark摆放位置问题

        // 处理mark名称显示问题

        // 处理动画部分


    }
</script>

<style scoped lang="less">

</style>
