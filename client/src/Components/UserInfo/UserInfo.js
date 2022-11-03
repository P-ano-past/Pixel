import { React, useContext } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { UserContext } from "../../Utils/UserContext/UserContext";

export default function UserInfo() {
  const userInfo = useContext(UserContext);
  return (
    <Container>
      <Row>
        <Col>
          <Button
            onClick={(e) => {
              console.log("log context", userInfo);
            }}
          >
            UserInfo
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
