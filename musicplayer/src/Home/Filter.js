import React from "react";
import icon from "../images/searchicon.png";

import "../Home/Home.css";

const Filter = () => {
  return (
    <div className="search-section">
      <form>
        <input type="text" placeholder="search ..."></input>
        <img src={icon} alt="search-icon" className="icon"></img>
      </form>
    </div>
  );
};

export default Filter;
