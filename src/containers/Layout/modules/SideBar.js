import { Menu, Layout, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

export default class SideBar extends React.Component {
    static propTypes = {
        navTree: PropTypes.object.isRequired,
        navHashArr: PropTypes.array.isRequired,
        navConfig: PropTypes.object.isRequired,
        isSideBarCollapsed: PropTypes.bool.isRequired,
        actions: PropTypes.object.isRequired
    }

    get isShow() {
        const { navConfig } = this.props;

        return !navConfig.isPurePage;
    }


    handleClick = (e) => {
        const { actions } = this.props;

        actions.changeNav({
            hashArr: e.keyPath.reverse()
        });
    }

    getMenuList = ({ data, needIcon }) => _.map(data, (item, key) => {
        const { isSideBarCollapsed } = this.props;
        const title = (
            <span>
                {isSideBarCollapsed && !item.icon && needIcon && item.title[0]}
                {item.icon && <Icon type={item.icon} />}
                <span className="alad-layout-sidebar-text">{item.title}</span>
            </span>
        );
        if (item.children && !item.isHideSubMenu) {
            return !item.isHideThisMenu && (
                <SubMenu
                    key={key}
                    title={title}
                >
                    {this.getMenuList({ data: item.children })}
                </SubMenu>
            );
        }
        return !item.isHideThisMenu && (
            <Menu.Item key={key}>
                {title}
            </Menu.Item>
        );
    })

    render() {
        const { navHashArr, navTree, isSideBarCollapsed } = this.props;
        return this.isShow && (
            <Sider
                collapsible
                collapsed={isSideBarCollapsed}
                trigger={null}
                className="alad-layout-sidebar"
            >
                <div className="alad-layout-sidebar-title">
                    <img src="https://image.cc0.cn/201906/20190529015745183.jpg?x-oss-process=style/www.cc0.cn-1200px" alt="logo" />
                </div>
                <Menu
                    mode="inline"
                    theme="dark"
                    onClick={this.handleClick}
                    selectedKeys={navHashArr}
                    defaultOpenKeys={navHashArr.slice(0, -1)}
                    className="alad-layout-sidebar-menu"
                >
                    {this.getMenuList({ data: navTree, needIcon: true })}
                </Menu>
            </Sider>
        );
    }
}
