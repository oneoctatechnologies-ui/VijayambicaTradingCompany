"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);

    return (
        <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-charcoal">
            {/* Parallax Background Image */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 h-[120%] -top-[10%] pointer-events-none"
            >
                <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center"></div>
            </motion.div>

            {/* Dark Gradient Overlays for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/70 to-industrial-green/90 z-0"></div>
            <div className="absolute inset-0 bg-black/30 z-0"></div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 max-w-5xl"
            >
                <span className="inline-block py-1 px-3 mb-6 border border-white/20 rounded-full text-xs font-medium tracking-widest text-gray-300 uppercase">
                    Since 2007
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-white mb-8">
                    Reliable Carton Raw Material <span className="text-gray-400">Supply.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                    The trusted sourcing partner for paper mills. Supporting production with consistent supply, built on long-term local sourcing relationships.
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-white text-charcoal hover:bg-industrial-green hover:text-white transition-all font-semibold rounded-sm text-lg"
                    >
                        Partner With Us
                    </a>
                    <a
                        href="#about"
                        className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 transition-all font-medium rounded-sm text-lg"
                    >
                        Our Operations
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce"
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
}