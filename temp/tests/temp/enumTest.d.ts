declare enum mapType {
    GOOGLE = "google",
    BAIDU = "baidu"
}
declare function f(map: mapType): "谷歌" | "百度" | "错误";
declare function a(err: ErrorType): void;
