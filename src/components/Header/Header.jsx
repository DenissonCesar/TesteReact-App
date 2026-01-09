import "../../global.css";
import { Link } from "react-router-dom";

function Header({ title, links }) {
  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="header-logo-link">
          <h1 className="header-logo">{title}</h1>
        </Link>
        <nav className="header-nav">
          <ul>
            {links.map((link, index) => (
              <Link key={index}>
                <Link to={link.url}>{link.label}</Link>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
