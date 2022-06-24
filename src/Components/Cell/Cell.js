import { React, useState } from "react";
import "./Cell.css";
import { Row, Col } from "react-bootstrap";

export default function Cell() {
  const [isActive, setIsActive] = useState(false);
  const cellArr = [];

  const colorPick = (e) => {
    setIsActive((current) => !current);
    e.target.style.backgroundColor = "black";
    // console.log("target", e.target.className);
    // console.log("id", e.target.style.backgroundColor);
    // console.log("e", e);
  };

  for (let i = 0; i < 10000; i++) {
    cellArr.push(
      <Col
        className={"cell " + i}
        id={i}
        onClick={(e) => {
          colorPick(e);
        }}
      />
    );
  }

  return <Row className="cellRow">{cellArr}</Row>;
}
