import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // Check if token exists in localStorage

  return token ? <Outlet /> : <Navigate to="/login" />;
};
