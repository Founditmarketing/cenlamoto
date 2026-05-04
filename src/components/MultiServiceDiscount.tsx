import React from 'react';
import { motion } from 'motion/react';
import { Tag, ArrowRight, ShieldCheck, Wrench, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCallRouting } from '../hooks/useCallRouting';

export default function MultiServiceDiscount() {
    const { phoneHref } = useCallRouting();
    return (
        <section className="py-24 bg-brand-blue relative overflow-hidden">
            {/* Background Textures */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
            <div className="absolute -left-40 top-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="glass bg-white/5 border border-white/20 p-8 md:p-16 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
                    {/* Inner decorative gradients */}
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-500/20 blur-[80px] rounded-full" />

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-8 uppercase tracking-widest backdrop-blur-md">
                                <Tag className="w-4 h-4" />
                                Bundle & Save
                            </div>

                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
                                The Power of the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 drop-shadow-lg">One-Stop Shop.</span>
                            </h2>

                            <p className="text-xl text-white/90 mb-8 leading-relaxed font-medium">
                                Why pay retail at three different places? Buy a set of tires and get a discount on your windshield replacement. Need an alignment and an oil change? We bundle those too.
                            </p>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <a
                                    href={phoneHref}
                                    className="group inline-flex items-center gap-3 bg-white text-brand-blue hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl"
                                >
                                    Get a Bundled Quote
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-6 rounded-3xl group hover:bg-slate-900/70 transition-colors">
                                <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
                                <h3 className="text-white font-bold text-xl mb-2">Tires + Glass</h3>
                                <p className="text-slate-300 text-sm">Replace your windshield while we mount and balance your new set of 4.</p>
                            </div>
                            <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-6 rounded-3xl group hover:bg-slate-900/70 transition-colors sm:translate-y-8">
                                <Wrench className="w-8 h-8 text-brand-blue mb-4" />
                                <h3 className="text-white font-bold text-xl mb-2">Repair + Lube</h3>
                                <p className="text-slate-300 text-sm">Combine major mechanical repairs with routine preventative maintenance.</p>
                            </div>
                            <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-6 rounded-3xl group hover:bg-slate-900/70 transition-colors sm:-translate-y-8">
                                <Settings className="w-8 h-8 text-amber-400 mb-4" />
                                <h3 className="text-white font-bold text-xl mb-2">Fleet Bundles</h3>
                                <p className="text-slate-300 text-sm">Volume pricing for commercial vehicles needing multi-point DOT inspections and repairs.</p>
                            </div>
                            <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-6 rounded-3xl group hover:bg-slate-900/70 transition-colors">
                                <div className="text-3xl font-display font-bold text-brand-blue mb-2 text-glow-red">15%</div>
                                <h3 className="text-white font-bold text-xl mb-2">Average Savings</h3>
                                <p className="text-slate-300 text-sm">Customers save significantly by combining services under one roof.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
