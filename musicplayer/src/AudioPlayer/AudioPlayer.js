import React, { useEffect, useRef, useState } from "react";
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
  const [music, setMusic] = useState("");
  const [playSong, setPlaySong] = useState();
  const [nextSongId, setNextSongId] = useState("");
  const [previousSongId, setPreviousSongId] = useState("");
  const audioElem = useRef();

  useEffect(() => {
    if (playorpause == true && music !== "") {
      audioElem.current.play();
    }
    if (playorpause == false) {
      audioElem.current.pause();
    }
  }, [playorpause, music]);

  useEffect(() => {
    const fetchMusic = async () => {
      if (songId == undefined || playorpause == undefined) {
        console.log("no id yet");
      } else {
        await getData(songId, setMusic);
      }
    };
    fetchMusic();
  }, [songId, playorpause]);

  const playPause = (boolean) => {
    sameRender(boolean);
  };
  const fetchpreviousSong = async () => {
    if (previousSongId === "") {
      const response = await fetch(
        `http://localhost:8080/api/previous/${songId}`
      );
      const data = await response.json();
      if (response.status === 200) {
        audioElem.current.pause();
        audioElem.current = new Audio(data.previousTrack[0].file);
        setMusic(
          data.previousTrack[0].file,
          setPreviousSongId(data.previousTrack[0]._id)
        );
      } else {
        console.log("No previous song");
      }
    } else {
      const response = await fetch(
        `http://localhost:8080/api/previous/${previousSongId}`
      );
      const data = await response.json();
      if (response.status === 200) {
        audioElem.current.pause();
        audioElem.current = new Audio(data.previousTrack[0].file);
        setPreviousSongId(
          data.previousTrack[0]._id,
          getData(data.previousTrack[0]._id, setMusic)
        );
      } else {
        console.log("No previous track");
      }
    }
  };

  const fetchNextSong = async () => {
    if (previousSongId === "") {
      const response = await fetch(`http://localhost:8080/api/next/${songId}`);
      const data = await response.json();
      if (response.status === 200) {
        audioElem.current.pause();
        audioElem.current = new Audio(data.nextTrack[0].file);
        setMusic(
          data.nextTrack[0].file,
          setPreviousSongId(data.nextTrack[0]._id)
        );
      } else {
        console.log("No next track");
      }
    } else {
      const response = await fetch(
        `http://localhost:8080/api/next/${previousSongId}`
      );
      const data = await response.json();
      if (response.status == 200) {
        audioElem.current.pause();
        audioElem.current = new Audio(data.nextTrack[0].file);
        setPreviousSongId(
          data.nextTrack[0]._id,
          getData(data.nextTrack[0]._id, setMusic)
        );
      } else {
        console.log("No next song");
      }
    }
  };

  if (playorpause === undefined) {
    return (
      <div style={{ color: "white" }}>
        No music selected ,//nothing in localstorage yet?
      </div>
    );
  } else {
    return (
      <div className="audioplayer-container">
        <figure>
          <audio src={music} ref={audioElem}></audio>
        </figure>
        <img
          src={BackwardStepIcon}
          alt="backward-step-icon"
          className="track-back-icon"
          onClick={fetchpreviousSong}
        ></img>
        <PlayerPauseIcon sameRender={playPause} state={playorpause} />
        <img
          src={ForwardStepIcon}
          className="track-forward-icon"
          alt="track-forward-icon"
          onClick={fetchNextSong}
        ></img>
      </div>
    );
  }
};

export default AudioPlayer;
