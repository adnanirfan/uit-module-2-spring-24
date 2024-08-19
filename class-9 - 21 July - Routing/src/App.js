import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import UserContext from "./userContext";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { useState } from "react";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  const [name, setName] = useState("Adnan");
  return (
    <UserContext.Provider
      value={{ name: name, updateName: (newName) => setName(newName) }}
    >
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
