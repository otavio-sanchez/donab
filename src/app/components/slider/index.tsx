
'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SliderProps } from "./type"

export function Slider({ slides }: SliderProps) {


    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(handleNextSlide, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section
            className="relative h-screen flex items-center overflow-hidden transition-colors duration-700"
            style={{ backgroundColor: slides[currentSlide].backgroundColor }}
            aria-label="Apresentação principal"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full"
                >
                    <div className="max-w-2xl">
                        <motion.p
                            className="text-xs font-semibold tracking-[0.25em] uppercase text-[#ba816d] mb-6"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        >
                            {slides[currentSlide].title}
                        </motion.p>

                        <motion.h1
                            className="font-serif text-5xl lg:text-7xl font-bold text-[#2B2B2B] leading-[1.05] tracking-tight mb-6"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                        >
                            {slides[currentSlide].description}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
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

                    <motion.img
                        src={slides[currentSlide].imageUrl}
                        alt={slides[currentSlide].title}
                        className="absolute bottom-0 right-0 w-1/2 max-w-md opacity-80"
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 0.8, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    />
                </motion.div>
            </AnimatePresence>
            <button
                onClick={handleNextSlide}
                className="absolute bottom-8 right-8 hidden lg:flex items-center gap-4 cursor-pointer group bg-[#000000] hover:bg-[#000000] text-[#ffffff] px-4 py-2 transition-colors duration-300"
            >
                <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] tracking-widest uppercase text-[#ffffff] group-hover:text-[#ffffff]/70 transition-colors duration-300">Próximo</span>
                </div>
                <div className="w-16 h-20 overflow-hidden">
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
