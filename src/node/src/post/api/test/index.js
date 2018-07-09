
module.exports.start = function(app) {

	app.post("/api/test", function(req, res){
		res.json(req.body);
	});
}