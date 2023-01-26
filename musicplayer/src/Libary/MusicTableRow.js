import React, { useState, useEffect } from "react";

import "../AudioPlayer/AudioPlayer.css";
import PlayIcon from "../Icons/Play.png";
import PauseIcon from "../Icons/Pause.png";

const MusicTableRow = ({
  title,
  artist,
  favoriteSong,
  sameRender,
  state,
  id,
  index,
  file,
  myKey,
  playSong,
  localStorage,
}) => {
  const [audioIcon, setAudioIcon] = useState([
    { audioIcon: "no music yet", id: id, index: index },
  ]);

  useEffect(() => {
    if (audioIcon[0].audioIcon !== "no music yet") {
      window.localStorage.setItem("icon", JSON.stringify(audioIcon));
    }
  }, [audioIcon]);

  useEffect(() => {
    const items = JSON.parse(window.localStorage.getItem("icon"));
    if (items) {
      setAudioIcon(items);
    }
  }, []);

  const playMusic = (boolean) => {
    sameRender(boolean, playSong(id));
  };

  console.log(audioIcon);
  console.log("STATE * " + state);
  //wenn man auf die Page kommt und no nix im localstorage ist
  if (state === undefined && audioIcon[0].audioIcon == "no music yet") {
    console.log("FIRST CONDITION");
    return (
      <tr>
        <td>
          <img
            src={PlayIcon}
            className="play-icon"
            onClick={() => {
              setAudioIcon(
                [{ audioIcon: true, id: id, index: index }],
                playMusic(true)
              );
            }}
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
  //I drück auf play und spiel einen song sag das was gespielt wird zeig als pause icon an das anderes als pause icon
  else if (audioIcon[0].index == index && state == true) {
    console.log("SECOND CONDITION");
    return (
      <tr>
        <td>
          {audioIcon[0].audioIcon == true && audioIcon[0].id === id ? (
            <img
              src={PauseIcon}
              className="play-icon"
              onClick={() => {
                setAudioIcon(
                  [{ audioIcon: false, id: id, index: index }],
                  playMusic(false)
                );
              }}
            ></img>
          ) : (
            <img
              src={PlayIcon}
              className="play-icon"
              onClick={() => {
                setAudioIcon(
                  [{ audioIcon: true, id: id, index: index }],
                  playMusic(true)
                );
              }}
            ></img>
          )}
        </td>
        <td>{title}</td>
        <td>{artist}</td>
        <td>{favoriteSong}</td>
        <td>
          <div>Remove from libary</div>
        </td>
      </tr>
    );
  } //wenn nix gespielt wird und inzwischen druch die pages gerootet wird
  else if (state == false && audioIcon[0].audioIcon == false) {
    console.log("THIRD CONDITION");
    return (
      <tr>
        <td>
          {state == false ? (
            <img
              src={PlayIcon}
              className="play-icon"
              onClick={() => {
                setAudioIcon(
                  [{ audioIcon: true, id: id, index: index }],
                  playMusic(true)
                );
              }}
            ></img>
          ) : (
            <img
              src={PauseIcon}
              className="play-icon"
              onClick={() => {
                setAudioIcon(
                  [{ audioIcon: false, id: id, index: index }],
                  playMusic(false)
                );
              }}
            ></img>
          )}
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

  //i dück jz auf pause icon und es san beide als play angezeigt
  else if (audioIcon[0].index == index && state == false) {
    console.log("FOURTH CONDITION");
    return (
      <tr>
        <td>
          <img
            src={PlayIcon}
            className="play-icon"
            onClick={() => {
              setAudioIcon(
                [{ audioIcon: true, id: id, index: index }],
                playMusic(true)
              );
            }}
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
    // ist wenn grad music gespielt wird und i die page verlasse und dann wieder kommme dass das eine icon auf pause is weil geraede geplayid wird und das andere auf play ist
  } else if (audioIcon[0].audioIcon == true) {
    console.log("FIFTH CONDITION");
    return (
      <tr>
        <td>
          <img
            src={PlayIcon}
            className="play-icon"
            onClick={() => {
              setAudioIcon(
                [{ audioIcon: true, id: id, index: index }],
                playMusic(true)
              );
            }}
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
  } else if (state == undefined && audioIcon[0].audioIcon == false) {
    console.log("SIXTH CONDITION");
    return (
      <tr>
        <td>
          <img
            src={PlayIcon}
            className="play-icon"
            onClick={() => {
              setAudioIcon(
                [{ audioIcon: true, id: id, index: index }],
                playMusic(true)
              );
            }}
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
