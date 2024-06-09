import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";

function App() {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [text, setText] = useState("");

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const onAdd = () => {
    
    setData([...data, text]);
    setText('')
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>{text}</h2>
        <input value={text} onChange={onChangeHandler} />

        <button onClick={onAdd}>Add 1</button>
        <main>
          <List data={data} />
        </main>
      </header>
    </div>
  );
}

export default App;
