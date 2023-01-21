import React, { useState } from "react";
import "../src/AudioPlayer/AudioPlayer.css";
import PlayIcon from "../src/Icons/Play.png";
import PauseIcon from "../src/Icons/Pause.png";

const PlayPauseIcon = ({ sameRender, state }) => {
  const [playing, setPlaying] = useState(state);
  const playPause = (boolean) => {
    console.log(state);
    console.log(boolean);
    setPlaying(boolean, sameRender(boolean));
    // sameRender(boolean);
  };

  if (playing) {
    return (
      <img
        src={PlayIcon}
        alt="playIcon"
        className="play-icon"
        onClick={() => playPause((state) => !state)}
      ></img>
    );
  } else {
    return (
      <div>
        <img
          src={PauseIcon}
          className="pause-icon"
          onClick={() => playPause((state) => !state)}
          alt="pause-icon"
        ></img>
      </div>
    );
  }
};

export default PlayPauseIcon;
