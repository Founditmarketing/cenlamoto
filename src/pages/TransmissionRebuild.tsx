import React from 'react';
import { motion } from 'motion/react';
import { Cog, Zap, CheckCircle, Clock, AlertTriangle, ShieldCheck, Check } from 'lucide-react';
import Contact from '../components/Contact';

export default function TransmissionRebuild() {
    return (
        <div className="pt-24 min-h-screen bg-slate-950">
            {/* Cinematic Hero */}
            <section className="relative py-32 bg-slate-900 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.15),transparent)]" />
                    <img
                        src="https://images.unsplash.com/photo-1635835266710-54cc4fb08d91?auto=format&fit=crop&q=80&w=2000"
                        alt="Transmission Remanufacturing"
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-white/10 text-orange-500 text-sm font-bold mb-8 tracking-widest uppercase shadow-lg shadow-orange-500/10">
                            <Cog className="w-4 h-4" /> Powered By National Transmission
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1]">
                            Remanufactured. <br />
                            <span className="text-orange-500 italic">Never Just Rebuilt.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed mb-10">
                            Many people are confused regarding the difference between remanufactured and rebuilt. We remanufacture entire drivetrain assemblies to the highest of standards for a 1-3 day rapid turnaround.
                        </p>
                        <a
                            href="https://nattransmission.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-white glass hover:bg-white/10 border border-orange-500/50 px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_30px_rgba(249,115,22,0.2)] hover:shadow-[0_0_50px_rgba(249,115,22,0.4)]"
                        >
                            Visit National Transmission <Zap className="w-4 h-4 text-orange-500" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Core Competencies - Magazine Style */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            The Flaw in <span className="text-orange-500">"Rebuilding"</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Rebuilding simply involves taking the failed component, cleaning it, and replacing <i>only</i> the part or parts that have actively failed. This leaves older components inside the transmission that are highly likely to fail next, creating a vicious cycle of repairs. We do it differently.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-colors group relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="p-4 bg-slate-900 rounded-2xl w-fit mb-8 border border-white/10 group-hover:scale-110 transition-transform shadow-xl">
                                    <WrenchIcon className="w-8 h-8 text-slate-400" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">Standard Rebuild</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-slate-400 line-through decoration-red-500/50"><span className="w-2 h-2 rounded-full bg-red-500/50" /> Replaces only broken parts</li>
                                    <li className="flex items-center gap-3 text-slate-400 line-through decoration-red-500/50"><span className="w-2 h-2 rounded-full bg-red-500/50" /> Leaves worn friction plates</li>
                                    <li className="flex items-center gap-3 text-slate-400 line-through decoration-red-500/50"><span className="w-2 h-2 rounded-full bg-red-500/50" /> Unpredictable lifespan</li>
                                    <li className="flex items-center gap-3 text-slate-400 line-through decoration-red-500/50"><span className="w-2 h-2 rounded-full bg-red-500/50" /> Short warranty period</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass p-10 rounded-[2.5rem] border border-orange-500/30 hover:border-orange-500/60 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
                            <div className="relative z-10">
                                <div className="p-4 bg-slate-900 rounded-2xl w-fit mb-8 border border-white/10 group-hover:scale-110 transition-transform shadow-xl">
                                    <Cog className="w-8 h-8 text-orange-500" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">The Remanufacturing Method</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-slate-300 font-medium"><Check className="w-5 h-5 text-orange-500" /> Stripped to the core casing</li>
                                    <li className="flex items-center gap-3 text-slate-300 font-medium"><Check className="w-5 h-5 text-orange-500" /> All tolerances checked to OEM spec</li>
                                    <li className="flex items-center gap-3 text-slate-300 font-medium"><Check className="w-5 h-5 text-orange-500" /> 100% replacement of friction discs & seals</li>
                                    <li className="flex items-center gap-3 text-slate-300 font-medium"><Check className="w-5 h-5 text-orange-500" /> Nationwide comprehensive warranty</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Brand Pillars */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Clock, title: "1-3 Day Turn Around", desc: "We prioritize velocity because we know downtime costs you money." },
                            { icon: CheckCircle, title: "Over 20 Years Experience", desc: "Over two decades of specific, high-level transmission engineering." },
                            { icon: ShieldIcon, title: "Nationwide Warranty", desc: "Our remanufactured transmissions are backed across the country." },
                            { icon: Zap, title: "Certified & Licensed", desc: "ASE Certified mechanics specializing exclusively in drivetrains." }
                        ].map((feature, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-colors"
                            >
                                <feature.icon className="w-10 h-10 text-orange-500 mb-6" />
                                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Symptoms Section */}
             <section className="py-24 bg-slate-900 border-t border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative h-full min-h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                             <img src="/precision_mechanic.png" alt="Transmission Diagnosis" className="absolute inset-0 w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-orange-900/20 mix-blend-overlay" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Warning Signs of <br />
                                <span className="text-orange-500">Transmission Failure.</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-12">
                                Ignoring a transmission issue will inevitably result in total failure, leaving you stranded. Have your vehicle towed if you experience:
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { title: 'Slipping Gears', desc: 'The engine revs excessively but the car struggles to accelerate, feeling as though it popped out of gear.' },
                                    { title: 'Delayed Engagement', desc: 'When shifting from Park to Drive or Reverse, there is a noticeable 2-3 second delay before the car moves.' },
                                    { title: 'Harsh Shifting', desc: 'The vehicle violently jerks or "clunks" when changing gears automatically.' },
                                    { title: 'Burnt Fluid Smell', desc: 'Transmission fluid should be bright pink/red and smell sweet. If it is black and smells like burnt toast, internal clutches are burning up.' }
                                ].map((symptom, idx) => (
                                    <div key={idx} className="glass p-6 rounded-2xl border border-white/5 flex gap-4 items-start">
                                        <div className="mt-1 bg-orange-500/20 p-2 rounded-full"><AlertTriangle className="w-5 h-5 text-orange-500" /></div>
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

function WrenchIcon(props: any) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
}

function ShieldIcon(props: any) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
}
