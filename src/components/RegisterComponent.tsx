import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

const RegisterComponent = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agreeToMusic: false,
  });

  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setSubmitted(true);
    }
    setValidated(true);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-5">Register for SoundScape</h2>
      {submitted && (
        <Alert variant="success">
          Welcome! You're now part of the SoundScape family! 🎵
        </Alert>
      )}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a username.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email" className="mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a password.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="agreeToMusic" className="mt-4">
          <Form.Check
            required
            type="checkbox"
            label="I agree to receive very nice music 🎶"
            name="agreeToMusic"
            checked={formData.agreeToMusic}
            onChange={handleChange}
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4 w-100">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterComponent;
