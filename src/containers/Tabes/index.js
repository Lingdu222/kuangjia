import React from 'react';
import { Tabs, Button } from 'antd';
import './style.less';

const { TabPane } = Tabs;

const operations = <Button>Extra Action</Button>;
export default class Tabes extends React.PureComponent {
    render() {
        return (
            <div className="tabes-wrapper">
                <Tabs tabBarExtraContent={operations}>
                    <TabPane tab="Tab 1" key="1">
                        Content of tab 1
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of tab 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of tab 3
                    </TabPane>
                </Tabs>
            </div>

        );
    }
}
