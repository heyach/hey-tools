
export const getUrlParamByKey = (key) => {
    let url = window.location.href;

    const urlObj = new URL(url);

    const params = new URLSearchParams(urlObj.search.slice(1));

    // 将查询参数转换为对象
    let paramsObj = {};
    for (let param of params) {
        paramsObj[param[0]] = param[1];
    }

    return paramsObj[key] ? paramsObj[key] : null;
}