import React, { useEffect, useState } from "react";
import AlbumPictures from "./AlbumPictures";
import SearchForMusic from "../Input";
import MusicTable from "./MusicTable";

import icon from "../images/searchicon.png";
import "./Libary.css";

const fetchMusic = async (dataSetter) => {
  const response = await fetch("http://localhost:8080/api/");
  const data = await response.json();
  dataSetter(data);
};

const sendInputValueToServer = async (filterValue, dataSetter) => {
  const url = "http://localhost:8080/api/filter";
  const response = await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ userInput: filterValue }),
  });

  if (!response.ok) {
    console.log(`Error: ${response.status}${response}`);
  } else {
    const data = await response.json();
    dataSetter(data);
  }
};
const Libary = ({ sameRender, state, playSong }) => {
  const [filterValue, setFilterValue] = useState("");
  const [musicData, setMusicData] = useState([]);

  const playSongId = (id) => {
    playSong(id);
  };
  const playPauseSong = (boolean) => {
    sameRender(boolean);
  };

  // useEffect(() => {
  //   const getData = async () => {
  //     await fetchMusic(setMusicData);
  //   };

  //   getData();
  // }, []);

  /*const timer = setTimeout(() => {
      if (
        (inputValue !== "" && filterValue === "position") ||
        (inputValue !== "" && filterValue === "level")
      ) {
        sendInput(inputValue, filterValue, updateData);
      } else {
        displayAllEmployees(updateData);
      }
    }, 500);

    return () => clearTimeout(timer);*/
  useEffect(() => {
    const timer = setTimeout(() => {
      if (filterValue !== "") {
        sendInputValueToServer(filterValue, setMusicData);
      } else {
        fetchMusic(setMusicData);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [filterValue]);

  return (
    <div className="mb-5">
      <AlbumPictures />
      <input
        className="search-section"
        type="text"
        placeholder="What would you like to hear ? "
        onChange={(e) => {
          setFilterValue(e.target.value);
        }}
      ></input>
      {/* <img src={icon} alt="search-icon" className="icon"></img> */}
      <MusicTable
        sameRender={playPauseSong}
        state={state}
        playSong={playSongId}
        music={musicData}
      />
    </div>
  );
};

export default Libary;
