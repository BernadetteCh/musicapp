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
  file,
  myKey,
  playSong,
  localStorage,
}) => {
  const [audioIcon, setAudioIcon] = useState([
    { audioIcon: "no music yet", id: id, index: index, isActive: false },
  ]);
  const [clickedTableRow, setClickedTableRow] = useState(null);

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
  //     const audioIcon = [
  //       { audioIcon: true, id: id, index: index, isActive: true },
  //     ];
  //     window.localStorage.setItem("icon", JSON.stringify(audioIcon));
  //     // setAudioIcon({ audioIcon: true, id: id, index: index });
  //   }
  //   if (state == false && audioIcon[0].audioIcon !== "no music yet") {
  //     // setAudioIcon({ audioIcon: false, id: id, index: index });
  //     const audioIcon = [
  //       { audioIcon: false, id: id, index: index, isActive: false },
  //     ];
  //     window.localStorage.setItem("icon", JSON.stringify(audioIcon));
  //   }
  // }, [state]);

  const playMusic = (boolean) => {
    sameRender(boolean, playSong(id));
  };

  // console.log(audioIcon);
  // console.log("STATE * " + state);
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
    // console.log("FIRST CONDITION");
    return (
      <tr>
        <td
          onClick={() => {
            setAudioIcon(
              [{ audioIcon: true, id: id, index: index, isActive: true }],
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
    //CONDITIONS START WHEN I Click song next to each other
  } else if (state == true) {
    return (
      <tr>
        <td
          onClick={() => {
            setAudioIcon(
              [{ audioIcon: true, id: id, index: index, isActive: true }],
              playMusic(false),
              setClickedTableRow(index)
            );
          }}
        >
          HI
        </td>
      </tr>
    );
  } else if (state == false) {
    return (
      <tr>
        <td
          onClick={() => {
            setAudioIcon(
              [{ audioIcon: false, id: id, index: index, isActive: true }],
              playMusic(true),
              setClickedTableRow(index)
            );
          }}
        >
          Berni
        </td>
      </tr>
    );
  }
};

export default MusicTableRow;
//THis version workds a littel bit

//if (state === undefined && audioIcon[0].audioIcon == "no music yet") {
//   // console.log("FIRST CONDITION");
//   return (
//     <div>
//       <tr>
//         <td
//           onClick={() => {
//             setAudioIcon(
//               [{ audioIcon: true, id: id, index: index }],
//               playMusic(true),
//               setClickedTableRow(index),
//               setActiveSong(true)
//             );
//           }}
//         >
//           #{index + 1}.
//         </td>
//         <td></td>
//         <td>{title}</td>
//         <td>{artist}</td>
//         <td>{favoriteSong}</td>
//         <td>Icon for duration</td>
//         <td>
//           <div>Remove from libary</div>
//         </td>
//       </tr>
//     </div>
//   );
//   //CONDITIONS START WHEN I Click song next to each other
// } else if (audioIcon[0].index === index && state === true) {
//   // console.log("SECOND CONDITION");
//   // console.log("ACTIVESONG" + activeSong);

//   return (
//     <tr>
//       {state === true &&
//       audioIcon[0].index == index &&
//       activeSong == true &&
//       audioIcon[0].audioIcon == true ? (
//         <div>
//           <td
//             style={{
//               color:
//                 audioIcon[0].id === id && audioIcon[0].audioIcon == true
//                   ? "yellow"
//                   : "blue",
//             }}
//             onClick={() => {
//               setAudioIcon(
//                 [{ audioIcon: false, id: id, index: index }],
//                 playMusic(false),
//                 setClickedTableRow(index),
//                 setActiveSong(false)
//               );
//             }}
//           >
//             #{index + 1}.
//           </td>
//           <td></td>
//           <td>{title}</td>
//           <td>{artist}</td>
//           <td>{favoriteSong}</td>
//           <td>Icon for duration</td>

//           <td>
//             <div>Remove from libary</div>
//           </td>
//         </div>
//       ) : (
//         <div>
//           <td
//             onClick={() => {
//               setAudioIcon(
//                 [{ audioIcon: true, id: id, index: index }],
//                 playMusic(true),
//                 setClickedTableRow(index),
//                 setActiveSong(true)
//               );
//             }}
//           >
//             #{index + 1}.
//           </td>
//           <td></td>
//           <td>{title}</td>
//           <td>{artist}</td>
//           <td>{favoriteSong}</td>
//           <td>Icon for duration</td>

//           <td>
//             <div>Remove from libary</div>
//           </td>
//         </div>
//       )}
//     </tr>
//   );
// } else if (audioIcon[0].index === index && state === false) {
//   // console.log("THIRD CONDITION");
//   return (
//     <tr>
//       {audioIcon[0].audioIcon == false &&
//       state == false &&
//       activeSong == false &&
//       audioIcon[0].index === index ? (
//         <div>
//           <td
//             onClick={() => {
//               setAudioIcon(
//                 [{ audioIcon: true, id: id, index: index }],
//                 playMusic(true),
//                 setClickedTableRow(index),
//                 setActiveSong(true)
//               );
//             }}
//           >
//             #{index + 1}.
//           </td>
//           <td></td>
//           <td>{title}</td>
//           <td>{artist}</td>
//           <td>{favoriteSong}</td>
//           <td>Icon for duration</td>

//           <td>
//             <div>Remove from libary</div>
//           </td>
//         </div>
//       ) : (
//         <div>
//           <td
//             onClick={() => {
//               setAudioIcon(
//                 [{ audioIcon: true, id: id, index: index }],
//                 playMusic(true),
//                 setClickedTableRow(index),
//                 setActiveSong(true)
//               );
//             }}
//           >
//             #{index + 1}.
//           </td>
//           <td></td>
//           <td>{title}</td>
//           <td>{artist}</td>
//           <td>{favoriteSong}</td>
//           <td>Icon for duration</td>

//           <td>
//             <div>Remove from libary</div>
//           </td>
//         </div>
//       )}
//     </tr>
//   );
// }
//THis is without pausing
// if (state === undefined && audioIcon[0].audioIcon == "no music yet") {
//   console.log("FIRST CONDITION");
//   return (
//     <div>
//       <tr>
//         <td
//           onClick={() => {
//             setAudioIcon(
//               [{ audioIcon: true, id: id, index: index }],
//               playMusic(true),
//               setClickedTableRow(index),
//               setActiveSong(true)
//             );
//           }}
//         >
//           #{index + 1}.
//         </td>
//         <td></td>
//         <td>{title}</td>
//         <td>{artist}</td>
//         <td>{favoriteSong}</td>
//         <td>Icon for duration</td>
//         <td>
//           <div>Remove from libary</div>
//         </td>
//       </tr>
//     </div>
//   );
//   //CONDITIONS START WHEN I Click song next to each other
// } else if (audioIcon[0].index === index && state === true) {
//   console.log("SECOND CONDITION");
//   console.log("ACTIVESONG" + activeSong);
//   return (
//     <tr>
//       {state === true &&
//       clickedTableRow == index &&
//       audioIcon[0].audioIcon == true &&
//       activeSong == false ? (
//         <div>
//           <td
//             style={{
//               color:
//                 clickedTableRow == index && audioIcon[0].audioIcon == true
//                   ? "yellow"
//                   : "blue",
//             }}
//             onClick={() => {
//               setAudioIcon(
//                 [{ audioIcon: false, id: id, index: index }],
//                 playMusic(false),
//                 setClickedTableRow(index),
//                 setActiveSong(false)
//               );
//             }}
//           >
//             #{index + 1}.
//           </td>
//           <td></td>
//           <td>{title}</td>
//           <td>{artist}</td>
//           <td>{favoriteSong}</td>
//           <td>Icon for duration</td>

//           <td>
//             <div>Remove from libary</div>
//           </td>
//         </div>
//       ) : (
//         <div>
//           <td
//             onClick={() => {
//               setAudioIcon(
//                 [{ audioIcon: true, id: id, index: index }],
//                 playMusic(true),
//                 setClickedTableRow(index),
//                 setActiveSong(true)
//               );
//             }}
//           >
//             #{index + 1}.
//           </td>
//           <td></td>
//           <td>{title}</td>
//           <td>{artist}</td>
//           <td>{favoriteSong}</td>
//           <td>Icon for duration</td>

//           <td>
//             <div>Remove from libary</div>
//           </td>
//         </div>
//       )}
//     </tr>
//   );
// } else if (audioIcon[0].index === index && state === true) {
//   console.log("THIRD CONDITION");
//   console.log("ACTIVESONG" + activeSong);
//   return (
//     <tr>
//       {audioIcon[0].audioIcon == false &&
//       state == false &&
//       activeSong == false ? (
//         <div>
//           <td
//             onClick={() => {
//               setAudioIcon(
//                 [{ audioIcon: true, id: id, index: index }],
//                 playMusic(true),
//                 setClickedTableRow(index),
//                 setActiveSong(true)
//               );
//             }}
//           >
//             #{index + 1}.
//           </td>
//           <td></td>
//           <td>{title}</td>
//           <td>{artist}</td>
//           <td>{favoriteSong}</td>
//           <td>Icon for duration</td>

//           <td>
//             <div>Remove from libary</div>
//           </td>
//         </div>
//       ) : (
//         <div>
//           <td
//             onClick={() => {
//               setAudioIcon(
//                 [{ audioIcon: true, id: id, index: index }],
//                 playMusic(true),
//                 setClickedTableRow(index),
//                 setActiveSong(true)
//               );
//             }}
//           >
//             #{index + 1}.
//           </td>
//           <td></td>
//           <td>{title}</td>
//           <td>{artist}</td>
//           <td>{favoriteSong}</td>
//           <td>Icon for duration</td>

//           <td>
//             <div>Remove from libary</div>
//           </td>
//         </div>
//       )}
//     </tr>
//   );
// }
