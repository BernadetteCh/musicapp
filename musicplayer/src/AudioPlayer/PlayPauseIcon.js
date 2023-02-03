import React, { useState } from "react";
import "../AudioPlayer/AudioPlayer.css";
import PlayIcon from "../Icons/Play.png";
import PauseIcon from "../Icons/Pause.png";

const PlayPauseIcon = ({ sameRender, state }) => {
  const [playing, setPlaying] = useState(false);
  const playPause = (boolean) => {
    console.log(boolean);
    // setPlaying(boolean, sameRender(boolean));
    sameRender(boolean);
  };

  if (state) {
    return (
      <div>
        <img
          src={PauseIcon}
          className="pause-icon"
          // onClick={() => playPause((state) => !state)}
          onClick={() => {
            playPause(!state);
          }}
          alt="pause-icon"
        ></img>
      </div>
      // <img
      //   src={PlayIcon}
      //   alt="playIcon"
      //   className="play-icon"
      //   onClick={() => playPause((state) => !state)}
      // ></img>
    );
  } else {
    return (
      <img
        src={PlayIcon}
        alt="playIcon"
        className="play-icon"
        // onClick={() => playPause((state) => !state)}
        onClick={() => {
          playPause(!state);
        }}
      ></img>
      // <div>
      //   <img
      //     src={PauseIcon}
      //     className="pause-icon"
      //     onClick={() => playPause((state) => !state)}
      //     alt="pause-icon"
      //   ></img>
      // </div>
    );
  }
};

export default PlayPauseIcon;
