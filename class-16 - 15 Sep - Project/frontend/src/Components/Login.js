import { useContext, useState } from "react";
import UserContext from "../userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useContext(UserContext);
  const navigate = useNavigate();

  const onLogin = () => {
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          auth.setUser(data);
          navigate("/todos");
        }
      });
  };

  return (
    <div>
      <h1>Login</h1>

      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;
