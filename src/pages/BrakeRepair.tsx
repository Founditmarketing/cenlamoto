import React from 'react';
import { motion } from 'motion/react';
import { Settings, Shield, Wrench, ChevronRight, AlertTriangle, ShieldCheck, Check } from 'lucide-react';
import Contact from '../components/Contact';

export default function BrakeRepair() {
    return (
        <div className="pt-24 min-h-screen bg-slate-950">
            {/* Cinematic Hero */}
            <section className="relative py-32 bg-slate-900 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1542382602-0e9bdcd09ccb?auto=format&fit=crop&q=80&w=2000"
                        alt="Brake Repair & Rotors"
                        className="w-full h-full object-cover opacity-20 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-white/10 text-brand-blue text-sm font-bold mb-8 tracking-widest uppercase shadow-lg shadow-brand-blue/10">
                            <Shield className="w-4 h-4" /> Safety First
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1]">
                            Brake Repair & <br />
                            <span className="text-brand-blue text-glow-red italic">Rotor Machining.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
                            Your vehicle's braking system is its most critical safety feature. We exclusively utilize OEM-grade ceramic and semi-metallic friction materials. Never compromise on stopping power.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Detailed Grid */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute -left-40 top-40 w-80 h-80 bg-brand-blue/10 blur-[100px] rounded-full" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-4xl font-display font-bold text-white mb-6">Expert Brake Services</h2>
                        <p className="text-slate-400 text-lg">We provide comprehensive solutions to ensure maximum safety and performance.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-10 rounded-[2.5rem] border border-brand-blue/20 hover:border-brand-blue/50 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent" />
                            <div className="relative z-10">
                                <div className="p-4 bg-slate-900 rounded-2xl w-fit mb-8 border border-white/10 group-hover:scale-110 transition-transform shadow-xl">
                                    <Shield className="w-8 h-8 text-brand-blue" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">Precision Pad Replacement</h3>
                                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                                    Squeaking or grinding? We analyze pad wear patterns to ensure your calipers are functioning properly before installing premium ceramic pads for quiet, dust-free performance.
                                </p>
                                <ul className="space-y-3">
                                    {['Premium Ceramic Pads', 'Hardware Replacement', 'Caliper Slide Lubrication'].map((item, i) =>(
                                        <li key={i} className="flex items-center gap-3 text-slate-400"><Check className="w-4 h-4 text-brand-blue" /> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass p-10 rounded-[2.5rem] border border-white/10 hover:border-brand-blue/30 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent" />
                            <div className="relative z-10">
                                <div className="p-4 bg-slate-900 rounded-2xl w-fit mb-8 border border-white/10 group-hover:scale-110 transition-transform shadow-xl">
                                    <Settings className="w-8 h-8 text-brand-blue" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">Rotor Resurfacing & Replacement</h3>
                                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                                    Pulsation in the brake pedal implies warped rotors. We utilize on-car lathes to resurface rotors to exact factory specifications, or replace them entirely for maximum heat dissipation.
                                </p>
                                <ul className="space-y-3">
                                    {['Precision Machining', 'Runout Measurement', 'High-Carbon Rotor Upgrades'].map((item, i) =>(
                                        <li key={i} className="flex items-center gap-3 text-slate-400"><Check className="w-4 h-4 text-brand-blue" /> {item}</li>
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
                                Signs You Need <br />
                                <span className="text-brand-blue">Brake Service.</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-12">
                                Don't wait until it's too late. Pay attention to these common symptoms that indicate your brakes need professional attention immediately.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: 'Squealing or Grinding', desc: 'High-pitched noises mean your pads are worn down to the wear indicators.' },
                                    { title: 'Vibration when Braking', desc: 'A pulsating pedal or steering wheel shaking points to warped rotors.' },
                                    { title: 'Spongy Pedal', desc: 'If the pedal goes all the way to the floor, you may have air in the lines or a fluid leak.' },
                                    { title: 'Pulling to One Side', desc: 'A stuck caliper or collapsed brake hose can cause the vehicle to drift while braking.' }
                                ].map((symptom, idx) => (
                                    <div key={idx} className="glass p-6 rounded-2xl border border-white/5 flex gap-4 items-start">
                                        <div className="mt-1 bg-brand-blue/20 p-2 rounded-full"><AlertTriangle className="w-5 h-5 text-brand-blue" /></div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">{symptom.title}</h4>
                                            <p className="text-slate-400">{symptom.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full min-h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                             <img src="/breaks.png" alt="Brake Service" className="absolute inset-0 w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay" />
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
