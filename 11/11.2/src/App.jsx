/*
Context API


import { useState, useRef, useContext, createContext} from "react";

const CountContext = createContext();

function CountContextProvider({children})
{
  const [count, setCount] = useState(0);

  return(
    <>
      <CountContext.Provider value = {{count, setCount}}>
        {children}
      </CountContext.Provider>
    </>
  )
}

function Parent()
{
  return (
    <>
      <CountContextProvider>
        <Increase />
        <Decrease />
        <Reset />
        <Value />
      </CountContextProvider>
    </>
  )
}

function Increase()
{
  const {count, setCount} = useContext(CountContext);
  return <button onClick = {() => setCount(count + 1)}>Increase</button>
}

function Decrease()
{
  const {count, setCount} = useContext(CountContext);
  return <button onClick = {() => setCount(count - 1)}> Decrease </button>
}

function Reset()
{
  const {count, setCount} = useContext(CountContext);
  return <button onClick = {() => setCount(0)}> Reset </button>
}

function Value()
{
  const {count} = useContext(CountContext);
  return <p> Count : {count}</p>
}


function App()
{
  return <div>
    < Parent />
  </div>
}

*/


import {useState, useEffect, useRef, useContext, createContext} from "react";
import {RecoilRoot, atom, useRecoilValue, useSetRecoilState} from 'recoil';


const count = atom({
  key : 'countState',
  default : 0,
});

function Parent()
{
  return(
    <RecoilRoot>
      <Increase />
      <Decrease />
      <Reset />
      <Value />
    </RecoilRoot>
  )
}

function Increase()
{
  const setCount = useSetRecoilState(count);
  return <button onClick ={() => setCount(count => count + 1)}> Increase </button>
}

function Decrease()
{
  const setCount = useSetRecoilState(count);
  return <button onClick = {() => setCount(count => count - 1)}> Decrease </button>
}

function Reset()
{
  const setCount = useSetRecoilState(count);
  return <button onClick = {() => setCount(0)}> Reset </button>
}

function Value()
{
  const countValue = useRecoilValue(count);
  return <p> Count :{countValue} </p>
}

function App()
{
  return(
    <>
      <Parent />
    </>
  )
}

export default App;