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
    if (playorpause == true && music !== "") {
      audioElem.current.play();
    }
    if (playorpause === false) {
      audioElem.current.pause();
    }
  }, [playorpause, music]);

  useEffect(() => {
    if (songId == undefined || playorpause == undefined) {
      console.log("no id yet");
    } else {
      getData(songId, setMusic);
    }
  }, [songId, playorpause]);

  const playPause = (boolean) => {
    sameRender(boolean);
  };

  return (
    <div className="audioplayer-container">
      <figure>
        <audio src={music} ref={audioElem}></audio>
      </figure>
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
