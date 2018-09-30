// 完成google map 对应的各种操作
const init = (value: Maplib.MapKey, zoom: number, name: string, center: Maplib.LatLng): Maplib.EmMap => {
    if (!(value.type === 'google')) {
        throw new Error('使用错init方法了');
    }

    console.log('判断google是不是空的');
    // @ts-ignore
    console.dir(window.google);
    const map: Maplib.EmMap = new class implements Maplib.EmMap {
        // @ts-ignore
        // public map: object = new window[value.className].maps.Map(document.getElementById(name), {
        //     center: {center},
        //     zoom: {zoom},
        // });
        public map: object = new window.google.maps.Map(document.getElementById(name), {
        center:center,
        zoom:zoom,
        });
        public name: string = name;
        public type: Maplib.mapType = value.type;
    };
    return map;
};

export default {
    init,
};
