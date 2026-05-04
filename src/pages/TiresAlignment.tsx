import React from 'react';
import { motion } from 'motion/react';
import { Settings, ShieldCheck, CheckCircle2, Navigation, Target, Activity, AlertTriangle, Check } from 'lucide-react';
import Contact from '../components/Contact';

export default function TiresAlignment() {
    return (
        <div className="pt-24 min-h-screen bg-slate-950">
            {/* Cinematic Hero */}
            <section className="relative py-32 bg-slate-900 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.15),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1578356956799-73fb4dc2b0e6?auto=format&fit=crop&q=80&w=2000"
                        alt="Premium Tire Alignment"
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-white/10 text-violet-400 text-sm font-bold mb-8 tracking-widest uppercase shadow-lg shadow-violet-400/10">
                            <Settings className="w-4 h-4" /> State-of-the-Art Precision
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1]">
                            Mastery in <br />
                            <span className="text-violet-400 italic">Tires & Alignment.</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-2xl">
                            Utilizing Hunter Engineering's elite balancing and alignment systems. We don't just change tires; we optimize your vehicle's entire footprint for extreme longevity, fuel efficiency, and safety.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Competencies - Magazine Style */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute -left-40 top-40 w-80 h-80 bg-violet-400/10 blur-[100px] rounded-full" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 relative">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
                            >
                                <img src="/major_mechanics.png" alt="Alignment Service" className="w-full h-[600px] object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border border-white/10">
                                   <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                       <Target className="w-5 h-5 text-violet-400" />
                                       Laser Perfection
                                   </h4>
                                   <p className="text-sm text-slate-300">Our Hawkeye Elite alignment systems measure Camber, Caster, and Toe to within hundredths of a degree.</p>
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
                                    The <span className="text-violet-400">National</span> Tire Standard.
                                </h2>
                                
                                <div className="space-y-8">
                                    {[
                                        { title: "Road Force Elite® Balancing", desc: "Traditional balancing just spins the tire. We apply a load roller to simulate actual road force, detecting hard spots in the tire itself to eliminate high-speed vibrations." },
                                        { title: "Hawkeye Elite® 4-Wheel Alignments", desc: "Four high-definition cameras analyze targets mounted to the face of your wheels, preventing rim damage while calculating true thrust angles instantly." },
                                        { title: "Performance Mounting", desc: "Touchless tire mounting ensures your expensive alloy or forged wheels are never scratched during tire installation." },
                                        { title: "TPMS & Ride Diagnostics", desc: "Complete Tire Pressure Monitoring System reprogramming and diagnostics to ensure your vehicle correctly reports real-time pressure data." }
                                    ].map((item, index) => (
                                        <div key={index} className="flex gap-6 group">
                                            <div className="mt-1">
                                                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-violet-400/50 group-hover:bg-violet-400/10 transition-colors shadow-lg shadow-black/50">
                                                    <span className="text-violet-400 font-bold font-display">0{index + 1}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">{item.title}</h3>
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

             {/* Symptoms Section */}
             <section className="py-24 bg-slate-900 border-t border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Signs You Need <br />
                                <span className="text-violet-400">An Alignment.</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-12">
                                Ignoring bad alignment destroys a set of tires thousands of miles prematurely and puts severe strain on your steering components.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: 'Pulling to the Side', desc: 'The most obvious sign. If you briefly take your hands off the wheel on a flat road and drift heavily left or right.' },
                                    { title: 'Uneven Tire Wear', desc: 'Check your tread. If the inside or outside edge of your tire is bald while the center has tread, your camber or toe is out.' },
                                    { title: 'Steering Wheel Off-Center', desc: 'When driving straight, your steering wheel is permanently tilted to an angle.' },
                                    { title: 'Vibration at Highway Speeds', desc: 'A shaking steering wheel between 60-70mph indicates an imbalance or bent rim requiring Road Force analysis.' }
                                ].map((symptom, idx) => (
                                    <div key={idx} className="glass p-6 rounded-2xl border border-white/5 flex gap-4 items-start">
                                        <div className="mt-1 bg-violet-400/20 p-2 rounded-full"><AlertTriangle className="w-5 h-5 text-violet-400" /></div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">{symptom.title}</h4>
                                            <p className="text-slate-400">{symptom.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full min-h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-end p-10">
                            <div className="absolute inset-0 bg-slate-800">
                                <img src="/tire_maintenance.png" alt="Tires" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
                            </div>
                            
                            <div className="relative z-10">
                                <ShieldCheck className="w-12 h-12 text-violet-400 mb-6" />
                                <h3 className="text-3xl font-bold text-white mb-4">The Guarantee</h3>
                                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                    As an authorized dealer for major brands like Michelin, Goodyear, and BFGoodrich, we stand behind the rubber we install. Every alignment comes with a comprehensive printout detailing camber, caster, and toe before-and-after adjustments, proving our commitment to objective accuracy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
