// src/pages/About.jsx
import teamPhoto from "../assets/images/pics-QSM-1.jpeg";
import "../styles/about.css";


function About() {
  return (
    <section className="about-page">
      <div className="container">
        <h1 className="about-title">QUI SOMMES NOUS ?</h1>

        <div className="about-hero">
          <div className="about-hero-image">
            <img
              src={teamPhoto}
              alt="Équipe des Colis du Cœur lors d'une distribution"
            />
          </div>

          <div className="about-hero-text">
            <p>
              <strong>Les Colis du Cœur</strong> est une association à but non
              lucratif qui agit pour soutenir les personnes et familles en
              situation de précarité, au travers de distributions alimentaires
              et d&apos;actions solidaires tout au long de l&apos;année.
            </p>

            <p>
              Implantée sur le terrain, l&apos;association a pour objectif
              d&apos;être au plus près des publics les plus fragiles, en
              proposant une aide concrète mais aussi une présence humaine, dans
              les moments les plus difficiles.
            </p>

            <p>
              Au-delà de l&apos;aide alimentaire, Les Colis du Cœur
              s&apos;inscrit dans une démarche globale d&apos;accompagnement et
              de lien social, en travaillant avec un réseau de partenaires et de
              bénévoles engagés.
            </p>
          </div>
        </div>

        <div className="about-body">
          <p>
            Au fil des années, l&apos;association a adapté ses actions aux
            besoins des personnes accueillies : familles avec enfants,
            étudiants, personnes isolées, retraités, travailleurs précaires…
            Chaque situation est unique et nécessite une écoute attentive.
          </p>

          <p>
            Les distributions de colis sont complétées par des temps
            d&apos;échange, d&apos;orientation et, lorsque c&apos;est possible,
            par la mise en relation avec des structures partenaires pour
            l&apos;accès aux droits, au logement, à l&apos;emploi ou aux soins.
          </p>

          <p>
            Les Colis du Cœur repose entièrement sur la mobilisation de ses
            bénévoles et le soutien de donateurs, d&apos;entreprises et de
            collectivités. Ensemble, nous travaillons à lutter contre
            l&apos;isolement, la faim et la pauvreté, en plaçant la dignité des
            personnes au cœur de notre action.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

