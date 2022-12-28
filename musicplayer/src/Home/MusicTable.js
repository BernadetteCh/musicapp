import React from "react";
import Table from "react-bootstrap/Table";
import "../Home/Home.css";

const MusicTable = () => {
  return (
    <div className="music-table" style={{ marginTop: "80px" }}>
      <Table style={{ color: "white" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Lieblingssong?!</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>I walk on Water</td>
            <td>Kaleo</td>
            <td>
              <i class="fa-solid fa-heart favorite-song"></i>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default MusicTable;
