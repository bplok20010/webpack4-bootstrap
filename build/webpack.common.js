const path = require('path');
const webpackModule = require('./webpack.config.module');
const webpackPlugins = require('./webpack.config.plugins');
const webpackOptimization = require('./webpack.config.optimization');

console.log(path.resolve(__dirname, '../src/index.js'));

module.exports = {
    //devtool: 'source-map', //测试环境用eval 提高编译速度 //"source-map",
    entry: {
        app: path.resolve(__dirname, '../src/index.js'),
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    // resolve: {},
    // externals : {
    //     react: 'react'
    // },
    module: webpackModule,
    plugins: webpackPlugins,
    optimization: webpackOptimization
}