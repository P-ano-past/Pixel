import { React, useContext, useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { UserContext } from "../../Utils/UserContext/UserContext";

export default function UserModal() {
  //   const [profile, setProfile] = useState();
  const profile = useContext(UserContext);

  useEffect(() => {
    console.log("profile", profile);
  }, []);

  //   console.log(userInfo.userProf);

  return (
    <Container>
      <Row>
        <Col
          onClick={() => {
            console.log("username", profile.userProf.username);
          }}
        >
          This is the Modal
        </Col>
        <Col>
          {profile.userProf.username}#{profile.userProf.discriminator}
        </Col>
        {/* <Col>{userProf}</Col> */}
      </Row>
    </Container>
  );
}
