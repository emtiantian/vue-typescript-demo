declare const _default: {
    loadMap: (mapKey: WindeyMapTypes.MapKey[], autoChange: boolean | undefined, allowTime?: number, intervals?: number) => Promise<WindeyMapTypes.MapKey>;
    createApi: (mapKey: WindeyMapTypes.MapKey[], autoChange: boolean | undefined, zoom: number, name: string, center: WindeyMapTypes.LatLng, intervals?: number, allowTime?: number) => Promise<WindeyMapTypes.WindeyMapApi>;
};
export default _default;
