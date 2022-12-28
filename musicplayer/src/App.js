import "./App.css";
import Home from "./Home";
import Playlists from "./Playlists";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/playlists" element={<Playlists />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
