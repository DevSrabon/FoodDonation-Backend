const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middleware/verifyToken");
const authorization = require("../middleware/authorization");

router
  .route("/")
  .get(userController.getUser)
  // .get(userController.getAllUser)
  .post(userController.createUser);
router.get("/all", userController.getAllUser);
// update user role
router.patch("/update-role", userController.updateUser);
router.delete(
  "/:id",
  verifyToken,
  authorization("admin"),
  userController.deleteUser
);
module.exports = router;
