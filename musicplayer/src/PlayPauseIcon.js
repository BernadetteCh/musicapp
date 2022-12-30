import React, { useState } from "react";
import "../src/AudioPlayer/AudioPlayer.css";

const PlayPauseIcon = ({ sameRender, state }) => {
  const [playing, setPlaying] = useState(state);
  const playPause = () => {
    sameRender(playing);
  };

  if (state === false) {
    return (
      <i className="fa-solid fa-circle-play play-icon" onClick={playPause}></i>
    );
  } else {
    return (
      <div>
        <i className="fa-solid fa-pause pause-icon" onClick={playPause}></i>
      </div>
    );
  }
};

export default PlayPauseIcon;
