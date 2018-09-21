<template>
    <div></div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    // 全局错误处理
    import err from './components/errorHandler';
    // 加载不同地图api
    import loadMap from './components/loadMap';
    // TODO 暂时先把所有的方法写在一起,后面分成模块可使用option来配置是否启用

    @Component
    export default class map extends Vue {
        // @Prop private mapsOption!: Maplib.mapOption;
        // @Prop private marksOption!: Maplib.markOption;
        // 基础参数部分
        @Prop private zoom!: number;
        @Prop private name!: string;
        @Prop private conter!: object;
        @Prop private  mapKey!:Maplib.mapKey[];
        @Prop({default: 5}) private allowTime!:number;
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

        // 全局错误处理


        // 引入google地图api或者百度地图aip 返回一个promise对象

        //loadMap(mapKey, allowTime, autoChange);

        // 初始化地图及地图事件

        // 处理地图样式

        // 处理韩国地图部分

        // 处理mark内容，及mark事件

        // 处理mark摆放位置问题

        // 处理mark名称显示问题

        // 处理动画部分


    }
</script>

<style scoped>

</style>
