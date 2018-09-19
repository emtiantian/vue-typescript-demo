
// umd 规范
declare module "map"{
    export = map;
}

declare class map{

    constructor(mapOption: Maplib.mapOption) // 构造器
    update:()=>boolean;
    reSize:()=>void;
    Zoom:()=>void;
    private mapEvents; // 地图事件 只能get events 在组件内只出发这个events 在组件外放入vuex中
    private markEvents; // mark事件
}

declare namespace Maplib {
    // 自定义map配置类型
    export interface mapOption {
        name: string, // map名称
        center: latLng, // 中心点
        zoom: number, // 缩放级别
        type?: mapType[], // map切换列表（切换顺序为数组下标）
        autoChange?: boolean, // 是否自动切换
        style?: string, // 地图美化css
        marks?: marks, // 地图标记
        draggable?: boolean, // 是否可以拖动
        autoMarksContent?: boolean, // 是否自动放置mark位置（保持markcontent 在地图可见区域）
        hideLogo?: boolean, // 是否显示地图logo
        width?: string, // 宽度，px单位
        height?: string, // 高度，px单位
    }

    // maptype的枚举类型
    enum mapType {
        google = "google",
        baidu = "baidu",
    }

    // 地理位置信息
    export interface latLng {
        lat:number, // 纬度
        lng:number, // 经度
    }

    // marks需要包含内容
    export  interface marks {
       [index:number]:mark;
    }

    // mark 需要包含的内容
    export  interface mark {
        id:string, // 唯一标识
        position:latLng, // 标记位置
        content?: Document, // mark的解释内容
        icon?: string,  // mark图片或者样式
        onTouch?:()=>void, // 点击事件
        onMouseOver?:()=>void, // 悬停事件
        draggable?: boolean, // mark 是否可以被拖动
    }

}
