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
      unique: true,
      trim: true,
      validate: {
        validator: function (email) {
          return this.constructor
            .findOne({ email })
            .exec()
            .then((user) => {
              if (user) {
                return false;
              }
              return true;
            });
        },
        message: "Email is already taken",
      },
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      validate: {
        validator: function (phone) {
          return this.constructor
            .findOne({ phone })
            .exec()
            .then((user) => {
              if (user) {
                return false;
              }
              return true;
            });
        },
        message: "Phone number is already taken",
      },
    },
    role: {
      type: String,
      enum: ["admin", "needy", "donor", "transporter"],
      default: "needy",
    },
    subRole: String,
    restaurantName: String,
    image: String,
    location: {
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
    },
    fssaiLicense: String,
    panNumber: Number,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
