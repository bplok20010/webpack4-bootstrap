const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "source-map",
    mode: "development", // none development production
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.less$/,
                use: ['raw-loader', 'less-loader']
            }, {
                test: /\.css$/,
                use: [ /*'style-loader',*/ 'css-loader']
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
                use: [{
                    loader: "raw-loader",
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
        new HtmlWebpackPlugin({
            //chunks: ["a"],
            filename: 'index.html', //默认是index.html
            title: "Learn Webpack",
            //template: "./src/index.html"
        })
    ]
}