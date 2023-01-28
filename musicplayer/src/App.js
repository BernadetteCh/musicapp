import React, { useState } from "react";
import "./App.css";
import Libary from "./Libary/Libary";
import Home from "./Home/Home.js";
import Playlists from "./Playlists/Playlists";
import Navigation from "./Navigation/Navigate";
import FavoriteMusic from "./FavoriteMusic/FavoriteMusic";
import AddMusic from "./AddMusic/AddMusic";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [playing, setPlaying] = useState();
  const [songId, setSongId] = useState("");

  const playPauseSong = (boolean) => {
    console.log(boolean);
    // setPlaying((playing) => !playing);
    setPlaying(boolean);
  };
  const playSongId = (id) => {
    setSongId(id);
  };

  return (
    <BrowserRouter>
      <Container
        style={{
          padding: "0px",
          marginTop: "50px",
          margin: "0px",
          maxWidth: "100%",
        }}
        className="container"
      >
        <Row>
          <Col sm={3}>
            <Navigation />
          </Col>
          <Col>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/libary"
                element={
                  <Libary
                    sameRender={playPauseSong}
                    state={playing}
                    playSong={playSongId}
                  />
                }
              ></Route>
              <Route
                path="/favorites"
                element={<FavoriteMusic sameRender={""} state={playing} />}
              ></Route>
              <Route path="/playlists" element={<Playlists />}></Route>
              <Route path="/addSong" element={<AddMusic />}></Route>
            </Routes>
          </Col>
        </Row>

        <AudioPlayer
          sameRender={playPauseSong}
          playorpause={playing}
          songId={songId}
        />
      </Container>
    </BrowserRouter>
  );
}

export default App;
