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

export default {
    init,
};
