// 加载韩国地图处理
import fixKorea from './fixKoreaMap';
// 加载韩国地图图片

export class GoogleMapApi implements windeymap.WindeyMapApi {
    public mapObject: windeymap.EmMap;


    constructor(value: windeymap.MapKey, zoom: number, name: string, center: windeymap.LatLng) {
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
        // FIXME 使用源生修改css
        document.getElementById(this.mapObject.name);
    }

    public onZoomChange(): number {
        return 0;
    }

    public setMapStyle(style: google.maps.MapTypeStyle[]): void {
        const mapStyle = new google.maps.StyledMapType(style);
        // 地图样式
        this.mapObject.map.mapTypes.set('styled_map', mapStyle);
        // 这里不太清楚是否有作用
        this.mapObject.map.setMapTypeId('styled_map');
    }

    public setZoom(newZoom: number): void {
        this.mapObject.map.setZoom(newZoom);
    }

    public setCenter(newCenter: windeymap.LatLng): void {
        this.mapObject.map.setCenter(newCenter);
    }

    public fixKoreaMap() {
        const leftTop: windeymap.LatLng = {lat: 56.339, lng: 123.72};
        const rightDown: windeymap.LatLng = {lat: 38.84, lng: 132.3};
        fixKorea.fixedMap(leftTop, rightDown
            , '../../../assets/logo.png', this.mapObject.map);
    }


}
