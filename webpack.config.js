const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let i = 1;

module.exports = {
    devtool: 'source-map', //测试环境用eval 提高编译速度 //"source-map",
    mode: "development", // none development production
    entry: {
        a: './src/index.js',
        b: './src/b.js'
    },
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }, {
                test: /\.css$/,
                use: [ /*'style-loader',*/ MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(ini|png)$/,
                use: ['file-loader']
            },
            {
                test: /\.txt$/,
                use: ['raw-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: "css-loader",
                }, {
                    loader: "postcss-loader",
                    options: {
                        config: {
                            path: __dirname + '/postcss.config.js'
                        }
                    }
                }, {
                    loader: "sass-loader",
                }]
            },
            {
                test: /\.html$/,
                use: ['file-loader', 'extract-loader', 'html-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            filename: "a.html",
            excludeChunks: ['b']
        }),
        new HtmlWebpackPlugin({
            filename: "b.html",
            excludeChunks: ['a']
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],
    optimization: {
        runtimeChunk: 'single', //'single',
        splitChunks: {
            name: 'commons',
            chunks: 'all',
            maxInitialRequests: 1000,
            minSize: 1,
            cacheGroups: {
                react: {
                    test: /node_modules[\\/]react/,
                    name: 'react',
                    priority: 4
                },
                three: {
                    test: /node_modules[\\/]three/,
                    name: 'three',
                    priority: 5
                },
                vendors: {
                    name: "vendors",
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                components: {
                    test: /[\\/]components[\\/]/,
                    name: 'components',
                    priority: -20
                },
                styles: { //test
                    name: 'styles',
                    test: /\.(css|less|scss)$/,
                    //chunks: 'all',
                    //enforce: true
                }
            }
        }
    }
}