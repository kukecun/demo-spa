
const menu = require("./menu");
const upload = require("./upload");

module.exports.start = function(app) {

	menu.start(app);

	upload.start(app);
}