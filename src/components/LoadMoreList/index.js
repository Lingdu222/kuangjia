import { List, Button } from 'antd';
import { getFetchParams } from 'CONST';
import Fetch from '@/store/saga/fetch';

export default class LoadMoreList extends React.Component {
    static propTypes = {
        pagesize: PropTypes.number,
        url: PropTypes.string.isRequired,
        addItem: PropTypes.any,
        renderItem: PropTypes.func
    }

    static defaultProps = {
        pagesize: 10,
        addItem: null,
        renderItem: item => (
            <List.Item>
                {item}
            </List.Item>
        )
    }

    state = {
        current: 0,
        list: [],
        total: 0,
        loading: false
    }

    componentDidMount() {
        this.getList(true);
    }

    componentDidUpdate(pre) {
        const { url: oldUrl } = pre;
        const { url } = this.props;
        if (url && url !== oldUrl) {
            this.getList(true);
        }
    }

    getList = (isRefresh) => {
        const { url, pagesize } = this.props;
        let { current } = this.state;
        if (!url) {
            return;
        }
        if (isRefresh) {
            current = 1;
            this.setState({
                loading: true,
                list: []
            });
        } else {
            current += 1;
            this.setState({
                loading: true
            });
        }

        Fetch.get({
            url,
            params: {
                ...getFetchParams(),
                current,
                pagesize
            }
        }).then(res => res.json()).then((res) => {
            const dataList = _.get(res, 'data.infos') || [];
            const total = _.get(res, 'data.sum') || 0;
            this.setState(({ list }) => ({
                loading: false,
                list: isRefresh ? dataList : _.concat(list, dataList),
                total,
                current
            }));
        });
    }

    render() {
        const { list, total, loading } = this.state;
        const { renderItem, addItem, ...others } = this.props;
        return (
            <div className="redcliff-loadmorelist">
                {(!loading || !!list.length) && (
                    <List
                        itemLayout="horizontal"
                        dataSource={addItem ? ['add', ...list] : list}
                        renderItem={item => (item === 'add'
                            ? addItem
                            : renderItem(item))}
                        {...others}
                    />
                )}
                {(!list.length || list.length < total) && (
                    <Button
                        type="dashed"
                        onClick={() => this.getList()}
                        loading={loading}
                    >
                        {list.length ? '加载更多' : '重新加载'}
                    </Button>
                )}
                {(!!list.length && list.length >= total) && (
                    <div className="redcliff-loadmorelist-done">已全部加载完毕</div>
                )}
            </div>
        );
    }
}
