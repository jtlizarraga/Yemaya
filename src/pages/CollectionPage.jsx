import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { collectionsData } from '../data/collections';

const CollectionPage = () => {
    const { slug } = useParams();
    const collection = collectionsData.find(c => c.id === slug);

    if (!collection) {
        return (
            <div className="app-wrapper">
                <Header />
                <div className="container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
                    <h2 className="serif">Colección no encontrada</h2>
                    <Link to="/" className="pill-button" style={{ marginTop: '2rem', display: 'inline-block' }}>Volver al Inicio</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="app-wrapper">
            <Header />

            {/* Hero */}
            <div className="collection-hero" style={{
                height: '60vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                overflow: 'hidden'
            }}>
                <img
                    src={collection.heroImage}
                    alt={collection.title}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                        filter: 'brightness(0.5)'
                    }}
                />
                <div className="container" style={{ zIndex: 1, textAlign: 'center' }}>
                    <span style={{
                        display: 'block',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        marginBottom: '1rem',
                        color: 'var(--accent-gold)'
                    }}>
                        {collection.location}
                    </span>
                    <h1 className="serif" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{collection.title}</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
                        {collection.subtitle}
                    </p>
                </div>
            </div>

            {/* Story & Gallery */}
            <div className="container" style={{ padding: '5rem 2rem' }}>
                <div className="collection-layout" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div className="story-content" style={{ marginBottom: '4rem' }}>
                        <h2 className="section-headline" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>La Experiencia</h2>
                        {collection.description.split('\n').map((paragraph, i) => (
                            <p key={i} style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.8',
                                color: 'var(--text-muted)',
                                marginBottom: '1.5rem'
                            }}>
                                {paragraph.trim()}
                            </p>
                        ))}
                        <div style={{ marginTop: '3rem' }}>
                            <a href="https://wa.me/529992741074" target="_blank" rel="noopener noreferrer" className="pill-button">
                                Cotizar este Destino
                            </a>
                        </div>
                    </div>

                    <div className="gallery-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {collection.gallery.map((img, index) => (
                            <div key={index} style={{
                                borderRadius: '10px',
                                overflow: 'hidden',
                                aspectRatio: '1',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                            }}>
                                <img src={img} alt={`Gallery ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CollectionPage;
