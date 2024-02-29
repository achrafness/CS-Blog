const Post = require("../models/Post");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const getAllPosts = async (req, res) => {
  const post = await Post.find({});
  res.status(StatusCodes.OK).json({ count: post.length, post });
};
const getSinglePost = async (req, res) => {
  const postId = req.params.id;
  if (!postId) {
    throw new CustomError.BadRequestError(`No post with id ${id}`);
  }
  const post = await Post.find({ _id: postId });
  res.status(StatusCodes.OK).json({
    post
  });
};
const createPost = async (req, res) => {
  const { title, content, category } = req.body;
  if(!title , !content , !category){
    throw new CustomError.BadRequestError("Please provide all the information");
  }
  author = req.user.userId;
  const post = await Post.create({
    title,
    category,
    content,
    author,
  });
  res.status(StatusCodes.OK).json(post);
};
const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { title, content, category } = req.body;
  let update = {};
  if(title){
    update.title = title;
  }
  if(content){
    update.content = content;
  }
  if(category){
    update.category = category;
  }
  const post = await Post.findOneAndUpdate(
    { _id: postId },
    update,
    { new: true, runValidators: true }

  );
    if (!post) {
      throw new CustomError.BadRequestError(`No post with id ${id}`);
    }
  res.status(StatusCodes.OK).json(post);
};
const deletePost = async (req, res) => {
    const postId = req.params.id;
    const post = await Post.findOne({ _id: postId });
    if (!post) {
      throw new CustomError.BadRequestError(`No post with id ${id}`);
    }
    await post.remove();
    res.status(StatusCodes.OK).json({msg: "post deleted"});
};
const getCommentsPost = async (req, res) => {
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
