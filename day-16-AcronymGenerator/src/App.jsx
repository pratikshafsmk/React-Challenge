import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  return (
    <>
      <div className="container">
        <h1>Acronym Generator</h1>
        <p>
          An acronym is formed by taking the first letter of each word in a
          phrase and converting them to uppercase.
        </p>

        <input
          type="text"
          placeholder="Enter a phrase"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() =>
            setResult(
              input
                .trim()
                .split(/\s+/)
                .map((word) => word.charAt(0).toUpperCase())
                .join(""),
            )
          }
        >
          Generate Acronym
        </button>
        <p>Acronym: {result}</p>
      </div>
    </>
  );
}

export default App;
