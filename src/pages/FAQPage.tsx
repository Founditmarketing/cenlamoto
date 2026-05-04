import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, RefreshCcw, Shield } from 'lucide-react';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

export default function FAQPage() {
    return (
        <div className="pt-24 min-h-screen">
            <section className="relative py-24 bg-slate-900 border-b border-brand-blue/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full glass-light border border-white/10 text-brand-blue text-sm font-bold mb-8 mx-auto">
                            <HelpCircle className="w-4 h-4" /> Comprehensive Guidance
                        </div>
                        <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
                            Knowledge <span className="text-brand-blue text-glow-red italic">Base.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                            Transparent answers regarding our institutional warranties, insurance handling, and service process.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="py-24 bg-slate-900">
                <FAQ />
            </div>

            <section className="py-24 bg-slate-900 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass p-8 rounded-[2rem] border border-brand-blue/20 shadow-2xl shadow-brand-blue/5">
                            <Shield className="w-16 h-16 text-brand-blue mb-6" />
                            <h3 className="text-3xl font-bold font-display text-white mb-4">The National Warranty</h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                We stand firmly behind our master technicians. Most major repairs and replacements are covered by a minimum 12-month / 12,000-mile nationwide warranty. We use OEM or equivalent tier-1 parts to ensure the longevity of every fix.
                            </p>
                        </div>
                        <div className="glass p-8 rounded-[2rem] border border-white/10">
                            <RefreshCcw className="w-16 h-16 text-brand-blue mb-6" />
                            <h3 className="text-3xl font-bold font-display text-white mb-4">Insurance Fleet Processing</h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                National Automotive Group is an approved repair facility for major insurance carriers. If you are a fleet manager or an individual dealing with an accident claim, our administrative team will handle the supplemental paperwork directly with your adjuster.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
