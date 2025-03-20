import React from "react";
import "../styles/components/Footer.scss";

export default function Footer() {
  // Funktion für das Öffnen von Google Maps im Popup
  const openMap = (event) => {
    event.preventDefault();
    window.open(
      "https://www.google.com/maps?q=Schulstra%C3%9Fe%2021,%2067059%20Ludwigshafen%20am%20Rhein,%20Deutschland",
      "MapPopup",
      "width=600,height=400"
    );
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section (Hier kannst du weitere Informationen über dich hinzufügen) */}
        {/* Quick Links Section */}
        <div className="footer-section links">
          <h2>
            <i className="fa-solid fa-link"></i> Quick Links
          </h2>
          <ul className="foot">
            <li>
              <a
                href="https://github.com/webdevbfb"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa-brands fa-github" aria-hidden="true"></i>{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bilal-f-bagci-a4543a332/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>{" "}
              </a>
            </li>
            <li>
              <a href="mailto:bilal.bagci@hotmail.de">
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>{" "}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h2>
            <i className="fa-solid fa-file-signature" aria-hidden="true"></i>{" "}
            Kontakt
          </h2>
          <p className="links-to">
            <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
            <a href="mailto:bilal.bagci@hotmail.de">
              bilal.bagci@hotmail.de
            </a>
            <br />
            <i className="fa fa-mobile" aria-hidden="true"></i>{" "}
            <a href="tel:+4917684375852">+49176 843 758 52</a>
            <br />
            <i className="fa fa-location-dot" aria-hidden="true"></i>{" "}
            <a href="#" onClick={openMap} id="mapLink">
              67071 Ludwigshafen am Rhein, Deutschland
            </a>
          </p>
        </div>
      </div>
      <div>
        <div className="footer-section about">
          <hr />
          <p>© 2024 Bilal F. Bagci | Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
