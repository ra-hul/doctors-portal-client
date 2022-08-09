import { CircularProgress } from "@mui/material";
import React from "react";
import { Route, Navigate } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <CircularProgress></CircularProgress>;
  } else if (!isLoading && user?.email) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
