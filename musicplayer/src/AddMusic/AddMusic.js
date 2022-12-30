import React from "react";
import Input from "../Input";
import "../Home/Home.css";

const AddMusic = () => {
  return (
    <div style={{ marginLeft: "5%" }} className="mb-5">
      <form>
        <Input type="text" placeholder="add mp3 file" />
        <Input type="text" placeholder="Songtitle" />
        <Input type="text" placeholder="Artist" />
        <select style={{ background: "#d4a50d63", color: "white" }}>
          <option defaultValue="select" placeholder="select">
            -- Select Playlist --
          </option>
          <option>Jazz</option>
          <option>Rock'n&Roll</option>
          <option>Classic</option>
          <option>Focus</option>
          <option>HipHop</option>
          <option>AustroPop</option>
          <option>90s</option>
          <option>Around The World</option>
        </select>
        <button> Add to libary</button>
      </form>
    </div>
  );
};

export default AddMusic;
