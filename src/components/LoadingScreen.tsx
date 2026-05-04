import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gauge } from 'lucide-react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);

    const messages = [
        "Calibrating systems...",
        "Warming up engines...",
        "Inspecting tire pressure...",
        "Syncing fleet logistics...",
        "Polishing windshields...",
        "Final diagnostic check..."
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + Math.random() * 8; // Average 4 per 100ms = 25 intervals = 2.5s
            });
        }, 100);

        const messageTimer = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 500);

        return () => {
            clearInterval(timer);
            clearInterval(messageTimer);
        };
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            const timeout = setTimeout(onComplete, 100);
            return () => clearTimeout(timeout);
        }
    }, [progress, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[1000] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Logo Container */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12 relative"
                >
                    <img
                        src="/brands/national_automotive_group_logo.png"
                        alt="National Automotive Group"
                        className="h-28 md:h-36 w-auto max-w-[90vw] object-contain relative z-10"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-brand-blue/20 blur-2xl rounded-full"
                    />
                </motion.div>

                {/* Loading Progress Wrapper */}
                <div className="w-64 space-y-4">
                    <div className="flex justify-between items-end mb-2">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={messageIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]"
                            >
                                {messages[messageIndex]}
                            </motion.p>
                        </AnimatePresence>
                        <span className="text-brand-blue font-display font-bold text-sm tracking-tighter">
                            {Math.round(progress)}%
                        </span>
                    </div>

                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-brand-blue to-transparent w-2/3"
                            animate={{ x: ['150%', '-150%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="h-full bg-brand-blue relative z-10"
                            style={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-8 opacity-20">
                        <Gauge className="w-4 h-4 text-slate-500" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Speed & Precision</span>
                    </div>
                </div>
            </div>

            {/* Industrial Aesthetic Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="h-px w-full bg-white absolute top-1/4" />
                <div className="h-px w-full bg-white absolute top-2/4" />
                <div className="h-px w-full bg-white absolute top-3/4" />
                <div className="w-px h-full bg-white absolute left-1/4" />
                <div className="w-px h-full bg-white absolute left-2/4" />
                <div className="w-px h-full bg-white absolute left-3/4" />
            </div>
        </motion.div>
    );
}
