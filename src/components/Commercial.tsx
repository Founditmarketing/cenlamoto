import React from 'react';
import { motion } from 'motion/react';
import { Truck, CheckCircle2, Navigation, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Commercial() {
  return (
    <section id="commercial" className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Immersive Background Treatment */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.1),transparent)]" />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]" />
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2000"
          alt="Heavy Fleet Logistics"
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 text-xs font-bold mb-8 uppercase tracking-widest"
            >
              <Truck className="w-3 h-3 text-brand-blue" />
              Enterprise & Fleet Solutions
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 tracking-tight leading-tight">
              Centralized Control <br />
              <span className="text-brand-blue text-glow-red">For Your Entire Fleet.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
              National Tire & Auto is Pineville's exclusive one-stop hub for B2B logistics. From official inspections to mobile heavy-duty response, we keep your fleet moving.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="bg-brand-blue/10 p-4 rounded-2xl h-fit border border-brand-blue/20 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-brand-blue/10">
                  <Truck className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Dedicated Mobile Service</h3>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed">Specialized mobile tire service for big trucks and 18-wheelers. Dispatched directly to your site or roadside.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="bg-emerald-500/10 p-4 rounded-2xl h-fit border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-emerald-500/10">
                  <ShieldCheck className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Only DOT Station in Pineville</h3>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed">The region's only authorized DOT inspection station. Stay compliant with zero detour time.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="bg-blue-500/10 p-4 rounded-2xl h-fit border border-blue-500/20 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-blue-500/10">
                  <Navigation className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Total Account Management</h3>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed">One-stop servicing for all commercial fleets. Unified billing for repair, glass, and tires.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] group">
              <img
                src="/nattireautopic3.png"
                alt="National Tire & Auto Fleet Service"
                className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-[3s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="glass p-8 rounded-[2rem] border border-white/10 shadow-2xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-brand-blue/20 p-3 rounded-xl">
                      <AlertTriangle className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h4 className="text-xl font-display font-bold text-white uppercase tracking-tight">Fleet Activation</h4>
                  </div>
                  <p className="text-slate-400 font-medium mb-8 text-base">
                    Unlock priority scheduling and strategic corporate pricing for organizations with 5+ vehicles.
                  </p>
                  <button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                    Initiate Fleet Account
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
