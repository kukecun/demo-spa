const path = require('path');
const os = require('os');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HappyPack = require('happypack');
const manifest = require('./dll/vendor-manifest.json');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

let resolve = (dir) => (path.join(__dirname, dir));

module.exports = {
	entry: {
		main: '@/main',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						less: ExtractTextPlugin.extract({
							use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
							fallback: 'vue-style-loader'
						}),
						css: ExtractTextPlugin.extract({
							use: ['css-loader', 'autoprefixer-loader'],
							fallback: 'vue-style-loader'
						}),
						scss: ExtractTextPlugin.extract({
							use: ['css-loader', 'autoprefixer-loader', 'sass-loader'],
							fallback: 'vue-style-loader'
						})
					}
				}
			},
			{
				test: /iview\/.*?js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.js[x]?$/,
				include: [resolve('src')],
				exclude: /node_modules/,
				loader: 'happypack/loader?id=happybabel'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader?minimize', 'autoprefixer-loader'],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					use: ['css-hot-loader', 'autoprefixer-loader', 'less-loader'],
					fallback: 'style-loader'
				}),
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: ['css-hot-loader', 'autoprefixer-loader', 'sass-loader'],
					fallback: 'style-loader'
				}),
			},
			{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				loader: 'url-loader?limit=1024'
			},
			{
				test: /\.(html|tpl)$/,
				loader: 'html-loader'
			}
		]
	},
	plugins: [
		new HappyPack({
			id: 'happybabel',
			loaders: ['babel-loader'],
			threadPool: happyThreadPool,
			verbose: true
		}),
		new HappyPack({
			id: 'scss',
			loaders: [ 'style-loader', 'css-loader', 'sass-loader' ], 
			threadPool: happyThreadPool,
			verbose: true
		}),
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest,
		})
	],
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			'vue': 'vue/dist/vue.esm.js',
			'@': resolve('../src')
		}
	}
};