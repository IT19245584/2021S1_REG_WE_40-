const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ImportantDatesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    submitDate: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
    description: {
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

const Important_Dates_Schema = mongoose.model("Important_Dates_Schema", ImportantDatesSchema)
module.exports = Important_Dates_Schema
