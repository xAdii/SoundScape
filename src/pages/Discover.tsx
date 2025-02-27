import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../components/CardComponent";

const Discover: React.FC = () => {
  useEffect(() => {
    document.title = "SoundScape - Discover Music";
  }, []);

  return (
    <Container className="mt-4">
      <div className="display-4 text-center">Discover Music</div>
      <Row className="my-4">
        <Col md={3}>
          <CardComponent
            image="images/hiphop.png"
            title="Hip-Hop"
            text="Explore the world of Hip-Hop, where powerful beats and lyrical storytelling come together."
            button="Listen Now"
          />
        </Col>
        <Col md={3}>
          <CardComponent
            image="images/electronic.png"
            title="Electronic"
            text="Immerse yourself in the pulse of Electronic music, featuring deep bass and mesmerizing synths."
            button="Listen Now"
          />
        </Col>
        <Col md={3}>
          <CardComponent
            image="images/jazz.png"
            title="Jazz"
            text="Experience a genre filled with improvisation, soulful melodies, and rich instrumentation."
            button="Listen Now"
          />
        </Col>
        <Col md={3}>
          <CardComponent
            image="images/ambient.png"
            title="Ambient"
            text="Filled with atmospheric soundscapes, calming tones, and a focus on mood and texture."
            button="Listen Now"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Discover;
