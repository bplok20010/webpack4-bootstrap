const path = require('path');
const paths = require('./paths');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = [
    new CleanWebpackPlugin('dist', {
        root: paths.appPath
    }),
    // new webpack.BannerPlugin({
    //     banner: 'hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]'
    // }),
    // new CopyWebpackPlugin({
    //     from: path.resolve(__dirname,"src/assets"),
    //     to: './dist'
    // }),
    //new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml,
        // minify: {
        //     removeComments: true,
        //     collapseWhitespace: true,
        //     removeRedundantAttributes: true,
        //     useShortDoctype: true,
        //     removeEmptyAttributes: true,
        //     removeStyleLinkTypeAttributes: true,
        //     keepClosingSlash: true,
        //     minifyJS: true,
        //     minifyCSS: true,
        //     minifyURLs: true,
        // },
    }),
    new ManifestPlugin(),
    new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
    }),
    // new StyleLintPlugin({
    //     files: ['**/*.s(a|c)?ss', '**/*.css', '**/*.less'],
    //     configFile: path.resolve(__dirname, './stylelint.config.js')
    // }),
    new webpack.IgnorePlugin(/^\.[\\/]locale$/, /moment$/),
];