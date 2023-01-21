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
const AudioPlayer = ({ sameRender, state, songId }) => {
  console.log(songId);

  const [music, setMusic] = useState("");

  //const audioElem = useRef();
  const audioElem = useRef();
  const songElem = useRef(new Audio(music));

  // useEffect(() => {
  //   console.log("fetchmusic");
  //   const getData = async () => {
  //     const response = await fetch(`http://localhost:8080/api/${songId}`);
  //     const data = await response.json();
  //     setMusic(data.song.file);
  //   };

  //   getData();
  // }, [songId]);

  useEffect(() => {
    console.log(state);
    console.log(music);
    const getData = async () => {
      const response = await fetch(`http://localhost:8080/api/${songId}`);
      const data = await response.json();
      setMusic(data.song.file);
      audioElem.current.play();
    };

    if (state) {
      console.log(music);
      //getData();
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [state, songId]);

  if (state == true && music !== "") {
    audioElem.current.play();
  }

  const playPause = (boolean) => {
    // console.log(state);
    //sameRender(state);

    console.log(state);
    sameRender(state);
  };
  //playPause();

  return (
    <div className="audioplayer-container">
      <figure>
        <audio src={music} ref={audioElem}></audio>
        <img
          src={BackwardStepIcon}
          alt="backward-step-icon"
          className="track-back-icon"
        ></img>
        {/* <PlayerPauseIcon sameRender={playPause} state={playorpause} /> */}
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
