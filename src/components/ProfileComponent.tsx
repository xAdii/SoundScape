import { Button, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProfileComponent = () => {
  const { user } = useUser();

  if (!user)
    return (
      <Container>
        <div className="text-center">
          <div className="mt-4 display-6">You are currently not logged in.</div>
          <div className="mt-4">
            <Link to="/register" className="mx-2">
              <Button variant="success">Create a new Account</Button>
            </Link>
            <Link to="/login" className="mx-2">
              <Button variant="success">Login to your Account</Button>
            </Link>
          </div>
        </div>
      </Container>
    );

  return (
    <Container>
      <Dropdown className="mt-4">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Upload...
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Song</Dropdown.Item>
          <Dropdown.Item>Playlist</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};

export default ProfileComponent;
