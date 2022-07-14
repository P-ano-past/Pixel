import { React, useState, useContext } from "react";
import "./Cell.css";
import { Row, Col } from "react-bootstrap";
import { ColorPickContext } from "../../Utils/ColorPickContext/ColorPickContext";

export default function Cell() {
  const [isActive, setIsActive] = useState(false);
  const cellArr = [];
  const colorValue = useContext(ColorPickContext);

  // console.log("colorValue Cell.js: ", colorValue);

  const colorPick = (e) => {
    setIsActive((current) => !current);
    // console.log("cell colorValue", colorValue.color);
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
