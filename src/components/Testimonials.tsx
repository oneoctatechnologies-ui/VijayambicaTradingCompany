"use client";

import Section from "./Section";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Vijayambica has been our steady supply partner for over a decade. Even during market fluctuations, their volume consistency remains unmatched.",
        role: "Procurement Head",
        entity: "Leading Kraft Paper Mill",
    },
    {
        quote: "They stood by their commitment when others backed out. That level of operational integrity is rare in this industry.",
        role: "Senior Manager",
        entity: "Duplex Board Manufacturer",
    },
    {
        quote: "We have supplied to them since 2005. Honest weighing, immediate payments, and respectful treatment every single time.",
        role: "Proprietor",
        entity: "Local Sourcing Vendor",
    },
    {
        quote: "What sets Vijayambica apart is not just volume, but consistency of quality. The material arrives clean, well-handled, and exactly as specified—batch after batch.",
        role: "Production Manager",
        entity: "Kraft Paper Mill",
    },
];

export default function Testimonials() {
    return (
        <Section id="testimonials" className="bg-[#F6F6F6] text-charcoal relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight text-[#1F2F2A]">
                    Voices of Trust.
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col"
                        >
                            <div className="bg-white p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full border border-gray-100/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500">
                                <p className="text-gray-600 text-lg leading-[1.8] font-normal mb-8">
                                    "{item.quote}"
                                </p>
                                <div className="mt-auto pt-6 border-t border-gray-50 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent"></div> {/* Subtle separator */}
                                <div>
                                    <p className="font-bold text-[#1F2F2A] text-sm uppercase tracking-wide">{item.role}</p>
                                    <p className="text-gray-400 text-sm font-medium mt-1">{item.entity}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
