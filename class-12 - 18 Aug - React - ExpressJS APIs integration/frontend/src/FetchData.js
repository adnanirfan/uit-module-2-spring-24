import { useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);
  const getData = async () => {
    const response = await fetch("http://localhost:4000");
    console.log("response:>", response);
    const res = await response.json();
    console.log("res:>", res);

    setData(res);
  };

  const saveData = async () => {
    const response = await fetch("http://localhost:4000/save", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log("response:>", response);
    const res = await response.json();
  };

  return (
    <div>
      <h1>FetchData</h1>
      <h2>Data: {JSON.stringify(data)}</h2>

      <button onClick={getData}>Get Data</button>

      <input
        value={data?.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <button onClick={saveData}>Save</button>
    </div>
  );
};

export default FetchData;
