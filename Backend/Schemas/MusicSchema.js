const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  artist: String,
  title: String,
});

module.exports = mongoose.model("songs", musicSchema);
