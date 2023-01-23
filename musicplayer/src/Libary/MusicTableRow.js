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
    if (audioIcon[0].audioIcon === "no music yet") {
      console.log("Hi dfg from if statement");
    } else {
      console.log("parse Data from localStorage");
    }
  }, []);
  const playMusic = (boolean) => {
    sameRender(boolean, playSong(id));
  };
  console.log(audioIcon);
  console.log("STATE * " + state);

  //IF statements wenn i auf icons in in der tabelle klicke!
  if (state === undefined && audioIcon[0].audioIcon === "no music yet") {
    return (
      <tr>
        <td>
          <img
            src={PlayIcon}
            className="play-icon"
            // onClick={() => playMusic(true, setAudioIcon(true))}

            // onClick={() => setAudioIcon(playMusic(true))}
            onClick={() => {
              setAudioIcon(
                [{ audioIcon: true, id: id, index: index }],
                playMusic(true)
              );
            }}
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
  } else if (
    (audioIcon[0].audioIcon == "no music yet" && state === true) ||
    (audioIcon[0].audioIcon == true && state == true)
  ) {
    console.log("HI FROM SECOND RETRUN");
    return (
      <tr>
        <td>
          {audioIcon[0].audioIcon == true && state == true ? (
            <img
              src={PauseIcon}
              className="play-icon"
              // onClick={() => playMusic(true, setAudioIcon(true))}

              onClick={() =>
                setAudioIcon(
                  [
                    {
                      audioIcon: false,
                      id: id,
                      index: index,
                    },
                  ],
                  playMusic(false)
                )
              }
            ></img>
          ) : (
            <img src={PlayIcon} className="play-icon"></img>
          )}
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
  } else if (
    (audioIcon[0].audioIcon == false && state === false) ||
    (audioIcon[0].audioIcon == "no music yet" && state == false)
  ) {
    console.log("THIRD RETURN");
    return (
      <tr>
        <td>
          <img
            src={PlayIcon}
            className="play-icon"
            // onClick={() => playMusic(true, setAudioIcon(true))}

            onClick={() =>
              setAudioIcon(
                [
                  {
                    audioIcon: true,
                    state: state,
                    id: id,
                    index: index,
                  },
                ],
                playMusic(true)
              )
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
  }

  //-------------------------UBUNTU VERSION BRANCH----------------
  // if (
  //   (state == false && audioIcon == false) ||
  //   (state == true && audioIcon == false)
  // ) {
  //   console.log("First return");
  //   return (
  //     <tr>
  //       <td>
  //         <img
  //           src={PlayIcon}
  //           className="play-icon"
  //           // onClick={() => playMusic(true, setAudioIcon(true))}

  //           onClick={() => setAudioIcon(true, playMusic(true))}
  //         ></img>
  //       </td>
  //       <td
  //         style={{
  //           color: audioIcon == true && state == false ? "green" : "",
  //         }}
  //       >
  //         {title}
  //       </td>
  //       <td
  //         style={{
  //           color: audioIcon == true && state == false ? "green" : "",
  //         }}
  //       >
  //         {artist}
  //       </td>
  //       <td>{favoriteSong}</td>
  //       <td>
  //         <div>Remove from libary</div>
  //       </td>
  //     </tr>
  //   );
  // } else if (audioIcon == true) {
  //   console.log("Second return");
  //   return (
  //     <tr>
  //       <td>
  //         <img
  //           src={
  //             "https://i.gifer.com/origin/55/554818561cbf36d813ef2010cc9d66cc.gif"
  //           }
  //           className="pause-icon"
  //           // onClick={() => playMusic(false, setAudioIcon(false))}
  //           onClick={() => setAudioIcon(false, playMusic(false))}
  //         ></img>
  //       </td>
  //       <td
  //         style={{
  //           color: audioIcon == true && state == true ? "green" : "",
  //         }}
  //       >
  //         {title}
  //       </td>
  //       <td
  //         style={{
  //           color: audioIcon == true && state == true ? "green" : "",
  //         }}
  //       >
  //         {artist}
  //       </td>
  //       <td>{favoriteSong}</td>
  //       <td>
  //         <div>Not favorite song</div>
  //       </td>
  //     </tr>
  //   );
  // } else if (audioIcon == false) {
  //   console.log("THird return");
  //   return (
  //     <tr>
  //       <td>
  //         <img
  //           src={PlayIcon}
  //           className="play-icon"
  //           // onClick={() => playMusic(true, setAudioIcon(true))}

  //           onClick={() => setAudioIcon(true, playMusic(true))}
  //         ></img>
  //       </td>
  //       <td>{title}</td>
  //       <td>{artist}</td>
  //       <td>{favoriteSong}</td>
  //       <td>
  //         <div>Remove from libary</div>
  //       </td>
  //     </tr>
  //   );
  // }
  //-------------------------------------------------------------------------------------------------
  //--------------------ORIGINAL
  // if (audioIcon == false && state == undefined) {
  //   return (
  //     <tr>
  //       <td>
  //         <img
  //           src={PlayIcon}
  //           className="play-icon"
  //           onClick={() => playMusic(true, setAudioIcon(true))}

  //           // onClick={() => setAudioIcon(true, playMusic(true))}
  //         ></img>
  //       </td>
  //       <td
  //         style={{
  //           color: audioIcon == false && state == undefined ? "" : "",
  //         }}
  //       >
  //         {title}
  //       </td>
  //       <td
  //         style={{
  //           color: audioIcon == true && state == undefined ? "" : "",
  //         }}
  //       >
  //         {artist}
  //       </td>
  //       <td>{favoriteSong}</td>
  //       <td>
  //         <div>Remove from libary</div>
  //       </td>
  //     </tr>
  //   );
  // }
  // if (audioIcon == false && state == false) {
  //   console.log("HI from first statement");
  //   return (
  //     <tr>
  //       <td>
  //         <img
  //           src={PlayIcon}
  //           className="play-icon"
  //           onClick={() => playMusic(true, setAudioIcon(true))}

  //           // onClick={() => setAudioIcon(true, playMusic(true))}
  //         ></img>
  //       </td>
  //       <td
  //         style={{
  //           color: audioIcon == false && state == true ? "green" : "",
  //         }}
  //       >
  //         {title}
  //       </td>
  //       <td
  //         style={{
  //           color: audioIcon == true && state == true ? "green" : "",
  //         }}
  //       >
  //         {artist}
  //       </td>
  //       <td>{favoriteSong}</td>
  //       <td>
  //         <div>Remove from libary</div>
  //       </td>
  //     </tr>
  //   );
  // } else if (
  //   (state == false && audioIcon == false) ||
  //   (state == false && audioIcon == true)
  // ) {
  //   console.log("Hi from second statement");
  //   return (
  //     <tr>
  //       <td>
  //         <img
  //           src={PlayIcon}
  //           className="play-icon"
  //           onClick={() => playMusic(true, setAudioIcon(true))}

  //           // onClick={() =>
  //           //   getData(id, setMusic, setAudioIcon(true), playMusic(true))
  //           // }
  //         ></img>
  //       </td>
  //       <td
  //         style={{
  //           color: audioIcon == true && state == false ? "green" : "",
  //         }}
  //       >
  //         {title}
  //       </td>
  //       <td
  //         style={{
  //           color: audioIcon == true && state == false ? "green" : "",
  //         }}
  //       >
  //         {artist}
  //       </td>
  //       <td>{favoriteSong}</td>
  //       <td>
  //         <div>Remove from libary</div>
  //       </td>
  //     </tr>
  //   );
  // } else if (state == undefined && audioIcon == true) {
  //   return (
  //     <tr>
  //       <td>
  //         <img
  //           src={PlayIcon}
  //           className="play-icon"
  //           // onClick={() => playMusic(true, setAudioIcon(true))}

  //           onClick={() => setAudioIcon(true, playMusic(true))}
  //         ></img>
  //       </td>
  //       <td
  //         style={{
  //           color: audioIcon == true && state == false ? "green" : "",
  //         }}
  //       >
  //         {title}
  //       </td>
  //       <td
  //         style={{
  //           color: audioIcon == true && state == false ? "green" : "",
  //         }}
  //       >
  //         {artist}
  //       </td>
  //       <td>{favoriteSong}</td>
  //       <td>
  //         <div>Remove from libary</div>
  //       </td>
  //     </tr>
  //   );
  // } else if (audioIcon == true && state == true) {
  //   return (
  //     <tr>
  //       <td>
  //         <img
  //           src={
  //             "https://i.gifer.com/origin/55/554818561cbf36d813ef2010cc9d66cc.gif"
  //           }
  //           className="pause-icon"
  //           onClick={() => playMusic(false, setAudioIcon(false))}
  //           //onClick={() => setMusic("", setAudioIcon(false), playMusic(false))}
  //         ></img>
  //       </td>
  //       <td
  //         style={{
  //           color: audioIcon == true && state == true ? "green" : "",
  //         }}
  //       >
  //         {title}
  //       </td>
  //       <td
  //         style={{
  //           color: audioIcon == true && state == true ? "green" : "",
  //         }}
  //       >
  //         {artist}
  //       </td>
  //       <td>{favoriteSong}</td>
  //       <td>
  //         <div>Not favorite song</div>
  //       </td>
  //     </tr>
  //   );
  // } else if (audioIcon == false || (audioIcon == false && state == false)) {
  //   return (
  //     <tr>
  //       <td>
  //         <img
  //           src={PlayIcon}
  //           className="play-icon"
  //           onClick={() => playMusic(true, setAudioIcon(true))}

  //           // onClick={() => setAudioIcon(true, playMusic(true))}
  //         ></img>
  //       </td>
  //       <td>{title}</td>
  //       <td>{artist}</td>
  //       <td>{favoriteSong}</td>
  //       <td>
  //         <div>Remove from libary</div>
  //       </td>
  //     </tr>
  //   );
  // }
};
export default MusicTableRow;
