import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Wrench, Briefcase, ArrowRight } from 'lucide-react';
import Contact from '../components/Contact';

export default function Careers() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="relative py-32 bg-slate-900 border-b border-brand-blue/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
                            Join the <span className="text-brand-blue text-glow-red italic">Masters</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            We are actively hunting for elite talent. If you are an ASE Certified Technician or a driven service advisor, your career elevation starts here.
                        </p>
                        <div className="mt-10">
                            <a href="#apply" className="inline-flex items-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-brand-blue/20">
                                View Open Positions <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold">Why <span className="text-brand-blue">National?</span></h2>
                        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">We invest heavily in our infrastructure, ensuring our technicians have access to the absolute best tools and a clean, highly optimized environment.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors">
                            <Trophy className="w-12 h-12 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Top-Tier Compensation</h3>
                            <p className="text-slate-400">Competitive pay structures designed to reward efficiency, accuracy, and mastery. We want the best, and we pay for the best.</p>
                        </div>
                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors">
                            <Wrench className="w-12 h-12 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Elite Tooling</h3>
                            <p className="text-slate-400">Work in a facility outfitted with Hunter Elite alignment racks, massive heavy-duty lifts, and the latest diagnostic scanners.</p>
                        </div>
                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors">
                            <Briefcase className="w-12 h-12 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Career Velocity</h3>
                            <p className="text-slate-400">We sponsor continuing education, ASE certification renewals, and specialized systems training to keep you at the bleeding edge.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div id="apply">
                <Contact />
            </div>
        </div>
    );
}
