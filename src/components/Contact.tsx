"use client";

import { useState, FormEvent } from "react";
import Section from "./Section";
import { CheckCircle2, Mail, Phone, Clock, ShieldCheck, Truck, PackageCheck, Factory } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        companyName: "",
        contactName: "",
        phone: "",
        email: "",
        requirement: "",
        inquiry: "",
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);

        // Reset form after 4 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                companyName: "",
                contactName: "",
                phone: "",
                email: "",
                requirement: "",
                inquiry: "",
            });
        }, 4000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Section id="contact" className="bg-[#FAF9F6] py-16 md:py-24 lg:py-32 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column - Contact Info & Trust */}
                    <div className="space-y-12">
                        {/* Header moved inside column for perfect alignment */}
                        <div className="text-left">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 tracking-tight leading-tight"
                            >
                                Get in touch.
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-industrial-green font-medium text-lg md:text-xl"
                            >
                                Trusted supply partner for paper mills across the region.
                            </motion.p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-charcoal mb-4">Contact information</h3>
                            <p className="text-gray-500 font-light text-lg mb-8 leading-relaxed max-w-md">
                                Reach out to discuss industrial-scale supply requirements or established sourcing opportunities.
                            </p>

                            {/* Contact Detail Cards - Vertical Stack */}
                            <div className="flex flex-col gap-5 max-w-md">
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm flex items-start gap-4"
                                >
                                    <div className="p-2.5 bg-industrial-green/5 text-industrial-green rounded-lg shrink-0">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] tracking-widest text-gray-400 font-bold mb-1">Call us</p>
                                        <div className="flex flex-col gap-1">
                                            <a href="tel:9704234869" className="text-base font-bold text-charcoal hover:text-industrial-green transition-colors">9704234869</a>
                                            <a href="tel:9393234869" className="text-base font-bold text-charcoal hover:text-industrial-green transition-colors">9393234869</a>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm flex items-start gap-4"
                                >
                                    <div className="p-2.5 bg-industrial-green/5 text-industrial-green rounded-lg shrink-0">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] tracking-widest text-gray-400 font-bold mb-1">Email address</p>
                                        <a href="mailto:Vijayambicatradingco@gmail.com" className="text-base font-bold text-charcoal hover:text-industrial-green transition-colors break-all">
                                            Vijayambicatradingco@gmail.com
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm flex items-start gap-4"
                                >
                                    <div className="p-2.5 bg-industrial-green/5 text-industrial-green rounded-lg shrink-0">
                                        <Clock size={22} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] tracking-widest text-gray-400 font-bold mb-1">Business hours</p>
                                        <p className="text-base font-bold text-charcoal">Mon - Sat: 09:00 - 20:00</p>
                                        <p className="text-xs text-gray-400 font-medium mt-0.5">Sunday: Closed</p>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-4 sm:p-8 lg:p-10 border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.02)] rounded-2xl relative overflow-hidden"
                    >
                        {/* Subtle background element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-industrial-green/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-charcoal mb-2">Send us a message</h3>
                                    <p className="text-gray-500 text-sm font-light">We typically respond within 2-4 business hours</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="companyName" className="text-[11px] tracking-widest text-gray-500 font-bold block">Company / mill name</label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-lg focus:border-industrial-green focus:outline-none transition-all text-sm text-charcoal placeholder:text-gray-300"
                                            placeholder="Organization identity"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="contactName" className="text-[11px] tracking-widest text-gray-500 font-bold block">Contact person</label>
                                        <input
                                            type="text"
                                            id="contactName"
                                            name="contactName"
                                            value={formData.contactName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-lg focus:border-industrial-green focus:outline-none transition-all text-sm text-charcoal placeholder:text-gray-300"
                                            placeholder="Full name"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-[11px] tracking-widest text-gray-500 font-bold block">Phone number *</label>
                                        <input
                                            required
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-lg focus:border-industrial-green focus:outline-none transition-all text-sm text-charcoal placeholder:text-gray-300"
                                            placeholder="+91 ..."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-[11px] tracking-widest text-gray-500 font-bold block">Email address *</label>
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-lg focus:border-industrial-green focus:outline-none transition-all text-sm text-charcoal placeholder:text-gray-300"
                                            placeholder="name@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="requirement" className="text-[11px] tracking-widest text-gray-500 font-bold block">Requirement type</label>
                                    <select
                                        id="requirement"
                                        name="requirement"
                                        value={formData.requirement}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-lg focus:border-industrial-green focus:outline-none transition-all text-sm text-charcoal appearance-none cursor-pointer"
                                    >
                                        <option value="">Select volume requirement</option>
                                        <option value="mill-supply">Daily Mill Supply (Establish Partnership)</option>
                                        <option value="spot-load">Spot Load (Short-term Inquiry)</option>
                                        <option value="sourcing">Raw Material Sourcing (Vendors)</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="inquiry" className="text-[11px] tracking-widest text-gray-500 font-bold block">Message</label>
                                    <textarea
                                        id="inquiry"
                                        name="inquiry"
                                        rows={4}
                                        value={formData.inquiry}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-lg focus:border-industrial-green focus:outline-none transition-all text-sm text-charcoal placeholder:text-gray-300 resize-none"
                                        placeholder="Briefly describe your requirements..."
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="w-full py-4 md:py-5 bg-charcoal text-white font-bold tracking-[0.1em] uppercase hover:bg-industrial-green transition-all duration-300 rounded-xl text-sm shadow-md"
                                    >
                                        Submit Inquiry
                                    </button>
                                    <p className="text-center text-[10px] text-gray-400 mt-5 leading-relaxed font-bold uppercase tracking-[0.15em]">
                                        🔒 Professional B2B communication.
                                    </p>
                                </div>
                            </form>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <div className="w-20 h-20 bg-industrial-green/10 text-industrial-green rounded-full flex items-center justify-center mb-8">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-3xl font-bold text-charcoal mb-4">Submission successful.</h3>
                                <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                                    Your inquiry has been logged. Our logistics team will coordinate with you shortly.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
