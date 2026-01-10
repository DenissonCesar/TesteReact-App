import "../../global.css";
import { Link } from "react-router-dom";
import { useAuth } from '../../auth/AuthContext';

function Header({ title, links }) {
  const { user, logout } = useAuth();

  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/" className="header-logo-link">
          <h1 className="header-logo">{title}</h1>
        </Link>
        <nav className="header-nav">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>

          {user && <button onClick={logout}>Sair</button>}
        </nav>
      </div>
    </header>
  );
}

export default Header;
