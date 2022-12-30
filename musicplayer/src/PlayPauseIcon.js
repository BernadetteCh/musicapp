import React, { useState, useEffect } from "react";
import "../src/AudioPlayer/AudioPlayer.css";

const PlayPauseIcon = ({ sameRender, state }) => {
  const [playing, setPlaying] = useState(state);
  const [toggle, setToggle] = useState(state);
  const playPause = () => {
    sameRender(playing);
    // setPlaying((playing) => !playing);
    // // togglePlayPause((playing) => !playing);
  };

  //   useEffect(() => {
  //     setToggle(state);
  //   }, [playing]);
  //   console.log(toggle);
  if (state === false) {
    return (
      <i className="fa-solid fa-circle-play play-icon" onClick={playPause}></i>
    );
  } else {
    return <i className="fa-solid fa-pause pause-icon" onClick={playPause}></i>;
  }
};

export default PlayPauseIcon;
