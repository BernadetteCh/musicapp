import React, { useState } from "react";
import { Base64 } from "js-base64";
import "../Libary/Libary.css";

const AddMusic = () => {
  const [inputValue, setInputValue] = useState({
    file: "",
    title: "",
    artist: "",
    playlist: "",
    favorite: "false",
  });

  const uploadFile = (e) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
  };
  const saveInputValue = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const converBase64 = () => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(inputValue.file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
    });
  };

  const clearLocalStorage = () => {
    const items = JSON.parse(window.localStorage.getItem("icon"));
    if (items) {
      window.localStorage.clear();
    } else {
      console.log("Nothing in localStorage");
    }
  };
  const sendData = async (e) => {
    e.preventDefault();
    const base64 = await converBase64();
    console.log(base64);
    console.log(inputValue.artist);
    console.log(inputValue.playlist);
    console.log(inputValue.title);
    const response = await fetch("http://localhost:8080/api/newSong", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
      body: JSON.stringify({
        file: base64,
        title: inputValue.title,
        artist: inputValue.artist,
        playlist: inputValue.playlist,
      }),
    });
    const data = await response.json();
    console.log(data);

    await clearLocalStorage();

    setInputValue({ title: "", file: "", artist: "", playlist: "" });
  };

  return (
    <div className="addmusic-form">
      <form>
        <input
          type="file"
          name="file"
          placeholder="add mp3 file"
          onChange={uploadFile}
        />
        <input
          type="text"
          name="title"
          value={inputValue.title}
          placeholder="Songtitle"
          onChange={saveInputValue}
        />
        <input
          type="text"
          placeholder="Artist"
          value={inputValue.artist}
          name="artist"
          onChange={saveInputValue}
        />
        <select
          // style={{ background: "#d4a50d3d", color: "white" }}
          name="playlist"
          onChange={saveInputValue}
        >
          <option defaultValue="select" placeholder="select">
            -- Select Playlist --
          </option>
          <option value="Jazz">Jazz</option>
          <option value="Rock'n&Roll">Rock'n&Roll</option>
          <option vlaue="Classic">Classic</option>
          <option value="Focus">Focus</option>
          <option value="HipHop">HipHop</option>
          <option value="AustroPoP">AustroPop</option>
          <option value="90s">90s</option>
          <option value="Around The World">Around The World</option>
        </select>
        <button onClick={sendData}> Add to libary</button>
      </form>
    </div>
  );
};

export default AddMusic;
