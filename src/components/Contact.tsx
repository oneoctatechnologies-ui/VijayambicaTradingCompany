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
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="mb-16 md:mb-20 text-center lg:text-left max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 tracking-tight"
                    >
                        Get In Touch.
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

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column - Contact Info & Trust */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-charcoal mb-4">Contact Information</h3>
                            <p className="text-gray-500 font-light text-lg mb-8 leading-relaxed">
                                Reach out to discuss industrial-scale supply requirements or established sourcing opportunities.
                            </p>
                        </div>

                        {/* Contact Detail Cards */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm flex items-start gap-4"
                            >
                                <div className="p-2 bg-industrial-green/5 text-industrial-green rounded-lg">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Call Us</p>
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:9704234869" className="text-sm font-bold text-charcoal hover:text-industrial-green transition-colors">9704234869</a>
                                        <a href="tel:9393234869" className="text-sm font-bold text-charcoal hover:text-industrial-green transition-colors">9393234869</a>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm flex items-start gap-4"
                            >
                                <div className="p-2 bg-industrial-green/5 text-industrial-green rounded-lg">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Email</p>
                                    <a href="mailto:Vijayambicatradingco@gmail.com" className="text-sm font-bold text-charcoal hover:text-industrial-green transition-colors break-all">
                                        Vijayambica@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm flex items-start gap-4"
                            >
                                <div className="p-2 bg-industrial-green/5 text-industrial-green rounded-lg">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Business Hours</p>
                                    <p className="text-sm font-bold text-charcoal">Mon - Sat: 09:00 - 20:00</p>
                                    <p className="text-xs text-gray-500 font-medium">Sunday: Closed</p>
                                </div>
                            </motion.div>

                            {/* What We Offer Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="p-6 bg-industrial-green text-white rounded-xl shadow-md sm:col-span-1"
                            >
                                <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold mb-4">What We Offer</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-xs font-bold uppercase tracking-tight">
                                        <ShieldCheck size={14} className="text-white/80" /> Consistent Quality
                                    </li>
                                    <li className="flex items-center gap-2 text-xs font-bold uppercase tracking-tight">
                                        <Truck size={14} className="text-white/80" /> Timely Deliveries
                                    </li>
                                    <li className="flex items-center gap-2 text-xs font-bold uppercase tracking-tight">
                                        <Factory size={14} className="text-white/80" /> Baling Infrastructure
                                    </li>
                                    <li className="flex items-center gap-2 text-xs font-bold uppercase tracking-tight">
                                        <PackageCheck size={14} className="text-white/80" /> Batch Consistency
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column - Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 md:p-10 lg:p-12 border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] rounded-2xl relative overflow-hidden"
                    >
                        {/* Subtle background element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-industrial-green/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-charcoal mb-2">Send Us a Message</h3>
                                    <p className="text-gray-500 text-sm font-light">We typically respond within 2-4 business hours</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="companyName" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold block">Company / Mill Name</label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-lg focus:border-industrial-green focus:outline-none transition-all text-base text-charcoal placeholder:text-gray-300"
                                            placeholder="Enter organization"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="contactName" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold block">Contact Person</label>
                                        <input
                                            type="text"
                                            id="contactName"
                                            name="contactName"
                                            value={formData.contactName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-lg focus:border-industrial-green focus:outline-none transition-all text-base text-charcoal placeholder:text-gray-300"
                                            placeholder="Full name"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold block">Phone Number *</label>
                                        <input
                                            required
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-lg focus:border-industrial-green focus:outline-none transition-all text-base text-charcoal placeholder:text-gray-300"
                                            placeholder="+91 ..."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold block">Email Address *</label>
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-lg focus:border-industrial-green focus:outline-none transition-all text-base text-charcoal placeholder:text-gray-300"
                                            placeholder="email@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="requirement" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold block">Requirement Type</label>
                                    <select
                                        id="requirement"
                                        name="requirement"
                                        value={formData.requirement}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-lg focus:border-industrial-green focus:outline-none transition-all text-base text-charcoal appearance-none cursor-pointer"
                                    >
                                        <option value="">Select volume requirement</option>
                                        <option value="mill-supply">Daily Mill Supply (Establish Partnership)</option>
                                        <option value="spot-load">Spot Load (Short-term Inquiry)</option>
                                        <option value="sourcing">Raw Material Sourcing (Vendors)</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="inquiry" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold block">Message</label>
                                    <textarea
                                        id="inquiry"
                                        name="inquiry"
                                        rows={4}
                                        value={formData.inquiry}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-lg focus:border-industrial-green focus:outline-none transition-all text-base text-charcoal placeholder:text-gray-300 resize-none"
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
                                    <p className="text-center text-[10px] text-gray-400 mt-4 leading-relaxed font-medium uppercase tracking-widest">
                                        🔒 Trusted B2B communication. Your data is managed professionally.
                                    </p>
                                </div>
                            </form>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <div className="w-20 h-20 bg-industrial-green/10 text-industrial-green rounded-full flex items-center justify-center mb-8">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-3xl font-bold text-charcoal mb-4">Submission Successful.</h3>
                                <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                                    Your inquiry has been logged. Our logistics and supply team will coordinate with you shortly.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
