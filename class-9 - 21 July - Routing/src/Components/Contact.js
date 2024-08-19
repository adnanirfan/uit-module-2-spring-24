import { useContext } from "react";
import UserContext from "../userContext";

const Contact = () => {
  const x = useContext(UserContext);
  console.log(x);
  return <h1>Contact: {x.name}</h1>;
};

export default Contact;
