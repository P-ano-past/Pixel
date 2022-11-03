require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./server/routes/index");

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", function () {
    console.log("A user disconnected");
  });
});

httpServer.listen(3001);
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.use(routes);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@${process.env.DB_URL}?retryWrites=true`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("🌎  ==> MongoDB loaded on: localhost:" + PORT))
  .catch((err) => console.log(err));

app.get("/*", cors(), (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
