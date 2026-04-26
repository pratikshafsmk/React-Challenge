import { useState } from "react";

function App() {
  const [inputData, setInputData] = useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {" "}
        <h1>Input Mirror</h1>
        <textarea
          placeholder="Start typing"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        ></textarea>
        <p>{inputData}</p>
      </div>
    </>
  );
}

export default App;
