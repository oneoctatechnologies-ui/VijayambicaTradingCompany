"use client";

import Section from "./Section";
import { Scale, IndianRupee, Handshake, ShieldCheck, Truck } from "lucide-react";
import { motion } from "framer-motion";

const vendorBenefits = [
    {
        title: "Own Fleet Support",
        description: "We operate mini trucks and lorries for convenient pickup from your location.",
        icon: Truck,
    },
    {
        title: "Transparent Verification",
        description: "Clear and open weighing processes. You always know exactly what you supply.",
        icon: Scale,
    },
    {
        title: "Reliable Payments",
        description: "Immediate or scheduled settlements with zero delays. We value your cash flow.",
        icon: IndianRupee,
    },
    {
        title: "Professional Handling",
        description: "Respectful and efficient material reception at all our branches.",
        icon: ShieldCheck,
    },
];

export default function TrustedVendors() {
    return (
        <Section id="vendors" className="relative bg-[#FAF9F6] overflow-hidden">
            {/* Very Subtle Paper Fiber Texture */}
            <div className="absolute inset-0 bg-[url('/texture-bg.png')] bg-cover bg-center opacity-[0.03] pointer-events-none grayscale mix-blend-plus-darker"></div>

            <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-[#1F3D2B] mb-6 tracking-tight">
                    Trusted by Local Shops & Vendors.
                </h2>
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light">
                    Our operations are built on mutual trust. Transparency, fair payments, and respect for every partner—big or small.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 px-4">
                {vendorBenefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-white p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="mb-6 text-[#1F3D2B]/90 bg-[#1F3D2B]/5 w-fit p-3 rounded-lg">
                            <benefit.icon size={26} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">{benefit.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {benefit.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
