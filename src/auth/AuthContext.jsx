import { createContext, useState, useContext, useEffect } from "react";
import { ApiMock } from "./ApiMock";

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function login(email, password) {
    const foundUser = ApiMock.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      setError("Email ou senha inválidos");
      return false;
    }

    const loggedUser = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      password: foundUser.password,
      role: foundUser.role,
      token: "fake-jwt-token",
      redirectTo: foundUser.role === "ADMIN" ? "/admin" : "/client",
    };

    setUser(loggedUser);
    localStorage.setItem("user", JSON.stringify(loggedUser));

    return loggedUser;
  }

  function register(name, email, password, role) {
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role,
    };

    ApiMock.push(newUser);

    const loggedUser = {
      id: newUser.id,
      name,
      email,
      password,
      role,
      token: "fake-jwt-token",
      redirectTo: role === "ADMIN" ? "/admin" : "/client",
    };

    setUser(loggedUser);
    localStorage.setItem("user", JSON.stringify(loggedUser));

    return loggedUser;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
