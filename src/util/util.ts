// 判断路径是否有权限访问
import full from "../router/fullRouter";
const isAllow = (newPath: string, routerData: string) => {
    if (!newPath || !routerData) {
        return false;
    }
    const pathArr = newPath.split('/');
    if (pathArr[1] === 'public') {
        return true;
    } else {
        return isInDB({url: newPath}, JSON.parse(routerData));
    }
};

// 判断对象是否在对象数组中
const isInDB = (obj: object, DB: object[]): boolean => {
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
                } else {
                    a = false;
                }
            }
        }
        return a;
    });
};

const isInDBWho = (obj: object, DB: object[]): object[] => {
    // 这里应该严谨一点判断具体类型 ，catch 错误
    if (!obj || !DB) {
        console.log('判断对象是否在对象数组中错误');
        return []
    }
    return DB.filter((ele, index, arr) => {
        let a = false;
        for (const key in obj) {
            // 只判断obj自带属性
            if (obj.hasOwnProperty(key) === true) {
                // @ts-ignore ts不允许这样使用
                if (ele[key] === obj[key]) {
                    a = true;
                } else {
                    a = false;
                }
            }
        }
        return a;
    });
};

// 根据允许访问url获得对应路由
const getRouter = (fullRouter: object[], routerData: string): object => {
    const router: RouterData.RouterData = JSON.parse(routerData);
    let allowRouter:any[] = [];
    router.forEach(function (element: RouterData.RouterDataOne) {
        allowRouter.push(isInDBWho({path: element.url}, fullRouter))
    });
    return allowRouter;
}


const arr = [{
    'id': '4028811a5e1820d9015e1824acf20000',
    'name': '登录',
    'summary': null,
    'url': '/login',
    'method': 'GET'
}, {
    'id': '12300',
    'name': '主页',
    'summary': null,
    'url': '/',
    'method': 'GET'
},
]
const  str = "[{\n" +
    "    'id': '4028811a5e1820d9015e1824acf20000',\n" +
    "    'name': '登录',\n" +
    "    'summary': null,\n" +
    "    'url': '/login',\n" +
    "    'method': 'GET'\n" +
    "}, {\n" +
    "    'id': '12300',\n" +
    "    'name': '主页',\n" +
    "    'summary': null,\n" +
    "    'url': '/',\n" +
    "    'method': 'GET'\n" +
    "},\n" +
    "]"

const  testgetRouter =()=>{

  const allowRouter = getRouter(full.fullRouter.routes,str);
}

testgetRouter();
// const testARR = (arr: object[]) => {
//     console.log('结果是' + isInDB({url: '/'}, arr));
// }
// testARR(arr);

export default {
    isAllow,
    isInDB,
};

