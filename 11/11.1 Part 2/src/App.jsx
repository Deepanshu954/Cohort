import {useState, useEffect, useRef} from "react";
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/use-prev";
import "./App.css";

function useDebounce(originalFn)
{
  const currentClock = useRef();


  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalFn, 500);
  }

  return fn;
}


function App()
{
  function sendDataBackend()
  {
    fetch("api.amazon.com/search/");
  }

  const debounceFn = useDebounce(sendDataBackend);
  
  return (
    <>
      <input type = "text" placeholder = "Enter Your Name" onChange={debounceFn}></input>
    </>
  )
}

function App1()
{

  const [state, setState] = useState(0);
  const prev = usePrev(state);

  function incState()
  {
    setState(state + 1);
  }

  return (
    <>
      <p> {state} </p>
      <button onClick={incState}> Button </button>
      <p> The Previous Value was {prev} </p>
    </>
  )
}



export default App;
