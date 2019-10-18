import { connect, utils } from 'HELP';
import { withRouter } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import * as pureActions from './state/actions';
import SideBar from './modules/SideBar';
import BreadCrumb from './modules/BreadCrumb';

const { Content, Header } = Layout;
@withRouter
@connect(state => ({
    navHashStr: state.layout.get('navHashStr'),
    navHashArr: state.layout.get('navHashArr'),
    navConfig: state.layout.get('navConfig'),
    authPoints: state.layout.get('authPoints'),
    navTree: state.layout.get('navTree'),
    isSideBarCollapsed: state.layout.get('isSideBarCollapsed')
}), { actions: pureActions })
export default class MyLayout extends React.Component {
    static propTypes = {
        navHashStr: PropTypes.string.isRequired,
        isSideBarCollapsed: PropTypes.bool.isRequired,
        actions: PropTypes.object.isRequired,
        children: PropTypes.element.isRequired
    }

    // componentDidMount() {
    //     const { actions } = this.props;

    // }

    componentWillReceiveProps(nextProps) {
        const { actions, navHashStr } = nextProps;
        const realHash = window.location.hash;
        if (navHashStr !== realHash) {
            actions.changeNav({
                hashArr: utils.getUrlHashArr(realHash),
                searchObj: utils.getUrlParams(realHash)
            });
        }
    }

    onCollapse = () => {
        const { actions, isSideBarCollapsed } = this.props;
        actions.collapseSideBar(!isSideBarCollapsed);
    }

    render() {
        const { children, ...others } = this.props;
        return (
            <Layout className="alad-layout">
                <SideBar {...others} />
                <Layout>
                    <Header className="alad-layout-header">
                        <Icon
                            className="alad-layout-collapsebtn"
                            type={others.isSideBarCollapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.onCollapse}
                        />
                        <BreadCrumb {...others} />
                    </Header>
                    <Content className="alad-layout-content">
                        {children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
