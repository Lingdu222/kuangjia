const Utils = {};

// 设置cookie
Utils.setCookie = (name, value) => {
    const now = new Date();
    now.setDate(now.getDate() + 1000 * 60 * 60 * 24 * 30);
    const str = `${name}=${value};expires=${now.toGMTString()};path=/;`;
    document.cookie = str;
};

// 获取cookie
Utils.getCookie = (name, isBase64) => {
    let cookieStart;
    let cookieEnd;
    let str = '';

    if (document.cookie.length > 0) {
        cookieStart = document.cookie.indexOf(`${name}=`);

        if (cookieStart !== -1) {
            cookieStart = cookieStart + name.length + 1;
            cookieEnd = document.cookie.indexOf(';', cookieStart);
            if (cookieEnd === -1) {
                cookieEnd = document.cookie.length;
            }
            str = decodeURIComponent(document.cookie.substring(cookieStart, cookieEnd));
            if (isBase64 && str) {
                str = decodeURIComponent(
                    atob(str)
                        .split('')
                        .map(c => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`)
                        .join('')
                );
            }
        }
    }
    return str;
};

// 检测是否为json
Utils.isJSON = (str) => {
    if (typeof str === 'string') {
        try {
            const obj = JSON.parse(str);
            if (typeof obj === 'object' && obj) {
                return true;
            }
            return false;
        } catch (e) {
            return false;
        }
    }
    return false;
};

// 将json转为对象
Utils.JSON2Obj = (str, defaultValue = {}) => (Utils.isJSON(str) ? JSON.parse(str) : defaultValue);

// 获取浏览器参数
Utils.getUrlParamValue = (name) => {
    const reg = new RegExp(`(\\?|&)${name}=([^(&|%)]*)(&|$|%)`);
    const r = window.location.href.match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return '';
};
// 获取浏览器参数对象
Utils.getUrlParams = (url = window.location.href) => {
    if (!url || !url.match(/\?/)) {
        return {};
    }
    return _.fromPairs(_.map(
        _.split(url.match(/\?(.+)$/)[1], '&'),
        (item) => {
            const arr = _.split(item, '=');
            arr[1] = arr[1] ? arr[1].split('%')[0] : arr[1];
            return arr;
        }
    ));
};

// 获取浏览器hash数组
Utils.getUrlHashArr = (url = window.location.href, defaultArr = []) => {
    const hashMatchs = url.match(/#\/([^ \\?]+)/);

    if (!url || !url.match(/#/) || !_.get(hashMatchs, '1')) {
        return defaultArr;
    }
    return _.split(hashMatchs[1], '/');
};

// 检查key是否在数组里
Utils.canihave = (arr = [], key = '') => _.indexOf(arr, key) !== -1;

// 在数组里才显示组件
Utils.canisee = (arr, key) => comp => Utils.canihave({ arr, key }) && comp;

// 获取随机字符串
Utils.getRandomString = (strLength = 16) => {
    const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    const maxPos = chars.length;
    let str = '';
    for (let i = 0; i < strLength; i += 1) {
        str += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return str;
};

// 增加随机字符串
Utils.addRandomKey = data => _.map(
    data,
    i => ({
        ...i,
        key: Utils.getRandomString()
    })
);
// 获取级联选择的树key
Utils.getInheritChain = ({ list, findId, fatherIds = [] }) => {
    for (let index = 0; index < list.length; index++) {
        const item = list[index] || {};
        const newFatherIds = _.concat(fatherIds, [_.omit(item, 'list')]);
        if (item.id === findId) {
            return newFatherIds;
        }
        if (_.get(item, 'list.length')) {
            const arr = Utils.getInheritChain({
                list: item.list,
                findId,
                fatherIds: newFatherIds
            });
            if (arr.length) {
                return arr;
            }
        }
    }
    return [];
};
// 把一个数组data，以number个为一项拆分为二维数组
Utils.group = (data, number) => {
    const ModuleArray = [];
    for (let j = 0; j < Math.ceil(data.length / number); j += 1) {
        ModuleArray.push(data.slice(0 + j * number, 0 + (j + 1) * number));
    }
    return ModuleArray;
};
export default Utils;
