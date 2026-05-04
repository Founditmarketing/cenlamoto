import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Phone, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FleetMaintenanceAd() {
    return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass p-8 md:p-14 rounded-[2.5rem] border border-white/10"
                >
                    <div className="flex gap-4 mb-6">
                        <ShieldCheck className="w-10 h-10 text-emerald-500" />
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                            Looking for Commercial Fleet Service?
                        </h1>
                    </div>
                    <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl">
                        National Automotive Group is the only master hub with the bay capacity, parts sourcing speed,
                        and DOT inspection authority to keep your Central LA business fleet moving without multi-shop lag time.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-10 text-left">
                        <div className="space-y-4 border-l-2 border-brand-blue pl-4">
                            <h3 className="font-bold text-lg text-white">Dedicated Fleet Pricing</h3>
                            <p className="text-sm text-slate-500">Volume savings on windshields, 18-wheeler tires, and maintenance.</p>
                        </div>
                        <div className="space-y-4 border-l-2 border-brand-blue pl-4">
                            <h3 className="font-bold text-lg text-white">Priority Bay Routing</h3>
                            <p className="text-sm text-slate-500">Jump the line. Commercial assets shouldn't wait.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <a
                            href="tel:3184422003"
                            className="flex-1 inline-flex justify-center items-center gap-3 bg-brand-blue text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue-dark transition-all shadow-2xl"
                        >
                            <Phone className="w-6 h-6" />
                            Dispatch Us
                        </a>
                        <Link to="/fleet" className="flex-1 inline-flex justify-center items-center gap-3 glass text-white py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all border border-brand-blue/30">
                            <Handshake className="w-6 h-6" />
                            Read The Prospectus
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
