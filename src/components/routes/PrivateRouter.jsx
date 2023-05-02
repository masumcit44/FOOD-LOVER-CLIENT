import React from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

import Spinner from "react-bootstrap/Spinner";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRouter = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location  = useLocation()
  console.log(location);
  if (loader) {
    return <Spinner animation="border" variant="secondary" />;
  }
  if (user) {
    return children;
  }
  
  return <Navigate to="/login" state={{from:location}} ></Navigate>;
};

export default PrivateRouter;
