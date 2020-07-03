import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default class Panel extends PureComponent {
    static defaultProps = {
        className: '', // 容器类名className
        wrapClassName: '', // 包裹器类名className
        extra: null,
        desc: null,
        children: null
    }

    static propTypes = {
        wrapClassName: PropTypes.string,
        className: PropTypes.string,
        extra: PropTypes.oneOfType([
            PropTypes.element, PropTypes.string
        ]),
        title: PropTypes.oneOfType([
            PropTypes.element, PropTypes.string
        ]).isRequired,
        children: PropTypes.any,
        desc: PropTypes.any
    }

    render() {
        const {
            title, extra, children, wrapClassName, className, desc
        } = this.props;
        return (
            <div className={`dmp-panel ${wrapClassName}`}>
                <header>
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {desc}
                    </p>
                    <aside>
                        {extra}
                    </aside>
                </header>
                <section className={className}>
                    {children}
                </section>
            </div>
        );
    }
}
