import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const headerLinks = [
    { label: "Home", url: "/" },
    { label: "Produtos", url: "/produtos" },
    { label: "Sobre", url: "/sobre" },
  ];

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header title="Pousada" links={headerLinks} />

      <main style={{ flex: 1, padding: "2rem" }}>
        <h2>Bem-vindo!</h2>
        <p>Conteúdo principal do site aqui...</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
