import React from 'react';
import { motion } from 'motion/react';
import { Wrench, Zap, CheckCircle2, AlertTriangle, ShieldCheck, Clock, Check } from 'lucide-react';
import Contact from '../components/Contact';

export default function AutoRepair() {
    return (
        <div className="pt-24 min-h-screen bg-slate-950">
            {/* Cinematic Hero */}
            <section className="relative py-32 bg-slate-900 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.15),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1619642751056-31db591ced6b?auto=format&fit=crop&q=80&w=2000"
                        alt="Advanced Engine Diagnostics"
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-white/10 text-brand-blue text-sm font-bold mb-8 tracking-widest uppercase shadow-lg shadow-brand-blue/10">
                            <Wrench className="w-4 h-4" /> Comprehensive Auto Care
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1]">
                            Advanced <br/>
                            <span className="text-brand-blue text-glow-red italic">Auto Repair.</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-2xl">
                            From sophisticated computer diagnostics to complete engine overhauls. We employ strictly ASE-certified master mechanics capable of resolving the most complex modern automotive failures. Get back on the road with complete confidence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Competencies - Magazine Style */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 relative">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
                            >
                                <img src="/major_mechanics.png" alt="Tech" className="w-full h-[600px] object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border border-white/10">
                                   <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                       <Zap className="w-5 h-5 text-brand-blue" />
                                       No Guesswork
                                   </h4>
                                   <p className="text-sm text-slate-300">We utilize dealership-level scan tools to interface directly with your vehicle's computers. We diagnose the root cause, not just the symptom.</p>
                                </div>
                            </motion.div>
                        </div>
                        
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-white">
                                    Precision Engineering for <br/><span className="text-slate-500">Every Make & Model.</span>
                                </h2>
                                
                                <div className="space-y-8">
                                    {[
                                        { title: "Engine Performance & Drivability", desc: "Comprehensive testing of fuel, ignition, and emission systems to resolve rough idling, stalling, or hesitation. We restore factory performance and fuel economy." },
                                        { title: "Transmission Services & Rebuilds", desc: "From routine fluid exchanges and filter replacements to total overhauls and complete unit replacements. We ensure smooth shifting and extended drivetrain life." },
                                        { title: "Brake Systems & ABS Modules", desc: "Complete hydraulic system flushes, premium ceramic pad installation, rotor machining, and complex anti-lock brake system (ABS) module programming." },
                                        { title: "Heating & Air Conditioning (A/C)", desc: "Evacuation and recharge services, leak detection, compressor replacement, and climate control module repairs. Stay comfortable in any weather." }
                                    ].map((item, index) => (
                                        <div key={index} className="flex gap-6 group">
                                            <div className="mt-1">
                                                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-brand-blue/50 group-hover:bg-brand-blue/10 transition-colors shadow-lg shadow-black/50">
                                                    <span className="text-brand-blue font-bold font-display">0{index + 1}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">{item.title}</h3>
                                                <p className="text-slate-400 leading-relaxed text-lg">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Warning Signs Section */}
            <section className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                            Warning Signs You Shouldn't Ignore
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Catching a problem early often saves thousands in extensive repairs down the line. Bring your vehicle in immediately if you notice:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Unusual Noises", desc: "Grinding, squealing, or knocking sounds from the engine or undercarriage.", color: "text-amber-500" },
                            { title: "Fluid Leaks", desc: "Puddles under your car, especially red (transmission), green/orange (coolant), or black (oil).", color: "text-red-500" },
                            { title: "Dashboard Lights", desc: "Check Engine, ABS, Battery, or Oil Pressure lights remaining illuminated.", color: "text-brand-blue" }
                        ].map((sign, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-colors flex flex-col items-center text-center group"
                            >
                                <div className={`mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform ${sign.color}`}>
                                    <AlertTriangle className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{sign.title}</h3>
                                <p className="text-slate-400">{sign.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Process */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass p-12 md:p-16 rounded-[3rem] border border-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-50" />
                        
                        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                                    Our Guarantee to You.
                                </h2>
                                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                    We believe in complete transparency. You will never be sold a service you don't need, and you'll always know the cost before we turn a wrench.
                                </p>
                                <ul className="space-y-4">
                                    {['Comprehensive digital inspection with photos', 'Upfront, transparent pricing estimate', 'Premium OEM or equivalent replacement parts', 'Nationwide warranty on all major repairs'].map((text, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="bg-brand-blue p-1 rounded-full"><Check className="w-4 h-4 text-white" /></div>
                                            <span className="text-white font-bold">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-slate-900/80 p-6 rounded-3xl border border-white/10 text-center">
                                    <ShieldCheck className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
                                    <h4 className="text-white font-bold mb-1">Warranty Backed</h4>
                                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Guaranteed</p>
                                </div>
                                <div className="bg-slate-900/80 p-6 rounded-3xl border border-white/10 text-center translate-y-8">
                                    <Clock className="w-10 h-10 text-brand-blue mx-auto mb-4" />
                                    <h4 className="text-white font-bold mb-1">Efficient Service</h4>
                                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">On Time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
