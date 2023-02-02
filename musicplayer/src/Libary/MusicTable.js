import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import PlayPauseIcon from "../AudioPlayer/PlayPauseIcon";
import "../Libary/Libary.css";
import MusicTableRow from "./MusicTableRow";
import UnfilledHeart from "../Icons/UnfilledHeart.png";
import FilledHeart from "../Icons/Heartfilled.png";

const fetchMusic = async (dataSetter) => {
  const response = await fetch("http://localhost:8080/api/");
  const data = await response.json();
  //return data;
  dataSetter(data);
};

const MusicTable = ({ sameRender, state, playSong }) => {
  const [music, setMusic] = useState();
  const [musicList, setMusicList] = useState();
  const [boolean, setBoolean] = useState();
  const [id, setId] = useState();

  const playPause = (boolean) => {
    setBoolean(boolean, sameRender(boolean));
  };
  const playPauseSong = (id) => {
    playSong(id);
  };

  useEffect(() => {
    const getData = async () => {
      await fetchMusic(setMusic);
      // const newMusicList = [...m];
      // console.log(newMusicList);
      // await setMusicList(m);
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
          {music === undefined
            ? console.log("...loadig")
            : music.map((data, key) => {
                return (
                  <MusicTableRow
                    key={key}
                    index={key}
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
          {/* <tr>
            <td>
              <PlayPauseIcon sameRender={playPause} state={state} />
            </td>
            <td>I Walk On Water</td>
            <td>Kaleo</td>
            <td>
              <img
                src={UnfilledHeart}
                className="favorite-song"
                alt="no-favorite-song"
              ></img>
              <img
                src={FilledHeart}
                className="favorite-song"
                alt="favorite-song"
              ></img>
            </td>
          </tr>
          <tr>
            <td>
              <PlayPauseIcon sameRender={playPause} state={state} />
            </td>
            <td>Bohemian Rhapsody </td>
            <td>Queen</td>
            <td>
              <img
                src={UnfilledHeart}
                className="favorite-song"
                alt="no-favorite-song"
              ></img>
              <img
                src={FilledHeart}
                className="favorite-song"
                alt="favorite-song"
              ></img>
            </td>
          </tr> */}
        </tbody>
      </Table>
      {/* <div>
        <AudioPlayer sameRender={playPause} playorpause={boolean} songId={id} />
      </div> */}
    </div>
  );
};

export default MusicTable;
