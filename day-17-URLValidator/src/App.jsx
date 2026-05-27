import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  function validateURL(value) {
    // const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    //   '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    //   '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    //   '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    //   '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    //   '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    // return !!pattern.test(url);

    try {
      const url = new URL(value);
      const validProtocols =
        url.protocol === "http:" || url.protocol === "https:";
      const validHost =
        url.hostname === "localhost" || url.hostname.includes(".");
      const noWhitespace = !/\s/.test(value);
      if (validProtocols && validHost && noWhitespace) {
        setError(false);
      } else {
        setError(true);
      }
    } catch (e) {
      return setError(true);
    }
  }
  // const result = validateURL(input) ? 'Valid URL' : 'Invalid URL';
  // document.getElementById('result').textContent = result;

  return (
    <>
      <h1>URL Validator</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={input}
        onChange={(e) => {
          const value = e.target.value;
          setInput(value);
          validateURL(value);
        }}
      />
      {input ? (
        <p style={{ color: error ? "red" : "green" }}>
          {error ? "Invalid URL" : "Valid URL"}
        </p>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
