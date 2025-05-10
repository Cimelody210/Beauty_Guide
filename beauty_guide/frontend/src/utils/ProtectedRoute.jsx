import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getItem } from "../utils/LocalStorage";

const ProtectedRoute = ({ allowedRoles }) => {
  const user = getItem("user_key");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/403" replace />;
  }

  return <Outlet />; // Cho phép truy cập nếu đúng role=admin
};

export default ProtectedRoute;
