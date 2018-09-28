<template>
    <div></div>
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
    export default class WindeyMap extends Vue {
        // @Prop private mapsOption!: Maplib.mapOption;
        // @Prop private marksOption!: Maplib.markOption;

        // 基础参数部分
        // private zoom!: number;
        // private name!: string;
        // private center!: Maplib.LatLng;
        // private mapKey!: Maplib.MapKey[];
        // private allowTime?: number = 5;
        // private width?: string = '100%';
        // private height?: string = '100%';
        // private autoChange?: boolean = true;
        // private mapStyle?: string = '';
        // private draggable?: boolean = true;
        // private hideLogo?: boolean = false;
        // private loadCN?: boolean = true;
        // // mark 参数部分
        // private marks?: Maplib.Mark[];
        // private autoMarksContent?: boolean;

        @Prop(Number) private zoom!: number;
        @Prop(String) private name!: string;
        @Prop() private center!: Maplib.LatLng;
        @Prop() private mapKey!: Maplib.MapKey[];
        @Prop({default: 5}) private allowTime?: number;
        @Prop({default: '100%'}) private width?: string;
        @Prop({default: '100%'}) private height?: string;
        @Prop({default: true}) private autoChange?: boolean;
        @Prop({default: ''}) private mapStyle?: string;
        @Prop({default: true}) private draggable?: boolean;
        @Prop({default: false}) private hideLogo?: boolean;
        @Prop({default: true}) private loadCN?: boolean;
        // mark 参数部分
        @Prop({default: ''}) private marks?: Maplib.Mark[];
        @Prop({default: true}) private autoMarksContent?: boolean;
        // TODO 这里应该是不太对为什么
        private loadMap?: Promise<any>;

        // 生命周期钩子 在页面加载完成时触发
        public mounted() {
            console.log('缩放等级' + this.zoom);
            this.loadMap = loadMaps.loadMap(this.mapKey, this.allowTime, this.autoChange);
            console.log('开始加载地图');
            throw new Error('测试错误');
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
