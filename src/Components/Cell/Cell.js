import { React, useState, useContext } from "react";
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
  const [cellID, setCellId] = useState();
  const [colorState, setColorState] = useState();
  const [usernameState, setUsernameState] = useState();
  const dbID = "6349e60165c62e5ca556bd47";

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <Row>
        <Col>
          User:
          {/* {colorValue.user} */}
        </Col>
        <Col>id: {cellID}</Col>
      </Row>
    </Tooltip>
  );

  const colorPick = (e) => {
    e.target.style.backgroundColor = colorValue.color;
    setColorState(colorValue.color);
    setUsernameState(userProfile.userProf.username);
  };

  const sendToDB = () => {
    axios
      .get(`/api/grid/`)
      .then((res) => {
        console.log("ID: ", res.data[0]._id);
        // console.log(
        //   "res.data[0].cellID[0].cellID:",
        //   res.data[0].cellID[cellID].cellID
        // );
        // console.log(
        //   "res.data[0].cellID[0].pickedColor:",
        //   res.data[0].cellID[cellID].pickedColor
        // );
        // console.log("colorValue.color", colorValue.color);
        // console.log(
        //   "userProfile.userProf.username",
        //   userProfile.userProf.username
        // );

        console.log("res", res);

        axios
          .post(`/api/grid/color/${res.data[0]._id}`, {
            cellID: {
              cellID: res.data[0].cellID[cellID].cellID,
              pickedColor: colorValue.color,
              userCell: userProfile.userProf.username,
            },
          })
          .catch((err) => {
            console.log("ERROR!:", err);
          });
      })
      .catch((err) => console.log(err));
    // axios.post(() => {});
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
            setCellId(e.target.id);
          }}
          key={i}
          id={i}
          onClick={(e) => {
            colorPick(e);
            sendToDB();
          }}
        />
      </OverlayTrigger>
    );
  }

  return <Row className="cellRow">{cellArr}</Row>;
}
