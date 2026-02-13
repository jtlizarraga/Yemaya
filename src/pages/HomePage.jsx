import React from 'react';
import { Link } from 'react-router-dom';
import TravelSequence from '../TravelSequence';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Destinations = () => {
    const destinationImages = [
        { name: 'Costa Amalfitana', url: 'https://images.unsplash.com/photo-1533903345306-15d1c30952de?auto=format&fit=crop&w=800&q=80' },
        { name: 'Kyoto Zen', url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80' },
        { name: 'Azul Santorini', url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80' },
        { name: 'Safari Serenidad', url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80' }
    ];

    return (
        <section className="section-destinations" id="destinations">
            <div className="container two-col-layout">
                <div className="col-left">
                    <h2 className="section-headline">Descubre Destinos<br />Inolvidables</h2>
                    <p className="section-subtext">Curamos los paisajes más evocadores del mundo, asegurando que cada viaje sea tan único como tu propia historia.</p>
                </div>
                <div className="col-right">
                    <div className="destination-grid">
                        {destinationImages.map((img, i) => (
                            <div key={i} className="destination-tile">
                                <img src={img.url} alt={img.name} />
                                <div className="tile-overlay">
                                    <span>{img.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Lifestyle = () => {
    return (
        <section className="lifestyle-section" id="experiences">
            <div className="lifestyle-main">
                <div className="lifestyle-content-left">
                    <h2 className="section-headline">Artesanos de la Inspiración</h2>
                    <p className="lifestyle-text">
                        Para aquellos que buscan más que un simple destino, ofrecemos una filosofía de viaje.
                        Se trata del silencio del amanecer sobre un océano turquesa, el pulso de una ciudad histórica,
                        y la armonía perfecta de una escapada planeada meticulosamente.
                    </p>
                </div>
                <div className="lifestyle-images-right">
                    <div className="lifestyle-tile beach">
                        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" alt="Playa" />
                        <div className="tile-label">Océano / Playa</div>
                    </div>
                    <div className="lifestyle-tile city">
                        <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80" alt="Ciudad" />
                        <div className="tile-label">Cultura / Ciudad</div>
                    </div>
                </div>
            </div>
            <div className="value-points">
                <div className="value-point">
                    <h3>Atención a Domicilio</h3>
                    <p>Te visitamos para planear tu viaje en tu hogar.</p>
                </div>
                <div className="value-point">
                    <h3>Viaje Personalizado</h3>
                    <p>Diseñado específicamente para tus deseos.</p>
                </div>
                <div className="value-point">
                    <h3>Planificación Confiable</h3>
                    <p>Décadas de experiencia a tu servicio.</p>
                </div>
            </div>
        </section>
    );
};

const Collections = () => {
    const trips = [
        { title: 'Odisea en el Egeo', location: 'Grecia', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80', slug: 'egeo' },
        { title: 'Escape a los Alpes', location: 'Suiza', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80', slug: 'alpes' },
        { title: 'Expedición Sahara', location: 'Marruecos', img: 'https://images.unsplash.com/photo-1489440543286-a69330151c0b?auto=format&fit=crop&w=800&q=80', slug: 'sahara' }
    ];

    return (
        <section className="collections-section">
            <div className="container">
                <h2 className="centered-headline">Colecciones Destacadas</h2>
                <div className="collections-grid">
                    {trips.map((trip, i) => (
                        <div key={i} className="collection-card">
                            <div className="card-image-wrap">
                                <img src={trip.img} alt={trip.title} />
                            </div>
                            <div className="card-body">
                                <span className="location">{trip.location}</span>
                                <h3 className="card-title">{trip.title}</h3>
                                <p className="card-desc">Un viaje inmersivo a través de la cultura y el paisaje.</p>
                                {/* Updated to link to dynamic collection pages */}
                                <Link to={`/coleccion/${trip.slug}`} className="explore-link">Explorar</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTASection = () => {
    return (
        <section className="cta-final">
            <div className="cta-background">
                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80" alt="CTA BG" />
                <div className="cta-overlay"></div>
            </div>
            <div className="cta-content">
                <h2>Tu próxima aventura comienza aquí</h2>
                <a href="https://wa.me/529992741074" target="_blank" rel="noopener noreferrer" className="pill-button">Planifica Tu Viaje</a>
            </div>
        </section>
    );
};

const ContactSection = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container contact-container">
                <div className="contact-header">
                    {/* Small decorative image above form as requested */}
                    <div className="contact-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-gold)' }}>
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                    <h2 className="section-headline">Comienza Tu Viaje</h2>
                    <p className="section-subtext">Cuéntanos tus sueños de viaje y diseñaremos una experiencia a tu medida.</p>
                    <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(197, 160, 89, 0.1)', borderRadius: '10px', display: 'inline-block', border: '1px solid rgba(197, 160, 89, 0.3)' }}>
                        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--accent-gold)' }}>¿Prefieres un trato personal?</p>
                        <p style={{ fontSize: '0.95rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                            Solicita una <strong>visita a domicilio/oficina</strong> y planearemos tus vacaciones contigo.
                        </p>
                        <a href="https://wa.me/529992741074?text=Hola,%20me%20interesa%20agendar%20una%20visita%20para%20planear%20mi%20viaje." target="_blank" rel="noopener noreferrer" className="pill-button outline" style={{ fontSize: '0.75rem' }}>
                            Agendar Visita Personal
                        </a>
                    </div>
                </div>

                <form
                    action="https://formsubmit.co/yemaya.viajes@gmail.com"
                    method="POST"
                    className="contact-form"
                >
                    {/* Honeypot for spam */}
                    <input type="text" name="_honey" style={{ display: 'none' }} />
                    {/* Disable Captcha for cleaner UI */}
                    <input type="hidden" name="_captcha" value="false" />
                    {/* Redirect to same page after submit */}
                    <input type="hidden" name="_next" value="http://localhost:5173" />

                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" required placeholder="Tu nombre completo" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" name="email" required placeholder="tucorreo@ejemplo.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mensaje / Destino Soñado</label>
                        <textarea id="message" name="message" rows="4" required placeholder="Cuéntanos qué estás buscando..."></textarea>
                    </div>

                    <button type="submit" className="pill-button submit-btn">Enviar Solicitud</button>
                </form>
            </div>
        </section>
    );
};

export default function HomePage() {
    return (
        <div className="app-wrapper">
            <Header />
            <TravelSequence />
            <Destinations />
            <Lifestyle />
            <Collections />
            <CTASection />
            <ContactSection />
            <Footer />
        </div>
    );
}
