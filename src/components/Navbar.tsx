"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Process", href: "/#process" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Contact", href: "/#contact" },
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
                    <span className="text-lg font-bold tracking-widest uppercase hover:text-gray-300 transition-colors">VIJAYAMBICA TRADING CO.</span>
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

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-charcoal border-t border-gray-800"
                >
                    <div className="flex flex-col p-6 gap-6 items-center">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    handleLinkClick(link.href, e);
                                }}
                                className="text-lg text-gray-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
