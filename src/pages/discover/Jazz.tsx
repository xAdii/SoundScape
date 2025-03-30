import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import DiscoverJazzComponent from "../../components/DiscoverJazzComponent";
import { Link } from "react-router-dom";

const DiscoverJazz: React.FC = () => {
  useEffect(() => {
    document.title = "SoundScape - Discover Jazz";
  }, []);

  return (
    <div>
      <div className="hero-section bg-dark text-white text-center jazz">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h1>Discover Jazz Music</h1>
              <p className="lead">
                Experience a genre filled with improvisation, soulful melodies,
                and rich instrumentation.
              </p>
              <Link to="/discover">
                <Button variant="primary">Discover More</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <DiscoverJazzComponent></DiscoverJazzComponent>
    </div>
  );
};

export default DiscoverJazz;
