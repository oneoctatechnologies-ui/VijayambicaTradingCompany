"use client";

import { useState, FormEvent } from "react";
import Section from "./Section";
import { CheckCircle2, Mail, Phone } from "lucide-react";

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
        <Section id="contact" className="bg-white py-16 md:py-24 lg:py-32 scroll-mt-24 md:scroll-mt-28">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-32 items-start">
                    {/* Left Column - Contact Info */}
                    <div className="order-1 lg:order-1">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 tracking-tight">
                            Get In Touch.
                        </h2>
                        <p className="text-industrial-green font-medium text-lg md:text-xl mb-6">
                            Trusted supply partner for paper mills across the region.
                        </p>
                        <p className="text-gray-500 text-base md:text-lg mb-8 font-light leading-relaxed">
                            Reach out to discuss industrial-scale supply requirements or established sourcing opportunities.
                            We prioritize long-term stability and professional coordination across our network.
                        </p>
                        <p className="text-gray-400 text-sm md:text-base mb-12 font-medium italic border-l-2 border-industrial-green/30 pl-4">
                            "Our team coordinates closely to ensure timely delivery, consistent volume, and quality-grade raw material aligned with mill specifications."
                        </p>

                        <div className="space-y-8">
                            <div className="flex flex-col gap-3">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold">Direct Coordination</p>
                                <div className="flex items-center gap-3">
                                    <Phone size={20} className="text-industrial-green" />
                                    <div className="flex flex-col md:flex-row md:gap-4">
                                        <a href="tel:9704234869" className="text-base md:text-lg text-gray-700 font-medium hover:text-industrial-green transition-colors">
                                            9704234869
                                        </a>
                                        <a href="tel:9393234869" className="text-base md:text-lg text-gray-700 font-medium hover:text-industrial-green transition-colors">
                                            9393234869
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail size={20} className="text-industrial-green" />
                                    <a href="mailto:contact@vijayambica.com" className="text-base md:text-lg text-gray-700 font-medium hover:text-industrial-green transition-colors">
                                        contact@vijayambica.com
                                    </a>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-100">
                                <p className="text-sm text-gray-500 italic">
                                    * Typical response time for industrial inquiries: 2-4 business hours.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="order-2 lg:order-2">
                        <div className="bg-white p-8 md:p-10 lg:p-12 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] rounded-lg">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                                    <div className="space-y-2">
                                        <label htmlFor="companyName" className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium block">
                                            Company / Mill Name
                                        </label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-industrial-green focus:outline-none transition-colors text-base md:text-lg text-charcoal font-medium placeholder:text-gray-400 placeholder:font-normal"
                                            placeholder="Organization Identity"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="contactName" className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium block">
                                            Authorized Contact
                                        </label>
                                        <input
                                            type="text"
                                            id="contactName"
                                            name="contactName"
                                            value={formData.contactName}
                                            onChange={handleChange}
                                            className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-industrial-green focus:outline-none transition-colors text-base md:text-lg text-charcoal font-medium placeholder:text-gray-400 placeholder:font-normal"
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium block">
                                                Phone Number *
                                            </label>
                                            <input
                                                required
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-industrial-green focus:outline-none transition-colors text-base md:text-lg text-charcoal font-medium placeholder:text-gray-400 placeholder:font-normal"
                                                placeholder="+91 ..."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium block">
                                                Email Address *
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-industrial-green focus:outline-none transition-colors text-base md:text-lg text-charcoal font-medium placeholder:text-gray-400 placeholder:font-normal"
                                                placeholder="name@company.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="requirement" className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium block">
                                            Operational Requirement
                                        </label>
                                        <select
                                            id="requirement"
                                            name="requirement"
                                            value={formData.requirement}
                                            onChange={handleChange}
                                            className={`w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-industrial-green focus:outline-none transition-colors text-base md:text-lg bg-white ${formData.requirement === "" ? "text-gray-400 font-normal" : "text-charcoal font-normal"
                                                }`}
                                        >
                                            <option value="" className="text-gray-400">Select requirement</option>
                                            <option value="less-100">Less than 100 Tons / Month</option>
                                            <option value="100-500">100 - 500 Tons / Month</option>
                                            <option value="500-plus">500+ Tons / Month</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="inquiry" className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium block">
                                            Inquiry Details
                                        </label>
                                        <textarea
                                            id="inquiry"
                                            name="inquiry"
                                            rows={3}
                                            value={formData.inquiry}
                                            onChange={handleChange}
                                            className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-industrial-green focus:outline-none transition-colors text-base md:text-lg text-charcoal font-medium placeholder:text-gray-400 placeholder:font-normal resize-none"
                                            placeholder="Specify supply or sourcing needs..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 md:py-5 bg-[#2A453B] text-white font-bold tracking-[0.1em] uppercase hover:bg-industrial-green transition-all duration-300 rounded-sm text-sm shadow-sm mt-4"
                                    >
                                        Submit Inquiry
                                    </button>
                                </form>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-12 md:py-16 text-center">
                                    <CheckCircle2 size={64} className="text-industrial-green mb-6" />
                                    <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                                        Thanks for Submitting!
                                    </h3>
                                    <p className="text-gray-500 text-base md:text-lg max-w-md">
                                        We've received your inquiry and will get back to you within 2-4 business hours.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
