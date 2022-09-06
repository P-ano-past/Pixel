import React from "react";
import { Button } from "react-bootstrap";

export default function Login() {
  return (
    <Button
      id="login"
      href="https://discord.com/api/oauth2/authorize?client_id=1012104656433979433&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fredirect&response_type=code&scope=identify%20email"
    >
      Discord Login
    </Button>
  );
}
