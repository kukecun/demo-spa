const regexp = require("m.regexp");

module.exports.start = function(app, config) {

	let filterGet = regexp.filterGet;

	app.use("/", function(req, res, next){

		if(filterGet.test(req.url)) {

			next();

		} else {

			res.render('views/index', {"G": config.G}, function(err, html) {
				res.send(html);
			});
		}
	});
	
	// app.get("/", function(req, res){
	// 	res.render('views/index', {"G": config.G}, function(err, html) {
	// 		res.send(html);
	// 	}); 
	// });
}