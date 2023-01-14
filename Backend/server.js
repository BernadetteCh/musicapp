const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// app.use(express.urlencoded({ limit: "900" }));
// app.use(fileUpload());
// app.use(
//   fileUpload({
//     createParentPath: true,
//   })
// );
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
