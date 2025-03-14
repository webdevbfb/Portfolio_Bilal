import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
      <h1>Bilal's Portfolio</h1>
      </div>
      <div>
      <div className="footer-section links">
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
          </ul>
        </div>
      </div>
      <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projekte</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
      </ul>
      </div>
    </nav>
  );
}
