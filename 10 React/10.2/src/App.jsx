/*
// Rolling up the state, unoptimal re-renders

import { useState } from "react";


function App() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const [state, setState] = useState(true);
  return (
    <div>
      <div>
        <BulbState state={state} />
      </div>
      <div>
        <Toggle state={state} setState={setState} />
      </div>
    </div>
  );
}

function BulbState({ state }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "1rem" }}>
      {state ? (
        <img
          src="https://thumbs.dreamstime.com/b/light-bulb-black-background-17047477.jpg"
          alt="Bulb On"
          style={{ width: "auto", height: "300px" }}
        />
      ) : (
        <img
          src="https://media.istockphoto.com/id/502789173/photo/light-bulb-concept.jpg?s=612x612&w=0&k=20&c=vJfSDuFJf_4UsQcUsdMNUfDkkNU6Bf9cTHF-n4-Zwvs="
          alt="Bulb Off"
          style={{ width: "auto", height: "300px" }}
        />
      )}
    </div>
  );
}

function Toggle({ state, setState }) {
  function toggle() {
    setState(!state);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default App;

*/


// Prop drilling, solved by
// Context API

import { useState, useContext, createContext } from "react";

const BulbContext = createContext();

function BulbProvider({children})
{
  const [state, setState] = useState(true);

  return <BulbContext.Provider value = {{
    state : state,
    setState : setState,
  }} > {children} </BulbContext.Provider>
}
function App() {
  return (
    <div>
      <BulbProvider> 
        <LightBulb />
      </BulbProvider>
    </div>
  );
}

function LightBulb() {
  return (
    <div>
      <div>
        <BulbState />
      </div>
      <div>
        <Toggle />
      </div>
    </div>
  );
}

function BulbState() {
  const { state } = useContext(BulbContext);
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "1rem" }}>
      {state ? (
        <img
          src="https://thumbs.dreamstime.com/b/light-bulb-black-background-17047477.jpg"
          alt="Bulb On"
          style={{ width: "auto", height: "300px" }}
        />
      ) : (
        <img
          src="https://media.istockphoto.com/id/502789173/photo/light-bulb-concept.jpg?s=612x612&w=0&k=20&c=vJfSDuFJf_4UsQcUsdMNUfDkkNU6Bf9cTHF-n4-Zwvs="
          alt="Bulb Off"
          style={{ width: "auto", height: "300px" }}
        />
      )}
    </div>
  );
}

function Toggle() {
  const { state, setState } = useContext(BulbContext);

  function toggle() {
    setState(!state);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default App;


