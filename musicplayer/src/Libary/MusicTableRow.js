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
  key,
  index,
  file,
  myKey,
  playSong,
  localStorage,
}) => {
  const [audioIcon, setAudioIcon] = useState([
    { audioIcon: "no music yet", id: id, index: index, isActive: false },
  ]);
  const [selectedRow, setSelectedRow] = useState(null);

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

  if (state === undefined && audioIcon[0].audioIcon == "no music yet") {
    return (
      <tr className={selectedRow === index ? "selected" : "notselected"}>
        <td
          onClick={() => {
            setAudioIcon(
              [{ audioIcon: true, id: id, index: index, isActive: true }],
              playMusic(true),
              setSelectedRow(index)
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
    //CONDITIONS START WHEN I Click song next to each other
  } else if (audioIcon[0].index === index && state === true) {
    return (
      <tr>
        {state === true &&
        audioIcon[0].id == id &&
        audioIcon[0].isActive == true &&
        audioIcon[0].audioIcon == true ? (
          <div className={selectedRow === index ? "selected" : "notselected"}>
            <td
              onClick={() => {
                setAudioIcon(
                  [{ audioIcon: false, id: id, index: index, isActive: false }],
                  playMusic(false),
                  setSelectedRow(index)
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
          <div className={selectedRow === index ? "selected" : "notselected"}>
            <td
              onClick={() => {
                setAudioIcon(
                  [{ audioIcon: true, id: id, index: index, isActive: true }],
                  playMusic(true),
                  setSelectedRow(index)
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
  } else if (audioIcon[0].index === index && state === false) {
    return (
      <tr>
        {state === true &&
        audioIcon[0].id == id &&
        audioIcon[0].isActive == true &&
        audioIcon[0].audioIcon == true ? (
          <div className={selectedRow === index ? "selected" : "notselected"}>
            <td
              onClick={() => {
                setAudioIcon(
                  [{ audioIcon: false, id: id, index: index, isActive: false }],
                  playMusic(false),
                  setSelectedRow(index)
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
          <div className={selectedRow === index ? "selected" : "notselected"}>
            <td
              onClick={() => {
                setAudioIcon(
                  [{ audioIcon: true, id: id, index: index, isActive: true }],
                  playMusic(true),
                  setSelectedRow(index)
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
  } else if (state === true) {
    return (
      <tr>
        {state === true &&
        audioIcon[0].id == id &&
        audioIcon[0].isActive == true &&
        audioIcon[0].audioIcon == true ? (
          <div className={selectedRow === index ? "selected" : "notselected"}>
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
                  setSelectedRow(index)
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
          <div className={selectedRow === index ? "selected" : "notselected"}>
            <td
              onClick={() => {
                setAudioIcon(
                  [{ audioIcon: true, id: id, index: index, isActive: true }],
                  playMusic(true),
                  setSelectedRow(index)
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
  } else if (state === false) {
    return (
      <tr>
        {state === true &&
        audioIcon[0].id == id &&
        audioIcon[0].isActive == true &&
        audioIcon[0].audioIcon == true ? (
          <div className={selectedRow === index ? "selected" : "notselected"}>
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
                  setSelectedRow(index)
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
          <div className={selectedRow === index ? "selected" : "notselected"}>
            <td
              onClick={() => {
                setAudioIcon(
                  [{ audioIcon: true, id: id, index: index, isActive: true }],
                  playMusic(true),
                  setSelectedRow(index)
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
  }
};

export default MusicTableRow;
