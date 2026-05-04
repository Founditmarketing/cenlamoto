import React from 'react';
import { motion } from 'motion/react';
import { Focus, Eye, CheckCircle2, ShieldCheck, Target, Camera, Check, AlertTriangle } from 'lucide-react';
import Contact from '../components/Contact';

export default function GlassCalibration() {
    return (
        <div className="pt-24 min-h-screen bg-slate-950">
            {/* Cinematic Hero */}
            <section className="relative py-32 bg-slate-900 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.15),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=2000"
                        alt="Auto Glass and ADAS"
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
                            <Focus className="w-4 h-4" /> Optical Clarity
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1]">
                            Glass & <br /> <span className="text-emerald-400 italic">ADAS Calibration.</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-2xl">
                            A modern windshield is effectively a transparent sensor array. We provide OEM-quality glass replacement paired with millimeter-precise ADAS camera recalibration to keep your safety systems online.
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
                                <img src="/precision_mechanic.png" alt="ADAS Calibration" className="w-full h-[600px] object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border border-white/10">
                                   <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                       <Target className="w-5 h-5 text-emerald-400" />
                                       Millimeter Precision
                                   </h4>
                                   <p className="text-sm text-slate-300">Using advanced optical targeting boards and diagnostic software, we realign the vehicle's forward-facing perception systems.</p>
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
                                    The Science of <br/><span className="text-slate-500">Auto Glass.</span>
                                </h2>
                                
                                <div className="space-y-8">
                                    {[
                                        { title: "OEM-Equivalent Windshields", desc: "Cheaper aftermarket glass can distort light, tricking ADAS cameras. We exclusively utilize Acoustic and Solar-grade glass matching factory specifications." },
                                        { title: "Static ADAS Calibration", desc: "Conducted in a highly-controlled bay environment using laser-aligned target boards to reset the central camera's absolute zero-point." },
                                        { title: "Dynamic ADAS Calibration", desc: "A road-test calibration where the vehicle's computer relearns the geometry of the road and tracks lane markings under active driving conditions." },
                                        { title: "Direct Insurance Processing", desc: "Glass claims shouldn't be a hassle. We interface directly with all major insurance carriers to process your claim instantly and correctly." }
                                    ].map((item, index) => (
                                        <div key={index} className="flex gap-6 group">
                                            <div className="mt-1">
                                                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-emerald-400/50 group-hover:bg-emerald-400/10 transition-colors shadow-lg shadow-black/50">
                                                    <span className="text-emerald-400 font-bold font-display">0{index + 1}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
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

            {/* Warning Section */}
            <section className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-emerald-400/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="glass p-12 rounded-[3rem] border border-red-500/20 shadow-[0_0_50px_rgba(239,68,68,0.05)]">
                            <h3 className="text-3xl font-display font-bold mb-6 flex items-center gap-4 text-white">
                                <Eye className="w-10 h-10 text-red-500" /> The ADAS Imperative
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-lg mb-8">
                                Advanced Driver Assistance Systems (Lane Departure Warning, Active Cruise Control, Auto Emergency Braking) rely entirely on cameras mounted to your windshield. 
                                <br/><br/>
                                <strong>Replacing the glass without re-aiming the optic array is incredibly dangerous.</strong> If the camera is angled just one millimeter off, the car's computer might think a vehicle 100 feet ahead is actually in a different lane, failing to apply the emergency brakes.
                            </p>
                            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                                <p className="text-red-400 font-bold text-sm uppercase tracking-widest text-center">Never compromise safety to save a buck.</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-display font-bold text-white mb-8">Systems Relying on <span className="text-emerald-400">Calibration</span></h2>
                            <div className="space-y-4">
                                {[
                                    { name: 'Forward Collision Warning', icon: ShieldCheck },
                                    { name: 'Automatic Emergency Braking', icon: AlertTriangle },
                                    { name: 'Lane Departure Warning / Keep Assist', icon: Eye },
                                    { name: 'Adaptive Cruise Control', icon: Target },
                                    { name: 'Traffic Sign Recognition', icon: Camera }
                                ].map((sys, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                    >
                                        <div className="bg-emerald-400/20 p-2 rounded-lg"><sys.icon className="w-5 h-5 text-emerald-400" /></div>
                                        <span className="text-white font-bold text-lg">{sys.name}</span>
                                    </motion.div>
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
