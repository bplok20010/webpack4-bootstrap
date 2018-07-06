const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const babelConfig = require('./babel.config');

const rules = [
    {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options:{
            //emitWarning: true,
            //emitError: true,
            //failOnWarning: false,
            //failOnError: true,
            useEslintrc: false,
            // configFile: path.join(__dirname, "eslint_conf.js")
            configFile: path.resolve(__dirname , "./eslint.config.js")
        }
    },{
        test: /\.jsx?$/,
        exclude: [
            /node_modules[\\/]core-js/m, //解决$export错误，不应该再对core-js转码，不然出现循环依赖问题
            /node_modules[\\/]babel-runtime/m,
        ],
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
                        path: path.resolve(__dirname , './postcss.config.js')
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
                        path: path.resolve(__dirname , './postcss.config.js')
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
                        path: path.resolve(__dirname , './postcss.config.js')
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
    },
    {
        test: /\.json$/,
        loader: 'json-loader'
    },
    {
        test: /\.json5$/,
        loader: 'json5-loader'
    },
    {
        test: /\.yaml$/,
        use: [ 'json-loader', 'yaml-frontmatter-loader' ]
    }
];

module.exports = {
    rules: rules
};