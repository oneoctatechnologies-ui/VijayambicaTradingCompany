"use client";

import Section from "./Section";
import { Quote } from "lucide-react";

import Image from "next/image";

export default function Journey() {
    return (
        <Section id="journey" className="bg-white border-t border-gray-100">
            <div className="grid md:grid-cols-12 gap-12 items-center">
                {/* Photo Column */}
                <div className="md:col-span-5 order-2 md:order-1 relative">
                    {/* Decorative Backdrop Element */}
                    <div className="absolute -inset-4 bg-gray-100 rounded-sm -z-10 transform rotate-2"></div>

                    <div className="relative aspect-[3/4] bg-gray-50 rounded-sm overflow-hidden shadow-2xl border border-white/20">
                        <Image
                            src="/director.png"
                            alt="P. Vengal Reddy, Managing Director"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        {/* Subtle inner shadow for depth */}
                        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none"></div>
                    </div>
                    <div className="mt-4 text-center md:text-left">
                        <h3 className="text-xl font-bold text-charcoal">P. Vengal Reddy</h3>
                        <p className="text-industrial-green font-medium">Managing Director</p>
                    </div>
                </div>

                {/* Story Column */}
                <div className="md:col-span-7 order-1 md:order-2">
                    <div className="flex gap-4 mb-6">
                        <div className="p-3 bg-industrial-green/10 rounded-full text-industrial-green h-fit">
                            <Quote size={24} className="fill-current" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                                Our Journey.
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                        <p>
                            "For over 20 years, our philosophy has been simple: <strong>consistency builds trust</strong>. We didn't set out to be the biggest, but to be the most dependable."
                        </p>
                        <p>
                            We understand that in this industry, a delay at our end means a stoppage at yours. That’s why we have spent decades refining our internal discipline—ensuring that every load we dispatch is on time, every time.
                        </p>
                        <p>
                            Our growth hasn't come from aggressive marketing, but from the quiet confidence of our partners. Whether it’s a paper mill relying on us for volume or individual vendors trusting us for fair dealing, we honor every relationship with the same level of integrity."
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
