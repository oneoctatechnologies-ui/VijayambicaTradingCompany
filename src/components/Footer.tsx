import Link from "next/link";

export default function Footer() {
    return (
        <footer 
            className="relative text-white pt-24 md:pt-32 pb-12"
            style={{
                background: 'linear-gradient(to bottom, #0a0a0a 0%, #0f0f0f 50%, #0a0a0a 100%)'
            }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 lg:gap-20 mb-20">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white uppercase">
                            Vijayambica <br className="hidden md:block" /> Trading Co.
                        </h4>
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md font-light mb-8">
                            Reliable carton raw material supply for paper mills, built on trust and operational discipline since 2007.
                        </p>
                        <div className="h-px w-full max-w-md bg-white/5"></div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="font-bold text-white/70 mb-6 uppercase tracking-[0.25em] text-xs">
                            Quick Links
                        </h5>
                        <ul className="space-y-3.5 text-sm text-gray-500">
                            <li>
                                <Link href="/" className="hover:text-white/90 transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="hover:text-white/90 transition-colors duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/#process" className="hover:text-white/90 transition-colors duration-300">
                                    Our Process
                                </Link>
                            </li>
                            <li>
                                <Link href="/#why-us" className="hover:text-white/90 transition-colors duration-300">
                                    Value Proposition
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="hover:text-white/90 transition-colors duration-300">
                                    Inquiries
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h5 className="font-bold text-white/70 mb-6 uppercase tracking-[0.25em] text-xs">
                            Legal
                        </h5>
                        <ul className="space-y-3.5 text-sm text-gray-500">
                            <li>
                                <Link href="/privacy-policy" className="hover:text-white/90 transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="hover:text-white/90 transition-colors duration-300">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/operational-policy" className="hover:text-white/90 transition-colors duration-300">
                                    Operational Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Operations */}
                    <div>
                        <h5 className="font-bold text-white/70 mb-6 uppercase tracking-[0.25em] text-xs">
                            Operations
                        </h5>
                        <ul className="space-y-3.5 text-sm text-gray-500 leading-relaxed">
                            <li>
                                Beside Pillar No.117,<br />
                                Somi Reddy Nagar, Attapur,<br />
                                Hyderabad, Telangana – 500048
                            </li>
                            <li className="pt-1">
                                <a href="tel:9704234869" className="hover:text-white/90 transition-colors duration-300">
                                    9704234869
                                </a>
                                {", "}
                                <a href="tel:9393234869" className="hover:text-white/90 transition-colors duration-300">
                                    9393234869
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contact@vijayambica.com" className="hover:text-white/90 transition-colors duration-300">
                                    contact@vijayambica.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-white/5 mb-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-600 font-medium">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4">
                        <Link href="/privacy-policy" className="hover:text-white/80 transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <span className="hidden md:inline">•</span>
                        <Link href="/terms-of-service" className="hover:text-white/80 transition-colors duration-300">
                            Terms of Service
                        </Link>
                        <span className="hidden md:inline">•</span>
                        <Link href="/operational-policy" className="hover:text-white/80 transition-colors duration-300">
                            Operational Policy
                        </Link>
                    </div>
                    <div className="text-center md:text-right">
                        © {new Date().getFullYear()} Vijayambica Trading Co. All rights reserved.
                    </div>
                </div>

                {/* OneOcta Credit */}
                <div className="max-w-7xl mx-auto px-6 mt-10 flex justify-center md:justify-end">
                    <a
                        href="https://oneocta.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] uppercase tracking-[0.4em] text-gray-600 hover:text-white/70 transition-colors duration-300 font-medium"
                    >
                        MADE BY ONEOCTA.COM
                    </a>
                </div>
            </div>
        </footer>
    );
}
