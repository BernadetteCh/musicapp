import React from "react";

import "../src/Home/Home.css";

const Filter = ({ type, placeholder }) => {
  return (
    <div className="search-section">
      <form>
        <input type={type} placeholder={placeholder}></input>
      </form>
    </div>
  );
};

export default Filter;
