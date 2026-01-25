import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white">
            <Section className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-12 tracking-tight">Terms of Service.</h1>

                    <div className="space-y-12 text-gray-600 leading-relaxed font-light text-lg">
                        <section>
                            <h2 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-wider">01. Acceptance of Terms</h2>
                            <p>
                                By accessing this website, you agree to these terms. Vijayambica Trading Co. provides this platform for professional inquiry and informational purposes regarding our paper mill supply services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-wider">02. Use of Information</h2>
                            <p>
                                The content on this website is for general information and direct business inquiry. While we strive for accuracy, we do not warrant that all specifications or market-dependent details are always up-to-date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-wider">03. Relationship Disclaimer</h2>
                            <p>
                                Digital inquiries through this website do not constitute a binding supply agreement. All manufacturing partnerships and raw material supply commitments are governed by formal, direct agreements executed between the respective parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-wider">04. Integrity of Interaction</h2>
                            <p>
                                Users are expected to provide accurate organizational identity when using inquiry forms. Impersonation or submission of fraudulent data is strictly prohibited.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-wider">05. Jurisdiction</h2>
                            <p>
                                Any disputes arising from the use of this website shall be governed by the laws of India and subject to the jurisdiction of the courts in Hyderabad, Telangana.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-gray-100">
                            <p className="text-sm mt-2">
                                Last Updated: January 2026
                            </p>
                        </section>
                    </div>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
