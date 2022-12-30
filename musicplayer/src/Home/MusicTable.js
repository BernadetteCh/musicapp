import React from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";

import "../Home/Home.css";

const MusicTable = () => {
  return (
    <div className="music-table" style={{ marginTop: "80px" }}>
      <Table style={{ color: "white" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <FontAwesomeIcon icon={faPause} />
            </td>
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
