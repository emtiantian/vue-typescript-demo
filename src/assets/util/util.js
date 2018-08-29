// 判断路径是否有权限访问
const isAllow = (newPath, routerData) => {
    if (newPath === null) {
        return false;
    }
    const pathArr = newPath.split('/');
    if (pathArr[1] === 'public') {
        return true;
    }
    else {
        return isInDB({ url: newPath }, JSON.parse(routerData));
    }
};
// 判断对象是否在对象数组中
const isInDB = (obj, DB) => {
    // 这里应该严谨一点判断具体类型 ，catch 错误
    if (!obj || !DB) {
        console.log("错误");
        return;
    }
    return DB.some((ele, index, arr) => {
        let a = false;
        for (let key in obj) {
            // @ts-ignore ts不允许这样使用
            if (ele[key] == obj[key]) {
                a = true;
            }
            else {
                a = false;
            }
        }
        return a;
    });
};
const arr = [{
        'id': '4028811a5e1820d9015e1824acf20000',
        'name': '登录',
        'summary': null,
        'url': '/signin',
        'method': 'GET'
    }, {
        'id': '12300',
        'name': '主页',
        'summary': null,
        'url': '/',
        'method': 'GET'
    },
];
const testARR = (arr) => {
    console.log('结果是' + isInDB({ url: '/' }, arr));
};
// testARR(arr);
export default {
    isAllow,
    isInDB,
};
//# sourceMappingURL=util.js.map