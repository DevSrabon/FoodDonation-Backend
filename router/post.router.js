const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
const verifyToken = require("../middleware/verifyToken");
const authorization = require("../middleware/authorization");

router.post("/getPost", postController.getAllPost);
router.get("/createPost", postController.createPost);
router.patch("/updatePost", postController.updatePost);

module.exports = router;
