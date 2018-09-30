// 完成google map 对应的各种方法

// init方法
const init = (value: Maplib.MapKey, zoom: number, name: string, center: Maplib.LatLng): Maplib.EmMap => {
    if (!(value.type === 'google')) {
        throw new Error('使用错init方法了');
    }

    console.log('判断google是不是空的');
    // @ts-ignore
    console.dir(window.google);
    const map: Maplib.EmMap = new class implements Maplib.EmMap {
        // @ts-ignore
        public map: object = new window[value.className].maps.Map(document.getElementById(name), {
            center, zoom,

        });
        public name: string = name;
        public type: Maplib.mapType = value.type;
    };
    return map;
};

// 处理googleMap style
const setMapStyle = (style: string[], map: any): void => {
    // @ts-ignore 创建googlemap样式对象
    const mapStyle = new google.maps.StyledMapType(style);
    // 地图样式
    // @ts-ignore
    map.mapTypes.set('styled_map', mapStyle);
    // 这里不太清楚是否有作用
    map.setMapTypeId('styled_map');
};


export default {
    init,
    setMapStyle,
};
