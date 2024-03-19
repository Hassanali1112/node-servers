const mongoose = require('mongoose');

const post = new mongoose.Schema({
  posttext: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Post", post);