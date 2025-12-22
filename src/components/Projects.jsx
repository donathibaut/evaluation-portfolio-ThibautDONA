import banner from "../assets/img/banner.jpg";

import freshFood from "../assets/img/portfolio/fresh-food.jpg";
import akira from "../assets/img/portfolio/restaurant-japonais.jpg";
import bienEtre from "../assets/img/portfolio/espace-bien-etre.jpg";
import seo from "../assets/img/portfolio/seo.jpg";
import createApi from "../assets/img/portfolio/coder.jpg";
import maquetteFigma from "../assets/img/portfolio/screens.jpg";

export default function Projects() {
    return(
        <main className="text-center">
            <header className="hero-section">
                <img className="hero-section__banner" src={banner} alt="bannière de site" />

                <h1 className="hero-section__title pt-5">Portfolio</h1>
                <p className="px-md-5 px-2">Voici quelques-unes de mes réalisations.</p>

                <hr className="border-primary border-5 opacity-100 w-25 mx-auto mb-0"></hr>
            </header>

            {/* Bootstrap Cards */}
            <section className="project-section container py-5">
                <div className="project-section__1 row d-flex justify-content-center g-4 py-2">
                    <div className="col-md-4">
                        <div className="fresh-food card h-100">
                            <img src={freshFood} className="card-img-top" alt="panier de légumes" />
                            <div className="card-body d-flex flex-column">
                                <h2 className="card-title">Fresh Food</h2>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <a href="#" className="btn btn-primary active btn-lighter mt-auto align-self-center" rel="nofollow">
                                    Voir le site
                                </a>
                            </div>
                            <div className="card-footer text-body-secondary">
                                Site réalisé avec PHP et MySQL
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="akira card h-100">
                            <img src={akira} className="card-img-top" alt="plats japonais" />
                            <div className="card-body d-flex flex-column">
                                <h2 className="card-title">Restaurant Akira</h2>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <a href="#" className="btn btn-primary active btn-lighter mt-auto align-self-center" rel="nofollow">
                                    Voir le site
                                </a>
                            </div>
                            <div className="card-footer text-body-secondary">
                                Site réalisé avec WordPress
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bien-etre card h-100">
                            <img src={bienEtre} className="card-img-top" alt="statue de Bouddha sur l'eau" />
                            <div className="card-body d-flex flex-column">
                                <h2 className="card-title">Espace bien-être</h2>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <a href="#" className="btn btn-primary active btn-lighter mt-auto align-self-center" rel="nofollow">
                                    Voir le site
                                </a>
                            </div>
                            <div className="card-footer text-body-secondary">
                                Site réalisé avec LARAVEL
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-section__2 row d-flex justify-content-center g-4 py-2">
                    <div className="col-md-4">
                        <div className="seo card h-100">
                            <img src={seo} className="card-img-top" alt="nuage de mots" />
                            <div className="card-body d-flex flex-column">
                                <h2 className="card-title">SEO</h2>
                                <p className="card-text">Amélioration du référencement d'un site e-commerce</p>
                                <a href="#" className="btn btn-primary active btn-lighter mt-auto align-self-center" rel="nofollow">
                                    Voir le site
                                </a>
                            </div>
                            <div className="card-footer text-body-secondary">
                                Utilisation des outils SEO
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="create-api card h-100">
                            <img src={createApi} className="card-img-top" alt="lignes de code" />
                            <div className="card-body d-flex flex-column">
                                <h2 className="card-title">Création d'une API</h2>
                                <p className="card-text">Création d'une API RESTFULL publique</p>
                                <a href="#" className="btn btn-primary active btn-lighter mt-auto align-self-center" rel="nofollow">
                                    Voir le site
                                </a>
                            </div>
                            <div className="card-footer text-body-secondary">
                                PHP - SYMFONY
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="maquette-figma card h-100">
                            <img src={maquetteFigma} className="card-img-top" alt="matériel informatique" />
                            <div className="card-body d-flex flex-column">
                                <h2 className="card-title">Maquette d'un site web</h2>
                                <p className="card-text">Création du prototype d'un site</p>
                                <a href="#" className="btn btn-primary active btn-lighter mt-auto align-self-center" rel="nofollow">
                                    Voir le site
                                </a>
                            </div>
                            <div className="card-footer text-body-secondary">
                                Réalisé avec FIGMA
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};