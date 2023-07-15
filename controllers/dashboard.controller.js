const Community = require("../models/Community");
const Posts = require("../models/Posts");

const User = require("../models/User");

exports.getAllCount = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const posts = await Posts.countDocuments();
    const community = await Community.countDocuments();
    const donor = await User.countDocuments({ role: "donor" });
    const needy = await User.countDocuments({ role: "needy" });
    const transporter = await User.countDocuments({ role: "transporter" });
    res
      .status(200)
      .json({ users, posts, community, donor, needy, transporter });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
