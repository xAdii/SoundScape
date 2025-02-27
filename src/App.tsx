import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles/global.css';
import Home from './pages/Home';
import Discover from './pages/Discover';
import ChartsTrends from './pages/ChartsTrends';
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;