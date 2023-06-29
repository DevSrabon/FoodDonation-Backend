const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema(
  {
    postCategoryName: {
      type: String,
      required: [true, "Post category not found"],
    },
    userName: {
      type: String,
    },
    email: {
      type: String,
    },
    location: {
      latitude: { type: Number },
      longitude: { type: Number },
    },
    image: {
      type: [String],

      validate: {
        validator: function (value) {
          return value.length === 4;
        },
        message: "Image array must contain exactly 4 images",
      },
    },
    caption: {
      type: String,
    },
    noOfItem: {
      type: Number,
    },
    items: [
      {
        id: {
          type: Number,
        },
        qType: {
          type: String,
        },
        value: {
          type: Number,
        },
      },
    ],
    quantitiesDetail: [
      {
        id: {
          type: Number,
        },
        order: {
          type: String,
        },
        quantity: {
          type: String,
        },
        quantityType: {
          type: String,
        },
      },
    ],
    expiredTime: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Posts = mongoose.model("PostsCollection", postsSchema);

module.exports = Posts;
