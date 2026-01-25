"use client";

import Section from "./Section";
import { PackageSearch, Boxes, Truck, Factory } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        title: "Strategic Sourcing",
        description: "Aggregation from a wide network of local shops and vendors to ensure constant inflow.",
        icon: PackageSearch,
    },
    {
        title: "Consolidation",
        description: "Sorting and organizing volumes at our branches to prepare for bulk transport.",
        icon: Boxes,
    },
    {
        title: "Optimized Handling",
        description: "Internal handling and compaction to maximize load efficiency and ensure timely dispatch.",
        icon: Factory,
    },
    {
        title: "Timely Dispatch",
        description: "Scheduled deliveries aligned perfectly with paper mill production cycles.",
        icon: Truck,
    },
];

export default function Process() {
    return (
        <Section id="process" className="bg-[#F6F7F5]">

            <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6">
                    Seamless Supply Chain.
                </h2>
                <p className="text-gray-600 text-lg">
                    We strip away complexity. From sourcing to your factory gate, our process is built for speed and volume.
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 z-0"></div>

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative z-10 bg-white p-8 pt-12 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                    >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-industrial-green text-white p-4 rounded-full border-4 border-[#F6F7F5]">
                            <step.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-charcoal mb-3 mt-4 text-center group-hover:text-industrial-green transition-colors">
                            {step.title}
                        </h3>
                        <p className="text-gray-500 text-center text-sm leading-relaxed">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
