"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Info, Cog, Award, Phone } from "lucide-react";

const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/#about", icon: Info },
    { name: "Process", href: "/#process", icon: Cog },
    { name: "Why Us", href: "/#why-us", icon: Award },
    { name: "Contact", href: "/#contact", icon: Phone },
];

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const isSolid = pathname !== "/" || isScrolled || isOpen;

    const handleLinkClick = (href: string, e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
        }
        
        if (href === "/") {
            // If clicking home, always scroll to top
            if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                router.push("/");
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
            }
        } else if (href.startsWith("/#")) {
            // Handle hash links
            if (pathname !== "/") {
                // If we're not on home page, navigate to home first
                router.push("/");
                setTimeout(() => {
                    const hash = href.split("#")[1];
                    if (hash) {
                        const element = document.getElementById(hash);
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                        }
                    }
                }, 100);
            } else {
                // If we're on home page, just scroll to section
                const hash = href.split("#")[1];
                if (hash) {
                    const element = document.getElementById(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }
            }
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-auto ${isSolid ? "bg-charcoal/90 backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center text-white py-4 md:py-6">
                    <Link
                        href="/"
                        onClick={(e) => {
                            handleLinkClick("/", e);
                        }}
                        className="flex items-center gap-3 group cursor-pointer"
                    >
                        <span className={`text-base md:text-lg font-bold tracking-widest uppercase transition-colors ${
                            isSolid ? "text-white hover:text-gray-200" : "text-white hover:text-gray-300"
                        }`}>
                            VIJAYAMBICA TRADING CO.
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 items-center">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    handleLinkClick(link.href, e);
                                }}
                                className="text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors uppercase"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            onClick={(e) => {
                                handleLinkClick("/#contact", e);
                            }}
                            className="px-5 py-2 bg-white text-charcoal font-semibold text-sm rounded-sm hover:bg-industrial-green hover:text-white transition-all duration-300"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden bg-charcoal/95 backdrop-blur-md"
                        >
                            <ul className="flex flex-col gap-2 pb-4">
                                {links.map((link, index) => {
                                    const Icon = link.icon;
                                    return (
                                        <motion.li
                                            key={link.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    setIsOpen(false);
                                                    // Wait for menu to close, then navigate
                                                    setTimeout(() => {
                                                        handleLinkClick(link.href);
                                                    }, 100);
                                                }}
                                                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors group"
                                            >
                                                <Icon size={20} className="text-industrial-green group-hover:text-industrial-green transition-colors" />
                                                <span className="text-sm font-medium uppercase tracking-wide">{link.name}</span>
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: links.length * 0.1 }}
                                >
                                    <Link
                                        href="/#contact"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setIsOpen(false);
                                            // Wait for menu to close, then navigate
                                            setTimeout(() => {
                                                handleLinkClick("/#contact");
                                            }, 100);
                                        }}
                                        className="block px-4 py-3 bg-industrial-green text-white text-center font-semibold rounded-lg hover:bg-industrial-green/90 transition-colors uppercase tracking-wide text-sm"
                                    >
                                        Get in Touch
                                    </Link>
                                </motion.li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
