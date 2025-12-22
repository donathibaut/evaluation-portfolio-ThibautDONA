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

                    {/* Bootstrap Modal */}
                    <button className="head__modal-button btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#head__modal">
                        En savoir plus
                    </button>
                </div>
                <div className="head__modal modal fade" id="head__modal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true" data-bs-theme="dark">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalLabel">Mon profil GitHub</h5>
                                <button type="button" className="close btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body row align-items-md-start p-md-4 px-5">
                                <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                                    <img className="img-fluid" src={info.avatar_url} alt="image de profil" />
                                </div>
                                <ul className="list-group list-group-flush col-md-6">
                                    <li className="list-group-item"><i className="bi bi-person"> </i><a href={info.html_url} target="_blank">{info.name}</a></li>
                                    <li className="list-group-item"><i className="bi bi-geo-alt"> </i><a href={info.location} target="_blank">{info.location}</a></li>
                                    <li className="list-group-item"><i className="bi bi-card-text"> </i>{info.bio}</li>
                                    <li className="list-group-item"><i className="bi bi-box"> </i>Repositories : {info.public_repos}</li>
                                    <li className="list-group-item"><i className="bi bi-people"> </i>Followers : {info.followers}</li>
                                    <li className="list-group-item"><i className="bi bi-people"> </i>Following : {info.following}</li>
                                </ul>    
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="info-section container width-phone col-md-10 py-5">
                <div className="row p-3 rounded shadow">

                    {/* Separate "À propos" & "Mes compétences" into 2 <div> for the layout */}
                    <div className="info-section__about col-md col-12">
                        <h3 className="info-title">A propos</h3>

                        <hr className="border-primary border-5 opacity-100 w-100 mx-auto pb-4"></hr>

                        <img className="mw-100 pb-4" src={officePic} alt="homme travaillant sur son bureau" />
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
                    <div className="info-section__skills col-md col-12">
                        <h3 className="info-title">Mes compétences</h3>

                        <hr className="border-primary border-5 opacity-100 w-100 mx-auto pb-4"></hr>

                        {/* Bootstrap ProgressBars */}

                        <h4 className="card-title" id="html-level">HTML5 90%</h4>
                        <div className="pt-2 pb-4">
                            <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" aria-labelledby="html-level" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <h4 className="card-title" id="css-level">CSS3 80%</h4>
                        <div className="pt-2 pb-4">
                            <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" aria-labelledby="css-level" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>  
                        <h4 className="card-title" id="js-level">JAVASCRIPT 70%</h4>
                        <div className="pt-2 pb-4">
                            <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" aria-labelledby="js-level" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>  
                        <h4 className="card-title" id="php-level">PHP 60%</h4>
                        <div className="pt-2 pb-4">
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" aria-labelledby="php-level" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>  
                        <h4 className="card-title" id="react-level">REACT 50%</h4> 
                        <div className="pt-2 pb-4">              
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-labelledby="react-level" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>  
                    </div>
                </div>
            </section>
        </main>
    );
};