export default function Contact() {    
    return(
        <main>
            <header className="hero-section">
                <h1>Contact</h1>
                <p>
                    Pour me contacter en vue d'un entretien ou d'une future collaboration,
                    merci de remplir le formulaire de contact.
                </p>
            </header>
            <section className="contact-section">
                <div className="contact-section__form">
                    <h2>Formulaire de contact</h2>
                    <form>
                        <div class="form-group">
                            <label for="name" className="visually-hidden">
                                Votre nom
                            </label>
                            <input type="text" class="form-control" id="name" placeholder="Votre nom" />
                        </div>
                        <div class="form-group">
                            <label for="email" className="visually-hidden">
                                Votre adresse email
                            </label>
                            <input type="email" class="form-control" id="email" placeholder="Votre adresse email" />
                        </div>
                        <div class="form-group">
                            <label for="tel" className="visually-hidden">
                                Votre numéro de téléphone
                            </label>
                            <input type="tel" class="form-control" id="tel" placeholder="Votre numéro de téléphone" />
                        </div>
                        <div class="form-group">
                            <label for="message-title" className="visually-hidden">
                                Sujet
                            </label>
                            <input type="text" class="form-control" id="message-title" placeholder="Sujet" />
                        </div>
                        <div class="form-group">
                            <label for="message" className="visually-hidden">
                                Votre message
                            </label>
                            <textarea class="form-control" id="message" placeholder="Votre message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Envoyer</button>
                    </form>
                </div>
                <div className="info-section__skills">
                    <h2>Mes coordonnées</h2>
                    <h3>John Doe</h3>
                    <address>
                        <ul>
                            <li><i class="bi bi-map"></i> 40 rue Laure Diebold</li>
                            <li><i class="bi bi-geo-alt"></i> 69009 Lyon, France</li>
                            <li><i class="bi bi-phone"></i> 10 20 30 40 50</li>
                            <li><i class="bi bi-envelope-at"></i> john.doe@gmail.com</li>
                        </ul>
                    </address>
                    <iframe title="Adresse Professionnelle de John Doe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13347.927086986234!2d4.8007142!3d45.7786099!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e1!3m2!1sfr!2sfr!4v1766244662252!5m2!1sfr!2sfr" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </main>
    );
};