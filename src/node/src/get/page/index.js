let config = require("m.config");

let home = require("./home");

module.exports.start = function(app){
  home.start(app, config);
}