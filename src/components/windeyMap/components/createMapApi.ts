import {GoogleMapApi} from '@/components/windeyMap/components/googleMapApi';
import {enumMapTypes} from '@/components/windeyMap/components/EnumMapTypes';

/**
 *
 * @param value
 * @param zoom
 * @param name
 * @param center
 */
const createMapApi = (value: WindeyMapTypes.MapKey, zoom: number, name: string, center: WindeyMapTypes.LatLng): WindeyMapTypes.WindeyMapApi => {
    let mapApi: WindeyMapTypes.WindeyMapApi;
    switch (value.type) {
        case enumMapTypes.GOOGLE:
            mapApi = new GoogleMapApi(value, zoom, name, center);
            break;
        case enumMapTypes.BAIDU:
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
