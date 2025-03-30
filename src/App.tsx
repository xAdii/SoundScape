import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/global.css";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import DiscoverHiphop from "./pages/discover/Hiphop";
import DiscoverElectronic from "./pages/discover/Electronic";
import DiscoverJazz from "./pages/discover/Jazz";
import DiscoverAmbient from "./pages/discover/Ambient";
import ChartsTrends from "./pages/ChartsTrends";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UploadSong from "./pages/upload/Song";
import UploadPlaylist from "./pages/upload/Playlist";
import NavBarComponent from "./components/NavBarComponent";
import { UserProvider } from "./context/UserContext";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <NavBarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/discover/hiphop" element={<DiscoverHiphop />} />
            <Route path="/discover/electronic" element={<DiscoverElectronic />} />
            <Route path="/discover/jazz" element={<DiscoverJazz />} />
            <Route path="/discover/ambient" element={<DiscoverAmbient />} />
            <Route path="/charts-trends" element={<ChartsTrends />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/upload/song" element={<UploadSong />} />
            <Route path="/upload/playlist" element={<UploadPlaylist />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
