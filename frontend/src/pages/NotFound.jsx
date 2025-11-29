// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="container">
      <h1 className="page-title">404 - Page non trouvée</h1>
      <p>
        Oups ! La page que vous recherchez n&apos;existe pas ou n&apos;est plus
        disponible.
      </p>
      <p>
        <Link to="/">Retourner à la page d&apos;accueil</Link>
      </p>
    </section>
  );
}

export default NotFound;
