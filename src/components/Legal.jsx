import "../assets/style/Legal.css";

export default function Legal() {

    return(
        <main>
            <header classNameName="hero-section">
                <h1>Mentions légales</h1>
            </header>
            
            {/* Liste Accordéon Bootstrap */}
            <section className="legal-section accordion" id="accordionExample">

                {/* Éditeur du site */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Éditeur du site
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <h3>John Doe</h3>
                        <address>
                            <ul>
                                <li><i className="bi bi-map"></i> 40 rue Laure Diebold</li>
                                <li><i className="bi bi-geo-alt"></i> 69009 Lyon, France</li>
                                <li><i className="bi bi-phone"></i> 10 20 30 40 50</li>
                                <li><i className="bi bi-envelope-at"></i> john.doe@gmail.com</li>
                            </ul>
                        </address>                        
                    </div>
                    </div>
                </div>

                {/* Hébergeur */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hébergeur
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <h3>alwaysdata</h3>
                        <address>
                            <p>91 Rue du Faubourg Saint Honoré, 75008 Paris</p> 
                            <i className="bi bi-globe"> </i>
                            <a href="https://www.alwaysdata.com/fr/" target="_blank" rel="nofollow">
                                www.alwaysdata.com
                            </a>
                        </address>                        
                    </div>
                    </div>
                </div>

                {/* Crédits */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Crédits
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <h3>Crédits</h3>
                        <p>
                            Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr" target="_blank" rel="nofollow">Centre Européen de Formation</a>.
                        </p>
                        <p>
                            Les images utilisées sur ce site sont libres de droits et ont été obtenus
                            sur le site <em><a href="https://pixabay.com/fr/" target="_blank" rel="nofollow">Pixabay</a></em>
                        </p>
                        <p>
                            La favicon de ce site a été fournie par <em><a href="https://www.flaticon.com/fr/" target="_blank" rel="nofollow">John doe Icons erstellt von Freepik - Flaticon</a></em>
                        </p>                        
                    </div>
                    </div>
                </div>
            </section>
        </main>
    );
};