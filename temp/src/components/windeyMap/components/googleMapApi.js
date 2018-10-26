// 加载韩国地图处理
import fixKorea from './fixKoreaMap';
// 加载韩国地图图片
// 隐藏下方代码的tslint错误
// tslint:disable-next-line
const KoreaImg = require('../../../assets/overmap.png');
export class GoogleMapApi {
    constructor(value, zoom, name, center) {
        if (!value || !zoom || !name || !center) {
            throw new Error('GoogleMapApi arguments 不能为空');
        }
        this.mapObject = {
            map: new google.maps.Map(document.getElementById(name), { zoom, center }),
            name,
            type: value.type,
        };
    }
    hideLogo() {
        // TODO 这里没有分离好 应该在这个实现类中定义样式
        // @ts-ignore
        document.getElementById(this.mapObject.name).setAttribute('class', 'hideLogo');
    }
    setMapStyle(style) {
        const mapStyle = new google.maps.StyledMapType(style);
        // 地图样式
        this.mapObject.map.mapTypes.set('styled_map', mapStyle);
        // 这里不太清楚是否有作用
        this.mapObject.map.setMapTypeId('styled_map');
        this.fixKoreaMap();
    }
    setZoom(newZoom) {
        this.mapObject.map.setZoom(newZoom);
    }
    setCenter(newCenter) {
        this.mapObject.map.setCenter(newCenter);
    }
    // 韩国图片在google上 有问题使用这个方法覆盖
    fixKoreaMap() {
        const leftTop = { lat: 56.339, lng: 123.72 };
        const rightDown = { lat: 38.84, lng: 132.3 };
        this.overMap(leftTop, rightDown, KoreaImg, this.mapObject.map);
    }
    overMap(leftTop, rightDown, img, map) {
        fixKorea.fixedMap(leftTop, rightDown, img, map);
    }
}
//# sourceMappingURL=googleMapApi.js.map