const paths = require('./paths');
const webpackModule = require('./webpack.config.module');
const webpackPlugins = require('./webpack.config.plugins');
const webpackOptimization = require('./webpack.config.optimization');

module.exports = {
    mode: process.env.NODE_ENV,
    // optimization: {
    //     nodeEnv: process.env.NODE_ENV
    // },
    devtool: 'source-map', //测试环境用eval 提高编译速度 //"source-map",
    entry: {
        app: [require.resolve('./polyfills.js'), paths.appIndexJs],
    },
    output: {
        path: paths.appDist,
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
        publicPath: paths.publicUrl,
    },
    // resolve: {
    //     alias: {
    //         config: path.resolve(__dirname, `../src/config/${ isProd ? 'production' : 'development' }.js`),
    //     }
    // },
    // externals : {
    //     jQuery: 'jQuery',
    //     jquery: 'jQuery',
    // },
    module: webpackModule,
    plugins: webpackPlugins,
    optimization: webpackOptimization
}