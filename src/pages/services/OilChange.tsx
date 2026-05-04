import React from 'react';
import { motion } from 'motion/react';
import { Settings, Shield, Wrench, Battery } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';

export default function OilChange() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero */}
            <section className="relative py-32 bg-slate-900 border-b border-brand-blue/20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1632733711679-529326f6db12?auto=format&fit=crop&q=80&w=2000"
                        alt="Oil Change & Lube Services"
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
                            Synthetic Oil & <br />
                            <span className="text-brand-blue text-glow-red italic">Lube Services.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                            Premium viscosity defense against thermal breakdown and catastrophic friction.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="glass p-8 rounded-[2rem] border border-brand-blue/20 hover:border-brand-blue/50 transition-colors group">
                            <Shield className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Full Synthetic Upgrades</h3>
                            <p className="text-slate-400 mb-6">Modern GDI and turbocharged engines mandate synthetic protection to prevent oil coking. We utilize exact-weight synthetic blends formulated specifically for high-heat shear resistance.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <Wrench className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">High-Mileage Additives</h3>
                            <p className="text-slate-400 mb-6">For powertrains exceeding 75k miles, we employ high-mileage formulations containing seal conditioners and advanced detergents to rejuvenate O-rings and prevent seeping.</p>
                        </div>

                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
