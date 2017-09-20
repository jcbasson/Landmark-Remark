const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Webpack = require('webpack');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
});
const ExtractTextPluginConfig = new ExtractTextPlugin("app.css");

const VendorCommonsChunkPluginConfig = new Webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
    }
});
const RuntimeBuildCodeCommonsChunkPluginConfig = new Webpack.optimize.CommonsChunkPlugin({
    name: 'manifest'
});

const HotModuleReplacementPluginConfig = new Webpack.HotModuleReplacementPlugin();

const NamedModulesPluginConfig = new Webpack.NamedModulesPlugin();

const path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        "webpack/hot/only-dev-server", // "only" stops HMR on syntax errors
        'webpack-dev-server/client?http://localhost:8080/',
        path.join(__dirname, 'client/index.js')
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPluginConfig.extract({
                use: [{
                    loader: "css-loader"
                }]
            })
        }, {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            use: 'url-loader'
        }, {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.jsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            use: 'react-hot-loader/webpack',
            exclude: /node_modules/
        }],
    },
    plugins: [HtmlWebpackPluginConfig, HotModuleReplacementPluginConfig, VendorCommonsChunkPluginConfig, RuntimeBuildCodeCommonsChunkPluginConfig, ExtractTextPluginConfig, NamedModulesPluginConfig]
};