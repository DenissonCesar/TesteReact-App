import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
      return;
    }

    if (!allowedRoles.includes(user.role)) {
      navigate("/", { replace: true });
    }
  }, [user, allowedRoles, navigate]);

  if (!user) return null;

  return children;
}
