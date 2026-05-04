import React from 'react';
import { motion } from 'motion/react';
import { MoveUpRight, ShieldAlert, Settings, Wrench, AlertTriangle, Check, ShieldCheck } from 'lucide-react';
import Contact from '../components/Contact';

export default function Suspension() {
    return (
        <div className="pt-24 min-h-screen bg-slate-950">
            {/* Cinematic Hero */}
            <section className="relative py-32 bg-slate-900 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.15),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1542365851-4043232c7fbd?auto=format&fit=crop&q=80&w=2000"
                        alt="Suspension & Shocks"
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-white/10 text-emerald-400 text-sm font-bold mb-8 tracking-widest uppercase shadow-lg shadow-emerald-400/10">
                            <MoveUpRight className="w-4 h-4" /> Chassis Engineering
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1]">
                            Suspension & <br />
                            <span className="text-emerald-400 italic">Strut Assemblies.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
                            Restore factory ride quality, eliminate body roll, and ensure your tires maintain perfectly even road contact. Your suspension is the foundation of vehicle safety.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Detailed Grid */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute right-0 top-40 w-80 h-80 bg-emerald-400/10 blur-[100px] rounded-full" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-4xl font-display font-bold text-white mb-6">Complete Undercarriage Service</h2>
                        <p className="text-slate-400 text-lg">We use OEM-grade replacement parts to strengthen your vehicle against road hazards.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-10 rounded-[2.5rem] border border-emerald-400/20 hover:border-emerald-400/50 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent" />
                            <div className="relative z-10">
                                <div className="p-4 bg-slate-900 rounded-2xl w-fit mb-8 border border-white/10 group-hover:scale-110 transition-transform shadow-xl">
                                    <MoveUpRight className="w-8 h-8 text-emerald-400" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">Shocks & Struts</h3>
                                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                                    Worn struts increase braking distance dramatically and cause severe tire cupping. We install premium assemblies to stabilize your chassis against pothole damage.
                                </p>
                                <ul className="space-y-3">
                                    {['Complete Strut Assemblies', 'Air Ride Suspension Conversion', 'Performance Coilovers'].map((item, i) =>(
                                        <li key={i} className="flex items-center gap-3 text-slate-400"><Check className="w-4 h-4 text-emerald-400" /> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass p-10 rounded-[2.5rem] border border-white/10 hover:border-emerald-400/30 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent" />
                            <div className="relative z-10">
                                <div className="p-4 bg-slate-900 rounded-2xl w-fit mb-8 border border-white/10 group-hover:scale-110 transition-transform shadow-xl">
                                    <Settings className="w-8 h-8 text-emerald-400" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">Linkages & Control Arms</h3>
                                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                                    Clunking sounds over bumps? A loose front end is a major safety hazard. We inspect and replace worn ball joints, tie rod ends, and sway bar bushings to tighten steering response.
                                </p>
                                <ul className="space-y-3">
                                    {['Upper & Lower Ball Joints', 'Outer / Inner Tie Rods', 'Sway Bar Links & Bushings'].map((item, i) =>(
                                        <li key={i} className="flex items-center gap-3 text-slate-400"><Check className="w-4 h-4 text-emerald-400" /> {item}</li>
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
                             <img src="/precision_mechanic.png" alt="Suspension Service" className="absolute inset-0 w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Signs of Suspension <br />
                                <span className="text-emerald-400">Failure.</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-12">
                                Suspension components weaken slowly over time, meaning many drivers don't notice the degraded ride quality until a major component snaps.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: 'The "Bounce Test" Fails', desc: 'If you push down hard on the corner of your car and it bounces more than 1-2 times, your struts are empty.' },
                                    { title: 'Nose Diving on Brakes', desc: 'When you apply the brakes, the front of the car dips significantly toward the pavement.' },
                                    { title: 'Clunking Over Bumps', desc: 'Loud metallic knocking or clunking sounds when driving over speed bumps or potholes indicating worn ball joints.' },
                                    { title: 'Fluid Leaking from Shocks', desc: 'Visible oily residue running down the side of your shock absorbers means the internal seals have blown.' }
                                ].map((symptom, idx) => (
                                    <div key={idx} className="glass p-6 rounded-2xl border border-white/5 flex gap-4 items-start">
                                        <div className="mt-1 bg-emerald-400/20 p-2 rounded-full"><ShieldAlert className="w-5 h-5 text-emerald-400" /></div>
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
