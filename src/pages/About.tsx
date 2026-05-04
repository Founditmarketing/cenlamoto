import React from 'react';
import { motion } from 'motion/react';
import { History, Target, Users } from 'lucide-react';
import Contact from '../components/Contact';
import VideoSection from '../components/VideoSection';

export default function About() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="relative py-32 bg-slate-900 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
                            The <span className="text-brand-blue text-glow-red italic">National</span> Story
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            Decades of mastery. A commitment to institutional-grade service. Deep roots in Central Louisiana.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-blue rotate-3 rounded-3xl opacity-20"></div>
                            <img src="https://images.unsplash.com/photo-1549643444-2f22b822af4f?auto=format&fit=crop&q=80&w=1000" alt="Facility" className="relative z-10 rounded-3xl object-cover h-[500px] w-full border border-white/10 shadow-2xl" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-display font-bold mb-6 flex items-center gap-4">
                                <History className="text-brand-blue w-10 h-10" /> Legacy of Excellence
                            </h2>
                            <div className="space-y-6 text-lg text-slate-300">
                                <p>
                                    National Automotive Group wasn't built overnight. It's the culmination of years of relentless dedication to the craft of automotive mechanics. What began as a local shop has evolved into Central Louisiana's premier automotive hub.
                                </p>
                                <p>
                                    We realized early on that modern vehicles require specialized, high-end infrastructure. We unified tire alignment, complex internal engine repair, and advanced glass ADAS calibration under one roof to create a frictionless experience for our clients.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mt-12">
                                <div className="glass p-6 rounded-2xl border border-white/10">
                                    <Target className="w-8 h-8 text-brand-blue mb-4" />
                                    <h4 className="text-white font-bold text-xl mb-2">Our Mission</h4>
                                    <p className="text-sm text-slate-400">To eradicate automotive anxiety through transparent, objective, and master-level diagnostics and repair.</p>
                                </div>
                                <div className="glass p-6 rounded-2xl border border-white/10">
                                    <Users className="w-8 h-8 text-brand-blue mb-4" />
                                    <h4 className="text-white font-bold text-xl mb-2">Our Community</h4>
                                    <p className="text-sm text-slate-400">We are proudly locally owned and fiercely dedicated to keeping Central Louisiana's fleet moving.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <VideoSection />
            <Contact />
        </div>
    );
}
