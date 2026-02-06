import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPage = () => {
    return (
        <div className="app-wrapper">
            <Header />

            {/* Legal Hero Section */}
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
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
                    alt="Terms header"
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
                <h1 className="serif" style={{ fontSize: '3.5rem', zIndex: 1, textAlign: 'center' }}>Términos y Condiciones</h1>
            </div>

            <div className="container" style={{ padding: '5rem 2rem', maxWidth: '900px' }}>
                <div className="legal-content">
                    <p className="intro-text" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.8' }}>
                        Bienvenido a Yemaya Travel. Al utilizar nuestros servicios, usted acepta los siguientes términos y condiciones estipulados de acuerdo con la legislación vigente en México y los estándares turísticos locales.
                    </p>

                    <section className="legal-section" style={{ marginBottom: '3rem' }}>
                        <h3 className="serif" style={{ color: 'var(--bg-dark)', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Naturaleza de los Servicios</h3>
                        <p>
                            Yemaya Travel actúa exclusivamente como <strong>intermediario</strong> entre el cliente y los prestadores finales de servicios (líneas aéreas, hoteles, operadores turísticos, compañías de transporte, etc.). No somos responsables por incumplimientos, retrasos o cancelaciones directas de estos proveedores, aunque siempre gestionaremos en favor de nuestros clientes.
                        </p>
                    </section>

                    <section className="legal-section" style={{ marginBottom: '3rem' }}>
                        <h3 className="serif" style={{ color: 'var(--bg-dark)', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Reservas y Pagos</h3>
                        <p>
                            Para confirmar cualquier servicio, se requerirá un anticipo estipulado por el agente de viajes. El pago total deberá ser liquidado antes de la fecha límite indicada en su itinerario. Nos reservamos el derecho de cancelar cualquier reserva que no haya sido pagada en su totalidad en la fecha acordada.
                        </p>
                    </section>

                    <section className="legal-section" style={{ marginBottom: '3rem' }}>
                        <h3 className="serif" style={{ color: 'var(--bg-dark)', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Políticas de Cancelación</h3>
                        <p>
                            Todas las cancelaciones están sujetas a las penalidades impuestas por los proveedores finales y por Yemaya Travel por gastos administrativos.
                        </p>
                        <ul style={{ marginLeft: '2rem', marginTop: '1rem', listStyleType: 'circle' }}>
                            <li>Cancelaciones con más de 30 días de anticipación: 10% de cargo administrativo.</li>
                            <li>Cancelaciones entre 29 y 15 días: 50% de penalidad.</li>
                            <li>Cancelaciones con menos de 15 días: 100% no reembolsable (sujeto a revisión del caso).</li>
                        </ul>
                    </section>

                    <section className="legal-section" style={{ marginBottom: '3rem' }}>
                        <h3 className="serif" style={{ color: 'var(--bg-dark)', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Documentación</h3>
                        <p>
                            Es responsabilidad exclusiva del pasajero contar con la documentación migratoria vigente (pasaporte, visas, vacunas) necesaria para su viaje. Yemaya Travel brindará asesoría, pero no se hace responsable por negaciones de embarque o entrada a países por falta de documentos.
                        </p>
                    </section>

                    <section className="legal-section" style={{ marginBottom: '3rem' }}>
                        <h3 className="serif" style={{ color: 'var(--bg-dark)', marginBottom: '1rem', fontSize: '1.5rem' }}>5. Jurisdicción</h3>
                        <p>
                            Para la interpretación y cumplimiento del presente contrato, las partes se someten a la jurisdicción de los tribunales competentes en la ciudad de <strong>Mérida, Yucatán</strong>, renunciando a cualquier otro fuero que por razón de sus domicilios presentes o futuros pudiera corresponderles.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsPage;
