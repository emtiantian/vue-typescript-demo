import {GoogleMapApi} from '@/components/windeyMap/components/googleMapApi';

const  enum mapType {
    GOOGle = WindeyMapTypes.mapType.GOOGLE,
    BAIDU = WindeyMapTypes.mapType.BAIDU,
}

const createMapApi = (value: WindeyMapTypes.MapKey, zoom: number, name: string, center: WindeyMapTypes.LatLng): WindeyMapTypes.WindeyMapApi => {
    let mapApi: WindeyMapTypes.WindeyMapApi;
    switch (value.type) {
        case WindeyMapTypes.mapType.GOOGLE:
            mapApi = new GoogleMapApi(value, zoom, name, center);
            break;
        case WindeyMapTypes.mapType.BAIDU:
            mapApi = new GoogleMapApi(value, zoom, name, center);
            break;
        default:
            throw new Error('没有找到对应的地图类型');
    }
    return mapApi;
};

export default {
    createMapApi,
};
