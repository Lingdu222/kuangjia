/*
 * 字段说明
 * routeConfig: (非必填，默认值为{exact:true,path:key值生成树})router配置对象，详见 https://reacttraining.com/react-router/web/api/Route
 * compName: (非必填，默认取path的首字母大写)渲染的组件(来自containers/index.js)
 * redirectTo: (非必填，默认取第一个children)重定向到哪个子菜单
 * children: (非必填)子路由
 * isHideThisMenu (非必填，默认为false)设置为true时，会隐藏该菜单项
 * isHideSubMenu  (非必填，默认为false)设置为true时，会该菜单下的所有子菜单
 * isPurePage: (非必填，默认为false)设置为true时，该页面则隐藏侧边栏和顶部
 * icon: (非必填) 选用ant-design的icon https://ant.design/components/icon-cn/
*/
const NAV_MAP = {
    lunbotu: {
        title: '轮播图库',
        icon: 'phone',
        redirectTo: 'lunbotu'
        // children: {
        //     hotelManage: {
        //         title: '酒店管理',
        //         icon: 'bank'
        //     },
        //     accountManage: {
        //         title: '账号管理',
        //         icon: 'team'
        //     }
        // }
    },
    tabes: {
        title: 'Tabs库',
        icon: 'phone'
        // children: {
        //     hotelManage: {
        //         title: '酒店管理',
        //         icon: 'bank'
        //     },
        //     accountManage: {
        //         title: '账号管理',
        //         icon: 'team'
        //     }
        // }
    }
};

const getNavs = ({ data }) => _.pickBy(
    _.mapValues(data, (item) => {
        // 如果有权限点控制，则默认不展示菜单且权限为false
        if (item.authPoints) {
            _.set(item, 'isAuth', false);
            _.set(item, 'isHideThisMenu', true);
        } else {
            _.set(item, 'isAuth', true);
        }

        if (item.children) {
            _.set(
                item,
                'children',
                getNavs({ data: item.children })
            );
        }

        return item;
    }),
    _.isObject
);

export default {
    title: 'COCO',
    defaultRoute: '/lunbotu',
    nav: getNavs({ data: NAV_MAP })
};
