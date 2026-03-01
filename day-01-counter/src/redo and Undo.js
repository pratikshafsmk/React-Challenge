import { useState } from "react";
import "./App.css";

function App() {
  const [history, setHistory] = useState([0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const count = history[currentIndex];

  const updateCount = (newCount) => {
    const newHistory = history.slice(0, currentIndex + 1);
    setHistory([...newHistory, newCount]);
    setCurrentIndex(currentIndex + 1);
  };

  const increment = () => updateCount(count + 1);
  const decrement = () => updateCount(count - 1);

  const undo = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const redo = () => {
    if (currentIndex < history.length - 1)
      setCurrentIndex(currentIndex + 1);
  };

  const reset = () => {
    setHistory([0]);
    setCurrentIndex(0);
  };

  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={undo} disabled={currentIndex === 0}>
        Undo
      </button>
      <button
        onClick={redo}
        disabled={currentIndex === history.length - 1}
      >
        Redo
      </button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
