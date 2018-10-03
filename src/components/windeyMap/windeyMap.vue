<template>
    <div>
        <div v-bind:id="name" v-bind:style="{width: width,height: height}"></div>
        <div>{{zoom}}</div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Watch, Vue} from 'vue-property-decorator';
    // 全局错误处理
    import err from './components/errorHandler';
    // 加载不同地图api
    import loadMaps from './components/loadMap';
    // google-map初始化及操作
    import googleApi from './components/googleMap';
    import {GoogleMapApi} from './components/googleMapApi';

    // TODO 暂时先把所有的方法写在一起,后面分成模块可使用option来配置是否启用

    @Component
    export default class WindeyMap extends Vue {
        // 基础参数部分
        @Prop(Number) private zoom!: number;
        @Prop(String) private name!: string;
        @Prop() private center!: windeymap.LatLng;
        @Prop() private mapKey!: windeymap.MapKey[];
        @Prop({default: 2}) private allowTime?: number;
        @Prop({default: '400px'}) private width?: string;
        @Prop({default: '400px'}) private height?: string;
        @Prop({default: true}) private autoChange?: boolean;
        @Prop({default: ''}) private mapStyle?: string[];
        @Prop({default: true}) private draggable?: boolean;
        @Prop({default: true}) private loadCN?: boolean;
        @Prop({default: false}) private hideLogo?: boolean; // 是否显示地图logo
        @Prop({default: 300}) private intervals?: number;
        // mark 参数部分
        @Prop({default: ''}) private marks?: windeymap.Mark[];
        @Prop({default: true}) private autoMarksContent?: boolean;

        private mapApi?: windeymap.WindeyMapApi;

        // constructor(){
        //     super();
        //     this.mapApi =  this.mounted()
        // }
        //
        // // TODO 使用异步的形式引入不同的api
        // public async createApi(mapKey: windeymap.MapKey[], allowTime: number, autoChange: boolean, zoom: number, center: windeymap.LatLng): Promise<windeymap.WindeyMapApi> {
        //     console.log('加载地图完成');
        //     const value: windeymap.MapKey = await loadMaps.loadMap(mapKey, allowTime, autoChange);
        //     // 初始化地图及地图事件
        //     return new Promise((resolve) => {
        //         resolve(new GoogleMapApi(value, zoom, name, center);
        //     )
        //     });
        // }
        // // 生命周期钩子 在页面加载完成时触发
        // public async mounted() : Promise<windeymap.WindeyMapApi> {
        //     return this.createApi(this.mapKey, this.allowTime, this.autoChange, this.zoom, this.center);
        // }

        // 生命周期钩子 在页面加载完成时触发 这种写法所有的事件都要写在这个then里
        public mounted() {
            // 引入google地图api或者百度地图aip 返回一个promise对象
            console.log('开始加载地图');
            loadMaps.loadMap(this.mapKey, this.allowTime, this.autoChange).then((value: windeymap.MapKey) => {
                console.log('加载地图完成');
                // 初始化地图及地图事件
                this.mapApi = new GoogleMapApi(value, this.zoom, this.name, this.center);
            });
        }


        // 处理地图样式

        // 处理韩国地图部分

        // 处理mark内容，及mark事件

        // 处理mark摆放位置问题

        // 处理mark名称显示问题

        // 处理动画部分

        // 响应式改变对象属性
        // @Watch('zoom')
        // public onZoomChange(newZoom: number, oldZoom: number) {
        //     // this.map.map.setZoom(newZoom);
        //     // this.mapApi.setZoom(newZoom);
        // }

        // 子组件发生变化 应该触发一个对象

    }
</script>

<style scoped lang="less">

</style>
