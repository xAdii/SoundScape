import React, { useEffect } from "react";
import NavBar from "../components/NavBar.js";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Soundscape - Home";
  }, []);

  return (
    <div>
      <NavBar />
    </div>
  );
};

export default Home;
