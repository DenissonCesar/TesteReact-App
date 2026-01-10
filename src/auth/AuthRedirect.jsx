import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";

export default function AuthRedirect({ children }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "ADMIN") {
      navigate("/admin", { replace: true });
    }

    if (user?.role === "CLIENT") {
      navigate("/client", { replace: true });
    }
  }, [user, navigate]);

  return children;
}
