import React from "react";
import "../styles/components/Home.scss";

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
        <img className="bild" src="/bilal-bagci.jpg" alt="Profilbild" width={150} />
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
          <h4>NAME: <span>Bilal Faik Bagci</span></h4>
          <h4>GEBURTSTAG: <span>17.06.1989</span></h4>
          <h4>NATIONALITÄT: <span>deutsch</span></h4>
          <h4>E-MAIL: <span>bilal.bagci@hotmail.de</span></h4>
        </div>
      </div>
    </section>
  );
}
