
const test = require("./test");
const upload = require("./upload");

module.exports.start = function(app) {

	test.start(app);

	upload.start(app);
}