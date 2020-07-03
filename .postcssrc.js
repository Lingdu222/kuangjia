module.exports = {
    "plugins": {
        // 能使用最新的 CSS 语法
        "postcss-preset-env": {
            stage: 0,
            browsers: [  // 兼容浏览器
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9',
            ]
        }
    }
}
