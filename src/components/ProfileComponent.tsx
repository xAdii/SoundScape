import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProfileComponent = () => {
  const { user, setUser } = useUser();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

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
      <div className="text-center">
        <div className="mt-4 display-6">Welcome back {user.name}!</div>
      </div>
      <Container>
        <Button variant="danger" onClick={handleLogout}>Logout</Button>
      </Container>
    </Container>
  );
};

export default ProfileComponent;
