<template>
    <div>
        <windey-map v-bind:zoom="zoom" v-bind:name="name" v-bind:center="center" v-bind:map-key="mapKey"
                    ref="windeymap"
                    v-bind:allowTime="allowTime" v-bind:mapStyle="mapStyle" v-bind:loadCN="loadCN" v-bind:hideLogo="hideLogo"></windey-map>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import WindeyMap from '../components/windeyMap/WindeyMap.vue';


    @Component({
        components: {WindeyMap},
    })
    export default class Monitor extends Vue {
        private zoom = 9;
        private name = 'haohe';
        private center = {lat: 28.998496, lng: 120.684515}; // 28.998496, 120.684515
        private mapKey = [
            {
                key: 'AIzaSyDsFI7tLklDsu2PYoUB_gIAJ1HtQZz18FQ', // 地图授权key
                type:  'google', // map切换列表（切换顺序为数组下标）
                className: 'google', // 地图对象名称（用于判断地图是否加载成功）
                ordered: 1, // 优先顺序
                loadCN: true, // 是否加载中国google
                apiUrl: 'https://maps.googleapis.com/maps/api/js',
                apiUrlCn: 'https://maps.googleapis.com/maps/api/js',
            },
        ];
        private allowTime = 50;
        private mapStyle = [
            {
                elementType: 'geometry',
                stylers: [{
                    color: '#1d2c4d',
                }],
            },
            {
                elementType: 'labels',
                stylers: [{
                    visibility: 'simplified',
                }],
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#8ec3b9',
                }],
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    visibility: 'off',
                }],
            },
            {
                featureType: 'administrative.country',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#00316a',
                }],
            },
            {
                featureType: 'administrative.land_parcel',
                stylers: [{
                    visibility: 'off',
                }],
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#64779e',
                }],
            },
            {
                featureType: 'administrative.neighborhood',
                stylers: [{
                    visibility: 'off',
                }],
            },
            {
                featureType: 'administrative.province',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#4b6878',
                }],
            }, {
                featureType: 'landscape',
                stylers: [{
                    color: '#00204d',
                }],
            },
            {
                featureType: 'landscape.man_made',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#334e87',
                }],
            },
            {
                featureType: 'poi',
                stylers: [{
                    visibility: 'off',
                }],
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{
                    color: '#283d6a',
                }],
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#6f9ba5',
                }],
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#1d2c4d',
                }],
            },
            {
                featureType: 'poi.business',
                stylers: [{
                    visibility: 'off',
                }],
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{
                    color: '#023e58',
                }],
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#3C7680',
                }],
            },
            {
                featureType: 'road',
                stylers: [{
                    visibility: 'off',
                }],
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#304a7d',
                }],
            },
            {
                featureType: 'road',
                elementType: 'labels.icon',
                stylers: [{
                    visibility: 'off',
                }],
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#98a5be',
                }],
            },
            {
                featureType: 'road',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#1d2c4d',
                }],
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#2c6675',
                }],
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#255763',
                }],
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#b0d5ce',
                }],
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#023e58',
                }],
            },
            {
                featureType: 'transit',
                stylers: [{
                    visibility: 'off',
                }],
            },
            {
                featureType: 'transit',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#98a5be',
                }],
            },
            {
                featureType: 'transit',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#1d2c4d',
                }],
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry.fill',
                stylers: [{
                    color: '#283d6a',
                }],
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{
                    color: '#3a4762',
                }],
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#001433',
                }],
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#001433',
                }],
            },
        ];
        private hideLogo = true;
        private loadCN = true;
        // TODO 自定义组件名称不起作用
        // TODO 自定义错误处理

    }
</script>

<style scoped>

</style>
