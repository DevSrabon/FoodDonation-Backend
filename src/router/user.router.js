const express = require("express");
const User = require("../models/userModel");

const users = express.Router();
// create a user
users.post("/", async (req, res, next) => {
  // const {email}=req.body;

  try {
    const body = req.body;
    const { email } = body;
    const userDb = User.findOne({ email });
    console.log(email, userDb);
    if (email === userDb.email)
      return res.status(400).json({
        status: "fail",
        message: "User Already Exits",
        error: error.message,
      });

    const user = await User.create(body);
    res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
});
// get a single user
users.get("/get", async (req, res) => {
  try {
    const { email } = req.body;

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
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

// update user role
users.patch("/update-role", async (req, res) => {
  try {
    const { email, role, subRole } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { role, subRole },
      { new: true }
    );

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
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

module.exports = users;
