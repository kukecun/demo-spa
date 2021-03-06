const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
const webpackBaseConfig = require('./webpack.base.config.js');

require("../../conf/config.js");

module.exports = merge(webpackBaseConfig, {
	entry: {
		main: ['@/main', hotMiddlewareScript],
	},
	devtool: '#source-map',
	output: {
		publicPath: 'http://'+ Config.nodeServer().portal +'/dist/dev/',
		path: path.resolve(__dirname, '../dist/dev'),
		filename: '[name].js',
		chunkFilename: '[name].chunk.js'
	},
	plugins: [

		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true
		}),

		new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
	],
});