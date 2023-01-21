import React, { useState, useRef, useEffect } from "react";
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
  index,
  file,
  playSong,
}) => {
  const [audioIcon, setAudioIcon] = useState(false);
  const [music, setMusic] = useState("");
  const audioElem = useRef();
  //const playMusic = (boolean) => {
  // playSong(id);
  // sameRender(boolean, setAudioIcon(boolean));
  // console.log(boolean);
  // playSong(id);
  // sameRender(boolean);
  //};

  useEffect(() => {
    if (audioIcon == true && music !== "") {
      audioElem.current.play();
    }
    if ((audioIcon == false && music === "") || state == false) {
      audioElem.current.pause();
    }
  }, [music, state]);

  const playMusic = (boolean) => {
    sameRender(boolean, playSong(id));
  };
  console.log("RETURN STATE" + state);
  console.log("AUDIOICON" + audioIcon);
  if (
    (state == false && audioIcon == false) ||
    (state == true && audioIcon == false)
  ) {
    console.log("First return");
    return (
      <tr>
        <td>
          <audio src={music} ref={audioElem}></audio>
          <img
            src={PlayIcon}
            className="play-icon"
            // onClick={() => playMusic(true, setAudioIcon(true))}

            onClick={() =>
              getData(id, setMusic, setAudioIcon(true), playMusic(true))
            }
          ></img>
        </td>
        <td
          style={{
            color: audioIcon == true && state == false ? "green" : "",
          }}
        >
          {title}
        </td>
        <td
          style={{
            color: audioIcon == true && state == false ? "green" : "",
          }}
        >
          {artist}
        </td>
        <td>{favoriteSong}</td>
        <td>
          <div>Remove from libary</div>
        </td>
      </tr>
    );
  } else if (audioIcon == true) {
    console.log("Second return");
    return (
      <tr>
        <td>
          <audio src={music} ref={audioElem}></audio>
          <img
            src={
              "https://i.gifer.com/origin/55/554818561cbf36d813ef2010cc9d66cc.gif"
            }
            className="pause-icon"
            // onClick={() => playMusic(false, setAudioIcon(false))}
            onClick={() => setMusic("", setAudioIcon(false), playMusic(false))}
          ></img>
        </td>
        <td
          style={{
            color: audioIcon == true && state == true ? "green" : "",
          }}
        >
          {title}
        </td>
        <td
          style={{
            color: audioIcon == true && state == true ? "green" : "",
          }}
        >
          {artist}
        </td>
        <td>{favoriteSong}</td>
        <td>
          <div>Not favorite song</div>
        </td>
      </tr>
    );
  } else if (audioIcon == false) {
    console.log("THird return");
    return (
      <tr>
        <td>
          <audio src={music} ref={audioElem}></audio>
          <img
            src={PlayIcon}
            className="play-icon"
            // onClick={() => playMusic(true, setAudioIcon(true))}

            onClick={() =>
              getData(id, setMusic, setAudioIcon(true), playMusic(true))
            }
          ></img>
        </td>
        <td>{title}</td>
        <td>{artist}</td>
        <td>{favoriteSong}</td>
        <td>
          <div>Remove from libary</div>
        </td>
      </tr>
    );
  }
};

export default MusicTableRow;
