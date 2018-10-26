import { GoogleMapApi } from '@/components/windeyMap/components/googleMapApi';
const createMapApi = (value, zoom, name, center) => {
    let mapApi;
    switch (value.type) {
        case "google" /* GOOGLE */:
            mapApi = new GoogleMapApi(value, zoom, name, center);
            break;
        case "baidu" /* BAIDU */:
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
//# sourceMappingURL=createMapApi.js.map