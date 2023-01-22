import React, { useState, useRef, useEffect } from "react";

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
}) => {
  const [audioIcon, setAudioIcon] = useState(false);
  const audioElem = useRef();

  const playMusic = (boolean) => {
    // console.log("ID!!!!" + id);
    // console.log("BOOLEEANN" + boolean);
    // sameRender(boolean, playSong(id));
    sameRender(boolean, playSong(id));
  };
  console.log("RETURN STATE" + state);
  console.log("AUDIOICON RETURN" + audioIcon);

  if (audioIcon == false && state == undefined) {
    console.log("FIRST");
    return (
      <tr>
        <td>
          <img
            src={PlayIcon}
            className="play-icon"
            onClick={() => playMusic(true, setAudioIcon(true))}

            // onClick={() => setAudioIcon(true, playMusic(true))}
          ></img>
        </td>
        <td
          style={{
            color: audioIcon == false && state == undefined ? "" : "",
          }}
        >
          {title}
        </td>
        <td
          style={{
            color: audioIcon == true && state == undefined ? "" : "",
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
  } else if (audioIcon == false && state == false) {
    console.log("SECOND");
    console.log("SECOND AUDIOICON" + audioIcon);
    console.log("SECOND STATE" + state);
    console.log(audioElem.current);
    return (
      <tr>
        <td>
          <img
            src={PlayIcon}
            className="play-icon"
            onClick={() => playMusic(true, setAudioIcon(true))}

            // onClick={() => setAudioIcon(true, playMusic(true))}
          ></img>
        </td>
        <td
          style={{
            color: audioIcon == false && state == true ? "green" : "",
          }}
        >
          {title}
        </td>
        <td
          style={{
            color: audioIcon == false && state == true ? "pink" : "white",
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
    (state == false && audioIcon == false) ||
    (state == false && audioIcon == true)
  ) {
    console.log("THIRD");
    return (
      <tr>
        <td>
          <img
            src={PlayIcon}
            className="play-icon"
            onClick={() => playMusic(true, setAudioIcon(true))}

            // onClick={() =>
            //   getData(id, setMusic, setAudioIcon(true), playMusic(true))
            // }
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
  } else if (state == undefined && audioIcon == true) {
    console.log("FOURTH");
    return (
      <tr>
        <td>
          <img
            src={PlayIcon}
            className="play-icon"
            // onClick={() => playMusic(true, setAudioIcon(true))}

            onClick={() => setAudioIcon(true, playMusic(true))}
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
    console.log("FITFTH");
    return (
      <tr>
        <td>
          <img
            src={
              "https://i.gifer.com/origin/55/554818561cbf36d813ef2010cc9d66cc.gif"
            }
            className="pause-icon"
            onClick={() => playMusic(false, setAudioIcon(false))}
            //onClick={() => setMusic("", setAudioIcon(false), playMusic(false))}
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
  } else if (audioIcon == false || (audioIcon == false && state == false)) {
    console.log("SIXTH");
    return (
      <tr>
        <td>
          <img
            src={PlayIcon}
            className="play-icon"
            onClick={() => playMusic(true, setAudioIcon(true))}

            // onClick={() => setAudioIcon(true, playMusic(true))}
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
