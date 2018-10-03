declare namespace windeymap {

    interface MapKey {
        key: string; // 地图授权key
        type: mapType; // map切换列表（切换顺序为数组下标）
        className: string; // 地图对象名称（用于判断地图是否加载成功）
        ordered: number; // 优先顺序
        loadCN?: boolean; // 是否加载中国google
        apiUrl?: string;
        apiUrlCn?: string;
    }

    // maptype的枚举类型
    enum mapType {
        google = 'google',
        baidu = 'baidu',
    }

    // 地理位置信息
    interface LatLng {
        lat: number; // 纬度
        lng: number; // 经度
    }

    // mark 需要包含的内容
    interface Mark {
        id: string; // 唯一标识
        position: LatLng; // 标记位置
        content?: Document; // mark的解释内容
        icon?: string;  // mark图片或者样式
        onTouch?: () => void; // 点击事件
        onMouseOver?: () => void; // 悬停事件
        draggable?: boolean; // mark 是否可以被拖动
    }


    // 地图对象内容
    interface EmMap {
        type: mapType; // 这里在扩展的时候可以有其他的map类型
        name: string;
        map: google.maps.Map;
    }


    // 定义api对象应该包含的方法
    interface WindeyMapApi {
        mapObject: EmMap ;

        setMapStyle(style: google.maps.MapTypeStyle[]): void;

        onZoomChange(): number;

        hideLogo(): void;

        setZoom(newZoom: number): void;

        setCenter(newCenter: LatLng): void;

        fixKoreaMap():void;

    }


}
