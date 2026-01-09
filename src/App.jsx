import Header from "./components/Header/Header.jsx";
// import Footer from "./components/Footer/footer.jsx";
// import AppRoutes from "./routes/AppRoutes.jsx";
// import "./index.css";

function App() {
  const headerLinks = [
    { label: "Home", url: "/" },
    { label: "Produtos", url: "/produtos" },
    { label: "Sobre", url: "/sobre" },
  ];

  return (
    <>
      <Header title="Pousada" links={headerLinks} />
    </>
  );
}

export default App;