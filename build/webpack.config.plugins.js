const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = [
    new CleanWebpackPlugin('dist'),
    // new CopyWebpackPlugin({
    //     from: path.resolve(__dirname,"src/assets"),
    //     to: './dist'
    // }),
    new HtmlWebpackPlugin({
        filename: "app.html",
        //excludeChunks: ['b']
    }),
    new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
    })
];