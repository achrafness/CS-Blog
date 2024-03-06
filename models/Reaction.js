const mongoose = require("mongoose");

const ReactionSchema = mongoose.Schema(
  {
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
    status: {
      type: String,
      enum: ["up", "down"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reaction", ReactionSchema);
