/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */

import React, { Component } from 'react';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { currentIndex: 0 };
        this.renderChildren = this.renderChildren.bind(this);
        this.setIndex = this.setIndex.bind(this);
    }

    renderChildren() {
        const { children, width, height } = this.props;
        const childStyle = {
            width,
            height
        };

        return React.Children.map(children, (child) => {
            const childClone = React.cloneElement(child, { style: childStyle });
            return (
                <div
                    style={{
                        display: 'inline-block'
                    }}
                >
                    {childClone}
                </div>
            );
        });
    }

    setIndex(index) {
        const len = this.props.children.length;
        const nextIndex = (index + len) % len;

        this.setState({ currentIndex: nextIndex });
    }

    render() {
        const { width, height } = this.props;
        const { currentIndex } = this.state;

        const offset = -currentIndex * width;

        const frameStyle = {
            width,
            height,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            position: 'relative'
        };

        const imageRowStyle = {
            marginLeft: offset,
            transition: '.2s'
        };

        const buttonStyle = {
            position: 'absolute',
            top: '40%',
            bottom: '40%',
            width: '10%',
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '50%',
            outline: 'none',
            border: 'none',
            color: '#FFFFFF'
        };

        const leftButtonStyle = {
            ...buttonStyle,
            left: 0
        };

        const rightButtonStyle = {
            ...buttonStyle,
            right: 0
        };

        return (
            <div className="carousel">
                <div className="frame" style={frameStyle}>
                    <button
                        onClick={() => this.setIndex(currentIndex - 1)}
                        style={leftButtonStyle}
                    >
                        {'<'}

                    </button>
                    <div style={imageRowStyle}>{this.renderChildren()}</div>
                    <button
                        onClick={() => this.setIndex(currentIndex + 1)}
                        style={rightButtonStyle}
                    >
                        {'>'}

                    </button>
                </div>
            </div>
        );
    }
}
