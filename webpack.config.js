var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'src/main.ts'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:63996',
                secure: false
            }
        }
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        filename: 'app.[hash].js'
    },
    module: {
        rules: [
            { test: /\.component.ts$/, loaders: 'angular2-template-loader' },
            { test: /\.ts$/, loaders: 'awesome-typescript-loader' },
            { test: /\.html$/, loaders: 'html-loader' },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.ts', '.html', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin("styles.css")
    ]
};