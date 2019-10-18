import { LAYOUT, SAGA_SUCCESS_PREFIX } from 'CONST';
import { utils } from 'HELP';
import * as TYPES from './actionType';

const defaultNavArr = utils.getUrlHashArr(
    window.location.hash,
    LAYOUT.defaultRoute.substring(1).split('/')
);
const initialState = IMU.Map({
    navHashArr: defaultNavArr,
    navConfig: _.get(LAYOUT, `nav.${defaultNavArr.join('.children.')}`) || {},
    navSearchObj: utils.getUrlParams(window.location.hash),
    navHashStr: window.location.hash,
    navTree: LAYOUT.nav,
    isSideBarCollapsed: false

});

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.CHANGENAV: {
            const navConfig = _.get(
                state.get('navTree'),
                `${action.payload.hashArr.join('.children.')}`
            ) || {};
            return state
                .set('navHashArr', action.payload.hashArr)
                .set('navConfig', navConfig)
                .set('navHashStr', action.payload.hashStr)
                .set('navSearchObj', action.payload.searchObj);
        }
        case TYPES.COLLAPSESIDEBAR: {
            return state
                .set('isSideBarCollapsed', action.payload.isCollapsed);
        }

        case SAGA_SUCCESS_PREFIX + TYPES.GET_AUTH_POINTS: {
            const authArr = action.payload.data;
            // 给有权限控制的菜单项加上权限参数
            const addAuthValue = obj => _.mapValues(obj, (i) => {
                const data = _.cloneDeep(i);
                if (data.authPoints) {
                    data.isAuth = !!_.intersection(authArr, data.authPoints).length;
                    data.isHideThisMenu = !data.isAuth;
                }
                if (!data.isHideThisMenu && data.children) {
                    data.children = addAuthValue(data.children);
                }
                return data;
            });

            const navTree = addAuthValue(_.get(LAYOUT, 'nav'));
            const navConfig = _.get(
                navTree,
                `${state.get('navHashArr').join('.children.')}`
            ) || {};

            return state
                .set('navConfig', navConfig)
                .set('navTree', navTree);
        }
        default:
            return state;
    }
}
