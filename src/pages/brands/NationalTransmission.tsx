import React from 'react';
import { motion } from 'motion/react';
import { Settings, Cog, Wrench, CircleDashed } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';

export default function NationalTransmission() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero */}
            <section className="relative py-32 bg-slate-900 border-b border-brand-blue/20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.15),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1632823471565-1ec2a744a478?auto=format&fit=crop&q=80&w=2000"
                        alt="National Transmission"
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
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold mb-6 uppercase tracking-widest border border-purple-500/20"
                        >
                            <Cog className="w-3 h-3" />
                            Drivetrain Specialists
                        </motion.div>
                        <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
                            National <br />
                            <span className="text-purple-500 italic drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]">Transmission.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                            The regional authority on complex transmission overhauls, torque converter diagnostics, and driveline restoration.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="glass p-8 rounded-[2rem] border border-purple-500/20 hover:border-purple-500/50 transition-colors group">
                            <Cog className="w-10 h-10 text-purple-500 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Complete Rebuilds</h3>
                            <p className="text-slate-400 mb-6">We don't just replace—we rebuild. Our technicians tear down your transmission to the casing, replacing worn bands, clutches, and seals with upgraded components.</p>
                            <Link to="/services/transmission-rebuild" className="text-purple-400 font-bold tracking-widest uppercase text-xs hover:underline">
                                Explore Rebuilds
                            </Link>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-purple-500/30 transition-colors group">
                            <CircleDashed className="w-10 h-10 text-purple-500 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Fluid & Filter Service</h3>
                            <p className="text-slate-400 mb-6">Extend the life of your gearbox. We flush contaminated fluid from the torque converter and cooler lines, installing fresh synthetic fluid and brand-new filters.</p>
                            <Link to="/services/transmission-flush" className="text-purple-400 font-bold tracking-widest uppercase text-xs hover:underline">
                                Request Flush Service
                            </Link>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-purple-500/30 transition-colors group md:col-span-2">
                            <Wrench className="w-10 h-10 text-purple-500 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Diagnostics & Clutch Repair</h3>
                            <p className="text-slate-400 mb-6 max-w-3xl">Slipping gears, delayed engagement, or harsh shifting? We connect deep-level scanners to your TCM to identify solenoid faults before recommending a teardown. Manual transmission clutch replacements are also handled entirely in-house.</p>
                            <a href="#contact" className="text-purple-400 font-bold tracking-widest uppercase text-xs hover:underline">
                                Schedule Diagnostics
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
