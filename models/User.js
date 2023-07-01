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
      unique: false, //we will change it later
      trim: true,
      // validate: {
      //   validator: function (phone) {
      //     return this.constructor
      //       .findOne({ phone })
      //       .exec()
      //       .then((user) => {
      //         if (user) {
      //           return false;
      //         }
      //         return true;
      //       });
      //   },
      //   message: "Phone number is already taken",
      // },
    },
    role: {
      type: String,
      enum: ["admin", "needy", "donor", "transporter"],
    },
    subRole: {
      type: String,

      required: false,
    },
    categoryName: {
      type: String,
      required: false,
    },
    image: {
      type: [String],
      required: false,
    },
    location: {
      latitude: { type: Number, required: false },
      longitude: { type: Number, required: false },
    },
    fssaiLicense: {
      type: String,
      unique: true,
      required: false,
    },
    panNumber: {
      type: Number,
      unique: true,
      required: false,
    },
    photo: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      unique: true,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("UserCollection", userSchema);

module.exports = User;
