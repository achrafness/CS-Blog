const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const {
  attachCookiesToResponse,
  attachSingleCookieToResponse,
  createTokenUser,
  sendVerificationEmail,
  sendResetPasswordEmail,
  hashString,
} = require("../utils");

const register = async (req, res) => {
  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email already exists");
  }
  const { email, name, userName, password } = req.body;

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? "admin" : "user";

  const user = await User.create({ email, name, userName, password , role });

  attachSingleCookieToResponse({res,user})
  res.status(StatusCodes.OK).json({user})
};
const verifyEmail = async (req, res) => {
  res.send("verifyEmail");
};
const login = async (req, res) => {
  res.send("login");
};
const forgotPassword = async (req, res) => {
  res.send("forgotPassword");
};
const resetPassword = async (req, res) => {
  res.send("resetPassword");
};
const logout = async (req, res) => {
  res.send("logout");
};

module.exports = {
  register,
  verifyEmail,
  login,
  forgotPassword,
  resetPassword,
  logout,
};
