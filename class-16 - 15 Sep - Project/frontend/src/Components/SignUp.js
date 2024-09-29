import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../userContext";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = useContext(UserContext);
  console.log(auth);

  const signup = async () => {
    const res = await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();

    console.log(data);

    if (data.error) {
      alert(data.error);
    } else {
      auth.setUser(data);
      navigate("/todos");
    }
  };

  return (
    <div>
      <h1>SignUp</h1>

      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={signup}>SignUp</button>
    </div>
  );
};

export default SignUp;
