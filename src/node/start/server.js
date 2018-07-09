const express 		= require("express"),
			router 			= express.Router(),
			app 				= express(),
			path 				= require("path"),
			serverBase	= require("m.server");
		
module.exports.start = function(){

	// 基础配置启动
	serverBase.start(app, express, router);
	
	// 启动服务
	app.listen(Config.nodeServer().port, function(){
		console.log("服务"+Config.nodeServer().portal+"启动！");
	});
}