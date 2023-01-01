const express = require("express");
const router = express.Router();
const Music = require("../Schemas/MusicSchema");

router.get("/", async (req, res) => {
  const data = await Music.find();
  res.json(data);
});

module.exports = router;
