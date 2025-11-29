// src/components/Header.jsx
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="site-logo">Les Colis du Cœur</div>

        <nav className="site-nav">
          <Link to="/">Accueil</Link>
          <Link to="/qui-sommes-nous">Qui sommes-nous</Link>
          <Link to="/nos-actions">Nos actions</Link>
          <Link to="/devenir-benevole">Devenir bénévole</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faire-un-don" className="nav-donate">
            Faire un don
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
