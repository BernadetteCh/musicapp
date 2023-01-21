import React, { useEffect, useRef, useState } from "react";
// import { Base64 } from "js-base64";
import PlayerPauseIcon from "../PlayPauseIcon";
import BackwardStepIcon from "../Icons/Backward-step.png";
import ForwardStepIcon from "../Icons/Forward-step.png";
import "./AudioPlayer.css";

const getData = async (songId, dataSetter) => {
  const response = await fetch(`http://localhost:8080/api/${songId}`);
  const data = await response.json();
  dataSetter(data.song.file);
};
const AudioPlayer = ({ sameRender, playorpause, songId }) => {
  console.log(songId);
  console.log(playorpause);

  const [music, setMusic] = useState("");
  const [playSong, setPlaySong] = useState();
  const audioElem = useRef();

  useEffect(() => {
    getData(songId, setMusic);
  }, [songId]);

  const playPause = (boolean) => {
    sameRender(boolean);
  };
  // playPause();
  console.log(playorpause);
  return (
    <div className="audioplayer-container">
      <img
        src={BackwardStepIcon}
        alt="backward-step-icon"
        className="track-back-icon"
      ></img>
      <PlayerPauseIcon sameRender={playPause} state={playorpause} />
      <img
        src={ForwardStepIcon}
        className="track-forward-icon"
        alt="track-forward-icon"
      ></img>
    </div>
  );
};

export default AudioPlayer;
