import utils from 'HELP/utils';
// 线上生产环境
const isOnlineEnv = !!process.env.ISONLINE;

const userInfo = utils.JSON2Obj(utils.getCookie('userInfo'));
export default {
    REQ_PREFIX: '/gulfstream/red-cliff-mock-be',
    userInfo,
    isOnlineEnv,
    isPortalBanner: false,
    ASSETS_PREFIX: isOnlineEnv ? '//static.udache.com/red-cliff-mock/assets' : 'static/assets',
    ssoCfg: {
        env: isOnlineEnv ? 'online' : 'dev',
        appId: isOnlineEnv ? 1136 : 1006,
        language: 'zh-CN'
    }
};
