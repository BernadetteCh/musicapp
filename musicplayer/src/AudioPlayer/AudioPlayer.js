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
//------------------------------------------------------------------------------------------
const AudioPlayer = ({ sameRender, playorpause, songId }) => {
  const [music, setMusic] = useState("");
  const [previousOrNextSongId, setPreviousOrNextSongId] = useState("");
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioElem = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    // //to display time
    // if (music !== "") {
    //   const seconds = Math.floor(audioElem.current.duration);
    //   setDuration(seconds);
    // }

    if (playorpause == true && music !== "") {
      const seconds = Math.floor(audioElem.current.duration);
      console.log(audioElem.current);
      setDuration(seconds);

      if (!isNaN(seconds)) {
        console.log(seconds);

        audioElem.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
      }
      // audioElem.current.play();
    }
    if (playorpause == false) {
      audioElem.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }, [playorpause, music, duration]);

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

  const whilePlaying = () => {
    progressBar.current.value = audioElem.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };
  const CalculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    console.log(minutes);
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

  if (playorpause === undefined) {
    return (
      <div style={{ color: "white" }}>
        No music selected ,//nothing in localstorage yet?
      </div>
    );
  } else {
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
