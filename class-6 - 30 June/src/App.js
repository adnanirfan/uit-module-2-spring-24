import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState();

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          value={text}
          // onChange={(event) => setText(event.target.value)}
          onChange={onTextChange}
          placeholder="Type Here"
        />
        <h1>
          {text
            ? text === "1"
              ? "equals to 1"
              : "Not equal to 1"
            : "Enter text in input filed"}
        </h1>
      </header>
    </div>
  );
}

export default App;
