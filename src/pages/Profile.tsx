import React, { useEffect } from "react";
import {
  Button,
  Dropdown,
  Container,
  Tabs,
  Tab,
  ListGroup,
} from "react-bootstrap";

const Profile: React.FC = () => {
  useEffect(() => {
    document.title = "SoundScape - Profile";
  }, []);

  return (
    <Container className="mt-4">
      <div className="display-4 text-center">Profile</div>
      <div className="mt-4 text-center">
        <Button variant="primary">Register</Button>
        <Button variant="outline-primary">Login</Button>
      </div>
      <Dropdown className="mt-4">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Upload...
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Song</Dropdown.Item>
          <Dropdown.Item>Playlist</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Tabs
        defaultActiveKey="songs"
        id="uncontrolled-tab-example"
        className="mt-4"
        data-bs-theme="dark"
      >
        <Tab eventKey="songs" title="My Songs">
          <ListGroup data-bs-theme="dark">
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              Cras justo odio
              <Button variant="outline-primary">View</Button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
              <Button variant="outline-primary">View</Button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              Morbi leo risus<Button variant="outline-primary">View</Button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              Porta ac consectetur ac
              <Button variant="outline-primary">View</Button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              Vestibulum at eros<Button variant="outline-primary">View</Button>
            </ListGroup.Item>
          </ListGroup>
        </Tab>
        <Tab eventKey="playlists" title="My Playlists">
          <ListGroup data-bs-theme="dark">
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              Cras justo odio<Button variant="outline-primary">View</Button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
              <Button variant="outline-primary">View</Button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              Morbi leo risus<Button variant="outline-primary">View</Button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              Porta ac consectetur ac
              <Button variant="outline-primary">View</Button>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              Vestibulum at eros<Button variant="outline-primary">View</Button>
            </ListGroup.Item>
          </ListGroup>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Profile;
