import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0F0F0F] text-white pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-16 lg:gap-24 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <h4 className="text-2xl font-bold tracking-tight mb-6 text-white uppercase">Vijayambica <br className="hidden md:block" /> Trading Co.</h4>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-light">
                        Reliable carton raw material supply for paper mills, built on trust and operational discipline since 2007.
                    </p>
                    <div className="mt-8 flex items-center gap-3">
                        <div className="h-px w-8 bg-industrial-green opacity-50"></div>
                        <p className="text-industrial-green text-sm uppercase tracking-widest font-bold">Industrial Integrity</p>
                    </div>
                </div>

                <div>
                    <h5 className="font-bold text-white mb-6 uppercase tracking-[0.2em] text-xs opacity-50">Quick Links</h5>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/#process" className="hover:text-white transition-colors">Our Process</Link></li>
                        <li><Link href="/#why-us" className="hover:text-white transition-colors">Value Proposition</Link></li>
                        <li><Link href="/#contact" className="hover:text-white transition-colors">Inquiries</Link></li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-bold text-white mb-6 uppercase tracking-[0.2em] text-xs opacity-50">Legal</h5>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        <li><Link href="/operational-policy" className="hover:text-white transition-colors">Operational Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-bold text-white mb-6 uppercase tracking-[0.2em] text-xs opacity-50">Operations</h5>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="leading-relaxed">Beside Pillar No.117,<br /> Somi Reddy Nagar, Attapur,<br /> Hyderabad, Telangana – 500048</li>
                        <li className="pt-2 text-gray-400 font-medium"><a href="tel:9704234869" className="hover:text-industrial-green transition-colors">9704234869</a>, <a href="tel:9393234869" className="hover:text-industrial-green transition-colors">9393234869</a></li>
                        <li><a href="mailto:Vijayambicatradingco@gmail.com" className="hover:text-white transition-colors">Vijayambicatradingco@gmail.com</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                <div>
                    © {new Date().getFullYear()} Vijayambica Trading Co. All rights reserved.
                </div>
                <a
                    href="https://oneocta.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 group-hover:text-white transition-all font-medium">
                        MADE BY ONEOCTA.COM
                    </span>
                    <div className="h-[2px] w-8 bg-industrial-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
                </a>
            </div>
        </footer>
    );
}
