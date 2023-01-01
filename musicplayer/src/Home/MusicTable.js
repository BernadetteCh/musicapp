import React from "react";
import Table from "react-bootstrap/Table";
import PlayPauseIcon from "../PlayPauseIcon";
import "../Home/Home.css";
import UnfilledHeart from "../Icons/UnfilledHeart.png";
import FilledHeart from "../Icons/Heartfilled.png";

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
              <img
                src={UnfilledHeart}
                className="favorite-song"
                alt="no-favorite-song"
              ></img>
              <img
                src={FilledHeart}
                className="favorite-song"
                alt="favorite-song"
              ></img>
            </td>
          </tr>
          <tr>
            <td>
              <PlayPauseIcon sameRender={playPause} state={state} />
            </td>
            <td>Bohemian Rhapsody </td>
            <td>Queen</td>
            <td>
              <img
                src={UnfilledHeart}
                className="favorite-song"
                alt="no-favorite-song"
              ></img>
              <img
                src={FilledHeart}
                className="favorite-song"
                alt="favorite-song"
              ></img>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MusicTable;
