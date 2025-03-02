import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/styles/home.css"

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "SoundScape - Home";
  }, []);

  return (
    <div className="home">
      <div className="hero-section bg-dark text-white text-center">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h1>Discover the Sound of the Future</h1>
              <p className="lead">
                Explore new music, trending hits, and hidden gems from around
                the world.
              </p>
              <Link to="/discover">
                <Button variant="success">Explore Now</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="intro-section">
        <div className="intro-text">
          <h2>Welcome to SoundScape</h2>
          <p>
            Your gateway to discovering amazing music. Explore new genres, find
            trending tracks, and dive into a world of sound curated just for
            you. Whether you're a casual listener or a music enthusiast, there's
            something here for everyone.
          </p>
        </div>
        <div className="intro-image">
          <img src="/images/intro.jpg" alt="Experience Music" />
        </div>
      </div>
    </div>
  );
};

export default Home;
