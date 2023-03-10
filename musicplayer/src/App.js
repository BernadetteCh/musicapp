import "./App.css";
import Home from "./Home/Home";
import Playlists from "./Playlists";
import Navigation from "./Navigation/Navigate";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container className="container">
        <Row>
          <Col sm={3}>
            <Navigation />
          </Col>
          <Col>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/playlists" element={<Playlists />}></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
