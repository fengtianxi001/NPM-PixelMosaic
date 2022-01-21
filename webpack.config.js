
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");

const terserPlugin = new TerserPlugin({
    parallel: 4,
    extractComments: true,
    terserOptions: {
        compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log']
        }
    }
})
module.exports = {
    mode: 'development',
    entry: './example/index.js',
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './example/index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\\.(js|jsx)$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                type: 'asset',
            },
        ],
    },
};
