// 判断路径是否有权限访问
const isAllow = (newPath, routerData) => {
    if (!newPath || !routerData) {
        return false;
    }
    const pathArr = newPath.split('/');
    if (pathArr[1] === 'public') {
        return true;
    }
    else {
        return isInDB({ path: newPath }, JSON.parse(routerData));
    }
};
// 判断对象是否在对象数组中
const isInDB = (obj, DB) => {
    // 这里应该严谨一点判断具体类型 ，catch 错误
    if (!obj || !DB) {
        console.log('判断对象是否在对象数组中错误');
        return false;
    }
    return DB.some((ele, index, arr) => {
        let a = false;
        for (const key in obj) {
            if (obj.hasOwnProperty(key) === true) {
                // @ts-ignore ts不允许这样使用
                if (ele[key] === obj[key]) {
                    a = true;
                }
                else {
                    a = false;
                }
            }
        }
        return a;
    });
};
// 如果对象数组中包含对象则返回对象数组相应的对象
const isInDBWho = (obj, DB) => {
    // 这里应该严谨一点判断具体类型 ，catch 错误
    if (!obj || !DB) {
        console.log('判断对象是否在对象数组中错误');
        return [];
    }
    return DB.filter((ele, index, arr) => {
        let a = false;
        for (const key in obj) {
            // 只判断obj自带属性
            if (obj.hasOwnProperty(key) === true) {
                // @ts-ignore ts不允许这样使用
                if (ele[key] === obj[key]) {
                    a = true;
                }
                else {
                    a = false;
                }
            }
        }
        return a;
    });
};
// 根据允许访问url获得对应路由
const getRouter = (fullRouter, routerData) => {
    const router = JSON.parse(routerData);
    const allowRouter = [];
    // console.dir(router);
    // console.dir(fullRouter);
    router.forEach((element) => {
        // TODO 这里实现的是路由的完全匹配， 正常情况下应该要实现正则匹配
        const arrayrouter = isInDBWho({ path: element.path }, fullRouter);
        if (arrayrouter.length > 0) {
            allowRouter.push(arrayrouter[0]);
        }
    });
    return allowRouter;
};
// const arr = [{
//     'id': '4028811a5e1820d9015e1824acf20000',
//     'name': '登录',
//     'summary': null,
//     'url': '/login',
//     'method': 'GET'
// }, {
//     'id': '12300',
//     'name': '主页',
//     'summary': null,
//     'url': '/',
//     'method': 'GET'
// },
// ];
// const str = "[{\n" +
//     "    'id': '4028811a5e1820d9015e1824acf20000',\n" +
//     "    'name': '登录',\n" +
//     "    'summary': null,\n" +
//     "    'url': '/login',\n" +
//     "    'method': 'GET'\n" +
//     "}, {\n" +
//     "    'id': '12300',\n" +
//     "    'name': '主页',\n" +
//     "    'summary': null,\n" +
//     "    'url': '/',\n" +
//     "    'method': 'GET'\n" +
//     "},\n" +
//     "]";
// const testgetRouter = () => {
//     const allowRouter = getRouter(full.fullRouter.routes, str);
// };
// testgetRouter();
// const testARR = (arr: object[]) => {
//     console.log('结果是' + isInDB({url: '/'}, arr));
// }
// testARR(arr);
export default {
    isAllow,
    isInDB,
    getRouter,
    isInDBWho,
};
//# sourceMappingURL=util.js.map