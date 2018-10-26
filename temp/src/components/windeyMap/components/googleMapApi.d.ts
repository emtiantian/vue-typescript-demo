export declare class GoogleMapApi implements WindeyMapTypes.WindeyMapApi {
    mapObject: WindeyMapTypes.EmMap;
    constructor(value: WindeyMapTypes.MapKey, zoom: number, name: string, center: WindeyMapTypes.LatLng);
    hideLogo(): void;
    setMapStyle(style: google.maps.MapTypeStyle[]): void;
    setZoom(newZoom: number): void;
    setCenter(newCenter: WindeyMapTypes.LatLng): void;
    fixKoreaMap(): void;
    overMap(leftTop: WindeyMapTypes.LatLng, rightDown: WindeyMapTypes.LatLng, img: any, map: google.maps.Map): void;
}
