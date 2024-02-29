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
const {
  authenticateUser,
  isValid,
} = require("../middleware/authentication");

router.route("/").get(getAllPosts).post(authenticateUser , isValid , createPost);
router
  .route("/:id")
  .get(getSinglePost)
  .patch(authenticateUser, isValid, updatePost)
  .delete(authenticateUser , isValid ,deletePost);
router.route("/:id/comments").get(getCommentsPost);

module.exports = router;
