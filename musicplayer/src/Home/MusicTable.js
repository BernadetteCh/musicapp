import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import PlayPauseIcon from "../PlayPauseIcon";
import "../Home/Home.css";

const MusicTable = ({ sameRender, state }) => {
  const [playing, setPlaying] = useState();

  const playPause = () => {
    sameRender(state);
  };

  // useEffect(() => {
  //  setToggle((toggle)=>!toggle)
  // }, [state, sameRender]);
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
              <i className="fa-solid fa-heart favorite-song"></i>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MusicTable;
