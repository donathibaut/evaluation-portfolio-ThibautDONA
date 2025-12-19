export default function Home() {
    return(
        <main>
            <header className="hero-section">
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
                <button>En savoir plus</button>
            </header>
            <section className="info-section">

                {/* J'ai séparé "À propos" et "Mes compétences" en 2 <div> pour la mise en page */}

                <div className="info-section__about">
                    <h3>À propos</h3>
                    <img src="" alt="homme travaillant dans son bureau" />
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
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" style={{width: "95%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4>CSS3 80%</h4>
                    <div class="progress">
                        <div class="progress-bar bg-info" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4>JAVASCRIPT 70%</h4>
                    <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" style={{width: "70%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4>PHP 60%</h4>
                    <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "60%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4>REACT 50%</h4>               
                    <div class="progress">
                       <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </section>
        </main>
    );
};