import { WebSocketServer } from "ws"

const wss = new WebSocketServer({ port : 8080 });

wss.on("connection", function(socket)
{
    console.log("Connected")

    socket.on("message", (e) => {
        if(e.toString() === "ping")
        {
            socket.send("pong")
        }
    })
    
})


