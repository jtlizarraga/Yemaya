import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage = () => {
    return (
        <div className="app-wrapper">
            <Header />

            {/* Enhanced Hero Section */}
            <div className="legal-hero" style={{
                height: '40vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                overflow: 'hidden'
            }}>
                <img
                    src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&w=1600&q=80"
                    alt="Privacy header"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                        filter: 'brightness(0.4)'
                    }}
                />
                <h1 className="serif" style={{ fontSize: '3.5rem', zIndex: 1, textAlign: 'center' }}>Política de Privacidad</h1>
            </div>

            <div className="container" style={{ padding: '5rem 2rem', maxWidth: '900px' }}>

                <div className="legal-content">
                    <p className="intro-text" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.8' }}>
                        En <strong>Yemaya Travel</strong>, la confidencialidad es parte de nuestra excelencia. Estamos comprometidos con proteger los datos personales que nos confía para diseñar sus experiencias.
                    </p>

                    <div style={{
                        background: 'var(--bg-light)',
                        padding: '2rem',
                        borderRadius: '10px',
                        borderLeft: '4px solid var(--accent-gold)',
                        marginBottom: '3rem'
                    }}>
                        <p style={{ fontSize: '0.9rem', color: 'var(--bg-dark)' }}>
                            <strong>Responsable:</strong> Yemaya Travel<br />
                            <strong>Domicilio:</strong> C. 46 x 59 y 57 # 545, Col. Granjas, Mérida, Yucatán.<br />
                            <strong>Contacto:</strong> yemaya.viajes@gmail.com
                        </p>
                    </div>

                    <section className="legal-section" style={{ marginBottom: '3rem' }}>
                        <h3 className="serif" style={{ color: 'var(--bg-dark)', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Datos Recabados</h3>
                        <p>
                            Podemos recopilar información personal (nombre, email, teléfono, preferencias de viaje, pasaportes) únicamente cuando usted nos la proporciona voluntariamente para:
                        </p>
                        <ul style={{ marginLeft: '2rem', marginTop: '1rem', listStyleType: 'circle' }}>
                            <li>Cotizar y reservar servicios turísticos.</li>
                            <li>Facturación y cobro.</li>
                            <li>Enviar itinerarios y confirmaciones.</li>
                        </ul>
                    </section>

                    <section className="legal-section" style={{ marginBottom: '3rem' }}>
                        <h3 className="serif" style={{ color: 'var(--bg-dark)', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Uso y Transferencia</h3>
                        <p>
                            Su información solo será transferida a terceros (aerolíneas, hoteles, seguros) cuando sea estrictamente necesario para concretar los servicios contratados. No vendemos ni compartimos sus datos con fines publicitarios externos.
                        </p>
                    </section>

                    <section className="legal-section" style={{ marginBottom: '3rem' }}>
                        <h3 className="serif" style={{ color: 'var(--bg-dark)', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Derechos ARCO</h3>
                        <p>
                            Usted tiene derecho a <strong>A</strong>cceder, <strong>R</strong>ectificar, <strong>C</strong>ancelar u <strong>O</strong>ponerse al tratamiento de sus datos personales. Para ejercer estos derechos, envíe una solicitud a nuestro correo electrónico oficial.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPage;
