const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    imageUrls: {
      type: [String],
      required: true,
    },
    noOfItem: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Community = mongoose.model("CommunityCollection", communitySchema);

module.exports = Community;
