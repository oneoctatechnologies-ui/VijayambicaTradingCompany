"use client";

import Section from "./Section";
import { MapPin } from "lucide-react";


export default function Operations() {
    return (
        <Section id="locations" className="bg-white border-t border-gray-100 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6 tracking-tight">Our Operational Footprint</h2>
                <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
                    Strategically located to ensure readiness. Our facilities are designed for high-volume aggregation,
                    material buffering, and reliable dispatch, maintaining a seamless flow to paper manufacturing units.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
                {/* Site Area 01 */}
                <div className="bg-white p-8 md:p-10 border border-[#e6e6e6] rounded-[12px] shadow-sm flex flex-col items-start h-full group transition-all duration-300 hover:border-industrial-green/30">
                    <div className="bg-industrial-green/5 p-3 rounded-lg text-industrial-green mb-6">
                        <MapPin size={24} strokeWidth={2} />
                    </div>

                    <div className="flex-grow">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-industrial-green font-bold mb-2 block">Site Area 01</span>
                        <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-4">Primary Aggregation Facility</h3>
                        <div className="text-gray-500 text-sm md:text-base leading-relaxed font-medium space-y-1">
                            <p>C/18, Moosarambagh Rd, Azad Nagar,</p>
                            <p>Amberpet, Hyderabad,</p>
                            <p>Telangana – 500013</p>
                        </div>
                    </div>

                    <a
                        href="https://www.google.com/maps?q=17.379213333129883,78.51963806152344"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 rounded-lg text-sm font-bold text-charcoal hover:bg-industrial-green hover:text-white hover:border-industrial-green transition-all min-h-[44px] w-full md:w-auto"
                    >
                        <span>👉 View on Google Maps</span>
                    </a>
                </div>

                {/* Site Area 02 */}
                <div className="bg-white p-8 md:p-10 border border-[#e6e6e6] rounded-[12px] shadow-sm flex flex-col items-start h-full group transition-all duration-300 hover:border-industrial-green/30">
                    <div className="bg-industrial-green/5 p-3 rounded-lg text-industrial-green mb-6">
                        <MapPin size={24} strokeWidth={2} />
                    </div>

                    <div className="flex-grow">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-industrial-green font-bold mb-2 block">Site Area 02</span>
                        <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-4">Secondary Buffer & Dispatch</h3>
                        <div className="text-gray-500 text-sm md:text-base leading-relaxed font-medium space-y-1">
                            <p>Beside Pillar No.117, Somi Reddy Nagar,</p>
                            <p>Attapur, Hyderabad,</p>
                            <p>Telangana – 500048</p>
                        </div>
                    </div>

                    <a
                        href="https://www.google.com/maps?q=17.372623443603516,78.43050384521484"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 rounded-lg text-sm font-bold text-charcoal hover:bg-industrial-green hover:text-white hover:border-industrial-green transition-all min-h-[44px] w-full md:w-auto"
                    >
                        <span>👉 View on Google Maps</span>
                    </a>
                </div>
            </div>

            <div className="mt-20 text-center">
                <p className="text-gray-400 text-xs md:text-sm font-medium tracking-widest uppercase">
                    Combined Capacity: Optimized for 24/7 Supply Readiness
                </p>
            </div>
        </Section>
    );
}
