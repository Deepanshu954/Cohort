import { useState, useEffect } from 'react';
import "./App.css";


/*
function App()
{
  let [counterVisible, setCounterVariable] = useState(true);

  useEffect(function(){
    setInterval(function(){
      setCounterVariable(c => !c);
    }, 5000)
  },[]);

  return <div>
    { counterVisible ? <Counter></Counter> : null }
  </div>
}

// mounting, unmounting, re-rendering
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(function(){
   let clock = setInterval(function(){
      console.log("On Mount");
      setCount(count => count + 1)
    },1000);

    return function()
    {
      console.log("On Umount");
      clearInterval(clock)
    }

  },[]); // dependency Array, Cleanup,

  function increaseCount()
  {
    setCount(count + 1);
  }

  return <div>
    <div id = "text"> { count } </div>
    <button onClick = {increaseCount}>Increase Count</button>
  </div>
}
*/

export default function App()
{

  const [count, setCount] = useState(0);

  function increase()
  {
    setCount(count + 10);
  };



  return <div>
    Count
    <Counter count = {count} />
    <button onClick = {increase}>Increase</button>
  </div>
}

function Counter(props)
{
  useEffect(function(){
    console.log("Mounted");

    return function()
    {
      console.log("UnMounted");
    }
  },[]);

  useEffect(function(){
    console.log("Count Has Changed");
  },[props.count]);

  return <div>
    Counter {props.count};
  </div>
}

