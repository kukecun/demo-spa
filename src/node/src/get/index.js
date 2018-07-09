// 控制器
const CTRL = require("./control");

// 页面
const PAGE = require("./page");

module.exports.start = function(app, router) {

	// 控制器
	CTRL.get(app, router);
	
	// 页面
	PAGE.start(app);
}