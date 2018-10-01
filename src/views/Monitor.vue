<template>
    <div>
        <windey-map v-bind:zoom="zoom" v-bind:name="name" v-bind:center="center" v-bind:map-key="mapKey" ref="windeymap" ></windey-map>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import WindeyMap from '../components/windeyMap/windeyMap.vue';

    @Component({
        components: {WindeyMap},
    })
    export default class Monitor extends Vue {
        private zoom = 9;
        private name = 'haohe';
        private center = {lat: -34.397, lng: 150.644};
        private mapKey = [
            {
                key: 'AIzaSyDsFI7tLklDsu2PYoUB_gIAJ1HtQZz18FQ', // 地图授权key
                type: 'google', // map切换列表（切换顺序为数组下标）
                className: 'google', // 地图对象名称（用于判断地图是否加载成功）
                ordered: 1, // 优先顺序
                loadCN: true, // 是否加载中国google
                apiUrl: 'https://maps.googleapis.com/maps/api/js',
                apiUrlCn: 'https://maps.googleapis.com/maps/api/js',
            },
        ];

    }
</script>

<style scoped>

</style>
