import React from 'react';

const AboutSection = () => {
    return (
        <section className="about-section" id="about">
            <div className="container about-container">
                <div className="about-content">
                    <h2 className="section-headline">Nuestra Historia</h2>
                    <h3 className="serif" style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>Elsy Angélica Herrera Carrillo</h3>
                    <p className="about-text">
                        Fundada en Mérida, Yucatán, Yemaya Travel nace de la visión y experiencia de Elsy Herrera.
                        Con una destacada trayectoria en el sector financiero como Gerente de Banco Compartamos y otras instituciones
                        durante varios años, Elsy aporta una solidez y confianza inigualables a la planificación de tus viajes.
                    </p>
                    <p className="about-text">
                        A sus 43 años, ha canalizado su expertise gerencial y su pasión por el servicio para crear una agencia
                        que no solo vende destinos, sino que asegura tranquilidad, respaldo y momentos inolvidables.
                    </p>
                    <div className="signature-block">
                        <span className="serif" style={{ fontStyle: 'italic', fontSize: '1.2rem' }}>Directora General</span>
                    </div>
                </div>
                <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="Elsy Herrera - Directora" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
