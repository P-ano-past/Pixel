import "./App.css";
import { React } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Main from "./Components/Main/Main";
import Login from "./Components/LoginButton/Login";

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/redirect" element={<Main />} />
      </Routes>
    </Container>
  );
}

export default App;
