// App.jsx
import {
  RecoilRoot,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { counterAtom, evenSelector } from "./counter";
import { memo } from "react";

const CurrentCount = memo(() => {
  const count = useRecoilValue(counterAtom);
  console.log("CurrentCount Rendered");
  return <div>Counter: {count}</div>;
});

const IsEven = memo(() => {
  const even = useRecoilValue(evenSelector);
  console.log("IsEven Rendered");
  return <div>{even ? "Even" : "Odd"}</div>;
});

const Increase = memo(() => {
  const setCount = useSetRecoilState(counterAtom);
  console.log("Increase Rendered");
  return (
    <button onClick={() => setCount((c) => c + 2)}>Increase</button>
  );
});

const Decrease = memo(() => {
  const setCount = useSetRecoilState(counterAtom);
  console.log("Decrease Rendered");
  return (
    <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
  );
});

function Counter() {
  console.log("Counter wrapper rendered");
  return (
    <div>
      <CurrentCount />
      <IsEven />
      <Increase />
      <Decrease />
    </div>
  );
}

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

export default App;