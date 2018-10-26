import {GoogleMapApi} from '@/components/windeyMap/components/googleMapApi';
import {mapTypes} from '@/components/windeyMap/components/mapTypes';


const createMapApi = (value: WindeyMapTypes.MapKey, zoom: number, name: string, center: WindeyMapTypes.LatLng): WindeyMapTypes.WindeyMapApi => {
    let mapApi: WindeyMapTypes.WindeyMapApi;
    switch (value.type) {
        case mapTypes.GOOGLE:
            mapApi = new GoogleMapApi(value, zoom, name, center);
            break;
        case mapTypes.BAIDU:
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
