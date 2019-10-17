/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { Icon } from 'antd';

import './index.less';

const imgs = [
    { title: '图片一', img: 'http://zmage.caldis.me/imgSet/childsDream/1.jpg' },
    { title: '图片二', img: 'http://img.mm4000.com/file/2/7d/ff204289f9_1044.jpg' },
    { title: '图片三', img: 'http://zmage.caldis.me/imgSet/childsDream/2.jpg' },
    { title: '图片四', img: 'https://pic1.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1200x500.jpg' },
    { title: '图片五', img: 'http://img95.699pic.com/photo/50055/5642.jpg_wh300.jpg' },
    { title: '图片六', img: 'http://img95.699pic.com/photo/50055/5642.jpg_wh300.jpg' },
    { title: '图片七', img: 'http://img95.699pic.com/photo/50055/5642.jpg_wh300.jpg' },
    { title: '图片八', img: 'http://img95.699pic.com/photo/50055/5642.jpg_wh300.jpg' },
    { title: '图片八', img: 'http://img95.699pic.com/photo/50055/5642.jpg_wh300.jpg' },
    { title: '图片八', img: 'http://img95.699pic.com/photo/50055/5642.jpg_wh300.jpg' }
];
export default class MyModule extends Component {
    state = {
        left: 0
    }

    handleClickLeft = () => {
        const { left } = this.state;
        if (left > 0) {
            this.setState({
                left: left - 1
            });
        }
    }

    handleClickRight = () => {
        const { left } = this.state;
        const myModuleArray = [];
        for (let j = 0; j < Math.ceil(imgs.length / 4); j += 1) {
            myModuleArray.push(imgs.slice(0 + j * 4, 0 + (j + 1) * 4));
        }
        const len = myModuleArray.length;
        if (left < len - 1) {
            this.setState({
                left: left + 1
            });
        }
    }


    render() {
        const { left } = this.state;

        const myModuleArray = [];
        for (let j = 0; j < Math.ceil(imgs.length / 4); j += 1) {
            myModuleArray.push(imgs.slice(0 + j * 4, 0 + (j + 1) * 4));
        }
        const len = myModuleArray.length;

        return (
            <div id="my-module-wrapper">
                <div className="my-module-content">
                    {
                        len > 1 && left > 0
                        && (
                            <div className="my-module-content-left" onClick={this.handleClickLeft}>
                                <Icon className="my-module-content-left-icon" type="left" />
                            </div>
                        )
                    }
                    {
                        len > 1 && left < len - 1
                        && (
                            <div className="my-module-content-right" onClick={this.handleClickRight}>
                                <Icon className="my-module-content-right-icon" type="right" />
                            </div>
                        )
                    }
                    <div className="my-module-content-container">
                        <div className="my-module-content-container-all" style={{ width: len * 900, marginLeft: -left * 900 }}>
                            {
                                myModuleArray.map((moduleGroup, i) => (
                                    <ul key={i} className="my-module-content-container-all-item">
                                        {
                                            moduleGroup.map((module, i) => (
                                                <li key={i} className="my-module-content-container-all-item-card">
                                                    <div className="my-module-content-container-all-item-card-inner">
                                                        <div className="my-module-content-container-all-item-card-inner-v1-title">{module.title}</div>
                                                        <img className="my-module-content-container-all-item-card-inner-v1-img" src={module.img} alt="" />
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
