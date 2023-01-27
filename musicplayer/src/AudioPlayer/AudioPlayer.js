import React, { useEffect, useRef, useState } from "react";
import PlayerPauseIcon from "../PlayPauseIcon";
import BackwardStepIcon from "../Icons/Backward-step.png";
import ForwardStepIcon from "../Icons/Forward-step.png";
import "./AudioPlayer.css";

const fetchNextTrackWithNewSongId = async (
  audioElem,
  previousOrNextSongId,
  setPreviousOrNextSongId,
  setMusic
) => {
  const response = await fetch(
    `http://localhost:8080/api/next/${previousOrNextSongId}`
  );
  const data = await response.json();
  if (response.status == 200) {
    audioElem.current.pause();
    audioElem.current = new Audio(data.nextTrack[0].file);
    setPreviousOrNextSongId(
      data.nextTrack[0]._id,
      getData(data.nextTrack[0]._id, setMusic)
    );
  } else {
    console.log("No next song");
  }
};
const fetchNextTrack = async (
  audioElem,
  setMusic,
  songId,
  setPreviousOrNextSongId
) => {
  const response = await fetch(`http://localhost:8080/api/next/${songId}`);
  const data = await response.json();
  if (response.status === 200) {
    audioElem.current.pause();
    audioElem.current = new Audio(data.nextTrack[0].file);
    setMusic(
      data.nextTrack[0].file,
      setPreviousOrNextSongId(data.nextTrack[0]._id)
    );
  } else {
    console.log("No next track");
  }
};
const fetchPreviousTrackWithNewSongId = async (
  audioElem,
  previousOrNextSongId,
  setPreviousOrNextSongId,
  setMusic
) => {
  const response = await fetch(
    `http://localhost:8080/api/previous/${previousOrNextSongId}`
  );
  const data = await response.json();
  if (response.status === 200) {
    audioElem.current.pause();
    audioElem.current = new Audio(data.previousTrack[0].file);
    setPreviousOrNextSongId(
      data.previousTrack[0]._id,
      getData(data.previousTrack[0]._id, setMusic)
    );
  } else {
    console.log("No previous track");
  }
};
const fetchPreviousTrack = async (
  audioElem,
  songId,
  setMusic,
  setPreviousOrNextSongId
) => {
  const response = await fetch(`http://localhost:8080/api/previous/${songId}`);
  const data = await response.json();
  if (response.status === 200) {
    audioElem.current.pause();
    audioElem.current = new Audio(data.previousTrack[0].file);
    setMusic(
      data.previousTrack[0].file,
      setPreviousOrNextSongId(data.previousTrack[0]._id)
    );
  } else {
    console.log("No previous song");
  }
};
const getData = async (songId, dataSetter) => {
  const response = await fetch(`http://localhost:8080/api/${songId}`);
  const data = await response.json();
  dataSetter(data.song.file);
};

const AudioPlayer = ({ sameRender, playorpause, songId }) => {
  const [music, setMusic] = useState("");
  const [previousOrNextSongId, setPreviousOrNextSongId] = useState("");
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
    if (previousOrNextSongId === "") {
      await fetchPreviousTrack(
        audioElem,
        songId,
        setMusic,
        setPreviousOrNextSongId
      );
    } else {
      await fetchPreviousTrackWithNewSongId(
        audioElem,
        previousOrNextSongId,
        setPreviousOrNextSongId,
        setMusic
      );
    }
  };

  const fetchNextSong = async () => {
    if (previousOrNextSongId === "") {
      await fetchNextTrack(
        audioElem,
        setMusic,
        songId,
        setPreviousOrNextSongId
      );
    } else {
      await fetchNextTrackWithNewSongId(
        audioElem,
        previousOrNextSongId,
        setPreviousOrNextSongId,
        setMusic
      );
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

        <div
          className="seek_bar"
          style={{
            widht: `${music.progress + "%"}`,
          }}
        ></div>
      </div>
    );
  }
};

export default AudioPlayer;
