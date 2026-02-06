import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';

const AboutPage = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <div style={{ paddingTop: '100px' }}>
                <AboutSection />
            </div>
            {/* Additional content could go here */}
            <Footer />
        </div>
    );
};

export default AboutPage;
