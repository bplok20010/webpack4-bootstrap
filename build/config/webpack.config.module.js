const path = require('path');
const paths = require('./paths');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const babelConfig = require('./babel.config');

const rules = [{
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
            useEslintrc: false,
            configFile: path.resolve(__dirname, "./eslint.config.js")
        }
    }, 
    {
        oneOf: [
            {
                test: /\.jsx?$/,
                exclude: [
                    /node_modules[\\/]core-js/m, //解决$export错误，不应该再对core-js转码，不然出现循环依赖问题
                    /node_modules[\\/]babel-runtime/m,
                ],
                use: [{
                    loader: 'babel-loader',
                    options: babelConfig
                }]
            }, {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            config: {
                                path: path.resolve(__dirname, './postcss.config.js')
                            }
                        }
                    }
                ]
            }, {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            config: {
                                path: path.resolve(__dirname, './postcss.config.js')
                            }
                        }
                    },
                    "sass-loader"
                ]
            }, {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            config: {
                                path: path.resolve(__dirname, './postcss.config.js')
                            }
                        }
                    },
                    "less-loader"
                ]
            }, {
                test: /\.(?:png|jpe?g|gif|bmp)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'static/media/[name].[hash:8].[ext]',
                    }
                }]
            }, {
                test: /\.(?:woff2?|svg|ttf|eot)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'static/media/[name].[hash:8].[ext]',
                    }
                }]
            }, {
                test: /\.json5$/,
                loader: 'json5-loader'
            }, {
                test: /\.html?$/,
                use: [{
                    loader: 'html-loader',
                    options: {}
                }]
            }, {
                test: /\.md$/,
                use: [{
                    loader: 'html-loader',
                    options: {}
                }, {
                    loader: 'markdown-loader',
                    options: {}
                }]
            }, {
                exclude: [
                    /\.html?$/,
                    /\.ejs$/,
                    /\.(js|jsx)$/,
                    /\.sc?ss$/,
                    /\.less$/,
                    /\.json5?$/,
                    /\.(?:png|jpe?g|gif|bmp)$/,
                    /\.(?:woff2?|svg|ttf|eot)$/,
                    /\.twig$/,
                    /\.md$/,
                ],
                loader: 'file-loader',
                options: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            }
        ] 
    }, 
    // {
    //     test: /\.twig$/,
    //     use: [{
    //         loader: 'twig-loader',
    //         options: {}
    //     }]
    // },
    
];

module.exports = {
    rules: rules
};