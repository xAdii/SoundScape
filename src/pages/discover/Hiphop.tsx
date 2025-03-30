import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import DiscoverHiphopComponent from "../../components/DiscoverHiphopComponent";
import { Link } from "react-router-dom";

const DiscoverHiphop: React.FC = () => {
  useEffect(() => {
    document.title = "SoundScape - Discover Hiphop";
  }, []);

  return (
    <div>
      <div className="hero-section bg-dark text-white text-center hiphop">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h1>Discover Hip-Hop Music</h1>
              <p className="lead">
                Explore the world of Hip-Hop, where powerful beats and lyrical
                storytelling come together.
              </p>
              <Link to="/discover">
                <Button variant="primary">Discover More</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <DiscoverHiphopComponent></DiscoverHiphopComponent>
    </div>
  );
};

export default DiscoverHiphop;
