const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment",CommentSchema)