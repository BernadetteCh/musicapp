import React, { useState, useRef, useEffect } from "react";
// import PlayPauseIcon from "../PlayPauseIcon";
// import AudioPlayer from "../AudioPlayer/AudioPlayer";
import "../AudioPlayer/AudioPlayer.css";
import PlayIcon from "../Icons/Play.png";
import PauseIcon from "../Icons/Pause.png";

const getData = async (songId, dataSetter) => {
  const response = await fetch(`http://localhost:8080/api/${songId}`);
  const data = await response.json();
  dataSetter(data.song.file);
};

const MusicTableRow = ({
  title,
  artist,
  favoriteSong,
  sameRender,
  state,
  id,
  file,
  playSong,
}) => {
  const [audioIcon, setAudioIcon] = useState(false);
  const [music, setMusic] = useState("");
  const audioElem = useRef();

  // useEffect(() => {
  //   getData(id, setMusic);
  // }, [id]);

  // useEffect(() => {
  //   if (audioIcon) {
  //     audioElem.current.play();
  //     console.log("true from useeffect");
  //   } else {
  //     console.log("false form useeffect");
  //   }
  // }, [audioIcon]);
  //const playMusic = (boolean) => {
  // playSong(id);
  // sameRender(boolean, setAudioIcon(boolean));
  // console.log(boolean);
  // playSong(id);
  // sameRender(boolean);
  //};

  useEffect(() => {
    if (audioIcon == true && music !== "") {
      console.log("hey play music");
      audioElem.current.play();
    } else if (audioIcon == false && music === "") {
      audioElem.current.pause();
      console.log("no music");
    }
  }, [music]);

  console.log("Befor return " + music);
  console.log("AudioIcon:");
  console.log(audioIcon);
  console.log("AudioElement:");
  console.log(audioElem);
  if (audioIcon == false) {
    return (
      <tr>
        <td>
          <audio src={music} ref={audioElem}></audio>
          <img
            src={PlayIcon}
            className="play-icon"
            // onClick={() => playMusic(true)}

            onClick={() => getData(id, setMusic, setAudioIcon(true))}
          ></img>
        </td>
        <td>{title}</td>
        <td>{artist}</td>
        <td>{favoriteSong}</td>
        <td>
          <div>Not favorite song</div>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>
          <audio src={music} ref={audioElem}></audio>
          <img
            src={PauseIcon}
            className="pause-icon"
            //  onClick={() => playMusic(false)}
            onClick={() => setMusic("", setAudioIcon(false))}
          ></img>
        </td>
        <td>{title}</td>
        <td>{artist}</td>
        <td>{favoriteSong}</td>
        <td>
          <div>Not favorite song</div>
        </td>
      </tr>
    );
  }
};

export default MusicTableRow;
