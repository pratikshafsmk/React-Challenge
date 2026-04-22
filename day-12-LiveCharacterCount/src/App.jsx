import { useState } from "react";
import "./App.css";

function App() {
  //Live Character Count
  const [inputText, setInputText] = useState("");
  const [inputLimit, setInputLimit] = useState("");
  const [error, setError] = useState("");
  console.log(inputText.length);
  return (
    <>
      <h1>Live Character counter</h1>
      <label>Enter the Character Limit</label>
      <input
        style={{ width: "50px" }}
        type="number"
        value={inputLimit}
        onChange={(e) => setInputLimit(e.target.value)}
      ></input>
      <br />
      <br />
      <label>Enter the text</label>
      <br />
      <textarea
        value={inputText}
        placeholder="Enter text"
        onChange={(e) => {
          setInputText(e.target.value);
          if (e.target.value.length === inputLimit * 0.9)
            setError("You are close to limit");
          if (e.target.value.length > inputLimit)
            setError(`Exceeded by ${e.target.value.length - inputLimit}`);
        }}
      ></textarea>
      <p style={{ color: "red" }}>{error}</p>
      <p>{`${inputText.length}/${inputLimit}`}</p>
    </>
  );
}

export default App;
