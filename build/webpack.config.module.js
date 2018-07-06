const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const babelConfig = require('./babel.config');

const rules = [{
        test: /\.jsx?$/,
        // exclude: [
        //     /node_modules[\\/]core-js/m,
        //     /node_modules[\\/]babel-/m,
        // ],
        use: [{
            loader: 'babel-loader',
            options: babelConfig
        }]
    },
    {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: "postcss-loader",
                options: {
                    config: {
                        path: __dirname + '/postcss.config.js'
                    }
                }
            }
        ]
    },
    {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: "postcss-loader",
                options: {
                    config: {
                        path: __dirname + '/postcss.config.js'
                    }
                }
            },
            "sass-loader"
        ]
    },
    {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: "postcss-loader",
                options: {
                    config: {
                        path: __dirname + '/postcss.config.js'
                    }
                }
            },
            "less-loader"
        ]
    },
    {
        test: /\.(?:png|jpe?g|gif)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 8192,
                name: 'images/[name].[ext]?[hash]',
            }
        }]
    },
    {
        test: /\.(?:woff2?|svg|ttf|eot)$/,
        use: [{
            loader: 'url-loader',
            options: {
                name: 'fonts/[name].[ext]?[hash]',
            }
        }]
    },
    {
        test: /\.html?/,
        use: ['raw-loader']
    }
];

module.exports = {
    rules: rules
};