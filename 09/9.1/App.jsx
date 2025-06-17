// App.jsx or App.tsx (React + Vite + TypeScript is optional)

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onButtonPress = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div id="buttonParent">
      <button onClick={onButtonPress}>
        Counter {count}
      </button>
    </div>
  );
}

export default App;