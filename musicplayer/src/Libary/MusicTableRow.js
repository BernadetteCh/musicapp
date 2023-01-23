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
    // if (audioIcon[0].audioIcon === "no music yet") {
    //   console.log("Hi dfg from if statement");
    // } else {
    //   console.log("parse Data from localStorage");
    //   let localStorageData = JSON.parse(window.localStorage.getItem("icon"));
    //   console.log(audioIcon);
    //   setAudioIcon(localStorageData);
    //   console.log(localStorageData);
    // }
    const items = JSON.parse(window.localStorage.getItem("icon"));
    if (items) {
      console.log(items);
      setAudioIcon(items);
    }
  }, []);
  const playMusic = (boolean) => {
    sameRender(boolean, playSong(id));
  };
  console.log(audioIcon);
  console.log("STATE * " + state);
  //IF STatements wenn ich LINKE icons drücke

  if (state === undefined) {
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

  //beim ersten refresh wenn i auf play drücke damit es richtig angezeigt wird da wo i raufdücke play sign kommt und sonst pause sign
  //ich hab auf die letzte klammer geschaut
  if (state === undefined) {
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

  //beim ersten refresh wenn i auf play drücke damit es richtig angezeigt wird da wo i raufdücke play sign kommt und sonst pause sign
  //ich hab auf die letzte klammer geschaut
  if (state == true && audioIcon[0].id == id) {
    console.log("FOURTH condition");
    return (
      <tr>
        <td>
          {audioIcon[0].id == id && audioIcon[0].audioIcon == "no music yet" ? (
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
  } else if (state == false && audioIcon[0].id == id) {
    console.log("INDEX" + index + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    return (
      <tr>
        <td>
          {audioIcon[0].id == id ? (
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
            <div>Superhero</div>
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
  } else {
    console.log("CONDITION TEST");
    console.log(audioIcon[0].audioIcon + "STATE" + state);
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

  // if (audioIcon[0].audioIcon === "no music yet") {
  //   console.log("THird condition");
  //   return <div>3</div>;
  // }

  // //IF statements wenn i auf icons in in der tabelle klicke!
  // if (state === undefined && audioIcon[0].audioIcon === "no music yet") {
  //   console.log("FIRST RETURN");
  //   return (
  //     <tr>
  //       <td>
  //         <img
  //           src={PlayIcon}
  //           className="play-icon"
  //           // onClick={() => playMusic(true, setAudioIcon(true))}

  //           // onClick={() => setAudioIcon(playMusic(true))}
  //           onClick={() => {
  //             setAudioIcon(
  //               [{ audioIcon: true, id: id, index: index }],
  //               playMusic(true)
  //             );
  //           }}
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
  // } else if (
  //   (audioIcon[0].audioIcon == "no music yet" && state === true) ||
  //   (audioIcon[0].audioIcon == true && state == true)
  // ) {
  //   console.log("HI FROM SECOND RETRUN");
  //   return (
  //     <tr>
  //       <td>
  //         {audioIcon[0].audioIcon == true && state == true ? (
  //           <img
  //             src={PauseIcon}
  //             className="play-icon"
  //             // onClick={() => playMusic(true, setAudioIcon(true))}

  //             onClick={() =>
  //               setAudioIcon(
  //                 [
  //                   {
  //                     audioIcon: false,
  //                     id: id,
  //                     index: index,
  //                   },
  //                 ],
  //                 playMusic(false)
  //               )
  //             }
  //           ></img>
  //         ) : (
  //           <img
  //             src={PlayIcon}
  //             className="play-icon"
  //             // onClick={() => playMusic(true, setAudioIcon(true))}

  //             onClick={() =>
  //               setAudioIcon(
  //                 [
  //                   {
  //                     audioIcon: true,
  //                     id: id,
  //                     index: index,
  //                   },
  //                 ],
  //                 playMusic(true)
  //               )
  //             }
  //           ></img>
  //         )}
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
  // } else if (audioIcon[0].audioIcon == true && state == false) {
  //   console.log("THIRD RETURN");
  //   return (
  //     <tr>
  //       <td>
  //         <img
  //           src={PlayIcon}
  //           className="play-icon"
  //           onClick={() => {
  //             setAudioIcon(
  //               [{ audioIcon: true, id: id, index: index }],
  //               playMusic(true)
  //             );
  //           }}
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
  // } else if (
  //   (audioIcon[0].audioIcon == false && state === false) ||
  //   (audioIcon[0].audioIcon == "no music yet" && state == false)
  // ) {
  //   console.log("FOURTH RETURN");
  //   return (
  //     <tr>
  //       <td>
  //         {(audioIcon[0].audioIcon == true && state == false) ||
  //         (audioIcon[0].audioIcon == false && state == false) ? (
  //           <img
  //             src={PlayIcon}
  //             className="play-icon"
  //             onClick={() =>
  //               setAudioIcon(
  //                 [
  //                   {
  //                     audioIcon: true,
  //                     id: id,
  //                     index: index,
  //                   },
  //                 ],
  //                 playMusic(true)
  //               )
  //             }
  //           ></img>
  //         ) : (
  //           <img
  //             src={PlayIcon}
  //             className="play-icon"
  //             // onClick={() => playMusic(true, setAudioIcon(true))}

  //             onClick={() =>
  //               setAudioIcon(
  //                 [
  //                   {
  //                     audioIcon: true,
  //                     id: id,
  //                     index: index,
  //                   },
  //                 ],
  //                 playMusic(true)
  //               )
  //             }
  //           ></img>
  //         )}
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
  // } else if (
  //   (state == true && audioIcon[0].audioIcon == false) ||
  //   (state == true && audioIcon[0].audioIcon == true)
  // ) {
  //   console.log("FOURTH RETURN");
  //   return (
  //     <tr>
  //       <td>
  //         {audioIcon[0].audioIcon == false && state == false ? (
  //           <img
  //             src={PlayIcon}
  //             className="play-icon"
  //             // onClick={() => playMusic(true, setAudioIcon(true))}

  //             // onClick={() => setAudioIcon(playMusic(true))}
  //             onClick={() => {
  //               setAudioIcon(
  //                 [{ audioIcon: true, id: id, index: index }],
  //                 playMusic(true)
  //               );
  //             }}
  //           ></img>
  //         ) : (
  //           <img
  //             src={PlayIcon}
  //             className="play-icon"
  //             // onClick={() => playMusic(true, setAudioIcon(true))}

  //             // onClick={() => setAudioIcon(playMusic(true))}
  //             onClick={() => {
  //               setAudioIcon(
  //                 [{ audioIcon: false, id: id, index: index }],
  //                 playMusic(false)
  //               );
  //             }}
  //           ></img>
  //         )}
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

  // }
};
export default MusicTableRow;
