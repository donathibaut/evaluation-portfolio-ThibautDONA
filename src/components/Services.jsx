export default function Services() {
    return(
        <main className="text-center">
            <header className="hero-section">
                <h1 className="hero-section__title">Mon offre de services</h1>
                <p className="hero-section__subtitle">Voici les prestations sur lesquelles je peux intervenir</p>
            </header>
            <section className="service-section">
                <div className="project-section__1 row d-flex justify-content-center g-4 py-2">
                    <div className="col-md-4">
                        <div className="service-section__ux card">
                            <div className="card-body">
                                <i class="h2 text-primary bi bi-brush" aria-label="pinceau"></i>
                                <h2 className="card-title">UX Design</h2>
                                <p>
                                    L'UX Design est une discipline qui consiste à concevoir des produits 
                                    (sites web, applications mobiles, logiciels, objets connectés, etc.)
                                    en plaçant l'utilisateur au centre des préoccupations.
                                    L'objectif est de rendre l'expérience utilisateur la plus
                                    fluide et agréable possible.
                                </p>                            
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-section__dev-web card">
                            <div className="card-body">
                                <i class="h2 text-primary bi bi-code-slash" aria-label="code informatique"></i>
                                <h2 className="card-title">Restaurant Akira</h2>
                                <p>
                                    Le développement de sites web consiste à créer des sites internet en utilisant 
                                    des langages de programmation (HTML, CSS, JavaScript, PHP, etc.)
                                    et des frameworks (Bootstrap, React, Angular, etc.).
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-section__seo card">
                            <div className="card-body">
                                <i class="h2 text-primary bi bi-search" aria-label="loupe"></i>
                                <h2 className="card-title">Développement web</h2>
                                <p className="card-text">
                                    Le référencement naturel (SEO) est une technique qui consiste à optimiser
                                    un site web pour le faire remonter dans les résultats des moteurs
                                    de recherche (Google, Bng, Yahoo, etc.). L'objectif est d'attirer un
                                    maximum de visiteurs qualifiés sur le site.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};