import { FETCH_TYPE, ENV } from 'CONST';
import * as TYPES from './actionType';


export const changeNav = ({
    hashArr,
    searchObj,
    isAssignOldSearch = false // 是否沿用老的search
}) => (dispatch, getState) => {
    const oldHashArr = getState().layout.get('navHashArr');
    const oldSearchObj = getState().layout.get('navSearchObj');
    const newHashArr = hashArr || oldHashArr;
    let newSearchObj = isAssignOldSearch
        ? _.assign({}, oldSearchObj, searchObj)
        : (searchObj || {});
    // 去除值为null或undefined的字段
    newSearchObj = _.omitBy(newSearchObj, _.isNil);
    let hashStr = `#/${newHashArr.join('/')}`;
    if (_.toArray(newSearchObj).length) {
        hashStr += `?${_.map(newSearchObj, (item, key) => `${key}=${item}`).join('&')}`;
    }
    hashStr = encodeURI(hashStr);
    if (window.location.hash !== hashStr) {
        window.location.hash = hashStr;
    }
    dispatch({
        type: TYPES.CHANGENAV,
        payload: {
            hashArr: newHashArr,
            hashStr,
            searchObj: newSearchObj
        }
    });
};

// 获取公共数据
export const collapseSideBar = isCollapsed => dispatch => dispatch({
    type: TYPES.COLLAPSESIDEBAR,
    payload: {
        isCollapsed
    }
});


// 获取权限点
export const getAuthPoints = () => dispatch => dispatch({
    type: FETCH_TYPE.GET + TYPES.GET_AUTH_POINTS,
    payload: {}
});

// 操作类通用action
export const operate = ({
    params, message, success, url, isJSON = false
}) => dispatch => dispatch({
    type: (isJSON ? FETCH_TYPE.POSTJSON : FETCH_TYPE.POSTFORM) + TYPES.COMMON_OPERATE,
    payload: {
        url: `${ENV.REQ_PREFIX}${url}`,
        params,
        message,
        success
    }
});
