const Post = require("../models/Post");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const Comment = require("../models/Comment");

const getAllComments = async (req, res) => {
  const comments = await Comment.find({});
  res.status(StatusCodes.OK).json({ count: comments.length, comments });
};

const getSingleComment = async (req, res) => {
  const CommentId = req.params.id;
  const comment = await Comment.findOne({ _id: CommentId });
  if (!comment) {
    throw new CustomError.NotFoundError(`No comment with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ comment });
};

const createComment = async (req, res) => {
  const { postId } = req.body;
  const isValidPost = await Post.findOne({ _id: postId });
  if (!isValidPost) {
    throw new CustomError.NotFoundError(`No post with id : ${postId}`);
  }
  
  const comment = await Comment.create({
    user: req.user.userId,
    post: postId,
  });
  res.status(StatusCodes.CREATED).json({ comment });
};

const updateComment = async (req, res) => {
  res.send("updateComment");
};

const deleteComment = async (req, res) => {
  res.send("deleteComment");
};

module.exports = {
  getSingleComment,
  getAllComments,
  createComment,
  deleteComment,
  updateComment,
};
