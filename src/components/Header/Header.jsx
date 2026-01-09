import "../../global.css";

function Header({ title, links }) {
  return (
    <header className="main-header">
      <div className="header-container">
        <h1 className="header-logo">{title}</h1>

        <nav className="header-nav">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
