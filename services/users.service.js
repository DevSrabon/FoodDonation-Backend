const User = require("../models/User");

exports.updateUserServices = async (req) => {
  const { email, ...rest } = req.body;

  const updatedUser = await User.findOneAndUpdate(
    { email },
    {
      $set: rest,
    },
    { runValidators: true }
  );
  return updatedUser;
};