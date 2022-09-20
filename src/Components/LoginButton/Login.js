import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

// const DiscordOauth2 = require("discord-oauth2");
// const oauth = new DiscordOauth2();
// const clientID = process.env.CLIENT_ID;
// const clientSecret = process.env.CLIENT_SECRET;
// const clientRedirect = process.env.CLIENT_REDIRECT;

export default function Login() {
  const getToken = () => {
    // oauth
    //   .tokenRequest({
    //     clientId: clientID,
    //     clientSecret: clientSecret,
    //     code: "query code",
    //     scope: "identify guilds",
    //     grantType: "authorization_code",
    //     redirectUri: clientRedirect,
    //   })
    //   .then(console.log);
  };

  return (
    <Button
      id="login"
      onClick={getToken()}
      href="https://discord.com/api/oauth2/authorize?client_id=1012104656433979433&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fauth%2Fredirect&response_type=code&scope=identify%20email"
    >
      Discord Login
    </Button>
  );
}
