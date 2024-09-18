import { useContext } from "react";
import TodoContext from "../context/Context";

const List = () => {
  const x = useContext(TodoContext);
  // console.log(x)
  return (
    <ul>
      {x.list.map((item, index) => {
        return (
          <li key={index}>
            {item}
            <button onClick={() => x.onEdit(index)}>Edit</button>
            <button onClick={() => x.onDelete(index)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
