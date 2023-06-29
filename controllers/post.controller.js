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
    const { _id, ...rest } = req.body;
    const update = await Posts.findByIdAndUpdate(
      { _id },
      { $set: rest },
      { new: true }
    );

    if (update) {
      res.status(201).json({
        status: "success",
        data: update,
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
