import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ShieldCheck, Wrench, ChevronRight, Sailboat, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';

export default function Many() {
    return (
        <div className="pt-24 min-h-screen bg-slate-950">
            <section className="relative py-32 bg-slate-900 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1542365851-4043232c7fbd?auto=format&fit=crop&q=80&w=2000"
                        alt="Many LA Auto Repair"
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
                            <MapPin className="w-4 h-4" /> Sabine Parish Mechanics
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1]">
                            Expert Auto Repair in <br />
                            <span className="text-brand-blue italic">Many, LA.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
                            In Sabine Parish, a vehicle breaking down means you're stranded. From the relentless Hwy 171 corridor to towing bass boats out to Toledo Bend Reservoir, we fortify vehicles to survive out here.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl shadow-brand-blue/30"
                        >
                            Schedule Diagnostic <ChevronRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-slate-900 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-4xl font-display font-bold text-white mb-4">Towing, Hauling, & Driving Hard.</h2>
                        <p className="text-slate-400 text-lg">Lake traffic and logging trucks dominate these roads. Is your vehicle ready?</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <Sailboat className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Toledo Bend Lake Hauling</h3>
                            <p className="text-slate-400 mb-6">Towing 5,000 lbs of camper or bass boat over the Sabine Parish hills will absolutely fry an old transmission. Before hunting or fishing season, let us install a heavy-duty cooler or rebuild slipping gears.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-brand-blue/20 shadow-xl shadow-brand-blue/5 hover:border-brand-blue/50 transition-colors group">
                            <Wrench className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Hwy 171 Wear & Tear</h3>
                            <p className="text-slate-400 mb-6">The main corridor north and south puts immense heat into wheel bearings and brake pads. Are you hearing high-pitched squealing? Don't ignore it. We replace warped rotors and bad pads instantly.</p>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <Hammer className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Suspension & Leveling</h3>
                            <p className="text-slate-400 mb-6">Is your front-end dipping every time you hit the brakes? Worn out struts are dangerous on backroads. We tighten loose linkages, replace ball joints, and align everything perfectly.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
}
