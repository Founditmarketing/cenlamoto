import React from 'react';
import { motion } from 'motion/react';
import { Wind, Activity, CheckCircle, AlertTriangle, ShieldCheck, ThermometerSnowflake, Check } from 'lucide-react';
import Contact from '../components/Contact';

export default function AcRepair() {
    return (
        <div className="pt-24 min-h-screen bg-slate-950">
            {/* Cinematic Hero */}
            <section className="relative py-32 bg-slate-900 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.15),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1634860471955-ea2c1affceee?auto=format&fit=crop&q=80&w=2000"
                        alt="A/C Repair & Recharge"
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-white/10 text-sky-400 text-sm font-bold mb-8 tracking-widest uppercase shadow-lg shadow-sky-400/10">
                            <Wind className="w-4 h-4" /> Climate Control
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1]">
                            A/C Evac & <br />
                            <span className="text-sky-400 italic">System Recharge.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
                            Louisiana summers demand uncompromising climate control. We utilize advanced electronic leak detection to locate micro-leaks and restore your vehicle to factory cooling temperatures. Stay cool, stay comfortable.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Detailed Grid */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-80 h-80 bg-sky-400/10 blur-[100px] rounded-full" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-4xl font-display font-bold text-white mb-6">Complete A/C Diagnostics</h2>
                        <p className="text-slate-400 text-lg">We use specialized extraction and recharge equipment to ensure environmental safety and optimal performance.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-10 rounded-[2.5rem] border border-sky-400/20 hover:border-sky-400/50 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent" />
                            <div className="relative z-10">
                                <div className="p-4 bg-slate-900 rounded-2xl w-fit mb-8 border border-white/10 group-hover:scale-110 transition-transform shadow-xl">
                                    <ThermometerSnowflake className="w-8 h-8 text-sky-400" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">Freon Recovery & Recharge</h3>
                                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                                    Using advanced R-134a and R-1234yf recovery machines, we vacuum the system to remove moisture, and recharge factory levels of refrigerant with UV dye to track microscopic leaks.
                                </p>
                                <ul className="space-y-3">
                                    {['Complete Vacuum System Purge', 'Precise Refrigerant Weigh-In', 'UV Dye Leak Tracing'].map((item, i) =>(
                                        <li key={i} className="flex items-center gap-3 text-slate-400"><Check className="w-4 h-4 text-sky-400" /> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass p-10 rounded-[2.5rem] border border-white/10 hover:border-sky-400/30 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent" />
                            <div className="relative z-10">
                                <div className="p-4 bg-slate-900 rounded-2xl w-fit mb-8 border border-white/10 group-hover:scale-110 transition-transform shadow-xl">
                                    <Activity className="w-8 h-8 text-sky-400" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">Compressor Diagnostics</h3>
                                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                                    If your A/C is blowing warm air, the compressor or clutch may be failing. We test system electrical inputs and mechanical actuation to isolate the precise failure point.
                                </p>
                                <ul className="space-y-3">
                                    {['Electrical Circuit Testing', 'Compressor Engagement Checks', 'Blend Door Actuator Diagnostics'].map((item, i) =>(
                                        <li key={i} className="flex items-center gap-3 text-slate-400"><Check className="w-4 h-4 text-sky-400" /> {item}</li>
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
                        <div className="order-2 lg:order-1 relative h-full min-h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                             <img src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=2000" alt="A/C Service" className="absolute inset-0 w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-sky-900/20 mix-blend-overlay" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Signs Your A/C is <br />
                                <span className="text-sky-400">Failing.</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-12">
                                A failing A/C system often gives subtle warnings before completely failing. Look out for these common symptoms.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: 'Blowing Warm Air', desc: 'The most obvious sign, usually indicating a refrigerant leak or compressor failure.' },
                                    { title: 'Weak Airflow', desc: 'Could be a clogged cabin air filter, a failing blower motor, or an issue in the ductwork.' },
                                    { title: 'Strange Noises', desc: 'Rattling or banging when you turn on the A/C often means a bearing is worn out or the compressor clutch is bad.' },
                                    { title: 'Foul Odors', desc: 'Musty or moldy smells indicate bacteria buildup in the evaporator core requiring a deep cleaning.' }
                                ].map((symptom, idx) => (
                                    <div key={idx} className="glass p-6 rounded-2xl border border-white/5 flex gap-4 items-start">
                                        <div className="mt-1 bg-sky-400/20 p-2 rounded-full"><AlertTriangle className="w-5 h-5 text-sky-400" /></div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">{symptom.title}</h4>
                                            <p className="text-slate-400">{symptom.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
