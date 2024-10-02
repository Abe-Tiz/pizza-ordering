import React from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ element: Component, ...rest }) => {
  const isAdminAuthenticated = !!localStorage.getItem("amin-token");

  return isAdminAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/admin-login" />
  );
};

export default AdminProtectedRoute;
