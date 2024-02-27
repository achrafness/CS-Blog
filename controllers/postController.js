const Post = require("../models/Post");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const getAllPosts = async (res, req) => {
  const post = await Post.find({});
  res.status(StatusCodes.OK).json({ count: post.length, post });
};
const getSinglePost = async (res, req) => {
  const postId = req.params.id;
  const post = await Post.find({ _id: postId });
  res.status(StatusCodes.OK).json({
    post
  })
};
const createPost = async (res, req) => {
  const { title, content, category  } = req.body;
  author = req.user.userId 
  const post = await Post.create({
    title,
    category,
    content,
    author
  })
  res.status(StatusCodes.Ok).json(post)
};
const updatePost = async (res, req) => {
  res.send("update post");
};
const deletePost = async (res, req) => {
  res.send("delete post");
};
const getCommentsPost = async (res, req) => {
  res.send("getCommentsPost");
};

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
  getCommentsPost,
};
