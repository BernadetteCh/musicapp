import React, { useState } from "react";
//import FormData from "form-data";

import Input from "../Input";
import "../Libary/Libary.css";

const AddMusic = () => {
  // const FormData = require("react-form-data");
  const [file, setFile] = useState();

  const uploadFile = (e) => {
    setFile(e);
    // setFile(value);
  };

  const converBase64 = () => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      // fileReader.onerror(() => {
      //   reject(error);
      // });
    });
  };
  const sendData = async (e) => {
    e.preventDefault();
    const base64 = await converBase64();
    //console.log(base64);

    const response = await fetch("http://localhost:8080/api/newSong", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },

      body: JSON.stringify({ file: base64 }),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    // <div style={{ marginLeft: "5%" }} className="mb-5">
    <form>
      <Input type="file" placeholder="add mp3 file" onChange={uploadFile} />
      <Input type="text" placeholder="Songtitle" />
      <Input type="text" placeholder="Artist" />
      <select style={{ background: "#d4a50d3d", color: "white" }}>
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
      <button onClick={sendData}> Add to libary</button>
    </form>
  );
};

export default AddMusic;
