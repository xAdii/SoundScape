import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import DiscoverAmbientComponent from "../../components/DiscoverAmbientComponent";
import { Link } from "react-router-dom";

const DiscoverAmbient: React.FC = () => {
  useEffect(() => {
    document.title = "SoundScape - Discover Ambient";
  }, []);

  return (
    <div>
      <div className="hero-section bg-dark text-white text-center ambient">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h1>Discover Ambient Music</h1>
              <p className="lead">
                Filled with atmospheric soundscapes, calming tones, and a focus
                on mood and texture.
              </p>
              <Link to="/discover">
                <Button variant="primary">Discover More</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <DiscoverAmbientComponent></DiscoverAmbientComponent>
    </div>
  );
};

export default DiscoverAmbient;
