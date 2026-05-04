import React from 'react';
import { motion } from 'motion/react';
import { Settings, Shield, Wrench, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';

export default function WheelAlignment() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero */}
            <section className="relative py-32 bg-slate-900 border-b border-brand-blue/20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1574625299834-58e11a3dbdf8?auto=format&fit=crop&q=80&w=2000"
                        alt="Wheel Alignment & Road Force Balancing"
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
                            Laser Alignment & <br />
                            <span className="text-brand-blue text-glow-red italic">Road Force Balance.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                            Hunter Engineering precision for dead-center steering and zero high-speed vibrations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="glass p-8 rounded-[2rem] border border-brand-blue/20 hover:border-brand-blue/50 transition-colors group">
                            <Circle className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Hunter 4-Wheel Alignment</h3>
                            <p className="text-slate-400 mb-6">Even microscopic deviations in camber, caster, or toe rapidly destroy expensive tires. Our optical laser rack dials your suspension geometry back to zero-tolerance factory specs.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <Settings className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Road Force Balancing</h3>
                            <p className="text-slate-400 mb-6">Standard spin balancing misses structural tire defects. We simulate 1,200 lbs of road pressure against the tread to detect hidden heavy spots causing steering wheel shimmy at 70mph.</p>
                        </div>

                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
