import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/footer.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

function App() {
  const headerLinks = [
    { label: "Home", url: "/" },
    { label: "Produtos", url: "/produtos" },
    { label: "Sobre", url: "/sobre" },
  ];

  return (
    <>
      <Header title="Pousada" links={headerLinks} />
      
      <main>
        <AppRoutes />
      </main>

      <Footer />
    </>
  );
}

export default App;
