import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import ClientDashboard from "../pages/client/ClientDashboard.jsx";
import ProtectedRoute from "./ProtectedRoute";
import AuthRedirect from "../auth/AuthRedirect.jsx";


export default function AppRoutes() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/login"
        element={
          <AuthRedirect>
            <Login />
          </AuthRedirect>
        }
      />

      <Route
        path="/register"
        element={
          <AuthRedirect>
            <Register />
          </AuthRedirect>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/client"
        element={
          <ProtectedRoute allowedRoles={["CLIENT"]}>
            <ClientDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
