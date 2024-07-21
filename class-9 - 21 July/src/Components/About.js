import { useContext } from "react";
import UserContext from "../userContext";

const About = () => {
  const x = useContext(UserContext);
  console.log(x);
  return <h1>About: {x.name}</h1>;
};

export default About;
