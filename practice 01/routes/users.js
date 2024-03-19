const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practiceDataAssociation")

const user = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

module.exports = mongoose.model("User", user);

