import { React, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ColorSel from "../ColorSel/ColorSel";
import Grid from "../Grid/Grid";
import { ColorPickContext } from "../../Utils/ColorPickContext/ColorPickContext";

export default function Main() {
  useEffect(() => {
    console.log("window location", window.location);
    fetch("https://discord.com/api/oauth2/@me")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  // window.onload = () => {
  //   const fragment = new URLSearchParams(window.location.hash.slice(1));
  //   const [accessToken, tokenType] = [
  //     fragment.get("access_token"),
  //     fragment.get("token_type"),
  //   ];

  //   if (!accessToken) {
  //     return (document.getElementById("login").style.display = "block");
  //   }

  //   fetch("https://discord.com/api/users", {
  //     headers: {
  //       authorization: `${tokenType} ${accessToken}`,
  //     },
  //   })
  //     .then((result) => result.json())
  //     .then((response) => {
  //       const { username, discriminator } = response;
  //       console.log("username:", username);
  //       document.getElementById(
  //         "info"
  //       ).innerText += ` ${username}#${discriminator}`;
  //     })
  //     .catch(console.error);
  // };
  // https://discord.com/api/users/@me

  return (
    <Container>
      <ColorPickContext.Provider value={ColorPickContext._currentValue.color}>
        <Container className="tray">
          <Row>
            <Col id="appTitle">
              <h1>
                <p className="pixel">Pixel</p>
                <div id="info">Hoi!</div>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <ColorSel />
            </Col>
          </Row>
          <Container>
            <Grid />
          </Container>
        </Container>
      </ColorPickContext.Provider>
    </Container>
  );
}
