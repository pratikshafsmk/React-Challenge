import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button
        disabled={count == 10 ? true : false}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
      <button
        disabled={count == 0 ? true : false}
        onClick={() => setCount((prev) => prev - 1)}
      >
        Decrement
      </button>
    </>
  );
}

export default App;
