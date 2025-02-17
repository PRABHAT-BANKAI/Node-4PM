const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");
const upload = "/uploads";
const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  hobbies: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", upload));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

userSchema.statics.imageUpload = upload;
userSchema.statics.multerImage = multer({ storage: storage }).single("image");

const userModel = mongoose.model("vinitUser", userSchema);

module.exports = userModel;
