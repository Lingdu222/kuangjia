const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackMerge = require('webpack-merge');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const CompressionPlugin = require('compression-webpack-plugin');
const webpackBaseCfg = require('./webpack.base');
const { resolve } = require('./utils');

const argv = process.env.npm_config_argv;
const staticPath = 'static/dist';

module.exports = webpackMerge(webpackBaseCfg, {
    mode: 'production',
    output: {
        publicPath: '/',
        path: resolve(staticPath)
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
                ISONLINE: argv.match('--offline') ? 'false' : 'true'
            }
        }),
        // 剔除moment语言包
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        // 复制静态资源
        // new CopyWebpackPlugin([
        //     {
        //         from: resolve('static'),
        //         to: 'static',
        //         ignore: ['.*']
        //     }
        // ]),
        new BundleAnalyzerPlugin({
            // analyzerPort: 8885  // 默认端口
        })
        // 需要后端支持
        // new CompressionPlugin()
    ],
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        minimizer: [
            // 用于压缩JS资源
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            // 用于优化并压缩CSS资源
            new OptimizeCSSAssetsPlugin()
        ],
        // 分隔chunk配置
        splitChunks: {
            chunks: 'all',
            // name: true,
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    priority: -10,
                    reuseExistingChunk: true,
                    test: /(node_modules)\/(.*)\.js/
                }
            }
        }
    },
    performance: {
        // 不显示提示
        hints: false
    },
    // 统计信息
    stats: {
        // 以size排序
        // assetsSort: 'size',
        // 添加构建日期和构建时间信息
        builtAt: true,
        // 隐藏 children 信息
        children: false,
        // 以颜色标识
        colors: true,
        // 添加时间信息
        timings: true,
        // 隐藏构建模块信息
        modules: false
    }
});
