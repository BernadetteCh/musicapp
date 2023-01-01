import React from "react";

import "../src/Libary/Libary.css";

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
