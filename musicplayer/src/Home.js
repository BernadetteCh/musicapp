import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Hi from Home
      <Link to="/playlists">To Playlists</Link>
    </div>
  );
};

export default Home;
