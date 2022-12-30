import React from "react";
import AlbumPictures from "./AlbumPictures";
import SearchForMusic from "../Input";
import MusicTable from "./MusicTable";

import icon from "../images/searchicon.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="mb-5">
      <h1 className="header" style={{ fontSize: "60px" }}>
        MyMusicPlayer
      </h1>
      <AlbumPictures />
      <SearchForMusic type="text" placeholder="...search" />
      <img src={icon} alt="search-icon" className="icon"></img>
      <MusicTable />
    </div>
  );
};

export default Home;
