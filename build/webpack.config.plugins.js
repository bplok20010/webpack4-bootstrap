const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = [
    new CleanWebpackPlugin('dist', {
        root: path.resolve(__dirname, '..')
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
        filename: "app.html",
        //excludeChunks: ['b']
    }),
    new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
    }),
    // new StyleLintPlugin({
    //     files: ['**/*.s(a|c)?ss', '**/*.css', '**/*.less'],
    //     configFile: path.resolve(__dirname, './stylelint.config.js')
    // }),
];