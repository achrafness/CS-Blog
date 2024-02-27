const mongoose = require("mongoose");

const LikeSchema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post: {
    type: mongoose.Types.ObjectId,
    ref: "Post",
    required: true,
  },
});

module.exports = mongoose.model("Like", LikeSchema);