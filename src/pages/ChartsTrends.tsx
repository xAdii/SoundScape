import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

const ChartsTrends: React.FC = () => {
  useEffect(() => {
    document.title = "SoundScape - Charts & Trends";
  }, []);

  return (
    <Container className="mt-4">
      <div className="display-4">Charts & Trends</div>
    </Container>
  );
};

export default ChartsTrends;
