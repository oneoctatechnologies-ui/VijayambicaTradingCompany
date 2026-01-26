"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
    const [isHeroVisible, setIsHeroVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    // IntersectionObserver to detect hero section visibility
    useEffect(() => {
        // Only observe on home page
        if (pathname !== "/") {
            setIsHeroVisible(false);
            return;
        }

        let observer: IntersectionObserver | null = null;
        let retryTimeout: NodeJS.Timeout | null = null;

        const findAndObserveHero = () => {
            const heroSection = document.querySelector('section:first-of-type');
            if (!heroSection) {
                // Retry if element not found (might not be mounted yet)
                retryTimeout = setTimeout(findAndObserveHero, 50);
                return;
            }

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        // Hero is visible when intersectionRatio > 0.15
                        setIsHeroVisible(entry.isIntersecting && entry.intersectionRatio > 0.15);
                    });
                },
                {
                    threshold: [0, 0.1, 0.15, 0.2],
                    rootMargin: '0px'
                }
            );

            observer.observe(heroSection);

            // Set initial state
            const rect = heroSection.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            setIsHeroVisible(isVisible);
        };

        // Start observing
        findAndObserveHero();

        // Cleanup
        return () => {
            if (retryTimeout) {
                clearTimeout(retryTimeout);
            }
            if (observer) {
                observer.disconnect();
            }
        };
    }, [pathname]);

    // On home page: transparent when hero visible, solid black when hero not visible
    // On other pages: always solid
    const isSolid = pathname !== "/" || !isHeroVisible;

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleLinkClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        // Close mobile menu
        setIsOpen(false);
        
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
            // Handle hash links with scroll offset for navbar
            const hash = href.split("#")[1];
            if (!hash) return;
            
            const scrollToSection = (retryCount = 0) => {
                const element = document.getElementById(hash);
                if (element) {
                    // Calculate navbar height (64px on mobile, ~80px on desktop)
                    const navbarHeight = window.innerWidth < 768 ? 64 : 80;
                    const elementTop = element.getBoundingClientRect().top;
                    const currentScroll = window.scrollY || document.documentElement.scrollTop || 0;
                    const offsetPosition = elementTop + currentScroll - navbarHeight;
                    
                    window.scrollTo({
                        top: Math.max(0, offsetPosition),
                        behavior: "smooth"
                    });
                } else if (retryCount < 5) {
                    // If element not found, try again (max 5 retries)
                    setTimeout(() => scrollToSection(retryCount + 1), 100);
                }
            };
            
            if (pathname !== "/") {
                // If we're not on home page, navigate to home first
                router.push("/");
                setTimeout(() => {
                    scrollToSection();
                }, 300);
            } else {
                // If we're on home page, just scroll to section
                // Small delay to ensure DOM is ready
                setTimeout(() => {
                    scrollToSection();
                }, 10);
            }
        } else {
            // Regular navigation (non-hash links)
            router.push(href);
        }
    };

    return (
        <>
            <nav
                className={`fixed left-0 right-0 z-[1000] w-full ${
                    isSolid 
                        ? "py-3 md:py-4" 
                        : "py-4 md:py-6"
                }`}
                style={{
                    top: 0,
                    position: 'fixed',
                    transform: 'translateZ(0)',
                    willChange: 'transform',
                    transition: 'background-color 300ms ease',
                    margin: 0,
                    paddingTop: `calc(${isSolid ? '0.75rem' : '1rem'} + env(safe-area-inset-top, 0))`,
                    paddingBottom: isSolid ? '0.75rem' : '1rem',
                    paddingLeft: 0,
                    paddingRight: 0,
                    backgroundColor: isSolid ? '#000' : 'transparent',
                    border: 'none',
                    borderBottom: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                    backdropFilter: 'none',
                    WebkitBackdropFilter: 'none',
                    pointerEvents: 'auto'
                }}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center text-white h-16 md:h-auto">
                    <Link
                        href="/"
                        onClick={(e) => {
                            handleLinkClick("/", e);
                        }}
                        className="flex items-center gap-3 group cursor-pointer flex-1 min-w-0"
                    >
                        <span className={`text-sm md:text-base lg:text-lg font-bold tracking-wider md:tracking-widest uppercase transition-colors truncate ${
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
                        className="md:hidden text-white p-2 flex-shrink-0 -mr-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-[999] md:hidden"
                        />
                        
                        {/* Dropdown Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="fixed top-16 left-0 right-0 bg-black z-[1001] md:hidden rounded-b-lg shadow-lg"
                            style={{
                                paddingTop: 'env(safe-area-inset-top, 0)'
                            }}
                        >
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
                                            className="flex items-center gap-3 px-6 py-4 text-white hover:bg-gray-900 transition-all group"
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
                                    className="mx-4 mt-2 mb-4 px-6 py-3 bg-industrial-green text-white font-semibold text-sm rounded-sm hover:bg-industrial-green-light transition-all duration-300 text-center uppercase tracking-wide"
                                >
                                    Get in Touch
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
