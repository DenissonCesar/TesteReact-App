import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <h2>Bem-vindo à nossa pousada</h2>
      <p>Escolha uma opção para continuar</p>

      <div className="home-actions">
        <Link to="/login">
          <button className="btn btn-primary">Entrar</button>
        </Link>

        <Link to="/register">
          <button className="btn btn-secondary">Cadastrar</button>
        </Link>
      </div>
    </main>
  );
}
