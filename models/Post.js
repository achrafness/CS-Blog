const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please provide hte title"],
      minlength: 3,
      maxlength: 50,
    },
    content: {
      type: String,
      required: [true, "please provide hte title"],
      minlength: 30,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: [true, "Please provide post category"],
      // enum: ["cyber-security", "ai", "data-science"],
    },
    numOfLikes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post",PostSchema)