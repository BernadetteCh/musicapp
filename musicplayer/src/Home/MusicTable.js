import React from "react";
import Table from "react-bootstrap/Table";
import PlayPauseIcon from "../PlayPauseIcon";
import "../Home/Home.css";
import UnfilledHeart from "../Icons/UnfilledHeart.png";
import FilledHeart from "../Icons/HeartFilled.png";

const MusicTable = ({ sameRender, state }) => {
  const playPause = () => {
    sameRender(state);
  };

  return (
    <div className="music-table" style={{ marginTop: "80px" }}>
      <Table style={{ color: "white" }}>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Artist</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <PlayPauseIcon sameRender={playPause} state={state} />
            </td>
            <td>I Walk On Water</td>
            <td>Kaleo</td>
            <td>
              {/* <i className="fa-solid fa-heart favorite-song"></i> */}
              <img src={UnfilledHeart} className="favorite-song"></img>
              <img src={FilledHeart} className="favorite-song"></img>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MusicTable;
