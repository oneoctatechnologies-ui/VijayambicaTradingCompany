import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function OperationalPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Section className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-12 tracking-tight">Operational Policy.</h1>

                    <div className="space-y-12 text-gray-600 leading-relaxed font-light text-lg">
                        <section>
                            <h2 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-wider">01. Purpose</h2>
                            <p>
                                This policy outlines the operational principles that guide our raw material sourcing and aggregation services. It is intended to provide clarity to our paper mill partners and local vendors regarding our professional standards.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-wider">02. Material Standards</h2>
                            <p>
                                We maintain rigorous standards for the aggregation of carton box raw materials (OCC/NCDL). Our processes ensure that material supplied to paper mills meets the agreed volume and quality benchmarks required for consistent production.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-wider">03. Supply Chain Reliability</h2>
                            <p>
                                Our dual-facility operation in Hyderabad is designed to buffer supply against market fluctuations. We prioritize 24/7 readiness and professional dispatch coordination to ensure that mill production lines remain uninterrupted.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-wider">04. Ethical Sourcing</h2>
                            <p>
                                Vijayambica Trading Co. operates with complete transparency in weighing and settlements. We build long-term trust with local vendors through fair handling and consistent payment schedules.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-wider">05. Policy Status</h2>
                            <p>
                                This is an informational document outlining our standard operating philosophy. It is not a binding legal contract and may be updated to reflect improvements in our operational capabilities.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-gray-100">
                            <p className="text-sm mt-2">
                                Ref: VTC/OP/2026/01
                            </p>
                        </section>
                    </div>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
