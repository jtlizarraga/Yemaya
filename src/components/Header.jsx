import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check if we are on a specific page to adjust header style if needed
    const isHomePage = location.pathname === '/';

    return (
        <header className={`header ${isScrolled || !isHomePage ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="logo-container">
                    {/* Applied filter to make logo white like in footer */}
                    <img src="/logo.png" alt="Yemaya Travel Logo" className="logo-img" style={{ height: '100px', filter: 'brightness(0) invert(1)' }} />
                </Link>
                <nav className="nav-links">
                    <Link to="/">Inicio</Link>
                    {/* Scroll links only work on Home, otherwise they should redirect to home */}
                    {isHomePage ? <a href="#destinations">Destinos</a> : <Link to="/#destinations">Destinos</Link>}
                    {isHomePage ? <a href="#experiences">Experiencias</a> : <Link to="/#experiences">Experiencias</Link>}
                    <Link to="/nosotros" className={location.pathname === '/nosotros' ? 'active-link' : ''}>Nosotros</Link>
                    <a href="#contact">Contacto</a>
                </nav>
                <a href="https://wa.me/529992741074" target="_blank" rel="noopener noreferrer" className="pill-button outline">Planifica Tu Viaje</a>
            </div>
        </header>
    );
};

export default Header;
