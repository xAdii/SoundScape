import React, { useEffect, useState } from "react";
import RegisterComponent from "../components/RegisterComponent";

const Register: React.FC = () => {
  useEffect(() => {
    document.title = "SoundScape - Register";
  }, []);

  return <RegisterComponent />
};

export default Register;
