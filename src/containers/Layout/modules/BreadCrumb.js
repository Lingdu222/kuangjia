import { Breadcrumb } from 'antd';
import { LAYOUT } from 'CONST';

const CrumbItem = Breadcrumb.Item;
const enableMenuLevel = 2;
export default class BreadCrumb extends React.PureComponent {
    static propTypes = {
        navTree: PropTypes.object.isRequired,
        navHashArr: PropTypes.array.isRequired,
        navConfig: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

    get crumbs() {
        const { navHashArr, navTree } = this.props;
        const config = _.get(navTree, `${navHashArr[0]}`) || null;
        let index = 0;
        let cfg = config;
        const crumbs = [];

        while (index < navHashArr.length) {
            crumbs.push(<CrumbItem key={navHashArr[index]}>{cfg.title}</CrumbItem>);
            index += 1;
            if (!_.get(cfg, `children.${navHashArr[index]}`)) break;
            cfg = cfg.children[navHashArr[index]];
        }
        return <Breadcrumb>{crumbs}</Breadcrumb>;
    }

    get menuList() {
        const { navHashArr: arr } = this.props;
        const data = _.get(
            LAYOUT.nav,
            `${arr.slice(0, enableMenuLevel).join('.children.')}.children`
        );
        return (
            <ul className="alad-layout-header-menu">
                {_.map(data, (item, key) => (
                    <li
                        key={key}
                        onClick={() => this.handleChangeNav(key)}
                        className={
                            arr[enableMenuLevel] === key
                                ? 'alad-layout-header-menu-active'
                                : ''
                        }
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        );
    }

    get isShow() {
        const { navConfig } = this.props;

        return !navConfig.isPurePage;
    }

    handleChangeNav = (key) => {
        const { actions, navHashArr } = this.props;

        actions.changeNav({
            hashArr: navHashArr.slice(0, enableMenuLevel).concat(key)
        });
    }

    render() {
        const { navHashArr } = this.props;

        return this.isShow && (
            <div className="alad-layout-header-main">
                {navHashArr.length > enableMenuLevel ? this.menuList : this.crumbs}
            </div>
        );
    }
}
