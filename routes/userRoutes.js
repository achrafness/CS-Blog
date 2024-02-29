const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getSingleUser,
  showMe,
  updateUser,
  updateUserPassword,
  blockUser,
} = require("../controllers/userController");

const {
  authenticateUser,
  authorizePermissions,
  isValid,
} = require("../middleware/authentication");

router.route("/").get(authenticateUser,authorizePermissions("admin"),getAllUsers);
router.route("/showMe").get(authenticateUser,showMe);
router.route("/updateUser").patch(authenticateUser,updateUser);
router.route("/updateUserPassword").patch(authenticateUser,updateUserPassword);
router.route("/:id").get(authenticateUser,getSingleUser);
router.route("/:id/block").post(authenticateUser,authorizePermissions("admin"),blockUser);

module.exports = router;
