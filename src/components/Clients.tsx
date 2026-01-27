"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { ShieldCheck, Layers, Factory, MapPin, PackageCheck } from "lucide-react";

const trustStatements = [
    {
        text: "Long-term supply partnerships spanning decades",
        icon: ShieldCheck,
    },
    {
        text: "Consistent high-volume carton raw material supply",
        icon: Layers,
    },
    {
        text: "Quality-graded raw material aligned with kraft and duplex mill requirements",
        icon: PackageCheck,
    },
    {
        text: "Serving kraft, duplex, and industrial paper mills",
        icon: Factory,
    },
    {
        text: "Operations across Telangana, Andhra Pradesh, and Karnataka",
        icon: MapPin,
    },
];

export default function Clients() {
    return (
        <Section id="clients" className="bg-white border-t border-gray-100 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-16 tracking-tight">
                    Trusted by Paper Mills Across South India.
                </h2>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 text-left max-w-3xl mx-auto">
                    {trustStatements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start gap-5"
                        >
                            <div className="text-gray-400 shrink-0 mt-1">
                                <item.icon size={24} strokeWidth={1} />
                            </div>
                            <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20">
                    <p className="text-gray-400 text-sm font-medium italic">
                        Client identities are maintained confidentially.
                    </p>
                </div>
            </div>
        </Section>
    );
}
