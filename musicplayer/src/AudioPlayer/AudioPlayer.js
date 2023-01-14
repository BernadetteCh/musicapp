import React, { useEffect, useRef, useState } from "react";
import PlayerPauseIcon from "../PlayPauseIcon";
import BackwardStepIcon from "../Icons/Backward-step.png";
import ForwardStepIcon from "../Icons/Forward-step.png";
import "./AudioPlayer.css";
import Kaleo from "../Kaleo - I walk on Water.mp3";
import Queen from "../Bohemian - Rhapsody .mp3";

const AudioPlayer = ({ sameRender, state }) => {
  const [music, setMusic] = useState();
  const audioElem = useRef();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:8080/api/");
      const data = await response.json();
      setMusic(data[0].title);
    };
    getData();
  }, []);

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
        {/* {music === undefined ? (
          console.log("no music")
        ) : (
          <audio src={music} ref={audioElem}></audio>
        )} */}
        <audio src={Kaleo} ref={audioElem}>
          {/* <source src={music} type="audio/mp3" /> */}
        </audio>
        <img
          src={BackwardStepIcon}
          alt="backward-step-icon"
          className="track-back-icon"
        ></img>
        <PlayerPauseIcon sameRender={playPause} state={state} />
        <img
          src={ForwardStepIcon}
          className="track-forward-icon"
          alt="track-forward-icon"
        ></img>
      </figure>
    </div>
  );
};

export default AudioPlayer;
