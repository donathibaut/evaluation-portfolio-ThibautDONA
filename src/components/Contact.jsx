export default function Contact() {    
    return(
        <main>
            <header className="hero-section text-center">
                <h1 className="hero-section__title pt-5">Contact</h1>
                <p className="px-md-5 px-2">
                    Pour me contacter en vue d'un entretien ou d'une future collaboration,
                    merci de remplir le formulaire de contact.
                </p>

                <hr className="border-primary border-5 opacity-100 w-25 mx-auto mb-0"></hr>
            </header>

            {/* Bootstrap Form */}
            <section className="contact-section container col-md-10 py-5 d-grid">
                <div className="row p-3 rounded shadow">
                    <div className="contact-section__form col-md col-12">
                        <h2 className="info-title">Formulaire de contact</h2>

                        <hr className="border-primary border-5 opacity-100 w-100 mx-auto pb-4"></hr>

                        <form className="d-flex flex-column gap-2">
                            <div className="form-group">
                                <label htmlFor="name" className="visually-hidden">
                                    Votre nom
                                </label>
                                <input type="text" className="form-control" id="name" placeholder="Votre nom" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="visually-hidden">
                                    Votre adresse email
                                </label>
                                <input type="email" className="form-control" id="email" placeholder="Votre adresse email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tel" className="visually-hidden">
                                    Votre numéro de téléphone
                                </label>
                                <input type="tel" className="form-control" id="tel" placeholder="Votre numéro de téléphone" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message-title" className="visually-hidden">
                                    Sujet
                                </label>
                                <input type="text" className="form-control" id="message-title" placeholder="Sujet" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="visually-hidden">
                                    Votre message
                                </label>
                                <textarea rows="14" className="form-control" id="message" placeholder="Votre message" required></textarea>
                            </div>
                            <div className="d-flex justify-content-center pt-2 pb-md-0 pb-4">
                                <button type="submit" className="btn btn-primary">Envoyer</button>
                            </div>
                        </form>
                    </div>
                    <div className="info-section__skills col-md col-12">
                        <h2 className="info-title">Mes coordonnées</h2>

                        <hr className="border-primary border-5 opacity-100 w-100 mx-auto pb-4"></hr>

                        <h3 className="map-title">John Doe</h3>
                        <address>
                            <ul>
                                <li><i className="bi bi-map"></i> 40 rue Laure Diebold</li>
                                <li><i className="bi bi-geo-alt"></i> 69009 Lyon, France</li>
                                <li><i className="bi bi-phone"></i> 10 20 30 40 50</li>
                                <li><i className="bi bi-envelope-at"></i> john.doe@gmail.com</li>
                            </ul>
                        </address>
                        <iframe title="Adresse Professionnelle de John Doe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13347.927086986234!2d4.8007142!3d45.7786099!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e1!3m2!1sfr!2sfr!4v1766244662252!5m2!1sfr!2sfr" className="w-100" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
};