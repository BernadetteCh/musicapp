import React from "react";
import "./Navigate.css";
import { Link } from "react-router-dom";

const Navigate = () => {
  return (
    <div
      style={{
        marginTop: "140px",
        paddingBottom: "40%",
      }}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/libary">Libary</Link>
        </li>
        <li>
          <Link to="/addSong">Add a Song</Link>
        </li>
        <li>
          <Link to="/playlists">Playlists</Link>
        </li>
        <li>
          <Link to="/favorites">Lieblingssongs</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigate;
