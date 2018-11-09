declare namespace WindeyMapTypes {


    import MarkerOptions = google.maps.MarkerOptions;
    export type mapName = 'google' | 'baidu'; // 这里在扩展的时候可以有其他的map类型
    export type mapApi = google.maps.Map; // 这里扩展的时候也要加上对应的地图对象

    export interface MapKey {
        key: string; // 地图授权key
        type: mapName; // map切换列表（切换顺序为数组下标）
        className: string; // 地图对象名称（用于判断地图是否加载成功）
        ordered: number; // 优先顺序
        loadCN?: boolean; // 是否加载中国google
        apiUrl?: string;
        apiUrlCn?: string;
    }

    // 地理位置信息
    export interface LatLng {
        lat: number; // 纬度
        lng: number; // 经度
    }

    // mark 需要包含的内容  现在使用@types 提供的google.map的类型说明
    // export interface Mark {
    //     id: string; // 唯一标识
    //     position: LatLng; // 标记位置
    //     content?: Document; // mark的解释内容
    //     icon?: string;  // mark图片或者样式
    //     onTouch?: () => void; // 点击事件
    //     onMouseOver?: () => void; // 悬停事件
    //     draggable?: boolean; // mark 是否可以被拖动
    //     autoMove?:boolean; // 是否启动自动移动位置
    // }

    // 地图对象内容
    export interface EmMap {
        type: mapName;
        name: string;
        map: mapApi;
    }

    // 定义api对象应该包含的方法
    export interface WindeyMapApi {
        mapObject: EmMap; // 自定义地图对象

        setMapStyle(style: google.maps.MapTypeStyle[]): void; // 设置地图的样式

        hideLogo(): void; // 隐藏地图logo

        setZoom(newZoom: number): void; // 修改地图缩放级别

        setCenter(newCenter: LatLng): void; // 设置地图中心点

        fixKoreaMap(): void; // 韩国图片在google上 有问题使用这个方法覆盖

        overMap(leftTop: LatLng, rightDown: LatLng, img1: any, map: google.maps.Map): void // 覆盖地图某一部分

        setMarker(markerOption: MarkerOptions, autoMarksContent:boolean):object;

        setInfoWindow():object;

    }
}
