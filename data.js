const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    name: String,
    phoneNumber: Number,
    date: String,
    timeSlot: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);