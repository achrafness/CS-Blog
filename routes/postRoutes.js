const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
  getCommentsPost,
} = require("../controllers/postController");

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").get(getSinglePost).post(updatePost).delete(deletePost);
router.route("/:id/comments").get(getCommentsPost);

module.exports = router;
