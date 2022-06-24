import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Grid from "./Components/Grid/Grid";

function App() {
  return (
    <Container className="App">
      <Container>
        <Row>
          <Col id="appTitle">
            <h1>
              <p>Pixel</p>
            </h1>
          </Col>
        </Row>
      </Container>
      <Grid />
    </Container>
  );
}

export default App;
