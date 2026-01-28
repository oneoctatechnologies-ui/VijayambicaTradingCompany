"use client";

import { motion, useScroll, useTransform } from "framer-motion";

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
                <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center"></div>
            </motion.div>

            {/* Dark Gradient Overlays for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/70 to-industrial-green/90 z-0"></div>
            <div className="absolute inset-0 bg-black/30 z-0"></div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 max-w-5xl lg:pt-24"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 0.2, duration: 0.2 }}
                    className="flex justify-center mb-6 md:mb-8 mt-12 lg:mt-0"
                >
                    <span className="inline-block py-1.5 px-4 border border-white/10 bg-white/5 rounded-full text-xs md:text-sm font-medium tracking-[0.2em] text-gray-300/90 uppercase backdrop-blur-sm">
                        Since 2007
                    </span>
                </motion.div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-white mb-8">
                    Reliable Carton Raw Material <span className="text-gray-400">Supply.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-6 font-medium max-w-4xl mx-auto italic">
                    "We source and maintain premium carton materials with total traceability.."
                </p>
                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                    The trusted sourcing partner for paper mills. Supporting production with consistent supply, built on long-term local sourcing relationships.
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-12 flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-md mx-auto md:max-w-none"
                >
                    <a
                        href="#contact"
                        className="w-full md:w-auto px-8 py-4 bg-white text-charcoal hover:bg-industrial-green hover:text-white transition-all font-semibold rounded-sm text-lg text-center"
                    >
                        Partner With Us
                    </a>
                    <a
                        href="#about"
                        className="w-full md:w-auto px-8 py-4 border border-white/30 text-white hover:bg-white/10 transition-all font-medium rounded-sm text-lg text-center"
                    >
                        Our Operations
                    </a>
                </motion.div>


            </motion.div>
        </section>
    );
}
