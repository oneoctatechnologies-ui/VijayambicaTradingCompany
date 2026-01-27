"use client";

import Section from "./Section";
import { MapPin } from "lucide-react";

const locations = [
    {
        name: "Primary Branch",
        detail: "Beside Pillar No.117, Somi Reddy Nagar, Attapur, Hyderabad, Telangana – 500048",
        address: "Beside Pillar No.117, Somi Reddy Nagar, Attapur, Hyderabad, Telangana 500048",
    },
    {
        name: "Secondary Branch",
        detail: "Beside Pillar No.117, Somi Reddy Nagar, Attapur, Hyderabad, Telangana – 500048",
        address: "Beside Pillar No.117, Somi Reddy Nagar, Attapur, Hyderabad, Telangana 500048",
    },
];

const getGoogleMapsUrl = (address: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
};

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

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Primary Aggregation Facility */}
                <a
                    href={getGoogleMapsUrl(locations[0].address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col items-start gap-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-industrial-green/30 transition-all duration-300 cursor-pointer group"
                >
                    <div className="text-gray-400 group-hover:text-industrial-green transition-colors">
                        <MapPin size={28} strokeWidth={1} />
                    </div>
                    <div className="w-full">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-industrial-green font-bold mb-2 block">Site Area 01</span>
                        <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-industrial-green transition-colors">Primary Aggregation Facility</h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-medium group-hover:text-charcoal transition-colors">
                            C/18, Moosarambagh Rd, Azad Nagar, Amberpet, Hyderabad, Telangana – 500013
                        </p>
                        <span className="text-xs text-industrial-green font-medium mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                            View on Maps →
                        </span>
                    </div>
                </a>

                {/* Secondary Buffer & Dispatch Facility */}
                <a
                    href={getGoogleMapsUrl(locations[1].address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col items-start gap-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-industrial-green/30 transition-all duration-300 cursor-pointer group"
                >
                    <div className="text-gray-400 group-hover:text-industrial-green transition-colors">
                        <MapPin size={28} strokeWidth={1} />
                    </div>
                    <div className="w-full">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-industrial-green font-bold mb-2 block">Site Area 02</span>
                        <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-industrial-green transition-colors">Secondary Buffer & Dispatch Facility</h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-medium group-hover:text-charcoal transition-colors">
                            Beside Pillar No.117, Somi Reddy Nagar, Attapur, Hyderabad, Telangana – 500048
                        </p>
                        <span className="text-xs text-industrial-green font-medium mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                            View on Maps →
                        </span>
                    </div>
                </a>
            </div>

            <div className="mt-20 text-center">
                <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">
                    Combined Capacity: Optimized for 24/7 Supply Readiness
                </p>
            </div>
        </Section>
    );
}
