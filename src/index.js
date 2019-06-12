import 'babel-polyfill';
import 'fetch-detector';
import 'fetch-ie8';
import './index.less';

import { render } from 'react-dom';

const root = document.getElementById('main');
window.ReactDOM = require('react-dom');

render(
    (
        <div>
            hello world!
        </div>
    ),
    root
);
