import { useState } from "react";
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
    setText("");
  };

  const onDelete = (indexToDelete) => {
    console.log("On Delete", data[indexToDelete]);
    const copy = [...data];
    copy.splice(indexToDelete, 1);
    setData(copy);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>{text}</h2>
        <input value={text} onChange={onChangeHandler} />
        <button onClick={onAdd}>Add</button>
        <main>
          <List data={data} onDelete={onDelete} />
        </main>
      </header>
    </div>
  );
}

export default App;
