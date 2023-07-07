require("dotenv").config();
const express = require("express");
const app = express();

// app.use(express.bodyParser());
const { default: mongoose } = require("mongoose");
const { createTour, getAllTours, getTour, getUpdate, getDelete } = require("./controllers/tourControllers");
const MONGO = process.env.DATABASE;
mongoose.connect(MONGO);

app.use(express.json());

const port = process.env.PORT || 8080;
app.get("/", getAllTours);
app.get("/tours/:id", getTour);
app.post("/tours", createTour);
app.patch("/tours/:id", getUpdate);
app.delete("/tours/:id", getDelete);
app.all("*", (req, res, next)=>{
  res.status(404).json({
    status:"fail",
    message: "page not found"
  })
})

app.use((err, req, res, next)=>{
  err.statusCode= err.statusCode || 4000;
})
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
