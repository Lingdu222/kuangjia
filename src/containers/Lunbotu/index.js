/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { Icon } from 'antd';
import classname from 'classname';
import utils from 'HELP/utils';
import './index.less';

const imgs = [
    { title: '图片一', href: 'http://zmage.caldis.me/imgSet/childsDream/1.jpg' },
    { title: '图片二', href: 'http://img.mm4000.com/file/2/7d/ff204289f9_1044.jpg' },
    { title: '图片三', href: 'http://zmage.caldis.me/imgSet/childsDream/2.jpg' },
    { title: '图片四', href: 'https://pic1.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1200x500.jpg' },
    { title: '图片五', href: 'http://img95.699pic.com/photo/50055/5642.jpg_wh300.jpg' },
    { title: '图片六', href: 'http://img95.699pic.com/photo/50055/5642.jpg_wh300.jpg' },
    { title: '图片七', href: 'http://img95.699pic.com/photo/50055/5642.jpg_wh300.jpg' },
    { title: '图片八', href: 'http://img95.699pic.com/photo/50055/5642.jpg_wh300.jpg' },
    { title: '图片八', href: 'http://img95.699pic.com/photo/50055/5642.jpg_wh300.jpg' },
    { title: '图片八', href: 'http://img95.699pic.com/photo/50055/5642.jpg_wh300.jpg' }
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
        const myModuleArray = utils.group(imgs, 4);
        const len = myModuleArray.length;
        if (left < len - 1) {
            this.setState({
                left: left + 1
            });
        }
    }

    handleClickFooterPage = (page) => {
        this.setState({
            left: page
        });
    }


    render() {
        const { left } = this.state;
        const myModuleArray = utils.group(imgs, 4);
        const len = myModuleArray.length;

        return (
            <div id="wrapper">
                <div className="content">
                    {
                        len > 1 && left > 0 && (
                            <div className="content-left" onClick={this.handleClickLeft}>
                                <Icon className="content-left-icon" type="left" />
                            </div>
                        )
                    }
                    {
                        len > 1 && left < len - 1 && (
                            <div className="content-right" onClick={this.handleClickRight}>
                                <Icon className="content-right-icon" type="right" />
                            </div>
                        )
                    }
                    <div className="content-container">
                        <div className="content-container-all" style={{ width: len * 900, marginLeft: -left * 900 }}>
                            {
                                myModuleArray.map((moduleGroup, i) => (
                                    <ul key={i} className="content-container-all-item">
                                        {
                                            moduleGroup.map((module, i) => (
                                                <li key={i} className="content-container-all-item-card">
                                                    <div className="content-container-all-item-card-title">{module.title}</div>
                                                    <img className="content-container-all-item-card-img" src={module.href} alt="" />
                                                </li>
                                            ))
                                        }
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                    {
                        len > 1 && (
                            <ul className="content-footer">
                                {
                                    myModuleArray.map((item, i) => {
                                        const footerPageCls = classname({
                                            'content-footer-page-item': true,
                                            active: i === left
                                        });
                                        return (
                                            <li key={i} className="content-footer-page" onClick={() => { this.handleClickFooterPage(i); }}>
                                                <div className={footerPageCls} />
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        )
                    }
                </div>
            </div>
        );
    }
}
