import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Phone, User, Send, Loader2 } from 'lucide-react';
import { useCallRouting } from '../hooks/useCallRouting';

interface ChatMessage {
    id: string;
    role: 'user' | 'bot';
    content: string;
}

export default function ContactWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([{
        id: 'welcome',
        role: 'bot',
        content: "Hello! I'm your National Auto Assistant. How can I help you today? (Need to book an appointment? Just call us!)" // Added context
    }]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { phoneNumber, phoneHref, deskLabel } = useCallRouting();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();

        if (!inputValue.trim()) return;

        const newUserMessage: ChatMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: inputValue.trim(),
        };

        setMessages((prev) => [...prev, newUserMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [...messages, newUserMessage].map(msg => ({
                        role: msg.role,
                        content: msg.content
                    }))
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            const newBotMessage: ChatMessage = {
                id: (Date.now() + 1).toString(),
                role: 'bot',
                content: data.message,
            };

            setMessages((prev) => [...prev, newBotMessage]);

        } catch (error) {
            console.error("Chat error:", error);
            const errorMessage: ChatMessage = {
                id: (Date.now() + 1).toString(),
                role: 'bot',
                content: "I'm sorry, I'm having trouble connecting to the network right now. Please call us directly at " + phoneNumber + " for immediate assistance.",
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 sm:mb-6 w-[calc(100vw-2rem)] sm:w-[420px] max-w-[420px] glass rounded-[2.5rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[600px] max-h-[85vh]"
                    >
                        {/* Header */}
                        <div className="bg-brand-blue p-6 pb-6 shrink-0 z-10 custom-shadow-bottom">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-white font-display font-bold text-2xl tracking-tight">National AI Assistant</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                      <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
                                      <p className="text-white/70 text-xs font-bold tracking-widest uppercase">Online & Ready</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <a
                                href={phoneHref}
                                className="flex flex-col items-center justify-center gap-1 w-full bg-white py-3 rounded-2xl text-brand-blue font-bold shadow-xl shadow-black/10 hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                                <div className="flex items-center gap-2">
                                    <Phone className="w-5 h-5 fill-brand-blue text-brand-blue" />
                                    <span>{phoneNumber}</span>
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-slate-500">{deskLabel}</span>
                            </a>
                        </div>

                        {/* Chat Context Auto-scroll view */}
                        <div className="flex-1 p-6 bg-slate-900/50 overflow-y-auto scrollbar-hide flex flex-col gap-6">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    {msg.role === 'bot' && (
                                        <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0">
                                            <MessageSquare className="w-5 h-5 text-brand-blue" />
                                        </div>
                                    )}
                                    <div className={`p-4 rounded-2xl border text-sm font-medium leading-relaxed max-w-[85%] ${
                                        msg.role === 'user'
                                            ? 'glass border-brand-blue/20 bg-brand-blue/5 text-white rounded-tr-none'
                                            : 'glass-light border-white/5 text-slate-300 rounded-tl-none'
                                    }`}>
                                        <p className="whitespace-pre-wrap">{msg.content}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex gap-3"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0">
                                        <Loader2 className="w-5 h-5 text-brand-blue animate-spin" />
                                    </div>
                                    <div className="glass-light p-4 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-brand-blue/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-2 h-2 rounded-full bg-brand-blue/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-2 h-2 rounded-full bg-brand-blue/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-slate-900 border-t border-white/10 shrink-0">
                            <form
                                onSubmit={handleSendMessage}
                                className="relative flex items-center"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full bg-slate-800 text-white placeholder:text-slate-500 rounded-2xl px-5 py-4 pr-14 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 border border-white/5 transition-all text-sm"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isLoading}
                                    className="absolute right-2 p-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-xl transition-colors disabled:opacity-50 disabled:hover:bg-brand-blue"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                            <p className="text-[10px] text-center text-slate-500 mt-3 font-bold uppercase tracking-widest">Powered by Official Client AI</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full sm:rounded-[1.5rem] flex items-center justify-center shadow-2xl transition-all duration-500 relative ${isOpen ? 'bg-slate-800 rotate-90 border border-white/10' : 'bg-brand-blue shadow-brand-blue/20 border border-brand-blue/20'
                    }`}
            >
                {isOpen ? (
                    <X className="w-8 h-8 text-white" />
                ) : (
                    <>
                        <MessageSquare className="w-8 h-8 text-white" />
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-red border-2 border-slate-900"></span>
                        </span>
                    </>
                )}
            </motion.button>
        </div>
    );
}
