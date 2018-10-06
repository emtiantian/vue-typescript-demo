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
        @Prop({default: null}) private mapStyle?: google.maps.MapTypeStyle[];
        @Prop({default: true}) private draggable?: boolean;
        @Prop({default: true}) private loadCN?: boolean;
        @Prop({default: false}) private hideLogo?: boolean; // 是否显示地图logo
        @Prop({default: 200}) private intervals?: number; // 间隔时间设为300 的时候 google 可能还没有加载完成
        // mark 参数部分
        @Prop({default: ''}) private marks?: windeymap.Mark[];
        @Prop({default: true}) private autoMarksContent?: boolean;

        // TODO 这里是不是有一个ide问题 如果指定类型那么 在@watch 或赋值之后都是不能找到对应的方法
        // private mapApi?: windeymap.WindeyMapApi;
        private mapApi?: any;

        // // TODO 使用异步的形式引入不同的api
        // public async createApi(mapKey: windeymap.MapKey[], allowTime: number, autoChange: boolean, zoom: number, center: windeymap.LatLng): windeymap.WindeyMapApi {
        //     console.log('加载地图完成');
        //     const value: windeymap.MapKey = await loadMaps.loadMap(mapKey, allowTime, autoChange);
        //     // 初始化地图及地图事件
        //     return new GoogleMapApi(value, zoom, name, center);
        // }
        // // 生命周期钩子 在页面加载完成时触发
        // public async mounted() : windeymap.WindeyMapApi{
        //     return this.createApi(this.mapKey, this.allowTime, this.autoChange, this.zoom, this.center);
        // }


        public async mounted() {
            // 引入google地图api或者百度地图aip 返回一个promise对象
            console.log('开始加载地图');
            const value: windeymap.MapKey = await loadMaps.loadMap(this.mapKey, this.allowTime, this.autoChange);
            console.log('加载地图完成');
            console.log(window)
            // TODO 这里应该判断使用哪一个地图api 这里应该调用自定义的类型 而不是使用魔法字符串
            switch (value.type) {
                case 'google':
                    this.mapApi = new GoogleMapApi(value, this.zoom, this.name, this.center);
                    break;
                case 'baidu':
                    this.mapApi = new GoogleMapApi(value, this.zoom, this.name, this.center);
                    break;
                default:
                    throw new Error('没有找到对应的地图类型');
            }
            // TODO 这种判断方法也是很坑啊
            if(!(this.mapStyle === null)){
                // @ts-ignore
                this.mapApi.setMapStyle(this.mapStyle);
            }
        }

        // 生命周期钩子 在页面加载完成时触发 这种写法所有的事件都要写在这个then里
        // public  mounted() {
        //     // 引入google地图api或者百度地图aip 返回一个promise对象
        //     console.log('开始加载地图');
        //     loadMaps.loadMap(this.mapKey, this.allowTime, this.autoChange).then((value: windeymap.MapKey) => {
        //         console.log('加载地图完成');
        //         // 初始化地图及地图事件
        //         this.mapApi = new GoogleMapApi(value, this.zoom, this.name, this.center);
        //     });
        // }


        // 处理地图样式

        // 处理韩国地图部分

        // 处理mark内容，及mark事件

        // 处理mark摆放位置问题

        // 处理mark名称显示问题

        // 处理动画部分

        // 响应式改变对象属性
        @Watch('zoom')
        public onZoomChange(newZoom: number, oldZoom: number) {
            // @ts-ignore
            this.mapApi.setZoom(newZoom);
        }

        @Watch('mapStyle')
        public onStyleChange(newStyle: google.maps.MapTypeStyle[], oldStyle: google.maps.MapTypeStyle[]) {
            // @ts-ignore
            this.mapApi.setMapStyle(newStyle);
        }

        // 子组件发生变化 应该触发一个对象

    }
</script>

<style scoped lang="less">

</style>
