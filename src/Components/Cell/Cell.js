import { React, useState, useContext } from "react";
import "./Cell.css";
import { Row, Col } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ColorPickContext } from "../../Utils/ColorPickContext/ColorPickContext";
import { UserContext } from "../../Utils/UserContext/UserContext";
import e from "cors";

export default function Cell() {
  const cellArr = [];
  const colorValue = useContext(ColorPickContext);
  const profile = useContext(UserContext);
  const [cellID, setCellId] = useState();
  const [username, setUsername] = useState(profile.userProf.username);
  // const [, set] = useState();

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <Row>
        <Col>User: {colorValue.user}</Col>
        <Col>id: {cellID}</Col>
      </Row>
    </Tooltip>
  );

  const colorPick = (e) => {
    e.target.style.backgroundColor = colorValue.color;
  };

  for (let i = 0; i < 5000; i++) {
    cellArr.push(
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Col
          className={"cell " + i}
          onMouseEnter={(e) => {
            setCellId(e.target.id);
          }}
          key={i}
          id={i}
          onClick={(e) => {
            colorPick(e);
          }}
        />
      </OverlayTrigger>
    );
  }

  return <Row className="cellRow">{cellArr}</Row>;
}
