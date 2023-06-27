const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema(
  {
    postCategory: {
      type: String,
      required: [true, "Post category not found"],
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
    image: {
      type: [String],
      required: true,
      validate: {
        validator: function (value) {
          return value.length === 4;
        },
        message: "Image array must contain exactly 4 images",
      },
    },
    caption: {
      type: String,
      required: true,
    },
    noOfItem: {
      type: Number,
      required: true,
    },
    mealType: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    expiredTime: {
      type: Date,
      required: false,
    },
    order: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Posts = mongoose.model("Posts", postsSchema);

module.exports = Posts;
