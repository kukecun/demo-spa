var express 							= require("express"),
		router 								= express.Router(),
		app 									= express(),
		path 									= require("path"),
		webpack								= require('webpack'),
		webpackDevMiddleware 	= require('webpack-dev-middleware'),
		webpackDevServer 			= require("webpack-dev-server"),
		webpackHotMiddleware 	= require('webpack-hot-middleware'),
		serverBase						= require(path.join(Config.rootProject, "node/node_modules/m.server")),
		webpackDevConfig 			= require("../build/webpack.dev.config"),
		compiler 							= webpack(webpackDevConfig);
	
module.exports.start = function(){

	// 连接编译器和服务器
	app.use(webpackDevMiddleware(compiler, {
		publicPath: webpackDevConfig.output.publicPath,
		noInfo: true,
		stats: {
			colors: true
		}
	}));

	// 启动热更新
	app.use(webpackHotMiddleware(compiler));

	// 基础配置启动
	serverBase.start(app, express, router);
	
	// 启动服务
	app.listen(Config.nodeServer().port, function(){
		console.log("服务"+Config.nodeServer().portal+"启动！");
	});
}



