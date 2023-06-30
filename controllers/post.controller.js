const Posts = require("../models/Posts");

exports.getAllPost = async (req, res) => {
  const { role } = req.query;
  console.log(
    "🚀 ~ file: post.controller.js:5 ~ exports.getAllPost= ~ role:",
    role
  );

  try {
    const posts = await Posts.find({ role: { $ne: role } });
    if (posts) {
      res.status(200).json({
        status: "success",
        data: posts,
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "Post not found",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.createPost = async (req, res) => {
  try {
    const post = await Posts.create(req.body);

    if (post) {
      res.status(201).json({
        status: "success",
        data: post,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { _id, ...rest } = req.body;
    const update = await Posts.findByIdAndUpdate(
      _id,
      { $set: rest },
      { new: true }
    );

    if (update) {
      res.status(201).json({
        status: "success",
        data: update,
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "Post not found",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not updated",
      error: error.message,
    });
  }
};
