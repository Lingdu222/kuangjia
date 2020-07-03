import { Spin } from 'antd';

export default WrapComp => class extends React.PureComponent {
    static defaultProps = {
        loading: false
    }

    static propTypes = {
        loading: PropTypes.bool
    }

    render() {
        const { loading } = this.props;
        return (
            <Spin spinning={loading}>
                <WrapComp {...this.props} />
            </Spin>
        );
    }
};
