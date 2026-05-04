import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ShieldCheck, Wrench, ChevronRight, Truck, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';

export default function Leesville() {
    return (
        <div className="pt-24 min-h-screen bg-slate-950">
            <section className="relative py-32 bg-slate-900 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&q=80&w=2000"
                        alt="Leesville LA Auto Repair"
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
                            <MapPin className="w-4 h-4" /> Vernon Parish Authority
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1]">
                            Automotive Excellence <br />
                            <span className="text-brand-blue italic">in Leesville.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
                            Whether you're commuting to Fort Johnson, running heavy trucks down Hwy 171, or hauling campers out to Toledo Bend, we build engines and suspensions that handle Vernon Parish abuse.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl shadow-brand-blue/30"
                        >
                            Get A Quote <ChevronRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-slate-900 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-4xl font-display font-bold text-white mb-4">Built for Heavy Duty.</h2>
                        <p className="text-slate-400 text-lg">From military bases to lakeside recreation, we know what your truck needs.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <Truck className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Hwy 171 Mileage</h3>
                            <p className="text-slate-400 mb-6">Running up and down Hwy 171 piles on the miles fast. Preventative maintenance—like 60k/90k mile flushes and brake pad replacement—keeps you from getting stranded halfway to DeRidder.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-brand-blue/20 shadow-xl shadow-brand-blue/5 hover:border-brand-blue/50 transition-colors group">
                            <ShieldCheck className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Fort Johnson Duty</h3>
                            <p className="text-slate-400 mb-6">We honor the soldiers and contractors making the daily drive to Fort Johnson (Polk). Ask about our comprehensive AC checks and transmission flush services to survive the summer heat.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <Compass className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Toledo Bend Towing</h3>
                            <p className="text-slate-400 mb-6">Hauling boats across the Vernon Parish hills destroys weak transmissions. We can remanufacture your transmission and install heavy-duty coolers so you never overheat.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
