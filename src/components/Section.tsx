"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    dark?: boolean;
}

export default function Section({ children, className, id, dark = false }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "py-20 md:py-32 px-6 md:px-12 w-full",
                dark ? "bg-charcoal text-white" : "bg-off-white text-charcoal",
                className
            )}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto"
            >
                {children}
            </motion.div>
        </section>
    );
}
