import { useState, useEffect } from "react";


function UseEffect() {
  const [parentText, setParentText] = useState("");

  // useEffect(() => {
  //   // MOUNT - 1 time
  //   console.log("Parent --|-- MOUNT - 1 time: ", parentText);
  // }, []);

  // useEffect(() => {
  //   // MOUNT & RE-Render - multiple time
  //   console.log("Parent --|-- MOUNT & RE-Render - multiple time : ", parentText);
  // }, [parentText]);

  // useEffect(() => {
  //   // Run on Every State Change - Multiple times
  //   console.log("Parent --|-- Run on Every State Change - Multiple times: ", parentText);
  // });

  return (
    <div className="App">
      <label>Parent Component</label>
      <input
        value={parentText}
        onChange={(e) => setParentText(e.target.value)}
        placeholder="Enter Todo"
      />

      <hr />

      {/* {parentText && <ChildComponent parentText={parentText} />} */}
    </div>
  );
}

export default UseEffect;
