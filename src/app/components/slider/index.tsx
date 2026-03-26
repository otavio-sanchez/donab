
'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SliderProps } from "./type"

export function Slider({ slides }: SliderProps) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [windowSize, setWindowSize] = useState({ width: 1440, height: 900 });

    useEffect(() => {
        const update = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const isMobile = windowSize.width < 1024;
    const circleDiameter = isMobile
        ? Math.ceil(windowSize.width * 1.05)
        : Math.ceil(Math.sqrt(windowSize.width ** 2 + windowSize.height ** 2) * 0.75);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(handleNextSlide, 10000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section
            className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-700"
            style={{ backgroundColor: slides[currentSlide].backgroundColor }}
            aria-label="Apresentação principal"
        >
            {/* Círculo decorativo — canto superior direito */}
            <motion.div
                key={currentSlide}
                className="absolute rounded-full"
                initial={{ opacity: 0, scale: 0.4, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    zIndex: 1,
                    width: circleDiameter,
                    height: circleDiameter,
                    ...(isMobile
                        ? {
                            top: -circleDiameter * 0.15,
                            left: (windowSize.width - circleDiameter) / 2,
                        }
                        : {
                            top: -circleDiameter / 2,
                            right: -circleDiameter / 2,
                        }),
                    background: `radial-gradient(circle, ${slides[currentSlide].backgroundOtherColor || '#2B2B2B'} 0%, ${slides[currentSlide].backgroundColor} 100%)`,
                }}
            />

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:block items-center py-24 lg:py-0"
                    style={{ zIndex: 10 }}
                >
                    {/* Imagem — mobile: em cima, relativa; desktop: absoluta na direita */}
                    <motion.img
                        src={slides[currentSlide].imageUrl}
                        alt={slides[currentSlide].title}
                        className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 w-3/4 max-w-xs mb-10 lg:mb-0 lg:w-2/5 lg:max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                        style={{ zIndex: 3 }}
                    />

                    {/* Conteúdo textual */}
                    <div className="max-w-2xl text-center lg:text-left">
                        <motion.p
                            className="text-sm font-semibold tracking-[0.25em] uppercase text-[#ba816d] mb-6"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                        >
                            {slides[currentSlide].title}
                        </motion.p>

                        <motion.h1
                            className="font-sans text-3xl lg:text-6xl font-bold text-[#2B2B2B] leading-[1.05] tracking-tight mb-4"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.35, ease: "easeOut" }}
                        >
                            {slides[currentSlide].description}
                        </motion.h1>

                        <motion.div
                            className="flex justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
                        >
                            <Link
                                href={slides[currentSlide].ctaLink}
                                className="inline-flex items-center justify-center gap-2 bg-[#2B2B2B] text-[#F7F5F2] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#ba816d] transition-colors duration-300"
                            >
                                {slides[currentSlide].ctaText}
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <button
                onClick={handleNextSlide}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-stretch cursor-pointer group bg-[#ffffff] text-[#000000] overflow-hidden transition-colors duration-300 h-12 lg:h-20"
                style={{ zIndex: 10 }}
            >
                <div className="flex items-center px-3 lg:px-4">
                    <span className="text-[9px] lg:text-[10px] tracking-widest uppercase text-[#000000] group-hover:text-[#000000]/70 transition-colors duration-300">Próximo</span>
                </div>
                <div
                    className="w-12 lg:w-20 h-full shrink-0 transition-colors duration-300 flex items-center justify-center"
                    style={{
                        backgroundColor: slides[(currentSlide + 1) % slides.length].backgroundColor,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = slides[(currentSlide + 1) % slides.length].backgroundOtherColor || '#2B2B2B')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = slides[(currentSlide + 1) % slides.length].backgroundColor)}
                >
                    <img
                        src={slides[(currentSlide + 1) % slides.length].imageUrl}
                        alt={slides[(currentSlide + 1) % slides.length].title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </button>
        </section>
    );
}
