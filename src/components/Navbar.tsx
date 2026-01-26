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

    const isSolid = pathname !== "/" || isScrolled;

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
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-auto ${isSolid ? "bg-charcoal/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
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
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-[99] md:hidden"
                        />
                        
                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 h-full w-[300px] max-w-[85vw] bg-charcoal shadow-2xl z-[100] md:hidden overflow-y-auto"
                        >
                            {/* Mobile Menu Header */}
                            <div className="flex items-center justify-between p-5 border-b border-gray-800 sticky top-0 bg-charcoal z-10">
                                <Link
                                    href="/"
                                    onClick={(e) => {
                                        handleLinkClick("/", e);
                                    }}
                                    className="flex items-center gap-2 group flex-1 min-w-0"
                                >
                                    <span className="text-sm font-bold tracking-wider uppercase text-white group-hover:text-gray-200 transition-colors truncate">
                                        VIJAYAMBICA TRADING CO.
                                    </span>
                                </Link>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-white transition-colors p-2 flex-shrink-0"
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Mobile Menu Items */}
                            <div className="flex flex-col py-2">
                                {links.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => {
                                                handleLinkClick(link.href, e);
                                            }}
                                            className="flex items-center gap-4 px-5 py-3.5 text-gray-300 hover:text-white hover:bg-gray-800/50 active:bg-gray-800/70 transition-all group"
                                        >
                                            <Icon size={20} className="text-industrial-green group-hover:text-industrial-green-light transition-colors flex-shrink-0" />
                                            <span className="text-base font-medium uppercase tracking-wide">{link.name}</span>
                                        </Link>
                                    );
                                })}
                                <Link
                                    href="/#contact"
                                    onClick={(e) => {
                                        handleLinkClick("/#contact", e);
                                    }}
                                    className="mx-5 mt-3 mb-4 px-6 py-3 bg-industrial-green text-white font-semibold text-sm rounded-sm hover:bg-industrial-green-light active:bg-industrial-green-light transition-all duration-300 text-center uppercase tracking-wide"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
