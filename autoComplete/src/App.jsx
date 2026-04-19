import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const [inputValue, setInputValue] = useState("");
  const [suggestionsResult, setSuggestionsResult] = useState([]);

  
  const fetchSuggestions = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes`);
      const data = await response.json();
      setSuggestionsResult(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  }

  useEffect(() => {
    fetchSuggestions();
  }, [inputValue]);

  return <div className="App">
  <h1>AutoComplete</h1>
    <div className="search-container">
       <input type="text" className="search-input" value={inputValue} onChange={(e) => setInputValue(e.target.value)}>
        </input>
    </div>

    <div className="result-container">
    <div> 
    <span></span> 
    </div>
      
    </div>


  </div>;
}

export default App;
