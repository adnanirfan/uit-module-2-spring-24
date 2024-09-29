import { useContext } from "react";
import UserContext from "../userContext";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const auth = useContext(UserContext);
  let location = useLocation();
  console.log(auth);

  if (!auth?.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
