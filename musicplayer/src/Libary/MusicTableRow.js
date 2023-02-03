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
    { audioIcon: "no music yet", id: id, index: index },
  ]);
  const [clickedTableRow, setClickedTableRow] = useState(null);
  const testindex = useRef();
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

  // useEffect(() => {
  //   if (state == true && audioIcon[0].audioIcon !== "no music yet") {
  //     const audioIcon = [{ audioIcon: true, id: id, index: index }];
  //     window.localStorage.setItem("icon", JSON.stringify(audioIcon));
  //     // setAudioIcon({ audioIcon: true, id: id, index: index });
  //   }
  //   if (state == false && audioIcon[0].audioIcon !== "no music yet") {
  //     // setAudioIcon({ audioIcon: false, id: id, index: index });
  //     const audioIcon = [{ audioIcon: false, id: id, index: index }];
  //     window.localStorage.setItem("icon", JSON.stringify(audioIcon));
  //   }
  // }, [state]);

  const playMusic = (boolean) => {
    sameRender(boolean, playSong(id));
  };

  console.log(audioIcon);
  console.log("STATE * " + state);
  //wenn man auf die Page kommt und no nix im localstorage ist
  const clickOnTableRow = (index) => {
    if (clickOnTableRow !== index) {
      // handle if user clicks again the same row
      setClickedTableRow(index);
    } else {
      setClickedTableRow(null); // set clicked row to null if same row is selected
    }
  };
  if (state === undefined && audioIcon[0].audioIcon == "no music yet") {
    console.log("FIRST CONDITION");
    return (
      <tr>
        <td
          style={{ cursor: "pointer" }}
          onClick={() => {
            setAudioIcon(
              [{ audioIcon: true, id: id, index: index }],
              playMusic(true),
              setClickedTableRow(index)
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
    console.log("INDEX" + index);
    console.log("CLICKED TABLEROWINDEX" + clickedTableRow);
    return (
      <tr onClick={() => setClickedTableRow(index)}>
        <td
          style={{
            color:
              clickedTableRow == index ? (
                "green"
              ) : (
                <td style={{ color: "white" }}>Berni</td>
              ),
          }}
        >
          HI
        </td>
      </tr>
    );
  }

  //  else if (audioIcon[0].index == index && state == true) {
  //   console.log("SECOND CONDITION");
  //   return (
  //     <tr
  //       style={{
  //         color:
  //           // (audioIcon[0].index == index && audioIcon[0].audioIcon == true) ||
  //           // (audioIcon[0].audioIcon == false && state == true)
  //           //   ? "green"
  //           //   : "white",
  //           clickedTableRow == index ? "green" : "yellow",
  //       }}
  //     >
  //       <td
  //         style={{ cursor: "pointer" }}
  //         onClick={() => {
  //           setAudioIcon(
  //             [{ audioIcon: false, id: id, index: index }],
  //             playMusic(false),
  //             setClickedTableRow(index)
  //           );
  //         }}
  //       >
  //         #{index + 1}.
  //       </td>
  //       <td></td>
  //       <td>{title}</td>
  //       <td>{artist}</td>
  //       <td>{favoriteSong}</td>
  //       <td>Icon for duration</td>
  //       <td>
  //         <div>Remove from libary</div>
  //       </td>
  //     </tr>
  //   );
  // } else if (state == false && audioIcon[0].index == index) {
  //   console.log("THIRD CODITION");
  //   return (
  //     <tr
  //       style={{
  //         color:
  //           // (audioIcon[0].index == index && audioIcon[0].audioIcon == false) ||
  //           // (audioIcon[0].audioIcon == true &&
  //           //   state == false &&
  //           //   audioIcon[0].index == index)
  //           //   ? "green"
  //           //   : "white",
  //           clickedTableRow == index ? "green" : "white",
  //       }}
  //     >
  //       <td
  //         style={{ cursor: "pointer" }}
  //         onClick={() => {
  //           setAudioIcon(
  //             [{ audioIcon: true, id: id, index: index }],
  //             playMusic(true),
  //             setClickedTableRow(index)
  //           );
  //         }}
  //       >
  //         #{index + 1}.
  //       </td>
  //       <td></td>
  //       <td>{title}</td>
  //       <td>{artist}</td>
  //       <td>{favoriteSong}</td>
  //       <td>Icon for duration</td>
  //       <td>
  //         <div>Remove from libary</div>
  //       </td>
  //     </tr>
  //   );
  // } else if (audioIcon[0].audioIcon == true) {
  //   console.log("FOURTH CONDITION");
  //   return (
  //     <tr
  //       style={{
  //         color:
  //           audioIcon[0].id == id && audioIcon[0].audioIcon == true
  //             ? "green"
  //             : "white",
  //       }}
  //     >
  //       <td
  //         style={{ cursor: "pointer" }}
  //         onClick={() => {
  //           setAudioIcon(
  //             [{ audioIcon: true, id: id, index: index }],
  //             playMusic(true)
  //           );
  //         }}
  //       >
  //         #{index + 1}.
  //       </td>
  //       <td></td>
  //       <td>{title}</td>
  //       <td>{artist}</td>
  //       <td>{favoriteSong}</td>
  //       <td>Icon for duration</td>
  //       <td>
  //         <div>Remove from libary</div>
  //       </td>
  //     </tr>
  //   );
  // } else if (audioIcon[0].audioIcon == false) {
  //   return (
  //     <tr
  //       style={{
  //         color:
  //           audioIcon[0].id == id && audioIcon[0].audioIcon == false
  //             ? "green"
  //             : "white",
  //       }}
  //     >
  //       <td
  //         style={{ cursor: "pointer" }}
  //         onClick={() => {
  //           setAudioIcon(
  //             [{ audioIcon: true, id: id, index: index }],
  //             playMusic(true)
  //           );
  //         }}
  //       >
  //         #{index + 1}.
  //       </td>
  //       <td></td>
  //       <td>{title}</td>
  //       <td>{artist}</td>
  //       <td>{favoriteSong}</td>
  //       <td>Icon for duration</td>
  //       <td>
  //         <div>Remove from libary</div>
  //       </td>
  //     </tr>
  //   );
  //}
};
export default MusicTableRow;

// if (state === undefined && audioIcon[0].audioIcon == "no music yet") {
//   console.log("FIRST CONDITION");
//   return (
//     <tr>
//       <td style={{ color: "white" }}>{index + 1}.</td>
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
//       <td>{title}</td>
//       <td>{artist}</td>
//       <td>{favoriteSong}</td>
//       <td>
//         <div>Remove from libary</div>
//       </td>
//     </tr>
//   );
// }
// //I drück auf play und spiel einen song sag das was gespielt wird zeig als pause icon an das anderes als pause icon
// else if (audioIcon[0].index == index && state == true) {
//   console.log("SECOND CONDITION");
//   return (
//     <tr>
//       <td>
//         {audioIcon[0].audioIcon == true && audioIcon[0].id === id ? (
//           <img
//             src={PauseIcon}
//             className="play-icon"
//             onClick={() => {
//               setAudioIcon(
//                 [{ audioIcon: false, id: id, index: index }],
//                 playMusic(false)
//               );
//             }}
//           ></img>
//         ) : (
//           <img
//             src={PlayIcon}
//             className="play-icon"
//             onClick={() => {
//               setAudioIcon(
//                 [{ audioIcon: true, id: id, index: index }],
//                 playMusic(true)
//               );
//             }}
//           ></img>
//         )}
//       </td>
//       <td>{title}</td>
//       <td>{artist}</td>
//       <td>{favoriteSong}</td>
//       <td>
//         <div>Remove from libary</div>
//       </td>
//     </tr>
//   );
// } //wenn nix gespielt wird und inzwischen druch die pages gerootet wird
// else if (state == false && audioIcon[0].audioIcon == false) {
//   console.log("THIRD CONDITION");
//   return (
//     <tr>
//       <td>
//         {state == false ? (
//           <img
//             src={PlayIcon}
//             className="play-icon"
//             onClick={() => {
//               setAudioIcon(
//                 [{ audioIcon: true, id: id, index: index }],
//                 playMusic(true)
//               );
//             }}
//           ></img>
//         ) : (
//           <img
//             src={PauseIcon}
//             className="play-icon"
//             onClick={() => {
//               setAudioIcon(
//                 [{ audioIcon: false, id: id, index: index }],
//                 playMusic(false)
//               );
//             }}
//           ></img>
//         )}
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

// //i dück jz auf pause icon und es san beide als play angezeigt
// else if (audioIcon[0].index == index && state == false) {
//   console.log("FOURTH CONDITION");
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
//       <td>{title}</td>
//       <td>{artist}</td>
//       <td>{favoriteSong}</td>
//       <td>
//         <div>Remove from libary</div>
//       </td>
//     </tr>
//   );
//   // ist wenn grad music gespielt wird und i die page verlasse und dann wieder kommme dass das eine icon auf pause is weil geraede geplayid wird und das andere auf play ist
// } else if (audioIcon[0].audioIcon == true) {
//   console.log("FIFTH CONDITION");
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
//       <td>{title}</td>
//       <td>{artist}</td>
//       <td>{favoriteSong}</td>
//       <td>
//         <div>Remove from libary</div>
//       </td>
//     </tr>
//   );
// } else if (state == undefined && audioIcon[0].audioIcon == false) {
//   console.log("SIXTH CONDITION");
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
//       <td>{title}</td>
//       <td>{artist}</td>
//       <td>{favoriteSong}</td>
//       <td>
//         <div>Remove from libary</div>
//       </td>
//     </tr>
//   );
// }
