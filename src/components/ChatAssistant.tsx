"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareMore, X, Send, Bot, Building2, Phone, ClipboardCheck, Package } from "lucide-react";

type Message = {
    id: number;
    text: string;
    sender: "bot" | "user";
    timestamp: Date;
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
            timestamp: new Date(),
        },
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleAction = (id: string, label: string) => {
        const userMsg: Message = { id: Date.now(), text: label, sender: "user", timestamp: new Date() };
        const botMsg: Message = { id: Date.now() + 1, text: BOT_RESPONSES[id], sender: "bot", timestamp: new Date() };

        setMessages((prev) => [...prev, userMsg, botMsg]);

        if (id === "inquiry") {
            setTimeout(() => {
                const ctaMsg: Message = {
                    id: Date.now() + 2,
                    text: "Click here to go to our [Inquiry Form](/#contact)",
                    sender: "bot",
                    timestamp: new Date()
                };
                setMessages((prev) => [...prev, ctaMsg]);
            }, 500);
        }
    };

    const handleSendMessage = () => {
        if (!inputMessage.trim()) return;

        const userMsg: Message = {
            id: Date.now(),
            text: inputMessage,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        const currentInput = inputMessage;
        setInputMessage("");

        setTimeout(() => {
            const lowerInput = currentInput.toLowerCase();
            let botResponse: Message;

            if (lowerInput.includes("supply") || lowerInput.includes("material") || lowerInput.includes("raw")) {
                botResponse = {
                    id: Date.now() + 1,
                    text: BOT_RESPONSES.supply,
                    sender: "bot",
                    timestamp: new Date(),
                };
            } else if (lowerInput.includes("location") || lowerInput.includes("address") || lowerInput.includes("where")) {
                botResponse = {
                    id: Date.now() + 1,
                    text: BOT_RESPONSES.locations,
                    sender: "bot",
                    timestamp: new Date(),
                };
            } else if (lowerInput.includes("contact") || lowerInput.includes("phone") || lowerInput.includes("call")) {
                botResponse = {
                    id: Date.now() + 1,
                    text: BOT_RESPONSES.contact,
                    sender: "bot",
                    timestamp: new Date(),
                };
            } else {
                botResponse = {
                    id: Date.now() + 1,
                    text: "Thank you for your inquiry! I can help you with supply requirements, locations, or contact information. You can also call us directly at 9704234869 or 9393234869 for immediate assistance.",
                    sender: "bot",
                    timestamp: new Date(),
                };
            }

            setMessages((prev) => [...prev, botResponse]);
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-industrial-green text-white rounded-full shadow-2xl hover:bg-industrial-green-light transition-all duration-300 flex items-center justify-center group hover:scale-110 cursor-pointer"
                    aria-label="Open chatbot"
                >
                    <MessageSquareMore size={24} className="group-hover:rotate-12 transition-transform" />
                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-auto md:left-auto md:translate-x-0 md:translate-y-0 md:bottom-8 md:right-8 z-[100] w-[calc(100vw-2rem)] md:w-96 max-w-[calc(100vw-2rem)] md:max-w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-industrial-green to-industrial-green-light text-white p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <Bot size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Vijayambica AI Chatbot</h3>
                                <p className="text-xs text-white/80">We&apos;re online</p>
                            </div>
                        </div>
                        <button
                            onClick={handleClose}
                            className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                                        message.sender === "user"
                                            ? "bg-industrial-green text-white"
                                            : "bg-white text-gray-700 shadow-md"
                                    }`}
                                >
                                    <div
                                        className="text-sm whitespace-pre-line"
                                        dangerouslySetInnerHTML={{
                                            __html: message.text.replace(/\n/g, '<br/>').replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="underline font-bold" target="_blank">$1</a>')
                                        }}
                                    />
                                    <p className={`text-xs mt-1 ${message.sender === "user" ? "text-white/70" : "text-gray-500"}`}>
                                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Replies */}
                    {messages.length <= 1 && (
                        <div className="px-4 pb-2 border-t border-gray-200 bg-white">
                            <p className="text-xs text-gray-600 mb-2 font-medium">Quick replies:</p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {QUICK_ACTIONS.map((action) => (
                                    <button
                                        key={action.id}
                                        onClick={() => handleAction(action.id, action.label)}
                                        className="px-4 py-2 bg-white border-2 border-gray-300 rounded-full text-sm text-gray-700 hover:border-industrial-green hover:text-industrial-green transition-colors"
                                    >
                                        {action.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Input */}
                    <div className="p-4 border-t border-gray-200 bg-white">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-2.5 border-2 border-gray-200 rounded-full focus:outline-none focus:border-industrial-green transition-colors text-sm"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputMessage.trim()}
                                className="w-10 h-10 bg-industrial-green text-white rounded-lg flex items-center justify-center hover:bg-industrial-green-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                            Or call us at <a href="tel:9704234869" className="text-industrial-green font-semibold">9704234869</a>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
