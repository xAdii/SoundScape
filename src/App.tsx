import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles/global.css';
import Home from './pages/Home';
import Discover from './pages/Discover';
import ChartsTrends from './pages/ChartsTrends';
import Profile from './pages/Profile';
import NavBarComponent from './components/NavBarComponent';

const App: React.FC = () => {
  return (
    <Router>
      <NavBarComponent />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/charts-trends" element={<ChartsTrends />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;