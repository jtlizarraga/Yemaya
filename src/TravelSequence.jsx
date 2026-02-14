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

    // Framer Motion Scroll Tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map scroll progress (0 to 1) to frame index (0 to 39)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

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
        const img = images[Math.round(index)]; // Use Math.round for scroll binding
        if (!img) return;

        // Adaptive sizing
        const dpr = window.devicePixelRatio || 1;
        // Set internal resolution
        if (canvas.width !== window.innerWidth * dpr || canvas.height !== window.innerHeight * dpr) {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
        } else {
            // Reset scale if not resizing (optimization)
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

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

        ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // React to scroll changes
    useEffect(() => {
        if (isLoading || images.length === 0) return;

        // Initial render
        renderFrame(0);

        // Subscribe to scroll changes
        const unsubscribe = frameIndex.on("change", (latest) => {
            renderFrame(latest);
        });

        return () => unsubscribe();
    }, [isLoading, images, frameIndex]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (!isLoading && images.length > 0) {
                renderFrame(frameIndex.get());
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoading, images, frameIndex]);

    return (
        <div ref={containerRef} style={{ height: '400vh', position: 'relative' }}>
            <div style={{
                position: 'sticky',
                top: 0,
                left: 0,
                width: '100%',
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

                {/* Content overlays the canvas - Fades out as you scroll down */}
                <motion.div
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
                        zIndex: 1,
                        opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) // Fade out text early
                    }}
                >
                    <div className="hero-text-block">
                        <h1 className="hero-headline">El Alma de la Tierra, <br />Refinada para Ti.</h1>
                        <p className="hero-subtext">Vive el viaje como una colección de momentos cinematográficos y atemporales, diseñados para el explorador exigente.</p>
                        <a href="https://wa.me/529992741074" target="_blank" rel="noopener noreferrer" className="pill-button">Reserva Tu Viaje</a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TravelSequence;
