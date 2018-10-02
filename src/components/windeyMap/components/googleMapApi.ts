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
        // 使用源生修改css
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


}
