const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const nodeNotifier = require('node-notifier');
const apiMocker = require('mocker-api');
const webpackMerge = require('webpack-merge');
const packageConfig = require('../package.json');
const proxyConfig = require('./proxy.config');
const webpackBaseCfg = require('./webpack.base');
const { resolve } = require('./utils');

const HOST = process.env.npm_config_HOST;
const argv = process.env.npm_config_argv;

const proxyHost = (function getHost() {
    const { cooked } = JSON.parse(argv);
    const proxyIndex = cooked.indexOf('--proxy');
    if (proxyIndex !== -1 && cooked[proxyIndex + 1]) {
        return proxyConfig[cooked[proxyIndex + 1]] || proxyConfig.dev;
    }
    return false;
}());

// 没有反向代理也会走mock模式
const isMock = argv.match('--mock') || !proxyHost;

module.exports = webpackMerge(webpackBaseCfg, {
    mode: 'development',
    plugins: [
        // 定义环境变量
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"',
                ISONLINE: 'false',
                ISMOCK: isMock ? 'true' : 'false'
            }
        }),
        // 开启热替换
        new webpack.HotModuleReplacementPlugin(),
        // html插件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        }),
        // 友好地在控制台输出log
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [
                    'Your application is running here: http://127.0.0.1:8999',
                    isMock ? 'mock模式开启' : `反向代理模式开启，代理地址：${proxyHost}`
                ]
            },
            onErrors: () => (severity, errors) => {
                if (severity !== 'error') return;

                const error = errors[0];
                const filename = error.file && error.file.split('!').pop();

                nodeNotifier.notify({
                    title: packageConfig.name,
                    message: `${severity}: ${error.name}`,
                    subtitle: filename || ''
                });
            }
        })
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        host: HOST || '127.0.0.1',
        before(app) {
            // mock模式增加mock插件
            if (isMock) {
                apiMocker(app, resolve('./mock/index.js'));
            }
        },
        // 控制台仅展示warning及以上的log
        clientLogLevel: 'warning',
        // 开启热替换
        hot: true,
        // 一切服务都启用 gzip 压缩
        compress: true,
        // 端口
        port: '8999',
        // 启动时自动打开新页面
        open: false,
        // 只error时，浏览器页面显示报错
        overlay: { warnings: false, errors: true },
        // 此路径下的打包文件可在浏览器中访问
        publicPath: '/',
        // 反向代理
        proxy: proxyHost ? [{
            context: ['/api'],
            target: proxyHost
        }] : {},
        // 有了FriendlyErrorsPlugin，则devServer得安静点，you know?
        quiet: true,
        watchOptions: {
            // 取消轮询
            poll: false
        }
    }
});
