const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

//MongoDB database
const dbRoute =
  "mongodb+srv://torianharris:<password>@rzv-eyani.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// connection check
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// logging
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// get method
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// update method
router.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// delete method
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// post method
router.post("/putData", (req, res) => {
  let data = new Data();

  const { name, phoneNumber, timeSlot, date } = req.body;

// simple validation
  if (!name || !phoneNumber || !timeSlot || !date) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.name = name;
  data.phoneNumber = phoneNumber;
  data.timeSlot = timeSlot;
  data.date = date;

  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

app.use("/api", router);

// launch backend
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
