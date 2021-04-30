const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

const db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  });

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  
  db.on("error", error => {
    console.log("Database Error:", error);
  });

app.get("/", (req, res) => {
  res.send(index.html);
});