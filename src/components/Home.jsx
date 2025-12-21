import { useEffect, useState } from "react";

import officePic from "../assets/img/john-doe-about.jpg";

import "../assets/style/Home.css";

export default function Home() {

    const [info, setInfo] = useState({});
    const getInfo = async() => {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
        setInfo(json);
    };

    useEffect(() =>{
        getInfo();
    }, []);

    return(
        <main>
            <header className="hero-section text-white">
                <div className="hero-section__head">
                    <h1>Bonjour, je suis John Doe</h1>
                    <h2>Développeur web full stack</h2>

                    {/* Modale Bootstrap */}
                    <button className="head__modal-button btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#head__modal">
                        En savoir plus
                    </button>
                </div>
                <div className="head__modal modal fade" id="head__modal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content bg-dark">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalLabel">Mon profil GitHub</h5>
                                <button type="button" className="close btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img src={info.avatar_url} alt="image de profil" />
                                <ul>
                                    <li><i class="bi bi-person"></i> <a href={info.html_url} target="_blank">{info.name}</a></li>
                                    <li><i class="bi bi-geo-alt"></i> <a href={info.location} target="_blank">{info.location}</a></li>
                                    <li><i class="bi bi-card-text"></i> {info.bio}</li>
                                    <li><i class="bi bi-box"></i> Repositories : {info.public_repos}</li>
                                    <li><i class="bi bi-people"></i> Followers : {info.followers}</li>
                                    <li><i class="bi bi-people"></i> Following : {info.following}</li>
                                </ul>    
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="info-section">

                {/* J'ai séparé "À propos" et "Mes compétences" en 2 <div> pour la mise en page */}
                <div className="info-section__about">
                    <h3>À propos</h3>
                    <img src={officePic} alt="homme travaillant dans son bureau" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut molestie vulputate nunc. Morbi pellentesque fermentum magna vel congue. 
                        Sed sagittis non erat id euismod. Aliquam erat volutpat. Proin vel nisl ipsum. 
                        Curabitur et nisl a diam suscipit pulvinar quis ac magna. Suspendisse gravida 
                        neque ac elit malesuada, eu blandit sem fringilla.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut molestie vulputate nunc. Morbi pellentesque fermentum magna vel congue. 
                        Sed sagittis non erat id euismod. Aliquam erat volutpat. Proin vel nisl ipsum. 
                        Curabitur et nisl a diam suscipit pulvinar quis ac magna. Suspendisse gravida 
                        neque ac elit malesuada, eu blandit sem fringilla.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut molestie vulputate nunc. Morbi pellentesque fermentum magna vel congue. 
                        Sed sagittis non erat id euismod. Aliquam erat volutpat. Proin vel nisl ipsum. 
                        Curabitur et nisl a diam suscipit pulvinar quis ac magna. Suspendisse gravida 
                        neque ac elit malesuada, eu blandit sem fringilla.
                    </p>
                </div>
                <div className="info-section__skills">
                    <h3>Mes compétences</h3>

                    {/* Utilisation de Bootstrap pour les jauges */}

                    <h4>HTML5 90%</h4>
                    <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: "95%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4>CSS3 80%</h4>
                    <div className="progress">
                        <div className="progress-bar bg-info" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4>JAVASCRIPT 70%</h4>
                    <div className="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "70%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4>PHP 60%</h4>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: "60%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4>REACT 50%</h4>               
                    <div className="progress">
                       <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </section>
        </main>
    );
};