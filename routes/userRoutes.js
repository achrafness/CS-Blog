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

router.route("/").get(getAllUsers);
router.route("/showMe").get(showMe);
router.route("/updateUser").patch(updateUser);
router.route("/updateUserPassword").patch(updateUserPassword);
router.route("/:id").get(getSingleUser);
router.route("/:id/block").post(blockUser);

module.exports = router;
