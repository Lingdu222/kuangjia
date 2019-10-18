import 'babel-polyfill';
import 'fetch-detector';
import 'fetch-ie8';
import './index.less';
import { render } from 'react-dom';
import Lunbo from './containers/Lunbotu';
import Tabes from './containers/Tabes';

const root = document.getElementById('main');
window.ReactDOM = require('react-dom');

render(
    (
        <div>
            <Lunbo />
            <Tabes />
        </div>
    ),
    root
);
