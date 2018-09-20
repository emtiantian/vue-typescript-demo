

const loadMAp = (mapKey: Maplib.mapKey[], allowTime: number)=>{
    if(mapKey.length > 0){
        // 排序
        mapKey.sort((a,b)=>{
            return a.ordered> b.ordered;
        })
        // 创建script
        if( typeof document === undefined){
            throw new Error("document not found");
        }

        // 根据允许时间切换api对象，保存api对象到window，保存api类型

        mapKey.forEach((value, index, array)=>{
            const mapScrpit = document.createElement("script");
            let url = null;
            if(value.loadCN){
                 url = value.apiUrlCn+"?key="+value.key;
            }else{
                 url = value.apiUrl+"?key="+value.key;
            }
            // 写好key,api地址，这里不使用callback
            mapScrpit.setAttribute("src",url)
            // mapScrpit.setAttribute('async', '') 同步加载
            // mapScrpit.setAttribute('defer', '') 延迟加载
            document.head.appendChild(mapScrpit)
        })






        // 返回一个promise对象 当加载完成时reslove
        return new Promise((resolve, reject) => {

        })

    }else{
        // TODO 测试不抛出 会不会被捕获
       throw new Error("mapKey can`t be null")
    }

}

export default loadMAp;
