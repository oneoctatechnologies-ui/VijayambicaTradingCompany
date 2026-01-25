"use client";

import Section from "./Section";

export default function Contact() {
    return (
        <Section id="contact" className="bg-white py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-start">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 tracking-tight">
                        Get In Touch.
                    </h2>
                    <p className="text-industrial-green font-medium text-lg mb-6">
                        Trusted supply partner for paper mills across the region.
                    </p>
                    <p className="text-gray-500 text-lg mb-12 font-light leading-relaxed">
                        Reach out to discuss industrial-scale supply requirements or established sourcing opportunities.
                        We prioritize long-term stability and professional coordination across our network.
                    </p>

                    <div className="space-y-10">
                        <div className="flex flex-col gap-2">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold mb-1">Direct Coordination</p>
                            <p className="text-lg text-gray-700 font-medium">9704234869, 9393234869</p>
                            <a href="mailto:contact@vijayambica.com" className="text-lg text-gray-700 font-medium hover:text-industrial-green transition-colors">contact@vijayambica.com</a>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <p className="text-sm text-gray-500 italic">
                                * Typical response time for industrial inquiries: 2-4 business hours.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
                    <form className="space-y-8">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium">Company / Mill Name</label>
                            <input type="text" className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-industrial-green focus:outline-hidden transition-colors text-lg text-charcoal font-medium placeholder:text-gray-400 placeholder:font-normal" placeholder="Organization Identity" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium">Authorized Contact</label>
                            <input type="text" className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-industrial-green focus:outline-hidden transition-colors text-lg text-charcoal font-medium placeholder:text-gray-400 placeholder:font-normal" placeholder="Full Name" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium">Phone Number *</label>
                                <input required type="tel" className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-industrial-green focus:outline-hidden transition-colors text-lg text-charcoal font-medium placeholder:text-gray-400 placeholder:font-normal" placeholder="+91 ..." />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium">Email Address *</label>
                                <input required type="email" className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-industrial-green focus:outline-hidden transition-colors text-lg text-charcoal font-medium placeholder:text-gray-400 placeholder:font-normal" placeholder="name@company.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium">Operational Requirement</label>
                            <select className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-industrial-green focus:outline-hidden transition-colors text-lg text-charcoal font-medium bg-white">
                                <option>Less than 100 Tons / Month</option>
                                <option>100 - 500 Tons / Month</option>
                                <option>500+ Tons / Month</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium">Inquiry Details</label>
                            <textarea rows={3} className="w-full px-0 py-3 bg-transparent border-b border-gray-200 focus:border-industrial-green focus:outline-hidden transition-colors text-lg text-charcoal font-medium placeholder:text-gray-400 placeholder:font-normal" placeholder="Specify supply or sourcing needs..."></textarea>
                        </div>
                        <button type="submit" className="w-full py-5 bg-[#2A453B] text-white font-bold tracking-[0.1em] uppercase hover:bg-industrial-green transition-all rounded-sm text-sm shadow-sm md:mt-4">
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
}
