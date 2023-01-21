import React from "react";
import AlbumPictures from "./AlbumPictures";
import SearchForMusic from "../Input";
import MusicTable from "./MusicTable";

import icon from "../images/searchicon.png";
import "./Libary.css";

const Libary = ({ sameRender, state, playSong }) => {
  const playSongId = (id) => {
    playSong(id);
  };
  const playPauseSong = (boolean) => {
    console.log(boolean);
    sameRender(boolean);
  };
  return (
    <div className="mb-5">
      <AlbumPictures />
      <SearchForMusic
        type="text"
        placeholder="What would you like to hear ? "
      />
      {/* <img src={icon} alt="search-icon" className="icon"></img> */}
      <MusicTable
        sameRender={playPauseSong}
        state={state}
        playSong={playSongId}
      />
    </div>
  );
};

export default Libary;
