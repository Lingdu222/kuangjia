/*
 * connect生成器
 *
 * @param - mapStateToProps： {[func]}
 *     说明：任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用，传入新的state。
 *         该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并
 *
 * @param - actions {[func or obj]}
 *     说明：1. 参数为对象：那么每个定义在该对象的函数都将被当作 Redux action creator，其中所定义的方法名将作为属性名，合并到组件的 props 中。
 *          2. 参数为函数：须为 redux action 函数
 * @return {[func]} [redux connect实例]
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default function connectFactory(mapStateToProps, actions, mergeProps = null, option = {}) {
    return connect(
        mapStateToProps,
        typeof actions === 'function'
            ? actions
            : dispatch => _.mapValues(actions, item => bindActionCreators(item, dispatch)),
        mergeProps,
        option,
    );
}
