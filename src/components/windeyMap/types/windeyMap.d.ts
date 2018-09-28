// umd 规范
// declare module "windeyMap"{
//     export = windeyMap;
// }

// declare class windeyMap{
//
//     // constructor(mapOption: Maplib.mapOptions) // 构造器
//     update:()=>boolean; // 更新
//     reSize:()=>void; // 重绘
//     Zoom:()=>void; // 修改缩放等级
//     private mapEvents; // 地图事件 只能get events 在组件内只出发这个events 在组件外放入vuex中
//     private markEvents; // mark事件
//     panTO:()=>boolean; // 移动中心点
// }

declare namespace Maplib {
    // 自定义map配置类型
    interface mapOptions {
        // mapsOption: Maplib.mapOption;
        // marksOption: Maplib.markOption;
        mapKey: MapKey;
        name: string; // map名称
        center: LatLng; // 中心点
        zoom: number; // 缩放级别
        changeTime?: number; // 允许google加载时间
        autoChange?: boolean; // 是否自动切换
        mapStyle?: string; // 地图美化css
        draggable?: boolean; // 是否可以拖动
        hideLogo?: boolean; // 是否显示地图logo
        width?: string; // 宽度，px单位
        height?: string; // 高度，px单位
        [index: number]: Mark; // marks 数组
        autoMarksContent?: boolean; // 是否自动放置mark位置（保持markcontent 在地图可见区域）
    }

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

    // marks需要包含内容
    interface markOption {
        [index: number]: Mark; // marks 数组
        autoMarksContent?: boolean; // 是否自动放置mark位置（保持markcontent 在地图可见区域）
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

    // 地图初始化信息
    interface mapOption {
        key: string; // 地图授权key
        name: string; // map名称
        center: LatLng; // 中心点
        zoom: number; // 缩放级别
        changeTime?: number; // 允许google加载时间
        type?: mapType[]; // map切换列表（切换顺序为数组下标）
        autoChange?: boolean; // 是否自动切换
        mapStyle?: string; // 地图美化css
        draggable?: boolean; // 是否可以拖动
        hideLogo?: boolean; // 是否显示地图logo
        width?: string; // 宽度，px单位
        height?: string; // 高度，px单位
        loadCN?: boolean; // 是否加载中国google
    }

}
