import { React, useContext } from "react";
import "./Cell.css";
import { Row, Col } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ColorPickContext } from "../../Utils/ColorPickContext/ColorPickContext";
import { UserContext } from "../../Utils/UserContext/UserContext";

export default function Cell() {
  const cellArr = [];
  const colorValue = useContext(ColorPickContext);
  const profile = useContext(UserContext);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      User: {profile.userProf.username}
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
