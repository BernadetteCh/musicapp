const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const Music = require("../Schemas/MusicSchema");

router.get("/", async (req, res) => {
  //res.setHeader("Content-Type", "audio/mpeg");
  const data = await Music.find({ title: { $exists: true } });
  res.send(data);
});

// router.post(
//   "/newSong",
//   fileUpload({ createParentPath: true }),
//   async (req, res) => {
//     console.log("Hallo");

//     console.log(req.body);
//     console.log(req.files);

//     res.json({ status: "OK" });
//   }
// );

router.post("/newSong", async (req, res) => {
  let newMusic = new Music({
    title: req.body.title,
    artist: req.body.artist,
    playlist: req.body.playlist,
    file: req.body.file,
  });
  try {
    await newMusic.save();
    res.json({ status: "OK" });
  } catch (e) {
    res.json({ error: e });
  }
});
module.exports = router;
