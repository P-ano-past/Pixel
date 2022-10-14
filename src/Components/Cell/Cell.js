import { React, useState, useContext } from "react";
import "./Cell.css";
import { Row, Col, Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ColorPickContext } from "../../Utils/ColorPickContext/ColorPickContext";
import axios from "axios";

export default function Cell() {
  const cellArr = [];
  const iArr = [];
  const colorValue = useContext(ColorPickContext);
  const [cellID, setCellId] = useState();

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
    iArr.push(i);
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

  const sendToDB = () => {};

  return (
    <Row className="cellRow">
      <Button
        onClick={() => {
          axios
            .get("/api/grid/")
            .then((res) => {
              console.log("cellArr", cellArr);
              console.log("res", res);
            })
            .catch((error) => {
              console.log("err", error);
            });
        }}
      >
        get Arr?
      </Button>

      {cellArr}
    </Row>
  );
}
