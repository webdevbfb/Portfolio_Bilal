import React from "react";
import "/styles/components/Home.scss";

export default function Home() {
  return (
    <section>
      <div className="home">
        <h2>Willkommen auf meinem Portfolio!</h2>
        <h1>Ich bin Bilal Faik Bagci</h1>
        <h2>Full Stack Entwickler</h2>
        <p>Hier findest du meine neuesten Projekte und Kontaktmöglichkeiten.</p>
      </div>
      <div className="aboutMe">
        <img
          className="bild"
          src="/Portfolio_Bilal/bilal-bagci.jpg"
          alt="Profilbild"
        />
        <div>
          <div>
            <h2>ÜBER MICH</h2>
          </div>
          <p className="aboutMeText">
            Hallo! Ich bin Bilal F. Bagci, ein angehender
            Full-Stack-Webentwickler. Ich arbeite mit modernen Technologien und
            entwickle dynamische Webprojekte. Zurzeit vertiefe ich meine
            Kenntnisse in React und arbeite an verschiedenen Projekten, um meine
            Fähigkeiten zu verbessern. Neben der Webentwicklung interessiere ich
            mich für nutzerfreundliche Designs und effizienten Code. Ich bin auf
            der Suche nach neuen Herausforderungen, bei denen ich meine
            Kenntnisse erweitern und praktische Erfahrungen sammeln kann. Wenn
            du mit mir an spannenden Projekten arbeiten möchtest, freue ich mich
            auf den Austausch!
          </p>
          <h4>
            NAME: <span>Bilal Faik Bagci</span>
          </h4>
          <h4>
            GEBURTSTAG: <span>17.06.1989</span>
          </h4>
          <h4>
            NATIONALITÄT: <span>deutsch</span>
          </h4>
          <h4>
            E-MAIL: <span>bilal.bagci@hotmail.de</span>
          </h4>
          <a
            className="download-btn"
            href="/Portfolio_Bilal/Lebenslauf_Bilal-Bagci.pdf"
            download="Lebenslauf.pdf">
            📄 Lebenslauf herunterladen
          </a>
        </div>
      </div>
      <section>
        <div className="education-experience">
          <h2>Bildung & Berufserfahrung</h2>
          <ul>
            <li>
              <strong>Realschulabschluss</strong>
              <br />
              📍 2007 | Deutschland
              <br />
              Erfolgreich abgeschlossen.
            </li>
            <li>
              <strong>Ausbildung zum Isolierer</strong>
              <br />
              📍 2008 – 2009 | Deutschland
              <br />
              Begonnen, aber aufgrund der Insolvenz des Unternehmens nicht
              abgeschlossen.
            </li>
            <li>
              <strong>Verschiedene Tätigkeiten</strong>
              <br />
              📍 2009 – 2013 | Deutschland
              <br />
              Berufserfahrung in verschiedenen Bereichen gesammelt.
            </li>
            <li>
              <strong>Ausbildung zum Groß- und Außenhandelskaufmann</strong>
              <br />
              📍 2013 – 2016 | Deutschland
              <br />
              Erfolgreich abgeschlossen mit Fokus auf Warenwirtschaft,
              Kundenbetreuung und Logistik.
              <div className="download-buttons">
            <a
              className="download-btn"
              href="/Portfolio_Bilal/Prufungszeugnis_Groß-und-Außenhandelskaufmann.pdf"
              download="Prufungszeugnis_Groß-und-Außenhandelskaufmann.pdf">
              📄 Ausbildung - Prüfungszeugnis
            </a>
          </div>
            </li>
            <li>
              <strong>Selbstständigkeit als Onlinehändler</strong>
              <br />
              📍 2016 – 2022 | Deutschland
              <br />
              Sechs Jahre erfolgreich als Onlinehändler tätig. Erfahrung in
              E-Commerce, Produktmanagement und Kundenbetreuung gesammelt.
              Aufgrund wachsender Konkurrenz das Geschäft beendet.
            </li>
            <li>
              <strong>Full-Stack Web Development</strong>
              <br />
              📍 2024 – 2025 | DCI Digital Career Institute GmbH
              <br />
              Erwerb umfassender Kenntnisse in Frontend- und
              Backend-Entwicklung, moderne Web-Technologien und agile
              Entwicklungsmethoden.
              <div className="download-buttons">
            <a
              className="download-btn"
              href="/Portfolio_Bilal/Zertifikat_Bagci-Bilal-Faik.pdf"
              download="Zertifikat_Bagci-Bilal-Faik.pdf">
              📄 DCI Kurs - Zertifikat
            </a>
          </div>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
