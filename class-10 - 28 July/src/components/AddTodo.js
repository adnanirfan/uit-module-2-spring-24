import { useContext } from "react";
import TodoContext from "../context/Context";

const AddTodo = () => {
  const x = useContext(TodoContext);
  // console.log(x)
  return (
    <div>
      <input value={x.text} onChange={(e) => x.setText(e.target.value)} />
      <button onClick={() => x.onAdd()}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
