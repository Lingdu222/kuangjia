import {
    HashRouter, Route, Switch, Redirect
} from 'react-router-dom';
import { LAYOUT } from 'CONST';
import Layout from '@/containers/Layout';
import containers from '@/containers';
import { NotFound } from 'CC';

const getRoute = (data, fatherPath = '') => _.map(data, (item, key) => {
    const path = _.get(item, 'routeConfig.path')
        ? `${fatherPath}/${_.get(item, 'routeConfig.path')}`
        : `${fatherPath}/${key}`;

    if (item.children) {
        return [
            <Redirect
                exact
                from={path}
                to={`${path}/${item.redirectTo || _.keys(item.children)[0]}`}
            />,
            getRoute(item.children, path)
        ];
    }
    return [
        <Route
            exact
            key={key}
            component={containers[
                item.compName || _.startCase(path).replace(/\s/g, '')
            ]}
            {...item.routeConfig}
            path={path}

        />
    ];
});
export default (
    <HashRouter>
        <Layout>
            <Switch>
                <Redirect exact path="/" to={LAYOUT.defaultRoute} />
                {getRoute(LAYOUT.nav)}
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </HashRouter>
);
