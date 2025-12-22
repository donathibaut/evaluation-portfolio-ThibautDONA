import "../assets/style/Legal.css";

export default function Legal() {

    return(
        <main className="little-page">
            <header className="hero-section text-center">
                <h1 className="hero-section__title pt-5">Mentions légales</h1>

                <hr className="border-primary border-5 opacity-100 w-25 mx-auto mb-0"></hr>
            </header>
            
            {/* Bootstrap Accordion */}
            <section className="legal-section accordion container col-md-10 py-5" id="accordionExample">

                {/* Website Editor */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Éditeur du site
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse show collapse" data-bs-parent="#accordionExample">
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

                {/* Hosting */}
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

                {/* Credits */}
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
                            <p className="fst-italic">
                                Les images utilisées sur ce site sont libres de droits et ont été obtenus
                                sur le site <a href="https://pixabay.com/fr/" target="_blank" rel="nofollow">Pixabay</a>
                            </p>
                            <p className="fst-italic">
                                La favicon de ce site a été fournie par <a href="https://www.flaticon.com/fr/" target="_blank" rel="nofollow">John doe Icons erstellt von Freepik - Flaticon</a>
                            </p>                        
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};