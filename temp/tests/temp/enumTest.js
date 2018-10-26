"use strict";
var mapType;
(function (mapType) {
    mapType["GOOGLE"] = "google";
    mapType["BAIDU"] = "baidu";
})(mapType || (mapType = {}));
function f(map) {
    switch (map) {
        case mapType.GOOGLE:
            return '谷歌';
            break;
        case mapType.BAIDU:
            return '百度';
            break;
        default:
            return '错误';
    }
}
function a(err) {
    if (err === 1) {
        console.log("成功");
    }
}
// console.log(f(mapType.GOOGLE));
console.log(a(1 /* CustomResponse */));
//# sourceMappingURL=enumTest.js.map