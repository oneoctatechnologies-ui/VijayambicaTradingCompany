"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, ChevronRight, Building2, Phone, ClipboardCheck, Package } from "lucide-react";

type Message = {
    id: number;
    text: string;
    sender: "bot" | "user";
};

const QUICK_ACTIONS = [
    { id: "supply", label: "Raw material details", icon: Package },
    { id: "locations", label: "Branch locations", icon: Building2 },
    { id: "contact", label: "Contact & coordination", icon: Phone },
    { id: "inquiry", label: "Submit inquiry", icon: ClipboardCheck },
];

const BOT_RESPONSES: Record<string, string> = {
    supply: "We supply premium carton box raw materials (OCC and NCDL) with 24/7 dispatch readiness to ensure uninterrupted production for paper mills. Our operational discipline ensures consistent volume and quality.",
    locations: "Our operational facilities are located beside Pillar No.117, Somi Reddy Nagar, Attapur, Hyderabad. We are strategically positioned for efficient regional logistics.",
    contact: "You can reach our coordination team directly at 9704234869 or 9393234869. For formal inquiries, you can also email us at contact@vijayambica.com.",
    inquiry: "To submit a formal supply or sourcing inquiry, please use the contact form on our website. Would you like me to take you there?",
};

export default function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hello 👋\nI can help you with supply requirements, operational details, or connecting with our team.",
            sender: "bot",
        },
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleAction = (id: string, label: string) => {
        const userMsg: Message = { id: Date.now(), text: label, sender: "user" };
        const botMsg: Message = { id: Date.now() + 1, text: BOT_RESPONSES[id], sender: "bot" };

        setMessages((prev) => [...prev, userMsg, botMsg]);

        if (id === "inquiry") {
            setTimeout(() => {
                const ctaMsg: Message = {
                    id: Date.now() + 2,
                    text: "Click here to go to our [Inquiry Form](/#contact)",
                    sender: "bot"
                };
                setMessages((prev) => [...prev, ctaMsg]);
            }, 500);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="absolute bottom-20 right-0 w-[350px] md:w-[400px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-charcoal p-4 flex justify-between items-center">
                            <div>
                                <h3 className="text-white font-bold text-sm leading-tight">Vijayambica Assistant</h3>
                                <p className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">Supply & Inquiry Support</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div
                            ref={scrollRef}
                            className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gray-50/50"
                        >
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === "bot" ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${msg.sender === "bot"
                                                ? "bg-white text-gray-700 shadow-sm border border-gray-100"
                                                : "bg-industrial-green text-white shadow-sm"
                                            }`}
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: msg.text.replace(/\n/g, '<br/>').replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="underline font-bold" target="_blank">$1</a>')
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick Actions */}
                        <div className="p-4 bg-white border-t border-gray-50">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-3">Quick Actions</p>
                            <div className="grid grid-cols-1 gap-2">
                                {QUICK_ACTIONS.map((action) => (
                                    <button
                                        key={action.id}
                                        onClick={() => handleAction(action.id, action.label)}
                                        className="flex items-center gap-3 p-2 text-left text-xs text-gray-600 hover:bg-gray-50 border border-gray-100 rounded-md transition-all group"
                                    >
                                        <action.icon size={14} className="text-industrial-green" />
                                        <span className="font-medium">{action.label}</span>
                                        <ChevronRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Footer Disclaimer */}
                        <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
                            <p className="text-[9px] text-gray-400 text-center font-medium">Standard Response Time for Direct Team Handoff: 2-4 Hours</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen ? "bg-white text-charcoal border border-gray-100" : "bg-industrial-green text-white"
                    }`}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>
        </div>
    );
}
