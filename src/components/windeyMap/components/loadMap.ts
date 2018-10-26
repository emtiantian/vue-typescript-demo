import createMapApi from '@/components/windeyMap/components/createMapApi';

/**
 *
 * @param mapKey
 * @param autoChange
 * @param allowTime
 * @param intervals
 */
const loadMap = (mapKey: WindeyMapTypes.MapKey[], autoChange: boolean | undefined, allowTime: number = 2, intervals: number = 200): Promise<WindeyMapTypes.MapKey> => {
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
        const timePromise: Promise<WindeyMapTypes.MapKey> = new Promise((resolve, reject) => {
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
                    // Object.keys(value.className).length === 0 判断对象是否为空

                    const loader = setInterval(() => {
                        // @ts-ignore
                        if (window[value.className]) {
                            // 清除定时器
                            clearInterval(loader);
                            // 返回选用地图api的属性
                            resolve(value);
                        } else {
                            // 记录错误
                            console.log('给定间隔时间' + intervals + 'ms未找到地图api' + value.type);
                        }
                    }, intervals);

                    setTimeout(() => {
                        clearInterval(loader);
                        // @ts-ignore
                        if (!(window[value.className])) {
                            throw new Error('给定时间' + allowTime + 's未找到地图api' + value.type);
                        }
                    }, (index + 1) * (allowTime) * 1000);

                } else {

                    // 如果不允许直接切换只对第一个map做处理，每300毫秒判一次是否加载成功，成功返回
                    const timer = setInterval(() => {
                        // @ts-ignore
                        if (window[value.className]) {
                            // 清除定时器
                            clearInterval(timer);
                            // 返回选用地图api的属性 value
                            resolve(value);
                        } else {
                            // 记录错误
                            console.log('给定间隔时间' + intervals + 'ms未找到地图api' + value.type);
                        }
                    }, intervals);
                    setTimeout(() => {
                        clearInterval(timer);
                        // @ts-ignore
                        if (!window[value.className]) {
                            throw new Error('给定时间' + allowTime + 's未找到地图api' + value.type);
                        }
                    }, allowTime * 1000);
                    // 跳出循环
                    return;
                }

            });
        });

        // 返回一个promise对象 当加载完成时reslove 并带上当前使用的api的 windeymap.mapKey
        return timePromise;

    } else {
        throw new Error('mapKey can`t be null');
    }

};

/**
 *
 * @param mapKey 地图相关
 * @param autoChange
 * @param zoom
 * @param name
 * @param center
 * @param intervals
 * @param allowTime
 */
const createApi = async (mapKey: WindeyMapTypes.MapKey[], autoChange: boolean | undefined, zoom: number, name: string, center: WindeyMapTypes.LatLng, intervals: number = 200, allowTime: number = 2): Promise<WindeyMapTypes.WindeyMapApi> => {
    // 引入google地图api或者百度地图aip 返回一个promise对象
    console.log('开始加载地图');
    const value: WindeyMapTypes.MapKey = await loadMap(mapKey, autoChange, allowTime, intervals);
    console.log('加载地图完成');
    return createMapApi.createMapApi(value, zoom, name, center);
};
export default {
    loadMap,
    createApi,
};
