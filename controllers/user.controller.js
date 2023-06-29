const User = require("../models/User");
const { updateUserServices } = require("../services/users.service");
const { generateToken } = require("../utils/token");

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    if (users) {
      res.status(200).json({
        status: "success",
        data: users,
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "User not found",
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

exports.getToken = async (req, res) => {
  try {
    const { email } = req.query;

    const user = await User.findOne({ email });
    if (user) {
      const jwtToken = generateToken(user);
      res.status(200).json({
        status: "success",
        jwtToken,
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "User not found",
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

exports.getUser = async (req, res) => {
  try {
    const { email } = req.query;

    const user = await User.findOne({ email });
    if (user) {
      res.status(200).json({
        status: "success",
        data: user,
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "User not found",
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

exports.createUser = async (req, res, next) => {
  try {
    const body = req.body;
    const user = await User.create(body);

    if (user) {
      res.status(201).json({
        status: "success",
        data: user,
      });
    } else {
      throw new Error("User creation failed"); // Throw an error if user creation fails
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await updateUserServices(req);

    if (updatedUser) {
      res.status(200).json({
        status: "success",
        data: updatedUser,
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "error",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.updateBio = async (req, res) => {
  try {
    const updatedUser = await updateUserServices(req);

    if (updatedUser) {
      const accessToken = generateToken(updatedUser);
      res.status(200).json({
        status: "success",
        data: updatedUser,
        accessToken,
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "User not found",
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

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted", user: deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
