const path = require('path');
const webpackModule = require('./webpack.config.module');
const webpackPlugins = require('./webpack.config.plugins');
const webpackOptimization = require('./webpack.config.optimization');

module.exports = function(env, argv){
    const mode = argv.mode || 'development';
    const isProd = mode === 'production';

    return {
        mode: mode,
        //devtool: 'source-map', //测试环境用eval 提高编译速度 //"source-map",
        entry: {
            app: path.resolve(__dirname, '../src/index.js'),
        },
        output: {
            filename: '[name].[hash].js',
            path: path.resolve(__dirname, '../dist')
        },
        resolve: {
            alias: {
                config: path.resolve(__dirname, `../src/config/${ isProd ? 'production' : 'development' }.js`),
            }
        },
        externals : {
            jQuery: 'jQuery',
            jquery: 'jQuery',
        },
        module: webpackModule,
        plugins: webpackPlugins,
        optimization: webpackOptimization
    }
}