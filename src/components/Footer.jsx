import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <footer className="footer">
            <section className="footer__address">
                <h5>John Doe</h5>
                <address>
                    <ul>
                        <li>
                            <a href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.7786099,4.8007142,2504m/data=!3m1!1e3!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="nofollow">
                                40 rue Laure Diebold
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.7786099,4.8007142,2504m/data=!3m1!1e3!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="nofollow">
                                69009 Lyon, France
                            </a>
                        </li>
                        <li>
                            <a href="tel:1020304050" target="_blank" rel="nofollow">10 20 30 40 50</a>
                        </li>
                        <li>
                            <a href="mailto:john.doe@gmail.com" target="_blank" rel="nofollow">john.doe@gmail.com</a>
                        </li>
                    </ul>
                </address>
                <a href="" target="_blank" aria-label="lien github">
                    <i className="bi bi-github"></i>
                </a>
                <a href="" target="_blank" aria-label="lien twitter">
                    <i className="bi bi-twitter"></i>
                </a>
                <a href="" target="_blank" aria-label="lien linkedin">
                    <i className="bi bi-linkedin"></i>
                </a>
            </section>
            <section className="footer__pages">
                <h5>Liens Utiles</h5>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Me contacter</Link></li>
                    <li><Link to="/mentions-legales">Mentions légales</Link></li>
                </ul>
            </section>
            <section className="footer__projects">
                <h5>Mes dernières réalisations</h5>
                <ul>
                    <li><a href="/portfolio" target="_blank">Fresh Food</a></li>
                    <li><a href="/portfolio" target="_blank">Restaurant Akira</a></li>
                    <li><a href="/portfolio" target="_blank">Espace bien-être</a></li>
                    <li><a href="/portfolio" target="_blank">SEO</a></li>
                    <li><a href="/portfolio" target="_blank">Création d'un API</a></li>
                    <li><a href="/portfolio" target="_blank">Maquette d'un site</a></li>
                </ul>
            </section>
        </footer>
    );
};