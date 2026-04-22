import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <div>
        <h1>Show/Hide Password Toggle</h1>
      </div>
      <input
        type={showPass ? "password" : "text"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter password"
        onKeyDown={(e) => {
          if (e.key === "Enter") setShowPass(!showPass);
        }}
      ></input>
      <button onClick={() => setShowPass(!showPass)}>
        {showPass ? "HidePass" : "ShowPass"}
      </button>
    </>
  );
}

export default App;
