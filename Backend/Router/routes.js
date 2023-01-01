const express = require("express");
const router = express.Router();
const Music = require("../Schemas/MusicSchema");

router.get("/", async (req, res) => {
  res.setHeader("Content-Type", "audio/mpeg");
  const data = await Music.find({ title: { $exists: true } });
  res.send(data);
});

module.exports = router;
