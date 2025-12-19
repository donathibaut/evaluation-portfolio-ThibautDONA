import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <footer className="footer">
            <section className="footer__address">
                <h5>John Doe</h5>
                <address>
                    <ul>
                        <li>40 rue Laure Diebold</li>
                        <li>69009 Lyon, France</li>
                        <li>10 20 30 40 50</li>
                        <li>john.doe@gmail.com</li>
                    </ul>
                </address>
                <a href=""><img src="" alt="github" /></a>
                <a href=""><img src="" alt="Twitter" /></a>
                <a href=""><img src="" alt="LinkedIn" /></a>
            </section>
            <section className="footer__address">
                <h5>Liens Utiles</h5>
                <ul>
                    <li><a href="">Accueil</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Me contacter</a></li>
                    <li><a href="">Mentions légales</a></li>
                </ul>
            </section>
            <section>
                <h5>Mes dernières réalisations</h5>
                <ul>
                    <li><a href="">Fresh Food</a></li>
                    <li><a href="">Restaurant Akira</a></li>
                    <li><a href="">Espace bien-être</a></li>
                    <li><a href="">SEO</a></li>
                    <li><a href="">Création d'un API</a></li>
                    <li><a href="">Maquette d'un site</a></li>
                </ul>
            </section>
        </footer>
    );
};