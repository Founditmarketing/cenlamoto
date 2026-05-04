import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ShieldCheck, Wrench, ChevronRight, Star, Clock, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';

export default function Alexandria() {
    return (
        <div className="pt-24 min-h-screen bg-slate-950">
            {/* Hyper-Local Hero */}
            <section className="relative py-32 bg-slate-900 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&q=80&w=2000"
                        alt="Alexandria LA Auto Repair"
                        className="w-full h-full object-cover opacity-20 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/40" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full glass-light border border-white/10 text-brand-blue text-sm font-bold mb-8 mx-auto tracking-widest uppercase shadow-lg">
                            <MapPin className="w-4 h-4" /> Alexandria's Premier Auto Hub
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1]">
                            Central Louisiana's <br />
                            <span className="text-brand-blue italic">Auto Authority.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
                            Whether you're fighting the potholes on MacArthur Drive, commuting over the Jackson Street Bridge, or hauling the boat out to Kincaid Lake, your vehicle takes a beating. We're Alexandria's trusted local source for rigorous auto repair and alignments.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl shadow-brand-blue/30"
                        >
                            Get Scheduled Today <ChevronRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Local Context Grid */}
            <section className="py-24 bg-slate-900 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-4xl font-display font-bold text-white mb-4">Built for Rapides Parish Roads.</h2>
                        <p className="text-slate-400 text-lg">We know exactly what the local streets do to a car over time.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <Wrench className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Coliseum Blvd Commutes</h3>
                            <p className="text-slate-400 mb-6">Stop-and-go traffic down Coliseum Blvd burns out brakes and transmissions faster than highway miles. We install premium friction pads and rebuild transmissions to handle the daily grind.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-brand-blue/20 shadow-xl shadow-brand-blue/5 hover:border-brand-blue/50 transition-colors group">
                            <AlertTriangle className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">MacArthur Drive Potholes</h3>
                            <p className="text-slate-400 mb-6">Hit one of those massive hidden craters near the traffic circle? We utilize Hunter Hawkeye Elite alignments to fix your thrust angle and straighten your bent rims instantly.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <ShieldCheck className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Summer Heat A/C</h3>
                            <p className="text-slate-400 mb-6">An Alexandria summer is no joke. Sitting in traffic with a broken A/C compressor is miserable. We evacuate, recharge, and leak-test your entire system to keep you freezing cold.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Landmarks Section */}
            <section className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.03),transparent)] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6">
                                Proudly Rooted in <br /><span className="text-brand-blue">Alexandria.</span>
                            </h2>
                            <p className="text-xl text-slate-400 font-medium leading-relaxed mb-8">
                                As locals, we serve the folks that make this city run. From fleet trucks servicing the medical district by Rapides Regional and Cabrini, to families heading out to the Alexandria Zoo for the weekend. We make sure you get there safely.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-2xl border border-white/5">
                                    <div className="p-3 bg-brand-blue/10 rounded-xl"><MapPin className="w-6 h-6 text-brand-blue" /></div>
                                    <div>
                                        <p className="text-white font-bold">Close to the Action</p>
                                        <p className="text-slate-400 text-sm">Minutes from the Red River bridges connecting us to Pineville.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-2xl border border-white/5">
                                    <div className="p-3 bg-brand-blue/10 rounded-xl"><MapPin className="w-6 h-6 text-brand-blue" /></div>
                                    <div>
                                        <p className="text-white font-bold">Kincaid & Cotile Lake Hauling</p>
                                        <p className="text-slate-400 text-sm">Ask us about heavy-duty transmission coolers and trailer brake setups.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                             <img src="/shop_satisfaction.png" alt="Happy Alexandria Customer" className="w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay" />
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
