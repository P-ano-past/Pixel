import { React, useState, useContext, useEffect } from "react";
import "./Cell.css";
import { Row, Col, Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ColorPickContext } from "../../Utils/ColorPickContext/ColorPickContext";
import { UserContext } from "../../Utils/UserContext/UserContext";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("localhost:3001");

export default function Cell() {
  const cellArr = [];
  const iArr = [];
  const colorValue = useContext(ColorPickContext);
  const userProfile = useContext(UserContext);
  const [cellIDState, setCellIdState] = useState();
  const [TTName, setTTName] = useState();
  const [colorState, setColorState] = useState();
  const [usernameState, setUsernameState] = useState();
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("pong", () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  const sendPing = () => {
    socket.emit("ping");
  };

  // const createDB = () => {
  //   axios
  //     .post(`/api/grid/post`, { iArr })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   //   <Button
  //   //   onClick={(e) => {
  //   //     createDB(e);
  //   //   }}
  //   // >
  //   //   CreateDB
  //   // </Button>
  // };

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
            // console.log("cellIsState: ", cellIDState);
            axios
              .get(`/api/grid/color/${cellIDState}`)
              .then((res) => {
                // console.log("res", res.data[cellIDState]._id);
                console.log("res.data: ", res.data);
              })
              .catch((err) => console.log(err));
            // sendToDB();
          }}
        />
      </OverlayTrigger>
    );
  }

  return (
    <Row className="cellRow">
      {cellArr}
      <Row>
        <Col>
          <div>
            <p>Connected: {"" + isConnected}</p>
            <p>Last pong: {lastPong || "-"}</p>
            <button onClick={sendPing}>Send ping</button>
          </div>
        </Col>
      </Row>
    </Row>
  );
}
