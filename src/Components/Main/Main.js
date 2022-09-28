import { React, useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ColorSel from "../ColorSel/ColorSel";
import Grid from "../Grid/Grid";
import { ColorPickContext } from "../../Utils/ColorPickContext/ColorPickContext";
import axios from "axios";
import UserInfo from "../UserInfo/UserInfo";
import { userContext } from "../../Utils/UserContext/UserContext";
var qs = require("qs");

export default function Main() {
  const [userName, setUserName] = useState("");
  const userInfo = useContext(userContext);
  // const [accentColor, setAccent_color] = useState("");
  // const [avatar, setAvatar] = useState("");
  // const [avatarDecor, setAvatarDecor] = useState("");
  // const [banner, setBanner] = useState("");
  // const [bannerColor, setBannerCol] = useState("");
  // const [discriminator, setDiscriminator] = useState("");
  // const [email, setEmail] = useState("");
  // const [flags, setFlags] = useState("");
  // const [id, setId] = useState("");
  // const [discLocale, setdiscLocale] = useState("");
  // const [mfa_enabled, setMfa_enabled] = useState("");
  // const [public_flags, setPublicFlags] = useState("");
  // const [verified, setVerified] = useState("");
  const [profileState, setProfileState] = useState("");

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    userInformationContext(profileState);
  });

  const userInformationContext = (e) => {
    userInfo.user = profileState;
  };

  const getInfo = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeValue = urlParams.get("code");

    var data = qs.stringify({
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
      code: codeValue,
      redirect_uri: process.env.REACT_APP_CLIENT_REDIRECT,
      grant_type: "authorization_code",
    });
    var config = {
      method: "post",
      url: "https://discord.com/api/oauth2/token",
      headers: {
        Authorization: "Bearer qvfZPybqVKttGBYx0VmQc4GE6QKToG",
        "Content-Type": "application/x-www-form-urlencoded",
        Cookie:
          "__cfruid=6875c96d8cb98269333cc2908d16da0c2afd1605-1663781576; __dcfduid=584b781e32e011edb6f4aa924745bf25; __sdcfduid=584b781e32e011edb6f4aa924745bf25f66a6891db401d468350f95b613e93be417523e6ca8a1c8d589f9ce91608f6c3",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        var data = qs.stringify({});
        var config = {
          method: "get",
          url: "https://discord.com/api/users/@me",
          headers: {
            Authorization: `Bearer ${response.data.access_token}`,
            Cookie:
              "__dcfduid=584b781e32e011edb6f4aa924745bf25; __sdcfduid=584b781e32e011edb6f4aa924745bf25f66a6891db401d468350f95b613e93be417523e6ca8a1c8d589f9ce91608f6c3",
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            console.log("response.data: ", response.data);
            setProfileState(response.data);
          })
          // .then(function (response) {
          //   console.log("response.data: ", response.data);
          //   // setProfileState(response.data);
          //   setAccent_color(response.data.accentColor);
          //   setAvatar(response.data.avatar);
          //   setAvatarDecor(response.data.avatar_decoration);
          //   setBanner(response.data.banner);
          //   setBannerCol(response.data.banner_color);
          //   setDiscriminator(response.data.discriminator);
          //   setEmail(response.data.email);
          //   setFlags(response.data.flags);
          //   setId(response.data.id);
          //   setdiscLocale(response.data.locale);
          //   setMfa_enabled(response.data.mfa_enabled);
          //   setPublicFlags(response.data.public_flags);
          //   setUserName(response.data.username);
          //   setVerified(response.data.verified);
          //   console.log("proifasdfaw", profileState);
          // })
          .catch(function (error) {
            console.log(error);
          });
        //response items should all be in state. I should probably move this to a context object and utilize local keys.
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
                <div
                  id="info"
                  onClick={(e) => {
                    console.log("username", userName);
                  }}
                >
                  Hoi!
                </div>
                <UserInfo />
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
