import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ShieldCheck, Wrench, ChevronRight, Star, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';

export default function Pineville() {
    return (
        <div className="pt-24 min-h-screen bg-slate-950">
            {/* Hyper-Local Hero */}
            <section className="relative py-32 bg-slate-900 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=2000"
                        alt="Pineville Auto Repair"
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
                            <MapPin className="w-4 h-4" /> Pineville's Elite Mechanics
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1]">
                            Your Neighbors in <br />
                            <span className="text-brand-blue italic">Pineville, LA.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
                            Sitting right off Hwy 165, we handle everything from Louisiana Christian University student beaters to the heavy-duty fleet trucks crossing the Red River into Alexandria. Honest auto repair on your side of the water.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl shadow-brand-blue/30"
                        >
                            Schedule Service Now <ChevronRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Local Context Grid */}
            <section className="py-24 bg-slate-900 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-4xl font-display font-bold text-white mb-4">Mastering Highway 165 Commutes.</h2>
                        <p className="text-slate-400 text-lg">Daily driving over the Curtis-Coleman Bridge or up to Camp Beauregard wears down suspensions fast.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <Wrench className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Bridge Traffic Brakes</h3>
                            <p className="text-slate-400 mb-6">Stop-and-go traffic heading across the Red River eats brake pads alive. We use high-carbon rotors and ceramic pads to eliminate squealing and give you confident stopping power.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-brand-blue/20 shadow-xl shadow-brand-blue/5 hover:border-brand-blue/50 transition-colors group">
                            <Target className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">LCU Student Specials</h3>
                            <p className="text-slate-400 mb-6">Got a kid at Louisiana Christian University? Send them our way for honest diagnostic checks, oil changes, and tire rotations so you know they check out mechanically safe.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <ShieldCheck className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Buhlow Lake Towing</h3>
                            <p className="text-slate-400 mb-6">If you're launching boats down at Lake Buhlow, your transmission cooler and rear suspension take the heaviest load. We can upgrade your towing setup today.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
