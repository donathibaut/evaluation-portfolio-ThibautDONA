import { NavLink } from "react-router"

export default function Nav() {
  const navLink = ({ isActive, isPending }) => 
    `nav-link underlined-hover ${isPending ? "pending" : isActive ? "fw-bold active text-decoration-underline" : ""}`;

  return (
    <header>

      {/* Bootstrap NavBar */}
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container-fluid px-lg-5 px-4">
          <NavLink className="navbar-brand" to="/">
            John Doe
          </NavLink>

          {/* Bouton Burger */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
         
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className={navLink} aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLink} to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLink} to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLink} to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={navLink} to="/mentions-legales" rel="noindex">
                  Mentions Légales
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};