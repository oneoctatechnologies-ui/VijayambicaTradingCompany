"use client";

import Section from "./Section";
import { Clock, BarChart3, ShieldCheck, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Timely Dispatches",
        description: "Your production line never waits. We adhere to strict delivery schedules to keep your operations running smoothly.",
        icon: Clock,
    },
    {
        title: "Consistent Volume",
        description: "Fluctuations in supply can be costly. We maintain steady stock levels to buffer against market shortages.",
        icon: BarChart3,
    },
    {
        title: "Quality-Assured Raw Material",
        description: "Mills receive consistent-grade carton raw material with controlled handling and verified sourcing.",
        icon: ShieldCheck,
    },
    {
        title: "Long-Term Reliability",
        description: "We don't just supply; we partner. Our relationships are built on years of delivering on our promises.",
        icon: Handshake,
    },
];

export default function WhyUs() {
    return (
        <Section id="why-us" dark className="relative bg-[#1F2F2A] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-[url('/logistics-bg.png')] bg-cover bg-center opacity-30 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F2F2A] to-[#1F2F2A]/90 z-0"></div>

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        Why Paper Mills <br /><span className="text-white/60">Work With Us.</span>
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-md mb-6">
                        In an industry driven by volume and speed, we provide the stability you need.
                    </p>
                    <p className="text-gray-400 text-base font-light border-l-2 border-[#3A4F48] pl-4">
                        This reliability is supported by strong coordination across our sourcing network.
                    </p>
                </div>

                <div className="space-y-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex gap-6 p-6 bg-white/[0.03] rounded-sm border border-white/10 hover:bg-white/[0.08] transition-colors backdrop-blur-sm"
                        >
                            <div className="shrink-0 text-white/80">
                                <feature.icon size={32} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
