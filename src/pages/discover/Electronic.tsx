import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import DiscoverElectronicComponent from "../../components/DiscoverElectronicComponent";
import { Link } from "react-router-dom";

const DiscoverElectronic: React.FC = () => {
  useEffect(() => {
    document.title = "SoundScape - Discover Electronic";
  }, []);

  return (
    <div>
      <div className="hero-section bg-dark text-white text-center electronic">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h1>Discover Electronic Music</h1>
              <p className="lead">
                Immerse yourself in the pulse of Electronic music, featuring
                deep bass and mesmerizing synths.
              </p>
              <Link to="/discover">
                <Button variant="primary">Discover More</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <DiscoverElectronicComponent></DiscoverElectronicComponent>
    </div>
  );
};

export default DiscoverElectronic;
