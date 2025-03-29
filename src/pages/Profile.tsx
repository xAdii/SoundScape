import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import ProfileComponent from "../components/ProfileComponent";

const Profile: React.FC = () => {
  useEffect(() => {
    document.title = "SoundScape - Profile";
  }, []);

  return (
    <Container className="mt-4">
      <div className="display-4 text-center">Profile</div>
      <ProfileComponent></ProfileComponent>
    </Container>
  );
};

export default Profile;
