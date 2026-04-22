import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backcolor, setBackColor] = useState("white");
  const [isRunning, setIsRunning] = useState(false);

  const changeColor = () => {
    const newcolor =
      "#" +
      Math.floor(Math.random() * (256 * 256 * 256))
        .toString(16)
        .padStart(6, "0");
    console.log(newcolor);
    setBackColor(newcolor);
  };

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      changeColor();
    }, 500);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <>
      <h1 style={{ padding: "20px" }}>Random Color Generator</h1>
      <div
        style={{
          backgroundColor: backcolor,
          height: "200px",
          border: "1px black solid",
          margin: "10px",
        }}
      >
        <button
          style={{ margin: "100px" }}
          onClick={changeColor}
          disabled={isRunning}
        >
          Manual change
        </button>
        <button onClick={() => setIsRunning((prev) => !prev)}>
          {isRunning
            ? "Stop generating random color"
            : "Start generating random color"}
        </button>
      </div>

      <label>{backcolor}</label>
    </>
  );
}

export default App;
