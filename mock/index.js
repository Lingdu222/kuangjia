
const mock = {};
const path = require('path');
const fs = require('fs');
const delay = require('mocker-api/utils/delay');

fs.readdirSync(path.join(`${__dirname}/items`)).forEach((file) => {
    Object.assign(mock, require(`./items/${file}`));
});

module.exports = delay(mock, 1000);
