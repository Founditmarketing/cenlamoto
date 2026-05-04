import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Activity, Database, Cable, Target, Check } from 'lucide-react';
import Contact from '../components/Contact';

export default function CheckEngine() {
    return (
        <div className="pt-24 min-h-screen bg-slate-950">
            {/* Cinematic Hero */}
            <section className="relative py-32 bg-slate-900 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.15),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1628172352865-c725ea1223fe?auto=format&fit=crop&q=80&w=2000"
                        alt="Check Engine Diagnostics"
                        className="w-full h-full object-cover opacity-20 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-white/10 text-amber-500 text-sm font-bold mb-8 tracking-widest uppercase shadow-lg shadow-amber-500/10">
                            <AlertTriangle className="w-4 h-4" /> Advanced Diagnostics
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1]">
                            OBD-II Deep <br />
                            <span className="text-amber-500 italic">Interrogation.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
                            We don't just clear codes and hope for the best. We isolate the exact electrical, mechanical, or sensor-level fault causing the check engine light to protect your engine from catastrophic failure.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Detailed Grid */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute -right-40 top-40 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-4xl font-display font-bold text-white mb-6">Diagnostic Technologies</h2>
                        <p className="text-slate-400 text-lg">We utilize state-of-the-art diagnostic equipment to interface directly with your vehicle's computer networks.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-10 rounded-[2.5rem] border border-amber-500/20 hover:border-amber-500/50 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />
                            <div className="relative z-10">
                                <div className="p-4 bg-slate-900 rounded-2xl w-fit mb-8 border border-white/10 group-hover:scale-110 transition-transform shadow-xl">
                                    <Database className="w-8 h-8 text-amber-500" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">CAN-Bus & ECU Comms</h3>
                                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                                    Utilizing dealership-level scan tools, we pull live data streams from your Engine Control Unit to monitor fuel trims, O2 sensor voltage, and misfire counts in real-time.
                                </p>
                                <ul className="space-y-3">
                                    {['Live Data Stream Analysis', 'Freeze Frame Data Extraction', 'Network Communication Testing'].map((item, i) =>(
                                        <li key={i} className="flex items-center gap-3 text-slate-400"><Check className="w-4 h-4 text-amber-500" /> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass p-10 rounded-[2.5rem] border border-white/10 hover:border-amber-500/30 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent" />
                            <div className="relative z-10">
                                <div className="p-4 bg-slate-900 rounded-2xl w-fit mb-8 border border-white/10 group-hover:scale-110 transition-transform shadow-xl">
                                    <Cable className="w-8 h-8 text-amber-500" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">Electrical Circuit Testing</h3>
                                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                                    Many "failed sensors" are actually caused by broken wires, corrosion, or bad grounds. We meticulously perform pin-point electrical testing before replacing expensive components to save you money.
                                </p>
                                <ul className="space-y-3">
                                    {['Oscilloscope Signal Testing', 'Voltage Drop Analysis', 'Wiring Harness Inspection'].map((item, i) =>(
                                        <li key={i} className="flex items-center gap-3 text-slate-400"><Check className="w-4 h-4 text-amber-500" /> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

             {/* Symptoms Section */}
             <section className="py-24 bg-slate-900 border-t border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Flashing vs Solid <br />
                                <span className="text-amber-500">Check Engine Light.</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-12">
                                Not all check engine lights mean the same thing. Understanding the difference is critical to protecting your engine from permanent damage.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="glass p-6 rounded-2xl border border-amber-500/30 flex gap-4 items-start relative overflow-hidden">
                                    <div className="absolute inset-0 bg-red-500/5 animate-pulse" />
                                    <div className="mt-1 bg-red-500/20 p-2 rounded-full relative z-10"><AlertTriangle className="w-5 h-5 text-red-500 animate-bounce" /></div>
                                    <div className="relative z-10">
                                        <h4 className="text-white font-bold text-xl mb-2 text-red-400">Flashing Light (PULL OVER)</h4>
                                        <p className="text-slate-300">A flashing check engine light indicates a severe engine misfire that is dumping raw fuel into the exhaust. <strong>Do not drive the vehicle.</strong> Continuing to drive will melt the catalytic converter and pose a fire hazard.</p>
                                    </div>
                                </div>

                                <div className="glass p-6 rounded-2xl border border-white/5 flex gap-4 items-start">
                                    <div className="mt-1 bg-amber-500/20 p-2 rounded-full"><Target className="w-5 h-5 text-amber-500" /></div>
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-2 text-amber-400">Solid Light (SCHEDULE SERVICE)</h4>
                                        <p className="text-slate-400">A solid light means the vehicle's computer has detected an emissions or sensor fault. It is safe to drive home or to the shop, but do not ignore it. Running lean or rich over time can cause internal engine damage.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full min-h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                             <img src="/major_mechanics.png" alt="Diagnostic Scan" className="absolute inset-0 w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-amber-900/20 mix-blend-overlay" />
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
