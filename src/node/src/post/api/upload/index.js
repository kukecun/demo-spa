const multer  = require('multer');
const path 		= require("path");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(Config.rootProject, "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+"-"+file.originalname);
  }
});

const upload = multer({ dest: path.join(Config.rootProject, "uploads/"), storage: storage  });

module.exports.start = function(app) {

  let cpUpload = upload.fields([{ name: 'file', maxCount: 10 }]);
  
	app.post("/api/upload/file", cpUpload, function(req, res){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>")
    console.log(req.files)
		res.json(req.files);
	});
}