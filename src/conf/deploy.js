var path 	= require("path");

module.exports = {

	// 服务器配置
	ip: {

		node: {

			"0": {
				host: '127.0.0.1',
				port: 8003,
				portal: 'dev.berth.com:8003'
			},

			"1": {
				host: '10.200.180.78',
				port: 8093,
				portal: 'berth.appdev.carfree.com.cn'
			},

			"2": {
				host: '10.200.180.78',
				port: 8093,
				portal: 'berth.demo.carfree.com.cn'
			},

			"3": {
				host: '10.200.180.78',
				port: 8093,
				portal: 'berth.pre.carfree.com.cn'
			},

			"4": {
				host: '10.200.180.78',
				port: 8093,
				portal: 'berth.appdev.carfree.com.cn'
			},

			"5": {
				host: '127.0.0.1',
				port: 8002,
				portal: 'dev.berth.com:8002'
			},
		},

		// web端请求
		webServer: {
			"0": "http://api.appdev.carfree.com.cn/v1/app/",
			"1": "http://api.demo.carfree.com.cn/v1/app/",
			"2": "https://api.carfree.net/v1/app/",
		},
	},

	// 目录结构
	path: {
		rootProject: function(env) {
			var env = +env >= 1 ? "1" : "0";
			return {
				"0": path.join(__dirname, "../"),
				"1": path.join(__dirname, "../"),
			}[env];
		},
	},

	// webview环境
	dist: function(env) {
		var env = +env >= 1 ? "1" : "0";
		return {
			"0": "dev",
			"1": "prod",
		}[env];
	}
}
