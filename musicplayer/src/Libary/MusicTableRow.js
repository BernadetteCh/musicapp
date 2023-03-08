import React, { useState, useEffect, useRef } from "react";

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
  playSong,
  saveIndex,
  clickedRow,
  setAudioIcon,
  audioIcon,
}) => {
  const playMusic = (boolean) => {
    sameRender(boolean, playSong(id));
  };

  if (state === undefined) {
    return (
      <tr
        className={
          clickedRow === index || audioIcon[0].index === index
            ? "selected"
            : "notselected"
        }
      >
        <td
          onClick={() => {
            setAudioIcon(
              [{ audioIcon: true, id: id, index: index, isActive: true }],
              playMusic(true),
              saveIndex(index)
            );
          }}
        >
          #{index + 1}.
        </td>
        <td></td>
        <td>{title}</td>
        <td>{artist}</td>
        <td>{favoriteSong}</td>
        <td>Icon for duration</td>

        <td>
          <div>Remove from libary</div>
        </td>
      </tr>
    );
  } else if (
    clickedRow === index &&
    audioIcon[0].id == id &&
    audioIcon[0].isActive == true &&
    audioIcon[0].audioIcon == true
  ) {
    return (
      <tr
        className={
          clickedRow === index || audioIcon[0].index === index
            ? "selected"
            : "notselected"
        }
      >
        <td
          onClick={() => {
            setAudioIcon(
              [
                {
                  audioIcon: false,
                  id: id,
                  index: index,
                  isActive: false,
                },
              ],
              playMusic(false),
              saveIndex(index)
            );
          }}
        >
          #{index + 1}.
        </td>
        <td></td>
        <td>{title}</td>
        <td>{artist}</td>
        <td>{favoriteSong}</td>
        <td>Icon for duration</td>

        <td>
          <div>Remove from libary</div>
        </td>
      </tr>
    );
  } else {
    return (
      <tr
        className={
          clickedRow === index || audioIcon[0].index === index
            ? "selected"
            : "notselected"
        }
      >
        <td
          onClick={() => {
            setAudioIcon(
              [{ audioIcon: true, id: id, index: index, isActive: true }],
              playMusic(true),
              saveIndex(index)
            );
          }}
        >
          #{index + 1}.
        </td>
        <td></td>
        <td>{title}</td>
        <td>{artist}</td>
        <td>{favoriteSong}</td>
        <td>Icon for duration</td>

        <td>
          <div>Remove from libary</div>
        </td>
      </tr>
    );
  }

  /*
  return (
    <tr>
      {clickedRow === index &&
      audioIcon[0].id == id &&
      audioIcon[0].isActive == true &&
      audioIcon[0].audioIcon == true ? (
        <div className={clickedRow === index ? "selected" : "notselected"}>
          <td
            onClick={() => {
              setAudioIcon(
                [{ audioIcon: false, id: id, index: index, isActive: false }],
                playMusic(false),
                saveIndex(index)
              );
            }}
          >
            #{index + 1}.
          </td>
          <td></td>
          <td>{title}</td>
          <td>{artist}</td>
          <td>{favoriteSong}</td>
          <td>Icon for duration</td>

          <td>
            <div>Remove from libary</div>
          </td>
        </div>
      ) : (
        <div className={clickedRow === index ? "selected" : "notselected"}>
          <td
            onClick={() => {
              setAudioIcon(
                [{ audioIcon: true, id: id, index: index, isActive: true }],
                playMusic(true),
                saveIndex(index)
              );
            }}
          >
            #{index + 1}.
          </td>
          <td></td>
          <td>{title}</td>
          <td>{artist}</td>
          <td>{favoriteSong}</td>
          <td>Icon for duration</td>

          <td>
            <div>Remove from libary</div>
          </td>
        </div>
      )}
    </tr>
  );
  */
};

export default MusicTableRow;
