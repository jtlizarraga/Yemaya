import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const TravelSequence = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Total frames based on files in /public/travel_img_seq/ (001 to 040)
    const totalFrames = 40;

    // Create an array of image paths
    const framePaths = useMemo(() => {
        return Array.from({ length: totalFrames }, (_, i) => {
            const frameNum = String(i + 1).padStart(3, '0');
            return `/travel_img_seq/ezgif-frame-${frameNum}.jpg`;
        });
    }, [totalFrames]);

    // Framer Motion Scroll Tracking (Keep the element structure, but remove scroll dependency for frames)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages = await Promise.all(
                framePaths.map((path) => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = path;
                        img.onload = () => resolve(img);
                    });
                })
            );
            setImages(loadedImages);
            setIsLoading(false);
        };

        loadImages();
    }, [framePaths]);

    // Main rendering logic
    const renderFrame = (index) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext('2d');
        const img = images[Math.floor(index) % totalFrames]; // Loop safely
        if (!img) return;

        // Adaptive sizing
        const dpr = window.devicePixelRatio || 1;
        // Set internal resolution
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        // Normalize coordinate system
        ctx.scale(dpr, dpr);

        // Maintain Aspect Ratio (Cover)
        const canvasAspect = window.innerWidth / window.innerHeight;
        const imgAspect = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasAspect > imgAspect) {
            drawWidth = window.innerWidth;
            drawHeight = window.innerWidth / imgAspect;
            offsetX = 0;
            offsetY = (window.innerHeight - drawHeight) / 2;
        } else {
            drawWidth = window.innerHeight * imgAspect;
            drawHeight = window.innerHeight;
            offsetX = (window.innerWidth - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Auto-play Loop
    useEffect(() => {
        if (isLoading || images.length === 0) return;

        let animationFrameId;
        let currentFrame = 0;
        let lastTime = 0;
        const fps = 18; // Cinematic framerate (Slower)
        const interval = 1000 / fps;

        const animate = (time) => {
            if (time - lastTime > interval) {
                renderFrame(currentFrame);
                currentFrame = (currentFrame + 1) % totalFrames;
                lastTime = time;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isLoading, images]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (!isLoading && images.length > 0) {
                // Just re-render current frame roughly or let the loop handle it
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoading, images]);

    return (
        <div ref={containerRef} style={{ height: '100vh', position: 'relative' }}> {/* Changed height to 100vh since it's auto-play now */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                zIndex: 0
            }}>
                {isLoading ? (
                    <div className="loading-overlay">
                        <span className="serif">Curando Experiencia...</span>
                    </div>
                ) : (
                    <canvas
                        ref={canvasRef}
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'block',
                            objectFit: 'cover'
                        }}
                    />
                )}
                <div className="hero-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to right, rgba(10, 31, 36, 0.5), transparent)'
                }}></div>
            </div>

            {/* Content overlays the canvas */}
            <div
                className="hero-content"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 4rem',
                    zIndex: 1
                }}
            >
                <div className="hero-text-block">
                    <h1 className="hero-headline">El Alma de la Tierra, <br />Refinada para Ti.</h1>
                    <p className="hero-subtext">Vive el viaje como una colección de momentos cinematográficos y atemporales, diseñados para el explorador exigente.</p>
                    <a href="https://wa.me/529992741074" target="_blank" rel="noopener noreferrer" className="pill-button">Reserva Tu Viaje</a>
                </div>
            </div>
        </div>
    );
};

export default TravelSequence;
