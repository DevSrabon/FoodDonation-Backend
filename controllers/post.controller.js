const Posts = require("../models/Posts");
const { updateOne } = require("../models/User");

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
    const update = await updateOne(req.body);

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
