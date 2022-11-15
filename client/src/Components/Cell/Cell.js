import { React, useState, useContext, useEffect } from "react";
import "./Cell.css";
import { Row, Col, Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ColorPickContext } from "../../Utils/ColorPickContext/ColorPickContext";
import { UserContext } from "../../Utils/UserContext/UserContext";
import axios from "axios";

export default function Cell() {
  const cellArr = [];
  const iArr = [];
  const colorValue = useContext(ColorPickContext);
  const userProfile = useContext(UserContext);
  const [cellIDState, setCellIdState] = useState();
  const [colorState, setColorState] = useState();
  const [usernameState, setUsernameState] = useState();

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <Row>
        <Col>
          User:
          {/* {colorValue.user} */}
        </Col>
        <Col>id: {cellIDState}</Col>
      </Row>
    </Tooltip>
  );

  const colorPick = (e) => {
    e.target.style.backgroundColor = colorValue.color;
    setColorState(colorValue.color);
    setUsernameState(userProfile.userProf.username);
  };

  const sendToDB = () => {
    console.log("cellIDState", cellIDState);

    axios
      .get(`/api/grid/`)
      .then((res) => {
        axios
          .post(`/api/grid/color/${res.data[cellIDState]._id}`, {
            _id: res.data[cellIDState]._id,
            pickedColor: colorValue.color,
            userCell: userProfile.userProf.username,
            cellID: cellIDState,
          })
          .then((res) => {
            console.log("Axios get :id", res);
          })
          .catch((err) => {
            console.log("err", err);
          });
      })
      .catch((err) => console.log(err));
  };

  for (let i = 0; i < 5000; i++) {
    iArr.push({ cellID: i, pickedColor: "", userCell: "" });
    cellArr.push(
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Col
          className={"cell " + i}
          onMouseEnter={(e) => {
            setCellIdState(e.target.id);
          }}
          key={i}
          id={i}
          onClick={(e) => {
            colorPick(e);
            axios
              .get(`/api/grid/color/${cellIDState}`)
              .then((res) => {
                console.log("res.data: ", res.data);
              })
              .catch((err) => console.log(err));
          }}
        />
      </OverlayTrigger>
    );
  }

  return (
    <Row className="cellRow">
      {/* <Button
      onClick={() => {
        axios
          .post(`/api/grid/post`, { iArr })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      CreateDB
    </Button>; */}
      {cellArr}
    </Row>
  );
}
