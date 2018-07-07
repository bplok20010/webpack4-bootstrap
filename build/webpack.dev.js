const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = function(env, argv){
    
    return merge(common(env, argv), {
        mode: 'development',
        devtool: 'source-map',
        optimization: {
            nodeEnv: 'development'
        },
        // devServer: {
        //   contentBase: './dist'
        // }
    });
}