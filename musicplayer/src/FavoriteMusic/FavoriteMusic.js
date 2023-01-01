import React from "react";
import MusicTable from "../Libary/MusicTable";

const FavoriteMusic = ({ sameRender, state }) => {
  return (
    <div>
      <MusicTable sameRender={sameRender} state={state} />
    </div>
  );
};

export default FavoriteMusic;
