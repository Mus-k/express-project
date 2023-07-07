const fs = require("fs");
require("dotenv").config();
// app.use(express.bodyParser());
const { default: mongoose } = require("mongoose");
const Tour = require("./../models/tourModels");

const MONGO = process.env.DATABASE;
mongoose.connect(MONGO);
const tours = JSON.parse(fs.readFileSync("tours-simple.json", "utf-8"));

const importData = async () => {
  try {
    await Tour.create(tours);

    console.log("Data successfully loaded");
  } catch (err) {
    console.log(err);
  }
};
