const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
const verifyToken = require("../middleware/verifyToken");
const authorization = require("../middleware/authorization");

router.post("/", postController.createPost);
router.post("/update", postController.updatePost);

module.exports = router;
