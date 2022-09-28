import { React, useContext } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { userContext } from "../../Utils/UserContext/UserContext";

export default function UserInfo() {
  const userInfo = useContext(userContext);
  return (
    <Container>
      <Row>
        <Col>
          <Button
            onClick={(e) => {
              console.log("log context", userInfo);
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
