import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Playlists.css";
import JazzCover from "./jazz-playlist.jpg";
import RockCover from "./rock-playlist.jpg";
import ClassicCover from "./classic-playlist.jpg";
import FocusCover from "./focus-playlist.jpeg";
import HipHopCover from "./hip-hop-playlist.jpg";
import AustroPopCover from "./austro-pop-playlist.jpg";
import NinetiesCover from "./90s-playlist.jpg";
import MusicAroundTheWorld from "./music-around-the-world.jpg";

const Playlist = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src={JazzCover} alt="jazz-cover" title="jazz-playlist"></img>
          </Col>
          <Col>
            <img src={RockCover} alt="rock-cover" title="time to rock 🤘"></img>
          </Col>
          <Col>
            <img
              src={ClassicCover}
              alt="classic-cover"
              title="classic-music"
            ></img>
          </Col>
          <Col>
            <img
              src={FocusCover}
              alt="focus-cover"
              title="time to focus 🧠"
            ></img>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src={HipHopCover}
              alt="hip-hop-cover"
              title="will the real slim shady please stand up?"
            ></img>
          </Col>
          <Col>
            <img
              src={AustroPopCover}
              alt="austropop-cover"
              style={{ height: "180px" }}
              title="german-austrian-language songs"
            ></img>
          </Col>
          <Col>
            <img
              src={NinetiesCover}
              alt="90s-music-cover"
              title="Hit-me-baby-one-more-time"
              style={{ height: "180px" }}
            ></img>
          </Col>
          <Col>
            <img
              src={MusicAroundTheWorld}
              alt="music-around-the-world-cover"
              title="music which I do not understand and have no clue where it comes from  "
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Playlist;
