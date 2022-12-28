import React from "react";
import AlbumPictures from "./AlbumPictures";
import SearchForMusic from "./Filter";
import MusicTable from "./MusicTable";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1 className="header" style={{ fontSize: "60px" }}>
        MyMusicPlayer
      </h1>
      <AlbumPictures />
      <SearchForMusic />
      <MusicTable />
    </div>
  );
};

export default Home;
