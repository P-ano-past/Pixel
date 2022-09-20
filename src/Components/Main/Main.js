import { React, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ColorSel from "../ColorSel/ColorSel";
import Grid from "../Grid/Grid";
import { ColorPickContext } from "../../Utils/ColorPickContext/ColorPickContext";
import axios from "axios";
var qs = require("qs");

export default function Main() {
  const getInfo = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeValue = urlParams.get("code");
    const params = new URLSearchParams();
    params.append("client_id", process.env.REACT_APP_CLIENT_ID);
    params.append("client_secret", process.env.REACT_APP_CLIENT_SECRET);
    params.append("grant_type", "authorization_code");
    params.append("code", codeValue);
    params.append("redirect_uri", process.env.REACT_APP_CLIENT_REDIRECT);
    params.append("scope", "identify email");

    var data = qs.stringify({
      client_id: "1012104656433979433",
      client_secret: "JNQeg3Gpsi90gwNCC7nhHRFsbYvauwNb",
      code: codeValue,
      redirect_uri: "http://localhost:3001/auth/redirect",
      grant_type: "authorization_code",
    });
    var config = {
      method: "post",
      url: "https://discord.com/api/oauth2/token",
      headers: {
        Authorization: "Bearer qvfZPybqVKttGBYx0VmQc4GE6QKToG",
        "Content-Type": "application/x-www-form-urlencoded",
        Cookie:
          "__cfruid=95b06f8eb82625d25ea743bede73536522e8ffd1-1663703266; __dcfduid=584b781e32e011edb6f4aa924745bf25; __sdcfduid=584b781e32e011edb6f4aa924745bf25f66a6891db401d468350f95b613e93be417523e6ca8a1c8d589f9ce91608f6c3",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log("response", response);
        //response.data.access_token is the id for users logging in.
        //refresh token is something else i don't fully undrestand yet.
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container>
      <ColorPickContext.Provider value={ColorPickContext._currentValue.color}>
        <Container className="tray">
          <Row>
            <Col id="appTitle">
              <h1>
                <p className="pixel">Pixel</p>
                <div id="info" onClick={getInfo}>
                  Hoi!
                </div>
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
