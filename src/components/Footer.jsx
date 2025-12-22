import React from "react";
import { Link } from "react-router-dom";

import "../assets/style/Footer.css";

export default function Footer() {
    return(
        <footer className="footer bg-dark text-light py-5 px-md-0 px-5">
            <section className="footer__address">
                <p className="footer-title">John Doe</p>
                <address>
                    <ul>
                        <li className="footer-li">
                            <a className="footer-li__link" href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.7786099,4.8007142,2504m/data=!3m1!1e3!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="nofollow">
                                40 rue Laure Diebold
                            </a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-li__link" href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.7786099,4.8007142,2504m/data=!3m1!1e3!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="nofollow">
                                69009 Lyon, France
                            </a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-li__link" href="tel:1020304050" target="_blank" rel="nofollow">10 20 30 40 50</a>
                        </li>
                        <li className="footer-li">
                            <a className="footer-li__link" href="mailto:john.doe@gmail.com" target="_blank" rel="nofollow">john.doe@gmail.com</a>
                        </li>
                    </ul>
                </address>
                <div className="address__social-media">
                    <ul className="social-media__list">
                        <li className="footer-li">
                            <a className="list__icon footer-li__link" href="https://github.com/github-john-doe" target="_blank" rel="nofollow" aria-label="lien github">
                                <i className="bi bi-github"></i>
                            </a>
                        </li>
                        <li className="footer-li">
                            <a className="list__icon footer-li__link" href="https://x.com/johnDoe26676287" target="_blank" rel="nofollow" aria-label="lien twitter">
                                <i className="bi bi-twitter"></i>
                            </a>
                        </li>
                        <li className="footer-li">
                            <a className="list__icon footer-li__link" href="https://www.linkedin.com/in/john-doe-291a4b309/" target="_blank" rel="nofollow" aria-label="lien linkedin">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="footer__pages">
                <p className="footer-title">Liens Utiles</p>
                <ul>
                    <li className="footer-li">
                        <Link className="footer-li__link" to="/">Accueil</Link>
                    </li>
                    <li className="footer-li">
                        <Link className="footer-li__link" to="/services">Services</Link>
                    </li>
                    <li className="footer-li">
                        <Link className="footer-li__link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="footer-li">
                        <Link className="footer-li__link" to="/contact">Me contacter</Link>
                    </li>
                    <li className="footer-li">
                        <Link className="footer-li__link" to="/mentions-legales" rel="noindex">Mentions légales</Link>
                    </li>
                </ul>
            </section>
            <section className="footer__projects">
                <p className="footer-title">Mes dernières réalisations</p>
                <ul>
                    {/* <a> replaces <Link> to anticipate future website links */}
                    <li className="footer-li">
                        <a className="footer-li__link" href="/portfolio" target="_blank">Fresh Food</a>
                    </li>
                    <li className="footer-li">
                        <a className="footer-li__link" href="/portfolio" target="_blank">Restaurant Akira</a>
                    </li>
                    <li className="footer-li">
                        <a className="footer-li__link" href="/portfolio" target="_blank">Espace bien-être</a>
                    </li>
                    <li className="footer-li">
                        <a className="footer-li__link" href="/portfolio" target="_blank">SEO</a>
                    </li>
                    <li className="footer-li">
                        <a className="footer-li__link" href="/portfolio" target="_blank">Création d'un API</a>
                    </li>
                    <li className="footer-li">
                        <a className="footer-li__link" href="/portfolio" target="_blank">Maquette d'un site</a>
                    </li>
                </ul>
            </section>
        </footer>
    );
};