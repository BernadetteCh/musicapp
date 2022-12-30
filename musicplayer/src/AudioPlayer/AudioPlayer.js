import React, { useState, useEffect, useRef } from "react";
import "./AudioPlayer.css";
import Kaleo from "../Kaleo - I walk on Water.mp3";

const AudioPlayer = () => {
  const [play, setPlay] = useState(false);
  const audioElem = useRef();

  useEffect(() => {
    if (play) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [play]);
  const playPause = () => {
    setPlay((play) => !play);
  };

  if (play === false) {
    return (
      <div className="audioplayer-container">
        <figure>
          <audio src={Kaleo} ref={audioElem}></audio>
          <i className="fa-sharp fa-solid fa-backward-step track-back-icon"></i>
          <i
            className="fa-solid fa-circle-play play-icon"
            onClick={playPause}
          ></i>
          <i className="fa-sharp fa-solid fa-forward-step track-forward-icon"></i>
        </figure>
      </div>
    );
  } else {
    return (
      <div className="audioplayer-container">
        <figure>
          <audio src={Kaleo} ref={audioElem}></audio>
          <i className="fa-sharp fa-solid fa-backward-step track-back-icon"></i>
          <i className="fa-solid fa-pause pause-icon" onClick={playPause}></i>
          <i className="fa-sharp fa-solid fa-forward-step track-forward-icon"></i>
        </figure>
      </div>
    );
  }
};

export default AudioPlayer;
