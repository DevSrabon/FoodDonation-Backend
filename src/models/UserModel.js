const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email is already exits"],
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: [true, "Phone is already exits"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
// Add additional fields for updating the user
userSchema.add({
  role: {
    type: String,
    enum: ["admin", "needy", "donner", "Transporter"],
    default: "needy",
  },
  subRole: String,
});
const User = mongoose.model("User", userSchema);
module.exports = User;
