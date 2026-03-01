import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  //const [showName, setShowName] = useState(false);
  const [occasion, setOccasion] = useState("Occasion");
  let BackgroundColor;

  console.log("App Rendered");
  const showGreting = () => {
    setSubmittedName(name);
    //setShowName(true);
  };
  const bgColor = () => {
    if (occasion === "Valentine") return "#F53827";
    if (occasion === "Birthday") return "#F5EE27";
    if (occasion === "Anniversary") return "#27F5C5";
  };

  return (
    <>
      <div>
        <h1>Greeting</h1>
        <label>Enter Name: </label>

        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={showGreting}>Show Greeting</button>
      </div>

      <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="Occasion">Choose Occasion</option>
        <option value="Valentine">Valentine</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <div style={{ backgroundColor: bgColor() }}>
        <h1>{submittedName}</h1>
      </div>
      <p>
        {occasion !== "Occasion" && submittedName && (
          <p>Occasion is {occasion}</p>
        )}
      </p>
    </>
  );
}

export default App;
