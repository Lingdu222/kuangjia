// import 'babel-polyfill';
// import 'fetch-detector';
// import 'fetch-ie8';
// import './index.less';
// import { render } from 'react-dom';
// import Lunbo from './containers/Lunbotu';
// import Tabes from './containers/Tabes';

// const root = document.getElementById('main');
// window.ReactDOM = require('react-dom');

// render(
//     (
//         <div>
//             <Lunbo />
//             <Tabes />
//         </div>
//     ),
//     root
// );

import 'babel-polyfill';
import 'fetch-detector';
import 'fetch-ie8';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { Data, Locale } from 'nova';
import router from './router';
import rootReducer from '@/containers/rootReducer';
import storeFactory from './store';
import './index.less';

// Data.setGlobalReqCfg({
//     contentType: 'application/json;charset=utf-8'
// });

const store = storeFactory()(rootReducer);
const root = document.getElementById('main');
window.ReactDOM = require('react-dom');

render(
    (
        // <Locale userLang="zh-CN">
        <Provider store={store}>
            {router}
        </Provider>
        // </Locale>
    ),
    root
);
