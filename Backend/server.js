const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

app.use(express.json());
app.use(cors());

require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const db = mongoose.connection;

const main = () => {
  if (!process.env.MONGO_URL) {
    console.log("Error no Mongo Url");
  } else {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database");
  }
};

main();

const musicRouter = require("./Router/routes");

app.use("/api", musicRouter);

app.listen(port);
console.log("http://localhost" + port);
