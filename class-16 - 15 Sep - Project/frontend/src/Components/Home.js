import { useContext } from "react";
import UserContext from "../userContext";

const Home = () => {
  const x = {}; //  useContext(UserContext);
  console.log(x);
  return (
    <div>
      <h1>Home</h1>
      <input value={x.name} onChange={(e) => x.updateName(e.target.value)} />
    </div>
  );
};

export default Home;
