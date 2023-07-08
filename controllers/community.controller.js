const Community = require("../models/Community");

exports.createPost = async (req, res) => {
  try {
    const community = await Community.create(req.body);
    if (community) {
      res.status(201).json({
        status: "success",
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
exports.getAll = async (req, res) => {
  try {
    const community = await Community.find({});
    if (community) {
      res.status(201).json({
        status: "success",
        data: community,
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
exports.delete = async (req, res) => {
  try {
    const community = await Community.deleteMany({});
    if (community) {
      res.status(202).json({
        status: "success",
        data: community,
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
