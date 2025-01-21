const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("vinitUser", userSchema);

module.exports = userModel; 
