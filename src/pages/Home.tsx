import React, { useEffect } from "react";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Soundscape - Home";
  }, []);

  return (
    <div className="container">
      <h1>Welcome to Soundscape</h1>
      <p>Your go-to platform for discovering music!</p>
      {/* Here, you can add components to display music recommendations */}
    </div>
  );
};

export default Home;
