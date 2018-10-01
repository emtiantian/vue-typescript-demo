// 完成google map 对应的各种方法

// init方法
const init = (value: windeymap.MapKey, zoom: number, name: string, center: windeymap.LatLng): windeymap.EmMap => {
    if (!(value.type === 'google')) {
        throw new Error('使用错init方法了');
    }
    const map: windeymap.EmMap = new class implements windeymap.EmMap {
        // @ts-ignore
        public map: google.maps.Map = new window[value.className].maps.Map(document.getElementById(name), {
            center, zoom,
        });
        public name: string = name;
        public type: windeymap.mapType = value.type;
    };
    return map;
};

// 处理googleMap style
const setMapStyle = (style: google.maps.MapTypeStyle[], map: any): void => {
    const mapStyle = new google.maps.StyledMapType(style);
    // 地图样式
    map.mapTypes.set('styled_map', mapStyle);
    // 这里不太清楚是否有作用
    map.setMapTypeId('styled_map');
};


export default {
    init,
    setMapStyle,
};
