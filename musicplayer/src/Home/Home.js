import React from "react";
import AlbumPictures from "./AlbumPictures";
import SearchForMusic from "../Input";
import MusicTable from "./MusicTable";

import icon from "../images/searchicon.png";
import "./Home.css";

const Home = ({ sameRender, state }) => {
  return (
    <div className="mb-5">
      {/* <h1 className="header" style={{ fontSize: "28px" }}>
        Where words fail, music speaks. ...
      </h1> */}
      <AlbumPictures />
      <SearchForMusic type="text" placeholder="...search" />
      <img src={icon} alt="search-icon" className="icon"></img>
      <MusicTable sameRender={sameRender} state={state} />
    </div>
  );
};

export default Home;
