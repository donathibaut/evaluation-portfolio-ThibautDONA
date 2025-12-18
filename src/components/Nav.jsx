import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <nav>
        <a>John Doe</a>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/services">Offres de Services</Link>
          </li>
          <li>
            <Link to="/projects">Mes Réalisations</Link>
          </li>
          <li>
            <Link to="/contact">Me contacter</Link>
          </li>
          <li>
            <Link to="/mentions-legales">Mentions Légales</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};