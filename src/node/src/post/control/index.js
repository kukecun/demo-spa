module.exports = {

	// post全局处理
	post: function(app, router){

    // app.all('*', function (req, res, next) {
    // 	res.header("Access-Control-Allow-Origin", "*");
    // 	res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With");
    // 	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // 	res.header("X-Powered-By", ' 3.2.1')
    // 	res.header("Content-Type", "application/json;charset=utf-8");
    // 	next();
    // });

		router.post(/^\/*/, function(req, res, next){

			res.setTimeout(1000 * 60 * 5, function(){
        res.json({"code": "-1", "message": "响应超时"});
        return;
      });

			next();
		});
	}
}