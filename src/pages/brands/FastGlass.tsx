import React from 'react';
import { motion } from 'motion/react';
import { Target, ScanLine, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';

export default function FastGlass() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero */}
            <section className="relative py-32 bg-slate-900 border-b border-brand-blue/20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.15),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1614777592476-8096cf94e9f7?auto=format&fit=crop&q=80&w=2000"
                        alt="Fast Glass - Auto Glass and Tint"
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
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold mb-6 uppercase tracking-widest border border-emerald-500/20"
                        >
                            <Target className="w-3 h-3" />
                            Optics & Shielding
                        </motion.div>
                        <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
                            Fast <br />
                            <span className="text-emerald-500 italic drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">Glass.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                            Expert windshield replacement, precision rock chip repair, and premium solar-rejection window tinting for ultimate climate control.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="glass p-8 rounded-[2rem] border border-emerald-500/20 hover:border-emerald-500/50 transition-colors group">
                            <Shield className="w-10 h-10 text-emerald-500 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Windshield Replacement</h3>
                            <p className="text-slate-400 mb-6">We utilize structural, rapid-cure urethane that returns your vehicle to safe operating standards within hours. Zero compromise on structural integrity.</p>
                            <Link to="/services/glass-calibration" className="text-emerald-500 font-bold tracking-widest uppercase text-xs hover:underline">
                                Request Replacement
                            </Link>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-emerald-500/30 transition-colors group">
                            <ScanLine className="w-10 h-10 text-emerald-500 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">ADAS Camera Calibration</h3>
                            <p className="text-slate-400 mb-6">Modern windshields house critical safety cameras. We utilize Opti-Aim matrix boards to recalibrate lane departure and collision avoidance systems to exact OEM spec.</p>
                            <Link to="/guides/the-ultimate-guide-to-adas-calibration" className="text-emerald-500 font-bold tracking-widest uppercase text-xs hover:underline">
                                Calibration Protocol
                            </Link>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-emerald-500/30 transition-colors group md:col-span-2">
                            <Sun className="w-10 h-10 text-emerald-500 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Solar Control Window Tinting</h3>
                            <p className="text-slate-400 mb-6 max-w-3xl">Ceramic-infused films that block 99% of UV rays and dramatically reduce cabin temperatures. Precision-cut patterns for zero gaps and a factory-finish appearance.</p>
                            <Link to="/services/glass-calibration" className="text-emerald-500 font-bold tracking-widest uppercase text-xs hover:underline">
                                Explore Tint Packages
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
