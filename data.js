const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    name: String,
    phoneNumber: Number,
    // date: Date, TODO
    timeSlot: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);