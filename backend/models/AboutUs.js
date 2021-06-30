const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AboutUsSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    dateRange: {
      type: String,
      required: true,
    },
    conferenceStart: {
      type: String,
      required: true,
    },
    conferenceEnd: {
      type: String,
      required: true,
    },
    conferenceWebsite: {
      type: String,
      required: true,
    },
    organizerPhone: {
      type: String,
      required: true,
    },
    organizerEmail: {
      type: String,
      required: true,
    },
    organizerWebsite: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const About_Us_Schema = mongoose.model("About_Us_Schema", AboutUsSchema)
module.exports = About_Us_Schema
