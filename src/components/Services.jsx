import banner from "../assets/img/banner.jpg";

export default function Services() {
    return(
        <main className="text-center">
            <header className="hero-section">
                <img className="hero-section__banner" src={banner} alt="bannière de site" />

                <h1 className="hero-section__title pt-5">Mon offre de services</h1>
                <p className="px-md-5 px-2">Voici les prestations sur lesquelles je peux intervenir</p>
                
                <hr className="border-primary border-5 opacity-100 w-25 mx-auto mb-0"></hr>
            </header>

            {/* Bootstrap Cards */}
            <section className="service-section container w-md-75 mx-auto py-5">
                <div className="row d-flex justify-content-center g-4 py-2">
                    <div className="col">
                        <div className="service-section__ux card h-100">
                            <div className="card-body">
                                <i className="h2 text-primary bi bi-brush d-inline-block py-4" aria-label="pinceau"></i>
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
                    <div className="col">
                        <div className="service-section__dev-web card h-100">
                            <div className="card-body">
                                <i className="h2 text-primary bi bi-code-slash d-inline-block py-4" aria-label="code informatique"></i>
                                <h2 className="card-title">Développement web</h2>
                                <p>
                                    Le développement de sites web consiste à créer des sites internet en utilisant 
                                    des langages de programmation (HTML, CSS, JavaScript, PHP, etc.)
                                    et des frameworks (Bootstrap, React, Angular, etc.).
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service-section__seo card h-100">
                            <div className="card-body">
                                <i className="h2 text-primary bi bi-search d-inline-block py-4" aria-label="loupe"></i>
                                <h2 className="card-title">Référencement</h2>
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