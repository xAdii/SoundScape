import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt="SoundScape Logo"
            src="favicon.ico"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          SoundScape
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/discover">
              Discover Music
            </Nav.Link>
            <Nav.Link as={Link} to="/charts-trends">
              Charts & Trends
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/profile">
              <Button variant="outline-success">Profile</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
