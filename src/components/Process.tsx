"use client";

import Section from "./Section";
import {
    PackageSearch,
    Boxes,
    Truck,
    Factory,
    ShieldCheck,
    Cpu,
    Zap,
    CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import NextImage from "next/image";

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
        title: "Quality Verification",
        description: "Incoming material is checked for grade consistency and handling condition before consolidation.",
        icon: ShieldCheck,
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
    const stepsPart1 = steps.slice(0, 4);
    const stepsPart2 = steps.slice(4);

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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-20">
                {/* Connector Line (Desktop) */}
                <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 z-0"></div>

                {stepsPart1.map((step, index) => (
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

            {/* Baling Infrastructure Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-sm border border-gray-200 overflow-hidden mb-20 shadow-sm"
            >
                <div className="grid lg:grid-cols-2 items-center">
                    <div className="p-8 md:p-12 lg:p-16">
                        <span className="inline-block py-1 px-3 mb-6 bg-industrial-green/10 text-industrial-green text-[10px] font-bold uppercase tracking-widest rounded-full">
                            Operational Infrastructure
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 leading-tight">
                            Automated Baling for <br />Quality Consistency
                        </h3>
                        <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                            <p>
                                To maintain consistent bale quality and uniform material standards at scale,
                                our operations are supported by a <strong>fully automated hydraulic baling system</strong>.
                            </p>
                            <p>
                                Automation ensures controlled compression, consistent bale density, and minimal manual
                                variation—resulting in mill-ready carton raw material that performs predictably
                                during handling, transport, and processing.
                            </p>
                            <p className="text-base text-gray-400 italic">
                                Designed for continuous-duty operations, our baling infrastructure supports
                                high-throughput aggregation while preserving material integrity across every load.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
                            <div className="flex flex-col gap-2">
                                <div className="text-industrial-green"><Cpu size={24} /></div>
                                <p className="text-xs font-bold text-charcoal uppercase tracking-wider">Consistent Compression</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="text-industrial-green"><Zap size={24} /></div>
                                <p className="text-xs font-bold text-charcoal uppercase tracking-wider">Continuous Processing</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="text-industrial-green"><CheckCircle2 size={24} /></div>
                                <p className="text-xs font-bold text-charcoal uppercase tracking-wider">Predictable Material</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] lg:h-full min-h-[500px] group">
                        <NextImage
                            src="/machine.png"
                            alt="Automated hydraulic baling system"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-sm shadow-xl border-l-4 border-industrial-green">
                            <p className="text-xs text-gray-600 leading-relaxed">
                                <strong>Technical Operations:</strong> Fully automated hydraulic baling system ensuring uniform bale density and consistent raw material quality.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="grid md:grid-cols-1 max-w-sm mx-auto relative">
                {stepsPart2.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
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
