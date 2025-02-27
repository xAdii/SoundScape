import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "SoundScape - Home";
  }, []);

  return (
    <Container className="mt-4">
      <div className="display-4">Home</div>
    </Container>
  );
};

export default Home;
