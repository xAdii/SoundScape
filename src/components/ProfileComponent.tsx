import { Button, Container, Tab, Table, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";

const ProfileComponent = () => {
  const { user, setUser } = useUser();
  const [songs, setSongs] = useState<any[]>([]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const fetchSongs = async () => {
      if (user) {
        const response = await fetch(`http://localhost:5000/songs/user/${user.email}`);
        const data = await response.json();
        setSongs(data.songs || []);
      }
    };

    fetchSongs();
  }, [user]);

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
      <div className="text-center mt-4 display-6">
        Welcome back {user.name}!
      </div>
      <Link to="/upload/song">
        <Button variant="success" className="mt-5">
          Upload a Song
        </Button>
      </Link>
      <Link to="/upload/playlist">
        <Button variant="success" className="mt-5 mx-2">
          Create a Playlists
        </Button>
      </Link>

      <Tabs defaultActiveKey="songs" className="mt-3" fill>
        <Tab eventKey="songs" title="Songs">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Genre</th>
                <th>Artist</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              {songs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center">
                    You currently have no Songs to display.
                  </td>
                </tr>
              ) : (
                songs.map((song, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{song.title}</td>
                    <td>{song.genre}</td>
                    <td>{song.artist}</td>
                    <td>{song.length}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="playlists" title="Playlists">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Genre</th>
                <th>Songs</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="text-center">
                  You currently have no Playlists to display.
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>
      </Tabs>
      <Button variant="danger" onClick={handleLogout} className="mt-5">
        Logout
      </Button>
    </Container>
  );
};

export default ProfileComponent;
