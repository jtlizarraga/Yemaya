import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    {/* Logo doubled in size as requested (approx 80px compared to previous 40px) */}
                    <img src="/logo.png" alt="Yemaya" style={{ height: '80px', marginBottom: '1rem', filter: 'brightness(0) invert(1)' }} />
                    <p>En Yemaya, creamos experiencias inolvidables, escápate, respira y renace!!</p>
                </div>
                <div className="footer-links">
                    <h4>Contacto</h4>
                    <p style={{ fontSize: '0.9rem', opacity: '0.8', marginBottom: '1rem' }}>
                        C. 46 x 59 y 57 # 545 <br />
                        Col. Granjas, Reparto Granjas <br />
                        97198 Mérida, Yuc
                    </p>
                    <a href="https://wa.me/529992741074" target="_blank" rel="noopener noreferrer">Consultas de Viaje</a>
                </div>
                <div className="footer-links">
                    <h4>Legal</h4>
                    <Link to="/privacidad">Política de Privacidad</Link>
                    <Link to="/terminos">Términos y Condiciones</Link>
                </div>
                <div className="footer-social">
                    <h4>Siguenos</h4>
                    <div className="social-row">
                        <a href="https://www.facebook.com/profile.php?id=61580112663074" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Yemaya Travel. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
