import { useState, useRef } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const style = { border: "1px solid black" };
  const handeStart = () => {
    if (ref.current !== null) return;
    console.log("Inside Start handler");
    ref.current = setInterval(increment, 500);
    function increment() {
      console.log("inside increment");
      setCount((prev) => prev + 1);
      //console.log(count);
    }
  };
  const handleStop = () => {
    clearInterval(ref.current);
    ref.current = null;
    console.log("Inside Stop");
  };

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <div style={{ display: "flex", gap: "15px" }}>
          <button onClick={handeStart} style={style}>
            Start
          </button>
          <button onClick={handleStop} style={style}>
            Stop
          </button>
          <button onClick={() => setCount(0)} style={style}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
