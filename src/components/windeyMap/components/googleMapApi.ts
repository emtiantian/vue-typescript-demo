export default class GoogleMapApi implements windeymap.WindeyMapApi {
     mapObject: windeymap.EmMap;

    constructor(value: windeymap.MapKey, zoom: number, name: string, center: windeymap.LatLng) {
            if (!value || !zoom || !name || !center) {
                throw new Error('GoogleMapApi ');
            }
            let obj :windeymap.EmMap;
            obj.map = new google.maps.Map(document.getElementById(name), {center, zoom});
            obj.type = value.type;
            obj.name = name;
        }
    hideLogo(): void {
    }

    onZoomChange(): number {
        return 0;
    }

    setMapStyle(style: google.maps.MapTypeStyle[]): void {
    }

    setZoom(): void {
    }
    // map: google.maps.Map;
    // name: string;
    // type: windeymap.mapType;
    //
    // constructor(value: windeymap.MapKey, zoom: number, name: string, center: windeymap.LatLng) {
    //     if (!value || !zoom || !name || !center) {
    //         throw new Error('GoogleMapApi ');
    //     }
    //     this.map = new google.maps.Map(document.getElementById(name), {center, zoom});
    //     this.type = value.type;
    //     this.name = name;
    // }
    //
    // public onZoomChange(): number {
    //     return 0;
    // }
    //
    // public setMapStyle(style: google.maps.MapTypeStyle[]): void {
    // }
    //
    // public setZoom(): void {
    // }
    //
    // public hideLogo(): void {
    // }


}
