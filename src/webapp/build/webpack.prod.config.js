const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const fs = require('fs');
const path = require('path');
const package = require('../package.json');

module.exports = merge(webpackBaseConfig, {
	output: {
		publicPath: '/dist/prod/',
		path: path.resolve(__dirname, '../dist/prod'),
		filename: '[name].js',
		chunkFilename: '[name].chunk.js'
	},
	plugins: [
		new cleanWebpackPlugin(['dist/prod/*'], {
			root: __dirname, //根目录
			verbose: false, //开启在控制台输出信息
			dry: true //启用删除文件
		}),
		new ExtractTextPlugin({
				filename: '[name].css',
				allChunks: true
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
	]
});