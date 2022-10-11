import { React, useContext } from "react";
import "./Cell.css";
import { Row, Col } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { ColorPickContext } from "../../Utils/ColorPickContext/ColorPickContext";

export default function Cell() {
  const cellArr = [];
  const colorValue = useContext(ColorPickContext);

  const colorPick = (e) => {
    e.target.style.backgroundColor = colorValue.color;
  };

  for (let i = 0; i < 5000; i++) {
    cellArr.push(
      <Col
        className={"cell " + i}
        key={i}
        id={i}
        onClick={(e) => {
          colorPick(e);
        }}
      />
    );
  }

  return <Row className="cellRow">{cellArr}</Row>;
}
