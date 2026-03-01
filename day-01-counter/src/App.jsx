import { useState, useRef } from "react";

import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
    prevRef.current = ref.current;
    ref.current = count;
  }, [count]);

  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevRef.current)}>undo</button>
    
      </>
  );
}

export default App;
