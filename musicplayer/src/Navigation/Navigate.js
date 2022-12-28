import React from "react";
import "./Navigate.css";
import { Link } from "react-router-dom";

const Navigate = () => {
  return (
    <div>
      {" "}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/playlists">Playlists</Link>
        </li>
        <li>
          <Link to="/lieblingssongs">Lieblingssongs</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigate;
