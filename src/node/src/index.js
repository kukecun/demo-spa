
const get = require("./get");
const post = require("./post");

module.exports.start = function(app, router) {

  // get 配置
  get.start(app, router);

  // post 配置
  post.start(app, router);
}
