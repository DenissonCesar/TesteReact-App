import { Routes, Route } from "react-router-dom";
import App from "../App.jsx";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}
