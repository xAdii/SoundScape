import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
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
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Browse Songs..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
