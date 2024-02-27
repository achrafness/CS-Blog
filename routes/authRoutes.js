const express = require("express")
const router = express.Router();

const  {
  register,
  verifyEmail,
  login,
  forgotPassword,
  resetPassword,
  logout,
} = require("../controllers/authController")

router
  .post("/register", register)
  .post("/login", login)
  .delete("/logout", logout)
  .post("/verify-email", verifyEmail)
  .post("/forgot-password", forgotPassword)
  .post("/reset-password", resetPassword);

module.exports = router;
