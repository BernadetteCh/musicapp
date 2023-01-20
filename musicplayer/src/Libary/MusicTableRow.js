import React from "react";
import PlayPauseIcon from "../PlayPauseIcon";
const MusicTableRow = ({ title, artist, favoriteSong, sameRender, state }) => {
  return (
    <tr>
      <td>
        <PlayPauseIcon sameRender={sameRender} state={state} />
      </td>
      <td>{title}</td>
      <td>{artist}</td>
      <td>{favoriteSong}</td>
      <td>
        <div>Not favorite song</div>
      </td>
    </tr>
  );
};

export default MusicTableRow;
