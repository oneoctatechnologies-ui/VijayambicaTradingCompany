import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Section className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-12 tracking-tight">Privacy Policy.</h1>

                    <div className="space-y-12 text-gray-600 leading-relaxed font-light text-lg">
                        <section>
                            <h2 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-wider">01. Overview</h2>
                            <p>
                                At Vijayambica Trading Co., we respect the confidentiality of our industrial partners. This policy outlines how we handle information shared with us through our digital presence to ensure a secure and professional coordination process.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-wider">02. Information Collection</h2>
                            <p>
                                We only collect information that is voluntarily provided through our business inquiry forms or direct communication. This typically includes:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Company or Paper Mill identity</li>
                                <li>Authorized contact person's name</li>
                                <li>Business contact details (Email, Phone)</li>
                                <li>Operational requirements and supply specifications</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-wider">03. Usage of Data</h2>
                            <p>
                                The information collected is used exclusively for business coordination, supply chain logistics, and responding to specific manufacturing requirements. We do not use this data for unsolicited marketing.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-wider">04. Confidentiality</h2>
                            <p>
                                We maintain strict confidentiality regarding the identities of our paper mill partners and their sourcing volumes. Information is never shared with third parties except where necessary for logistical execution or required by law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-wider">05. Security</h2>
                            <p>
                                We implement industry-standard organizational and technical measures to protect your inquiry data. Access to business information is restricted to authorized personnel managing coordination and supply.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-gray-100">
                            <p className="text-sm italic">
                                For concerns regarding data privacy, please reach us at contact@vijayambica.com.
                            </p>
                            <p className="text-sm mt-2">
                                Effective Date: January 2026
                            </p>
                        </section>
                    </div>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
