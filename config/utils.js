const path = require('path');
const fs = require('fs');

exports.getLessVariables = (file) => {
    const themeContent = fs.readFileSync(file, 'utf-8');
    const variables = {};
    themeContent.split('\n').forEach((item) => {
        if (item.indexOf('//') > -1 || item.indexOf('/*') > -1) {
            return;
        }
        const pair = item.split(':');
        if (pair.length < 2) return;
        const key = pair[0].replace('\r', '').replace('@', '');
        if (!key) return;
        const value = pair[1].replace(';', '').replace('\r', '').replace(/^\s+|\s+$/g, '');
        variables[key] = value;
    });
    return variables;
};

exports.resolve = dir => path.join(__dirname, '..', dir);
