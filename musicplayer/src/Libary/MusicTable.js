import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "../Libary/Libary.css";
import MusicTableRow from "./MusicTableRow";

const fetchMusic = async (dataSetter) => {
  const response = await fetch("http://localhost:8080/api/");
  const data = await response.json();
  dataSetter(data);
};

const MusicTable = ({ sameRender, state, playSong }) => {
  const [songs, setSongs] = useState();
  const [boolean, setBoolean] = useState();

  const playPause = (boolean) => {
    setBoolean(boolean, sameRender(boolean));
  };
  const playPauseSong = (id) => {
    playSong(id);
  };

  useEffect(() => {
    const getData = async () => {
      await fetchMusic(setSongs);
    };

    getData();
  }, []);

  return (
    <div
      className="music-table"
      style={{ marginTop: "80px", marginBottom: "180px" }}
    >
      <Table style={{ color: "white" }}>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Title</th>
            <th>Artist</th>
            <th>Icon for favorite</th>
            <th>Duration</th>
            <th>Icon for delete</th>
          </tr>
        </thead>
        <tbody>
          {songs === undefined
            ? console.log("...loadig")
            : songs.map((data, index) => {
                return (
                  <MusicTableRow
                    key={index}
                    index={index}
                    id={data._id}
                    title={data.title}
                    artist={data.artist}
                    favoriteSong={"💜"}
                    file={data.file}
                    sameRender={playPause}
                    myKey={data._id}
                    state={state}
                    playSong={playPauseSong}
                  />
                );
              })}
        </tbody>
      </Table>
    </div>
  );
};

export default MusicTable;
