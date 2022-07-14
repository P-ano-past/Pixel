import { React, useState, useContext } from "react";
import "./ColorSel.css";
import { Container, Row, Col } from "react-bootstrap";
import { ColorPickContext } from "../../Utils/ColorPickContext/ColorPickContext";

export default function ColorSel() {
  const [pickedColor, setPickedColor] = useState();
  const colorValue = useContext(ColorPickContext);
  console.log("colorValue: ", colorValue.color);

  const cellColors = [
    "#000000",
    "#ffffff",
    "red",
    "blue",
    "yellow",
    "orange",
    "purple",
  ];
  const cellColorArr = [];

  const colorPick = (e) => {
    // console.log("className", e.target.className);
    setPickedColor(e.target.classList[1]);
    // console.log("pickedColor", pickedColor);
    colorValue.color = pickedColor;
  };

  for (let i = 0; i < cellColors.length; i++) {
    cellColorArr.push(
      <Col className="colCont" key={"coId" + i}>
        <Col
          className={"cellSelect " + cellColors[i]}
          key={"coId" + i}
          id={"cell" + i}
          onClick={(e) => {
            colorPick(e);
          }}
          style={{ background: cellColors[i] }}
        />
      </Col>
    );
  }

  return (
    <Container className="colorPick">
      <Row className="CSC">
        <Col className="cellSelectContainer">{cellColorArr}</Col>
      </Row>
    </Container>
  );
}
