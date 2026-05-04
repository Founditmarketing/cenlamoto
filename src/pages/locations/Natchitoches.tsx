import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ShieldCheck, Wrench, ChevronRight, GraduationCap, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';

export default function Natchitoches() {
    return (
        <div className="pt-24 min-h-screen bg-slate-950">
            <section className="relative py-32 bg-slate-900 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1542365851-4043232c7fbd?auto=format&fit=crop&q=80&w=2000"
                        alt="Natchitoches Auto Repair"
                        className="w-full h-full object-cover opacity-20 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/40" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full glass-light border border-white/10 text-brand-blue text-sm font-bold mb-8 mx-auto tracking-widest uppercase shadow-lg">
                            <MapPin className="w-4 h-4" /> Natchitoches Parish's Best
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1]">
                            Honest Service for <br />
                            <span className="text-brand-blue italic">Natchitoches.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
                            Between the brick roads of Front Street, NSU students, and highway commutes down Hwy 1 North, your car takes a beating here. We provide the dealership-level diagnostics and alignments you need.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl shadow-brand-blue/30"
                        >
                            Book Today <ChevronRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-slate-900 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-4xl font-display font-bold text-white mb-4">Navigating the Oldest City.</h2>
                        <p className="text-slate-400 text-lg">Historic roads create modern wear and tear. Here's what we fix.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <Wrench className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Front Street Bricks</h3>
                            <p className="text-slate-400 mb-6">Those gorgeous historic brick roads rattle suspensions constantly. We tighten tie-rod ends, replace worn shocks, and maintain your ball joints so those bumps don't turn into major damage.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-brand-blue/20 shadow-xl shadow-brand-blue/5 hover:border-brand-blue/50 transition-colors group">
                            <GraduationCap className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">NSU Student Commutes</h3>
                            <p className="text-slate-400 mb-6">Running back and forth to Northwestern State University means unpredictable miles. We run deep-dive OBD2 engine diagnostics to keep older student vehicles out of the ditch and on track.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <PartyPopper className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Festival Traffic & AC</h3>
                            <p className="text-slate-400 mb-6">Stuck in traffic trying to get to the Meat Pie Festival or Christmas Festival? Idling destroys a weak cooling system. Let us flush your radiator and rebuild your A/C compressor.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
