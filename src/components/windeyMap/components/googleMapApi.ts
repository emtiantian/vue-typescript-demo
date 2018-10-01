export default class GoogleMapApi implements windeymap.WindeyMapApi {
    map: google.maps.Map;
    name: string;
    type: windeymap.mapType;

    constructor(value: windeymap.MapKey, zoom: number, name: string, center: windeymap.LatLng) {
        if (!value || !zoom || !name || !center) {
            throw new Error('GoogleMapApi ');
        }
        this.map = new google.maps.Map(document.getElementById(name), {center, zoom});
        this.type = value.type;
        this.name = name;
    }

    onZoomChange(): number {
        return 0;
    }

    setMapStyle(style: google.maps.MapTypeStyle[]): void {
    }

    setZoom(): void {
    }

    hideLogo(): void {
    }


}
