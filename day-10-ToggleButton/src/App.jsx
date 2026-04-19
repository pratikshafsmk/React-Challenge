import { useState } from "react";

function App() {
  const [showText, setShowTest] = useState(false);

  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => setShowTest(!showText)}>
        {showText ? "Hide" : "Show"}
      </button>
      <div> {showText && "Hi, I am text"}</div>
    </>
  );
}

export default App;
