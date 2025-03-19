import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.scss";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="allTogether">
      <div className="navbar-brand">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <i class="fa-brands fa-connectdevelop"></i>
          <h1>
            Bilal <br /> Bagci
          </h1>
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i
            className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`}
            aria-hidden="true"></i>
        </button>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              Projekte
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Kontakt
            </Link>
          </li>
        </ul>

        <div className="social-links">
          <a
            href="https://github.com/webdevbfb"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bilal-f-bagci-a4543a332/"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      </div>
    </nav>
  );
}
