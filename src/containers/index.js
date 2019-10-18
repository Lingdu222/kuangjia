const files = require.context('./', true, /\.\/.+\/index\.js$/);

const containers = {};
_.forEach(files.keys(), (item) => {
    const key = item.match(/\.\/(.+)\/index\.js$/)[1];
    if (key) {
        containers[key.replace(/\//g, '')] = files(item).default;
    }
});

// 引入所有less文件
const less = require.context('./', true, /.+\.less$/);
_.forEach(less.keys(), (item) => {
    // eslint-disable-next-line
    require(`${item}`);
});

export default containers;
