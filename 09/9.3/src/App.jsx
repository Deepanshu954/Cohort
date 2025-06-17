import React from "react";
import { useState, useEffect } from "react";

function App()
{
  const [count, setCount] = useState(0);

  function increase()
  {
    setCount(count => count + 1);
  }

  useEffect(function()
  {
    let clock = setInterval(increase,1000);

    return function()
    {
      clearInterval(clock);
    }
    
  },[]);

  useEffect(function()
  {
    console.log("Tracking " + count);
  },[count]);

  return (
    <div>
      {count}
    </div>
  )
}

export default App