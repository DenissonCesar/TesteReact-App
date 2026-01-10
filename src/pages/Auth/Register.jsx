import { useState } from "react";
import "../../global.css";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "CLIENT",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Cadastro:", form);
    // depois → authService.register(form)
  }

  return (
    <div className="auth-container">
      <h1>Criar Conta</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nome completo"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
          required
        />

        <select name="role" onChange={handleChange}>
          <option value="CLIENT">Cliente</option>
          <option value="ADMIN">Administrador</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
