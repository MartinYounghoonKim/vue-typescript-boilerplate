const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const Dotenv = require('dotenv-webpack');

const devWebpackConfig = merge(baseWebpackConfig, {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './src/main.ts',
    ],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
        chunkFilename: '[name].[chunkhash].js',
    },
    plugins: [
        new Dotenv(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
});

module.exports = devWebpackConfig;
