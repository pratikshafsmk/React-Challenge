import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todoItem, setTodoItem] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [error, setError] = useState(false);
  const currRef = useRef();

  const handleAdd = () => {
    if (inputTask.trim() === "") {
      setError(true);
      return;
    }
    setTodoItem([...todoItem, inputTask.trim()]);
    setInputTask("");
    setError(false);
    currRef.current.focus();
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleAdd();
  };
  return (
    <>
      <h1>TODO</h1>
      <p>Welcome to your TODO app!</p>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add a new task..."
          className="task-input"
          value={inputTask}
          style={{ border: error ? "2px red solid" : "1px solid gray" }}
          onChange={(e) => {
            setInputTask(e.target.value);
            if (error) setError(false);
          }}
          onKeyDown={handleEnter}
          ref={currRef}
        />
        <button className="add-button" onClick={handleAdd}>
          Add
        </button>{" "}
      </div>
      {error && <div className="error-text">ENter valid value</div>}

      <ul className="task-list">
        {todoItem.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      
    </>
  );
}

export default App;
