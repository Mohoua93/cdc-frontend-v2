// src/pages/Home.jsx
import { Link } from "react-router-dom";
import bgHome from "../assets/images/bg-home.jpg";

function Home() {
  return (
    <>
      {/* HERO plein écran comme Entraide & Solidarité */}
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${bgHome})` }}
      >
        <div className="home-hero-overlay">
          <div className="container home-hero-content">
            <h1 className="home-hero-title">
              Ensemble, nous agissons contre la précarité et la faim
              <p>Partout dans le monde</p>
            </h1>
            <p className="home-hero-text">
              Les Colis du Cœur est une association de solidarité qui distribue
              des colis alimentaires et des produits de première nécessité aux
              personnes et familles en difficulté. Chaque don, chaque bénévole
              nous permet d&apos;aider davantage de personnes.
            </p>

            <div className="home-hero-actions">
              <Link to="/faire-un-don" className="btn btn-primary">
                Faire un don
              </Link>
              <Link to="/devenir-benevole" className="btn btn-outline-light">
                Devenir bénévole
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau de contenu sous le hero (style simple) */}
      <section className="home-intro-strip">
        <div className="container home-intro-grid">
          <div>
            <h2>Les Colis du Cœur</h2>
            <p>
              Nous organisons régulièrement des distributions de colis
              alimentaires, des actions solidaires et des temps d&apos;écoute
              pour les personnes isolées, étudiantes, familles en grande
              précarité…
            </p>
            <Link to="/qui-sommes-nous" className="text-link">
              En savoir plus sur l&apos;association →
            </Link>
          </div>

          <div>
            <h2>Nos actions</h2>
            <p>
              Aide alimentaire (France, Afrique, Asie), soutien matériel, maraudes, campagnes
              spécifiques (hiver, rentrée, fêtes)… Nos actions s&apos;adaptent
              aux besoins du terrain.
            </p>
            <Link to="/nos-actions" className="text-link">
              Découvrir nos actions →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;


