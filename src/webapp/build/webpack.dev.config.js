const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
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
		new cleanWebpackPlugin(['dist/dev/*.chunk.js', 'dist/dev/*.chunk.js.map'], //匹配删除的文件
		{
			root: __dirname, //根目录
			verbose: true, //开启在控制台输出信息
			dry: false //启用删除文件
		}),
		
		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true
		}),

		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	],
});