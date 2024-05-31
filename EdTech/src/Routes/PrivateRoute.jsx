import { Navigate, useLocation } from "react-router";

import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { CircularProgress } from "@mui/material";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <CircularProgress />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
