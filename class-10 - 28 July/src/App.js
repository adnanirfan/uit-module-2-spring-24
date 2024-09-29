import { useState } from "react";
import List from "./components/List";
import AddTodo from "./components/AddTodo";
import TodoContext from "./context/Context";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState(["a", "b", "c", "d"]);

  const onAdd = () => {
    if (!text) {
      alert("nothing to add field is empty");
    } else {
      setList([...list, text]);
      setText("");
    }
  };

  const onDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const onEdit = (index) => {
    console.log("onEdit: " + index);
  };

  return (
    <TodoContext.Provider
      value={{
        text,
        list,
        setText,
        onAdd,
        onDelete,
        onEdit,
      }}
    >
      <h1>Todo List</h1>
      <AddTodo />
      <List />
    </TodoContext.Provider>
  );
}

export default App;
