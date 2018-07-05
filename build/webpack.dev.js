const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    optimization: {
        nodeEnv: 'development'
    },
    // devServer: {
    //   contentBase: './dist'
    // }
});