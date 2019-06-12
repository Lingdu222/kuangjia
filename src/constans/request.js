
// 请求变量和


export const SAGA_REQ_PREFIX = 'SAGA_REQUEST_';
export const SAGA_LOADING_PREFIX = 'SAGA_LOADING_';
export const SAGA_SUCCESS_PREFIX = 'SAGA_SUCCESS_';
export const SAGA_ERROR_PREFIX = 'SAGA_ERROR_';
export const SAGA_TIMEOUT_PREFIX = 'SAGA_TIMEOUT_';

export const FETCH_TYPE = {
    GET: `${SAGA_REQ_PREFIX}GET_`,
    POST: `${SAGA_REQ_PREFIX}POSTFORM_`,
    POSTFORM: `${SAGA_REQ_PREFIX}POSTFORM_`,
    POSTJSON: `${SAGA_REQ_PREFIX}POSTJSON_`,
    POSTFILE: `${SAGA_REQ_PREFIX}POSTFILE_`,
    PUT: `${SAGA_REQ_PREFIX}PUT_`,
    DELETE: `${SAGA_REQ_PREFIX}DELETE_`
};

// 前端报错，errno都大于0
export const FRONTEND_ERROR = {
    NO_REQUEST: {
        errno: '1',
        errmsg: '',
        remark: 'No request occurred'
    }
};

// 请求返回码map
export const RESPONSE_MAP = {
    errno: {
        succcessCode: 0,
        msgKey: 'errmsg'
    },
    errcode: {
        succcessCode: 0,
        msgKey: 'errmsg'
    }
};

export const getFetchParams = (data) => {
    const params = _.cloneDeep(data) || {};
    // 可在此处增加公共参数

    // 填补ie的坑，只要不是第一次请求都会从缓存里拿数据
    params.v = moment().unix();

    // 过滤无效参数
    _.forEach(params, (value, key) => {
        if (typeof value === 'undefined' || value === '') {
            delete params[key];
        }
    });

    return params;
};

export const getMsg = (data) => {
    const name = _.intersection(_.keys(data), _.keys(RESPONSE_MAP))[0];
    const config = RESPONSE_MAP[name];
    if (config && data[config.msgKey]) {
        return data[config.msgKey];
    }
    return '系统错误';
};

export const isSuccessReq = (data) => {
    const name = _.intersection(_.keys(data), _.keys(RESPONSE_MAP))[0];

    return name && data[name] === RESPONSE_MAP[name].succcessCode;
};
