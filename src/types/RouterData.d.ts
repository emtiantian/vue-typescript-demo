declare namespace RouterData {
    // axios 返回数据
    export interface RouterDataOne {
        // 'id': ,
        // 'name': '登录',
        // 'summary': null,
        // 'url': '/signin',
        // 'method': 'GET'
        id: string,
        name: string,
        summary: string,
        url: string,
        method: string,
    }

    // 请求接口数据
    export interface RouterData {
        [index: number]: RouterDataOne
    }
}
