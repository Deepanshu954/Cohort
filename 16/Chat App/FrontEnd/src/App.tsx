import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [ sendMsg, setSendMsg ] = useState(1);
  const [messages, setMessages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function SendMessage() {
    if (!socket || !inputRef.current) return;

    setSendMsg(1);
    const message = `user1: ${inputRef.current.value}`;
    socket.send(message);
    inputRef.current.value = "";
  }

  function RecvMessage() {
    if (!socket || !inputRef.current) return;

    setSendMsg(0);
    const message = `user2: ${inputRef.current.value}`;
    socket.send(message);
    inputRef.current.value = "";
  }


  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (ev) => {
      setMessages((prev) => [...prev, ev.data]);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className=" h-[890px] w-[600px] bg-[#161717] rounded-xl p-6 flex flex-col justify-between">

      {/* Messages */}
      <div className="mt-4 mb-5">
        <h3 className="font-bold mb-7 subpixel-antialiased text-2xl font-serif">Messages:</h3>

        {messages.map((msg, idx) => {
          const isUser1 = msg.startsWith("user1:");
          const cleanMsg = msg.replace(/^user\d+:\s*/, "");
          return (
            <div
              key={idx}
              className={`rounded-xl mb-3 py-1 p-4 max-w-[75%] ${
                isUser1 ?  'place-self-end bg-[#154d36]' : 'place-self-start bg-[#505050]' 
              }`}
            >
              {cleanMsg}
            </div>
          );
        })}
      </div>
      


      {/* Send Options */}
      <div className="flex gap-2 flex justify-end place-content-end bg-[#252626] p-4 rounded-xl">
        <input
          ref={inputRef}
          type="text"
          placeholder="Message..."
          className="flex-1 p-2 rounded border border-gray-600 bg-[#1e1e1e] text-white outline-none"
        />
        <button onClick={SendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
        <button onClick={RecvMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Recv
        </button>
      </div>

    </div>
  );
}


export default App;