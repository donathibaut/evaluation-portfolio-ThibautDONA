import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <nav>
        <Link to="/">John Doe</Link>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/services">Offres de Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Mes Réalisations</Link>
          </li>
          <li>
            <Link to="/contact">Me contacter</Link>
          </li>
          <li>
            <Link to="/mentions-legales" rel="noindex">Mentions Légales</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};