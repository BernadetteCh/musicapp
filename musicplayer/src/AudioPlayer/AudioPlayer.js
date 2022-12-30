import React, { useEffect, useRef } from "react";
import PlayerPauseIcon from "../PlayPauseIcon";
import "./AudioPlayer.css";
import Kaleo from "../Kaleo - I walk on Water.mp3";

const AudioPlayer = ({ sameRender, state }) => {
  const audioElem = useRef();

  useEffect(() => {
    if (state) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [state]);
  const playPause = () => {
    sameRender(state);
  };
  return (
    <div className="audioplayer-container">
      <figure>
        <audio src={Kaleo} ref={audioElem}></audio>
        <i className="fa-sharp fa-solid fa-backward-step track-back-icon"></i>
        <PlayerPauseIcon sameRender={playPause} state={state} />
        <i className="fa-sharp fa-solid fa-forward-step track-forward-icon"></i>
      </figure>
    </div>
  );
};

export default AudioPlayer;
