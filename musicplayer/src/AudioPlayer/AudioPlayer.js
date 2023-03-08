import React, { useEffect, useRef, useState } from "react";
import PlayerPauseIcon from "../AudioPlayer/PlayPauseIcon";
import BackwardStepIcon from "../Icons/Backward-step.png";
import ForwardStepIcon from "../Icons/Forward-step.png";
import "../AudioPlayer/AudioPlayer";

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
  if (response.status === 200) {
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
//------------------------------------------------------------------------------------------
const AudioPlayer = ({ sameRender, playorpause, songId }) => {
  const [music, setMusic] = useState("");
  const [previousOrNextSongId, setPreviousOrNextSongId] = useState("");
  const [localStorageData, setLocalStorageData] = useState("");
  const [duration, setDuration] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const audioElem = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const fetchMusic = async () => {
      if (songId === undefined || playorpause === undefined) {
        console.log("no id yet");
      } else {
        await getData(songId, setMusic);
      }
    };
    fetchMusic();
    console.log(localStorageData);
  }, []);

  useEffect(() => {
    console.log(audioElem.current);
    if ((playorpause === true && music !== "") || localStorageData != "") {
      const seconds = Math.floor(audioElem.current.duration);
      console.log(seconds);
      setDuration(seconds);

      if (!isNaN(seconds)) {
        animationRef.current = requestAnimationFrame(whilePlaying);
      }

      audioElem.current.pause();
      audioElem.current.play();
    }
    if (playorpause === false) {
      audioElem.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }, [playorpause, music, duration, progressBar, localStorageData]);

  useEffect(() => {
    const fetchMusic = async () => {
      if (songId === undefined || playorpause === undefined) {
        console.log("no id yet");
      } else {
        await getData(songId, setMusic);
      }
    };
    fetchMusic();
  }, [songId, playorpause, localStorageData]);

  useEffect(() => {
    const items = JSON.parse(window.localStorage.getItem("icon"));

    if (items) {
      setLocalStorageData(items, getData(items[0].id, setMusic));
    } else {
      setLocalStorageData("");
    }
  }, []);

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

  const whilePlaying = () => {
    console.log(audioElem.current.currentTime);
    progressBar.current.value = audioElem.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };
  const CalculateTime = (sec) => {
    console.log(sec);
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };
  const changeProgress = () => {
    audioElem.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };
  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--player-played",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrentTime(progressBar.current.value);
  };

  if (playorpause === undefined && localStorageData === "") {
    return (
      <div className="audioplayer-container">
        <div style={{ color: "white", textAlign: "center" }}>
          Here will be an unclickable play pause icon icon
        </div>
      </div>
    );
  } else {
    console.log("DURATION" + duration);
    return (
      <div className="audioplayer-container">
        <audio src={music} ref={audioElem}></audio>
        <div className="audioplayer-icons">
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
        <div className="seek_bar-container">
          <div
            className="seek_bar"
            style={{
              width: `${music.progress + "%"}`,
            }}
          ></div>

          <span className="currentTime">{CalculateTime(currentTime)}</span>
          <input
            type="range"
            className="progressbar"
            defaultValue={0}
            ref={progressBar}
            onChange={changeProgress}
            style={{ display: "inline-block", marginTop: "20px" }}
          ></input>
          <span className="duration">
            {!isNaN(duration) ? CalculateTime(duration) : "00:00"}
          </span>
        </div>
      </div>
    );
  }
};

export default AudioPlayer;
