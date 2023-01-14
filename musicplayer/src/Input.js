import React from "react";

import "../src/Libary/Libary.css";

const Filter = ({ type, placeholder, onChange }) => {
  const inputValue = (e) => {
    onChange(e.target.files[0]);
  };
  return (
    <div className="search-section">
      <input
        type={type}
        placeholder={placeholder}
        onChange={inputValue}
      ></input>
    </div>
  );
};

export default Filter;
