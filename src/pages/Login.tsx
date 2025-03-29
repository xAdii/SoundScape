import React, { useEffect, useState } from "react";
import LoginComponent from "../components/LoginComponent";

const Login: React.FC = () => {
  useEffect(() => {
    document.title = "SoundScape - Login";
  }, []);

  return <LoginComponent />
};

export default Login;
