import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("User Connected");

  socket.on("message", (data) => {
    const msg = data.toString();

    if (msg != "") {
      socket.send(msg);
    }
  });
});