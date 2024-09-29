import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import UserContext from "./userContext";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Todos from "./Components/Todo";
import RequireAuth from "./Components/RequireAuth";
import { useState } from "react";

const Navigation = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/login">Login</NavLink>
      </li>

      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>

      <li>
        <NavLink to="/todos">Todos</NavLink>
      </li>
    </>
  );
};

function App() {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/todos"
            element={
              <RequireAuth>
                <Todos />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
