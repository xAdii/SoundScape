import { Button, Container, Tab, Table, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";

const ProfileComponent = () => {
  const { user, setUser } = useUser();
  const [songs, setSongs] = useState<any[]>([]);
  const [playlists, setPlaylists] = useState<any[]>([]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const handleDelete = async (songid: number) => {
    await fetch(`http://localhost:5000/songs/${songid}`, {
      method: "DELETE",
    });

    setSongs((prevSongs) => prevSongs.filter((song) => song.id !== songid));
  };

  const handleDeletePlaylist = async (playlistId: number) => {
    await fetch(`http://localhost:5000/playlists/${playlistId}`, {
      method: "DELETE",
    });

    setPlaylists((prevPlaylists) =>
      prevPlaylists.filter((playlist) => playlist.id !== playlistId)
    );
  };

  const calculatePlaylistLength = (playlistSongs: any[], allSongs: any[]) => {
    let totalMinutes = 0;
    let totalSeconds = 0;

    playlistSongs.forEach((songId) => {
      const song = allSongs.find((s) => s.id === songId);

      const [minutes, seconds] = song.length
        .split(":")
        .map((time: string) => parseInt(time, 10));

      totalMinutes += minutes;
      totalSeconds += seconds;
    });

    totalMinutes += Math.floor(totalSeconds / 60);
    totalSeconds = totalSeconds % 60;

    return `${totalMinutes}:${totalSeconds.toString().padStart(2, "0")}`;
  };

  const countNonDeletedSongs = (playlistSongs: any[]) => {
    return playlistSongs.filter((song) => !song.deleted).length;
  };

  useEffect(() => {
    const fetchSongs = async () => {
      if (user) {
        const response = await fetch(
          `http://localhost:5000/users/${user.email}/songs`
        );
        const data = await response.json();
        setSongs(data.songs || []);
      }
    };

    const fetchPlaylists = async () => {
      if (user) {
        const response = await fetch(
          `http://localhost:5000/users/${user.email}/playlists`
        );
        const data = await response.json();
        setPlaylists(data.playlists || []);
      }
    };

    fetchSongs();
    fetchPlaylists();
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {songs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center">
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
                    <td className="text-center">
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(song.id)}
                      >
                        Delete
                      </Button>
                    </td>
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {playlists.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center">
                    You currently have no Playlists to display.
                  </td>
                </tr>
              ) : (
                playlists.map((playlist, index) => (
                  <tr key={playlist.id}>
                    <td>{index + 1}</td>
                    <td>{playlist.title}</td>
                    <td>{playlist.genre}</td>
                    <td>{countNonDeletedSongs(playlist.songs)}</td>
                    <td>{calculatePlaylistLength(playlist.songs, songs)}</td>
                    <td className="text-center">
                      <Button
                        variant="danger"
                        onClick={() => handleDeletePlaylist(playlist.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              )}
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
