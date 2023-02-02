const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  title: "String",
  artist: "String",
  playlist: "String",
  file: "String",
  favorite: "Boolean",
});

module.exports = mongoose.model("songs", musicSchema);
