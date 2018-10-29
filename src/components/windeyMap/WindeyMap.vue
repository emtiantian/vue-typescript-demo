
<template>
    <div>
        <div v-bind:id="name" v-bind:style="{width: width,height: height}" :class="hideLogo?'hideLogo':''"></div>
        <div>{{zoom}}</div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    // 全局错误处理
    // 加载不同地图api
    import loadMaps from './components/loadMap';

    // TODO 暂时先把所有的方法写在一起,后面分成模块可使用option来配置是否启用

    @Component
    export default class WindeyMap extends Vue {
        // 基础参数部分
        @Prop(Number) private zoom!: number;
        @Prop(String) private name!: string;
        @Prop({type: Object}) private center!: WindeyMapTypes.LatLng;
        @Prop({type: Array}) private mapKey!: WindeyMapTypes.MapKey[];
        @Prop({type: Number, default: 2}) private allowTime?: number; // 允许api加载时长
        @Prop({type: String, default: '400px'}) private width?: string;
        @Prop({type: String, default: '400px'}) private height?: string;
        @Prop({type: Boolean, default: true}) private autoChange?: boolean;
        @Prop({type: Array, default: null}) private mapStyle?: google.maps.MapTypeStyle[];
        @Prop({type: Boolean, default: true}) private draggable?: boolean;
        @Prop({type: Boolean, default: true}) private loadCN?: boolean;
        @Prop({type: Boolean, default: false}) private hideLogo?: boolean; // 是否显示地图logo
        @Prop({type: Number, default: 200}) private intervals?: number; // 扫描api是否加载完成的时间间隔
        // mark 参数部分
        @Prop({type: String, default: ''}) private marks?: WindeyMapTypes.Mark[];
        @Prop({type: Boolean, default: true}) private autoMarksContent?: boolean;

        // TODO 探讨构造时如果不实例化对象 应该怎么办
        // @ts-ignore
        private mapApi: WindeyMapTypes.WindeyMapApi;


        public async mounted() {
            // 创建地图api
            this.mapApi = await loadMaps.createApi(this.mapKey, this.autoChange, this.zoom, this.name, this.center, this.allowTime, this.intervals);
            // TODO 这种判断方法也是很坑啊
            if (!(this.mapStyle === null || this.mapStyle === undefined)) {
                // google地图对于韩国部分不能进行处理如果改变地图的配色 韩国地图部分需要做修改
                // 处理地图样式 处理韩国地图部分
                this.mapApi.setMapStyle(this.mapStyle);
            }
            // TODO 这种判断方法也是很坑啊 这里应该启用状态驱动
            // if (this.hideLogo) {
            //     this.mapApi.hideLogo();
            // }

        }

        // TODO 使用slot模式做成组件

        // 处理mark内容，及mark事件

        // 处理mark摆放位置问题

        // 处理mark名称显示问题

        // 处理动画部分

        // 响应式改变对象属性
        @Watch('zoom')
        public onZoomChange(newZoom: number, oldZoom: number) {
            this.mapApi.setZoom(newZoom);
        }

        @Watch('mapStyle')
        public onStyleChange(newStyle: google.maps.MapTypeStyle[], oldStyle: google.maps.MapTypeStyle[]) {
            this.mapApi.setMapStyle(newStyle);
        }

        // 子组件发生变化 应该触发一个对象

    }
</script>

<style scoped lang="less">
    .hideLogo {
        /*隐藏google logo
        * 当前这个方法已经不起作用了
        */
        a[href^="http://maps.google.cn"] {
            display: none !important
        }
        a[href^="https://maps.google.cn"] {
            display: none !important
        }
        a[href^="http://maps.google.com/maps"] {
            display: none !important
        }
        a[href^="https://maps.google.com/maps"] {
            display: none !important
        }
    }
</style>
