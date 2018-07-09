var path    = require("path"),
    env     = require("./env"),
    deploy  = require("./deploy"),
    time    = new Date().getTime();

global.Config = {

	// 项目名
	nameProject: "webapp",

	version: "1.00",

	time: time,

	// web服务
	webServer: deploy.ip.webServer[env.deploy],

	// 项目根目录
	rootProject: deploy.path.rootProject(env.deploy),

	// 静态文件根目录
	rootStartProject: function () {
		return path.join(this.rootProject, "webapp");
	},

	// node服务器
	nodeServer: function(){
		return {
			host: deploy.ip.node[env.deploy].host,
			port: deploy.ip.node[env.deploy].port,
			portal: deploy.ip.node[env.deploy].portal
		}
	},

	// webview环境
	dist: deploy.dist(env.deploy),
}
