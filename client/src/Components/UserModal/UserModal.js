import { React, useContext, useState, useEffect } from "react";
import {
  Col,
  Row,
  Container,
  Modal,
  ModalBody,
  ModalDialog,
  ModalHeader,
} from "react-bootstrap";
import { UserContext } from "../../Utils/UserContext/UserContext";

export default function UserModal() {
  const [profContext, setProfContext] = useState("");
  const [usernameUE, setUsername] = useState("");
  const profile = useContext(UserContext);

  useEffect(() => {
    nameGetter();
  });

  const nameGetter = () => {
    setProfContext(profile);
    setUsername(profile.userProf.username);
  };

  return (
    <Modal>
      <Container>
        <Row>
          <Col
            onClick={() => {
              console.log(
                "profileInfo.userProf.username",
                profContext.userProf.username
              );
              console.log("username", usernameUE);
            }}
          >
            This is the Modal
            <Col>
              <Col>
                <p>ProfileContext: </p>
                {/* <p>Username: {profContext.userProf.username} </p> */}
                <p>Username: {usernameUE} </p>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
}
