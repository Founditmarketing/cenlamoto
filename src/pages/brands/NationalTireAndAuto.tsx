import React from 'react';
import { motion } from 'motion/react';
import { Disc, Settings, ShieldCheck, Wrench, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';

export default function NationalTireAndAuto() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero */}
            <section className="relative py-32 bg-slate-900 border-b border-brand-blue/20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1600705432881-87ab7492c64b?auto=format&fit=crop&q=80&w=2000"
                        alt="National Tire and Auto"
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
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-brand-blue text-xs font-bold mb-6 uppercase tracking-widest border border-brand-blue/20"
                        >
                            <Disc className="w-3 h-3" />
                            Elite Mechanics
                        </motion.div>
                        <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
                            National Tire <br />
                            <span className="text-brand-blue text-glow-red italic">& Auto.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                            Central Louisiana's definitive hub for retail and heavy-duty tires, advanced alignments, and master-level diagnostics.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 line-clamp-2">

                        <div className="glass p-8 rounded-[2rem] border border-brand-blue/20 hover:border-brand-blue/50 transition-colors group">
                            <Disc className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Complete Tire Command</h3>
                            <p className="text-slate-400 mb-6">From low-profile sports treads to 18-wheeler commercial rubber. We stock the state's most extensive inventory and mount with touchless precision.</p>
                            <Link to="/services/tires-alignment" className="text-brand-blue font-bold tracking-widest uppercase text-xs hover:underline">
                                View Tire Services
                            </Link>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <Settings className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Factory Maintenance</h3>
                            <p className="text-slate-400 mb-6">Synthetic oil changes, fluid flushes, and scheduled factory 30k/60k/90k services to keep your powertrain running under optimal tolerance.</p>
                            <Link to="/services/preventative-maintenance" className="text-brand-blue font-bold tracking-widest uppercase text-xs hover:underline">
                                View Maintenance
                            </Link>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group md:col-span-2">
                            <Wrench className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Deep Diagnostics & Repair</h3>
                            <p className="text-slate-400 mb-6 max-w-3xl">Check engine light protocol, suspension overhauls, and advanced electrical analysis. If it runs on gasoline or diesel, we possess the tooling and expertise to restore it.</p>
                            <Link to="/services/advanced-auto-repair" className="text-brand-blue font-bold tracking-widest uppercase text-xs hover:underline">
                                Request Diagnostics
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
