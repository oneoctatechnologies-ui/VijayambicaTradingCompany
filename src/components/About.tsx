"use client";

import Section from "./Section";
import NextImage from "next/image";

export default function About() {
    return (
        <Section id="about" className="bg-white">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8 leading-tight">
                        Built on Two Decades of <span className="text-industrial-green">Trust.</span>
                    </h2>
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                        <p>
                            Founded with a vision to bridge the gap between local sources and large-scale paper production,
                            <strong> Vijayambica Trading Co.</strong> has established itself as a cornerstone in the raw material supply chain.
                        </p>
                        <p>
                            We are not just suppliers; we are logistical partners to paper mills.
                            Our operations are designed to ensure steady, high-volume availability of carton box raw material,
                            meeting the rigorous production schedules of our clients without fail.
                        </p>
                        <p>
                            Quality is never assumed—it is verified. Every batch we aggregate is inspected for grade consistency,
                            moisture control, and handling condition before consolidation. Our long-term relationships with
                            trusted local sources ensure predictable quality, not surprises.
                        </p>
                        <p>
                            With over <strong>20 years of operational excellence</strong>, we understand that reliability isn't a luxury—it's a necessity.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
                        <div>
                            <span className="block text-4xl font-bold text-charcoal">20+</span>
                            <span className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-bold text-charcoal">2</span>
                            <span className="text-sm text-gray-500 uppercase tracking-wider">Operational Branches</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="relative h-[500px] md:h-[600px] w-full bg-gray-100 rounded-sm overflow-hidden shadow-xl">
                        <NextImage
                            src="/about.png"
                            alt="Vijayambica Trading Co. Operations"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="pl-6 border-l-2 border-industrial-green py-2">
                        <p className="font-medium text-gray-500 text-lg leading-relaxed font-serif italic">
                            "Our promise is simple: the right volume, at the right time."
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
