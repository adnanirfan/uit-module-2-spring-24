import { useState, useEffect } from "react";

function TodoInput() {
  const [text, setText] = useState("");
  const [axis, setAxis] = useState({ x: "", y: "" });

  useEffect(() => {
    // console.log("Child --|-- ", text);

    const callback = (event) => {
      setAxis({ x: event.x, y: event.y });
      console.log(event.x, event.y);
    };
    document.addEventListener("click", callback);

    return () => {
      console.log("UNMOUNT");
      document.removeEventListener("click", callback);
    };
  }, []);

  return (
    <div>
      <label>Child Component</label>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Todo"
      />
      {JSON.stringify(axis, null, 2)}
    </div>
  );
}
export default TodoInput;
