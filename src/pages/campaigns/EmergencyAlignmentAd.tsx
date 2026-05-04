import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmergencyAlignmentAd() {
    return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass p-8 md:p-12 rounded-[2rem] border border-white/10 text-center"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/20 mb-6">
                        <ShieldCheck className="w-8 h-8 text-brand-blue" />
                    </div>
                    <h1 className="text-5xl font-display font-bold mb-6 text-white tracking-tight">
                        Emergency Alignment & Tire Service in Pineville
                    </h1>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        You searched for an immediate alignment. National Automotive Group is the only 30,000 sq. ft. facility with rapid-dispatch tire bays ready for you right now.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
                        <div className="glass-light p-6 rounded-xl flex gap-3">
                            <CheckCircle className="text-brand-blue w-6 h-6 shrink-0" />
                            <p className="text-sm">Instant Drive-In Service</p>
                        </div>
                        <div className="glass-light p-6 rounded-xl flex gap-3">
                            <CheckCircle className="text-brand-blue w-6 h-6 shrink-0" />
                            <p className="text-sm">State-of-the-Art Lasers</p>
                        </div>
                        <div className="glass-light p-6 rounded-xl flex gap-3">
                            <CheckCircle className="text-brand-blue w-6 h-6 shrink-0" />
                            <p className="text-sm">Cheapest Bulk Tire Prices</p>
                        </div>
                    </div>

                    <a
                        href="tel:3184422003"
                        className="inline-flex items-center gap-3 bg-brand-blue text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-brand-blue-dark transition-colors shadow-2xl"
                    >
                        <Phone className="w-6 h-6" />
                        Call The Tire Desk Now
                    </a>

                    <div className="mt-8 text-slate-500 text-sm">
                        Or, <Link to="/" className="text-brand-blue underline">browse our standard homepage</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
