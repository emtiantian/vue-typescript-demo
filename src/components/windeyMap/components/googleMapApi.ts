// 加载韩国地图处理
import fixKorea from './fixKoreaMap';
// 加载韩国地图图片
// 隐藏下方代码的tslint错误
// tslint:disable-next-line
const KoreaImg = require('../../../assets/overmap.png');

export class GoogleMapApi implements WindeyMapTypes.WindeyMapApi {
    public mapObject: WindeyMapTypes.EmMap;


    constructor(value: WindeyMapTypes.MapKey, zoom: number, name: string, center: WindeyMapTypes.LatLng) {
        if (!value || !zoom || !name || !center) {
            throw new Error('GoogleMapApi arguments 不能为空');
        }
        this.mapObject = {
            map: new google.maps.Map(document.getElementById(name), {zoom, center}),
            name,
            type: value.type,
        };
    }


    public hideLogo(): void {
        // TODO 这里没有分离好 应该在这个实现类中定义样式
        // @ts-ignore
        document.getElementById(this.mapObject.name).setAttribute('class', 'hideLogo');
    }


    public setMapStyle(style: google.maps.MapTypeStyle[]): void {
        const mapStyle = new google.maps.StyledMapType(style);
        // 地图样式
        this.mapObject.map.mapTypes.set('styled_map', mapStyle);
        // 这里不太清楚是否有作用
        this.mapObject.map.setMapTypeId('styled_map');
        this.fixKoreaMap();
    }

    public setZoom(newZoom: number): void {
        this.mapObject.map.setZoom(newZoom);
    }

    public setCenter(newCenter: WindeyMapTypes.LatLng): void {
        this.mapObject.map.setCenter(newCenter);
    }

    // 韩国图片在google上 有问题使用这个方法覆盖
    public fixKoreaMap() {
        const leftTop: WindeyMapTypes.LatLng = {lat: 56.339, lng: 123.72};
        const rightDown: WindeyMapTypes.LatLng = {lat: 38.84, lng: 132.3};
        this.overMap(leftTop, rightDown
            , KoreaImg, this.mapObject.map);
    }

    public overMap(leftTop: WindeyMapTypes.LatLng, rightDown: WindeyMapTypes.LatLng, img: any, map: google.maps.Map) {
        fixKorea.fixedMap(leftTop, rightDown
            , img, map);
    }

    setMarker(markerOption: google.maps.MarkerOptions, autoMarksContent: boolean): string {
        return "";
    }




}
