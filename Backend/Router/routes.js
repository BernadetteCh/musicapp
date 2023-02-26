const express = require("express");
const router = express.Router();
// const fileUpload = require("express-fileupload");
const Music = require("../Schemas/MusicSchema");

router.get("/", async (req, res) => {
  const data = await Music.find({ title: { $exists: true } });
  res.send(data);
});

router.post("/newSong", async (req, res) => {
  let newMusic = new Music({
    title: req.body.title,
    artist: req.body.artist,
    playlist: req.body.playlist,
    file: req.body.file,
    favorite: req.body.favorite,
  });
  try {
    await newMusic.save();
    res.json({ status: "OK" });
  } catch (e) {
    res.json({ error: e });
  }
});

router.post("/filter", async (req, res) => {
  await Music.find({
    $or: [
      { title: { $regex: req.body.userInput } },
      { artist: { $regex: req.body.userInput } },
    ],
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.status(400).json({ error }));
});

router.get("/:songId", async (req, res) => {
  const song = await Music.findById(req.params.songId);
  res.status(200).json({ song });
});

router.get("/previous/:songId", async (req, res) => {
  const previousTrack = await Music.find({ _id: { $lt: req.params.songId } })
    .sort({ _id: -1 })
    .limit(1);
  //console.log(previousTrack); []
  res.status(200).json({ previousTrack });
});

router.get("/next/:songId", async (req, res) => {
  console.log("Next");
  const nextTrack = await Music.find({ _id: { $gt: req.params.songId } })
    .sort({
      _id: 1,
    })
    .limit(1);
  res.status(200).json({ nextTrack });
});

module.exports = router;
