import { useContext, useEffect, useState } from "react";
import UserContext from "../userContext";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const url = "http://localhost:4000/todos?user_id=" + user._id;

    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("TODOS:", data);
        if (data.error) {
          alert(data.error);
        } else {
          setTodos(data);
        }
      });
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => {
        return (
          <li key={todo._id}>
            {todos.isCompleted ? "Completed" : "InComplete"}
            {" | "} &nbsp;
            {todo.user.username}
            {" | "}
            {todo.text}
          </li>
        );
      })}
    </div>
  );
};

export default Todos;
