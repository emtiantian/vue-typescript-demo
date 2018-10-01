const loadMap = (mapKey: windeymap.MapKey[], allowTime: number = 2, autoChange: boolean | undefined): Promise<windeymap.MapKey> => {
    if (mapKey.length > 0) {
        // 排序
        mapKey.sort((a, b) => {
            return a.ordered > b.ordered ? 1 : -1;
        });

        // 创建script
        if (typeof document === undefined) {
            throw new Error('document not found');
        }

        // 根据允许时间切换api对象
        const timePromise: Promise<windeymap.MapKey> = new Promise((resolve, reject) => {
            // 判断是否加载过对应的js 如果加载过就在当前的mapKey中删除 并返回
            mapKey = mapKey.filter((value) => {
                // @ts-ignore
                if (window[value.className]) {
                    // @ts-ignore
                    if (Object.keys(window[value.className]).length === 0) {
                        return true;
                    } else {
                        resolve(value);
                        return false;
                    }
                } else {
                    return true;
                }

            });
            if (mapKey.length === 0) {
                return;
            }
            // 循环可能使用到的地图api
            mapKey.forEach((value, index) => {
                const mapScrpit = document.createElement('script');
                let url = null;
                if (value.loadCN) {
                    url = value.apiUrlCn + '?key=' + value.key;
                } else {
                    url = value.apiUrl + '?key=' + value.key;
                }
                // 写好key,api地址，这里不使用callback
                mapScrpit.setAttribute('src', url);
                // mapScrpit.setAttribute('async', '') 同步加载
                // mapScrpit.setAttribute('defer', '') 延迟加载
                document.head.appendChild(mapScrpit);
                if (autoChange) {
                    // 创建一个定时器根据给定的加载时长依次判断地图api是否加载
                    // 未在给定时间内加载成功的地图api视为不可用
                    setTimeout(() => {
                        // @ts-ignore
                        if (window[value.className]) {
                            // @ts-ignore
                            if (Object.keys(window[value.className]).length === 0) {
                                // 记录错误
                                console.log('给定时间未找到地图api' + value.type);
                                // 跳出当前循环
                                return false;
                                // throw new Error('给定时间未找到地图api' + value.type);
                            } else {
                                // 返回选用地图api的属性
                                resolve(value);
                            }
                        } else {
                            // 记录错误
                            console.log('给定时间未找到地图api' + value.type);
                            // 跳出当前循环
                            return false;
                        }

                    }, (index + 1) * (allowTime) * 1000);
                } else {
                    // 如果不允许直接切换只对第一个map做处理，每300毫秒判一次是否加载成功，成功返回
                    const timer = setInterval(() => {
                        if (Object.keys(value.className).length === 0) {
                            throw new Error('300 毫秒没有找到api');
                        } else {
                            // 清除定时器
                            clearInterval(timer);
                            // 返回选用地图api的属性 value
                            resolve(value);
                        }
                    }, 300);
                    // 跳出循环
                    return;
                }

            });
        });


        // 返回一个promise对象 当加载完成时reslove 并带上当前使用的api的 windeymap.mapKey
        return timePromise;

    } else {
        // TODO 测试不抛出 会不会被捕获
        throw new Error('mapKey can`t be null');
    }

};

export default {
    loadMap,
};
