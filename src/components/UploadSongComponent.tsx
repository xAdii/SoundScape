import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useUser } from "../context/UserContext";

const UploadSongComponent = () => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    artist: "",
    length: "",
  });

  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);
  const [error, setError] = useState(false);

  const { user } = useUser();

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      setLoginAlert(true);
      return;
    }

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const songData = {
        ...formData,
        uploadedBy: user.email,
      };

      const response = await fetch("http://localhost:5000/upload/song", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(songData),
      });

      const data = await response.json();

      if (data.success) {
        setError(false);
        setSubmitted(true);
      } else {
        setError(true);
      }
    }
    setValidated(true);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-5">Upload a Song to Soundscape</h2>
      {submitted && (
        <Alert variant="success">
          Upload Finished! You can view the Song on your Profile! 🎵
        </Alert>
      )}
      {error && <Alert variant="danger">Error! Upload failed! 🎵</Alert>}
      {loginAlert && (
        <Alert
          variant="warning"
          onClose={() => setLoginAlert(false)}
          dismissible
        >
          You need to be logged in to upload a song!
        </Alert>
      )}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="title" className="mt-3">
          <Form.Label>Song Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a title.
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
            <option value="">Select a genre ...</option>
            <option value="hiphop">Hip-Hop</option>
            <option value="electronic">Electronic</option>
            <option value="jazz">Jazz</option>
            <option value="ambient">Ambient</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select a genre.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="artist" className="mt-3">
          <Form.Label>Artist Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide an artist.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="length" className="mt-3">
          <Form.Label>Song length</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="mm:ss"
            name="length"
            value={formData.length}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a length.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4 w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default UploadSongComponent;
