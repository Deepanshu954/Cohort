import "./App.css";
import { useState, useEffect, useRef } from "react";

function App()
{
  const [ socket, setSocket ] = useState();
  const inputRef = useRef();

  function SendMessage()
  {
    if(!socket)
    {
      return;
    }
    const message = inputRef.current.value;

    // @ts-ignore
    socket.send(message);
  }

  useEffect(() =>
  {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws)

    ws.onmessage = (ev) => {
      <div>
        {ev.data}
      </div>
    }
  }, [])

  return (
    <>
      <div>
        <input ref = { inputRef } type = "text" placeholder = "Message..." />
        <button onClick = {SendMessage}>Send</button>
      </div>
    </>
  )
}

export default App