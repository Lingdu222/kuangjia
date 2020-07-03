import { combineReducers } from 'redux';

const files = require.context('./', true, /\/state\/reducer\.js$/);

const reducers = {};
_.forEach(files.keys(), (item) => {
    const key = item.match(/\.\/(.+)\/state\/reducer\.js$/)[1];
    if (key) {
        reducers[_.camelCase(key)] = files(item).default;
    }
});

export default combineReducers(reducers);
