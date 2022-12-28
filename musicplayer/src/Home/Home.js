import React from "react";
import icon from "../images/searchicon.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1 className="header" style={{ fontSize: "80px" }}>
        MyMusicPlayer
      </h1>
      <div className="album-picutres">
        <img
          src="https://cdn.shoepping.at/medias/sys_master/cloud-images-1714-21211779/images/1714-21211779/h34/h11/13064392114206/vinyl-surface-sounds-kaleo-2-lp-analog-1617682957070-885.jpg"
          alt="kaleo-album-cover"
        ></img>
      </div>
      <div className="search-section">
        <form>
          <input type="text" placeholder="search"></input>
          <img src={icon} alt="search-icon" className="icon"></img>
        </form>
      </div>
    </div>
  );
};

export default Home;
