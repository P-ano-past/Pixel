import "./App.css";
import { React, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Grid from "./Components/Grid/Grid";
import ColorSel from "./Components/ColorSel/ColorSel";
import { ColorPickContext } from "./Utils/ColorPickContext/ColorPickContext";

function App() {
  // const [colorPick, setColorPick] = useState();
  // setColorPick("black");

  console.log("ColorPickContext", ColorPickContext);

  return (
    <Container className="App">
      <ColorPickContext.Provider value={ColorPickContext._currentValue.color}>
        <Container>
          <Row>
            <Col id="appTitle">
              <h1>
                <p className="pixel">Pixel</p>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <ColorSel />
            </Col>
          </Row>
        </Container>
        <Container>
          <Grid />
        </Container>
      </ColorPickContext.Provider>
    </Container>
  );
}

export default App;
