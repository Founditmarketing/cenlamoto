import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ShieldCheck, Wrench, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

interface LocationLayoutProps {
    city: string;
    heroImage: string;
    description: string;
    landmarks?: {
        name: string;
        description: string;
    }[];
}

export default function LocationLayout({ city, heroImage, description, landmarks }: LocationLayoutProps) {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hyper-Local Hero */}
            <section className="relative py-32 bg-slate-900 border-b border-brand-blue/20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.15),transparent)]" />
                    <img
                        src={heroImage}
                        alt={`${city} Auto Repair`}
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/80 to-slate-900" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full glass-light border border-white/10 text-brand-blue text-sm font-bold mb-8 mx-auto tracking-widest uppercase shadow-lg shadow-brand-blue/10">
                            <MapPin className="w-4 h-4" /> Serving {city}, LA
                        </div>
                        <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
                            Expert Auto Care in <br />
                            <span className="text-brand-blue text-glow-red italic">{city}.</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Local Authority Grid */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group">
                            <Wrench className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">{city}'s Transmission Experts</h3>
                            <p className="text-slate-400 mb-6">We provide dealership-level diagnostics and complete auto repair for drivers in {city}. You can always rely on our expert team for honest service.</p>
                            <Link to="/services/advanced-auto-repair" className="text-brand-blue font-bold text-sm uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                                Auto Repair <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-brand-blue/20 shadow-xl shadow-brand-blue/5 hover:border-brand-blue/50 transition-colors group">
                            <ShieldCheck className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Precision Alignments</h3>
                            <p className="text-slate-400 mb-6">Rough roads in {city}? We use state-of-the-art alignment tech to guarantee a perfectly smooth ride and extend the life of your tires.</p>
                            <Link to="/services/tires-alignment" className="text-brand-blue font-bold text-sm uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                                Tire & Alignment <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-brand-blue/30 transition-colors group lg:col-span-1 md:col-span-2">
                            <MapPin className="w-10 h-10 text-brand-blue mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Fleet Services for {city}</h3>
                            <p className="text-slate-400 mb-6">If you operate a commercial fleet around {city}, our dedicated service bays are ready for rapid turnaround, keeping your business moving smoothly.</p>
                            <Link to="/fleet" className="text-brand-blue font-bold text-sm uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                                Fleet Service <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* Local Landmarks Section */}
            {landmarks && landmarks.length > 0 && (
                <section className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.03),transparent)] pointer-events-none" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="mb-16 text-center">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6">
                                Proudly Serving <span className="text-brand-blue">{city}'s</span> Landmarks.
                            </h2>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                                We're not just a repair shop; we're part of the local community. Here are some of the local landmarks we are proud to serve near.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {landmarks.map((landmark, index) => (
                                <div key={index} className="glass-light p-8 rounded-[2rem] border border-white/5 hover:border-brand-blue/30 transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20 mb-6 group-hover:bg-brand-blue/20 transition-colors">
                                        <MapPin className="w-6 h-6 text-brand-blue" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{landmark.name}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{landmark.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Contact />
        </div>
    );
}
