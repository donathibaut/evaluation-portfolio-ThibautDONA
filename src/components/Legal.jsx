export default function Legal() {
    return(
        <main>
            <header className="hero-section">
                <h1>Mentions légales</h1>
            </header>
            <section className="legal-section">
                <div className="legal-section__editor">
                    <h2>Éditeur du site</h2>
                    <h3>John Doe</h3>
                    <address>
                        <ul>
                            <li>40 rue Laure Diebold</li>
                            <li>69009 Lyon, France</li>
                            <li>10 20 30 40 50</li>
                            <li>john.doe@gmail.com</li>
                        </ul>
                    </address>
                </div>
                <div className="legal-section__host">
                    <h2>Hébergeur</h2>
                    <h3>alwaysdata</h3>
                    <address>
                        <p>91 Rue du Faubourg Saint Honoré, 75008 Paris</p>
                        <a href="www.alwaysdata.com">www.alwaysdata.com</a>
                    </address>
                </div>
                <div className="legal-section__credits">
                    <h2>Crédits</h2>
                    <h3>Crédits</h3>
                    <p>
                        Ce site a été réalisé par John Doe, étudiant au 
                        <a href="">Centre Européen de Formation</a>.
                    </p>
                    <p>
                        Les images utilisées sur ce site sont libres de droits et ont été obtenus
                        sur le site <a href="">Pixabay</a>
                    </p>
                    <p>
                        La favicon de ce site a été fournie par 
                        <a href="">John doe Icons erstellt von Freepik - Flaticon</a>
                    </p>
                </div>
            </section>
        </main>
    );
};