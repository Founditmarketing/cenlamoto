import React from 'react';
import { motion } from 'motion/react';
import { Shield, Wrench, ChevronRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';

export default function ElectricalDiagnostics() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero */}
            <section className="relative py-32 bg-slate-900 border-b border-brand-blue/20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1579692483868-6c860c2941fa?auto=format&fit=crop&q=80&w=2000"
                        alt="Electrical Diagnostics"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/80 to-slate-900" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
                            Electrical & <br />
                            <span className="text-brand-blue text-glow-red italic">Diagnostics.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                            Resolving parasitic draws, complex wiring harnesses, and control module failures with precision OEM scanners.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="glass p-8 rounded-[2rem] border border-brand-blue/20 hover:border-brand-blue/50 transition-colors group">
                            <Activity className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Module Programming</h3>
                            <p className="text-slate-400 mb-6">Modern vehicles are computer networks. We flash, program, and initialize Powertrain Control Modules (PCM) and Body Control Modules (BCM) to exact factory calibrations.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <Shield className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Parasitic Draw Testing</h3>
                            <p className="text-slate-400 mb-6">Battery dying overnight? We utilize thermal imaging and amp-clamp diagnostics to isolate and repair parasitic voltage drains within the vehicle's sleep cycles.</p>
                        </div>

                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
