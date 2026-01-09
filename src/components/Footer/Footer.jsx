import "../../global.css";

function Footer() {
  

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-info">
          
          <p>&copy;Pousada. Todos os direitos reservados.</p>
        </div>

        <nav className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
