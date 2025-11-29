// src/components/Footer.jsx
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>© {currentYear} Les Colis du Cœur. Tous droits réservés.</div>
        <div className="site-footer-links">
          <Link to="/contact">Contact</Link>
          <Link to="/mentions-legales">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
