import { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useUser } from "../context/UserContext";

const UploadPlaylistComponent = () => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    songs: [] as number[],
  });

  const [uploadedSongs, setUploadedSongs] = useState<any[]>([]);
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);
  const [error, setError] = useState<string | boolean>(false);

  const { user } = useUser();

  useEffect(() => {
    const fetchUploadedSongs = async () => {
      if (user) {
        const response = await fetch(
          `http://localhost:5000/users/${user.email}/songs`
        );
        const data = await response.json();
        setUploadedSongs(data.songs || []);
      }
    };

    fetchUploadedSongs();
  }, [user]);

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSongSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const songId = parseInt(e.target.value, 10);
    setFormData((prev) => {
      const selectedSongs = e.target.checked
        ? [...prev.songs, songId]
        : prev.songs.filter((id) => id !== songId);

      return {
        ...prev,
        songs: selectedSongs,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      setLoginAlert(true);
      return;
    }

    if (formData.songs.length === 0) {
      setError("You need to select at least 1 song!");
      setValidated(true);
      return;
    }

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const playlistData = {
        ...formData,
        uploadedBy: user.email,
      };

      const response = await fetch("http://localhost:5000/upload/playlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(playlistData),
      });

      const data = await response.json();

      if (data.success) {
        setError(false);
        setSubmitted(true);
      } else {
        setError("Playlist upload failed. Please try again!");
      }
    }
    setValidated(true);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-5">Upload a Playlist to Soundscape</h2>
      {submitted && (
        <Alert variant="success">
          Playlist Upload Finished! You can view it on your Profile! 🎶
        </Alert>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      {loginAlert && (
        <Alert
          variant="warning"
          onClose={() => setLoginAlert(false)}
          dismissible
        >
          You need to be logged in to upload a playlist!
        </Alert>
      )}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="title" className="mt-3">
          <Form.Label>Playlist Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a playlist title.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="genre" className="mt-3">
          <Form.Label>Genre</Form.Label>
          <Form.Select
            required
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          >
            <option value="">Select a genre...</option>
            <option value="hiphop">Hip-Hop</option>
            <option value="electronic">Electronic</option>
            <option value="jazz">Jazz</option>
            <option value="ambient">Ambient</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select a genre.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="songs" className="mt-3">
          <Form.Label>Choose Songs for Playlist</Form.Label>
          <div>
            {uploadedSongs.length === 0 ? (
              <p>No songs uploaded yet.</p>
            ) : (
              uploadedSongs.map((song) => (
                <Form.Check
                  key={song.id}
                  type="checkbox"
                  label={`"${song.title}" by ${song.artist}`}
                  value={song.id}
                  onChange={handleSongSelection}
                  checked={formData.songs.includes(song.id)}
                />
              ))
            )}
          </div>
          <Form.Control.Feedback type="invalid">
            Please select at least one song.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4 w-100">
          Upload Playlist
        </Button>
      </Form>
    </Container>
  );
};

export default UploadPlaylistComponent;
