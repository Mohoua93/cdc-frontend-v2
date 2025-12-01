// src/pages/Volunteer.js
import { useState } from "react";
import "../styles/volunteer.css";

function Volunteer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    availability: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Merci de cocher la case d'autorisation de contact.");
      return;
    }

    alert(
      "Merci pour votre engagement ! L'équipe des Colis du Cœur vous contactera prochainement."
    );

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      availability: "",
      message: "",
      consent: false,
    });
  };

  return (
    <section className="about-page">
      <div className="container">
        <h1 className="about-title">Devenez bénévole</h1>

        <div className="about-body">
          <p>
            Chaque semaine, des familles, des étudiants, des personnes isolées
            viennent chercher un soutien auprès des <strong>Colis du Cœur</strong>.
            Derrière chaque colis distribué, il y a des bénévoles qui donnent un
            peu de leur temps pour offrir beaucoup d&apos;espoir.
          </p>

          <p>
            Que vous ayez une heure de temps en temps ou plusieurs demi-journées
            par mois, votre présence peut faire la différence&nbsp;: préparer et
            distribuer les colis, accueillir les personnes, aider à la
            logistique, participer à la communication ou à l&apos;organisation
            d&apos;évènements solidaires… Il y a une mission adaptée à chacun.
          </p>

          <p>
            Rejoindre l&apos;équipe, c&apos;est faire partie d&apos;une aventure
            humaine, chaleureuse et concrète, au plus près du terrain. Ensemble,
            nous luttons contre la précarité et l&apos;isolement, avec bienveillance
            et dignité. Si vous avez envie d&apos;agir et de vous sentir utile,
            remplissez le formulaire ci-dessous&nbsp;: nous serons ravis
            d&apos;échanger avec vous.
          </p>
        </div>

        <section className="volunteer-section" id="devenir-benevole">
          <h2 className="volunteer-title">Je souhaite m&apos;engager</h2>
          <p className="volunteer-intro">
            Indiquez-nous vos coordonnées et vos disponibilités. Nous vous
            contacterons pour vous présenter plus en détail les besoins de
            l&apos;association et voir ensemble comment vous pouvez participer.
          </p>

          <form className="volunteer-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Nom &amp; prénom *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Ex : Marie Dupont"
              />
            </div>

            <div className="form-two-columns">
              <div className="form-group">
                <label htmlFor="email">Adresse e-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="vous@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Optionnel"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="availability">Disponibilités principales</label>
              <select
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
              >
                <option value="">Sélectionner une option</option>
                <option value="semaine">En semaine</option>
                <option value="weekend">Le week-end</option>
                <option value="semaine-weekend">
                  En semaine &amp; le week-end
                </option>
                <option value="ponctuel">De manière ponctuelle</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message (compétences, envies, idées…)
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Parlez-nous un peu de vous et de ce que vous aimeriez faire au sein de l'association."
              />
            </div>

            <div className="form-consent">
              <label>
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                />
                <span>
                  J&apos;accepte que Les Colis du Cœur utilise mes informations
                  pour me recontacter au sujet du bénévolat.
                </span>
              </label>
            </div>

            <button type="submit" className="volunteer-submit">
              Envoyer ma demande
            </button>
          </form>
        </section>
      </div>
    </section>
  );
}

export default Volunteer;
