import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-slate-900">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent)]" />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
        <video
          src="/hero_trial_1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-white/10 text-brand-blue text-sm font-bold mb-8 shadow-2xl uppercase tracking-widest"
            >
              Central Louisiana's Trusted Auto Shop
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-display font-bold text-white tracking-tighter leading-[1.1] mb-6 uppercase"
            >
              Dealerships? <br />
              <span className="text-brand-blue text-glow-red italic pr-2">Overrated.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-400 mb-12 max-w-xl leading-relaxed font-medium"
            >
              The ultimate <strong>One-Stop Shop</strong> right here in Central Louisiana. From precision alignments and new tires to expert engine repair and windshield calibration—we handle it all. Skip the dealership wait and get back on the road safely.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="group relative inline-flex justify-center items-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-brand-blue/30 overflow-hidden w-full sm:w-auto"
                >
                  <span className="relative z-10">Book Expert Service</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/services"
                  className="inline-flex justify-center items-center gap-3 glass-light hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl w-full sm:w-auto"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>


          {/* Right Floating Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 lg:mt-0 relative"
          >
            <div className="glass p-8 rounded-[2.5rem] relative z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-brand-blue mb-2 bg-brand-blue/10 w-fit p-3 rounded-2xl">
                    <Star className="w-6 h-6" />
                  </div>
                  <h4 className="text-3xl font-display font-bold text-white leading-none">4.9/5</h4>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Customer Rated</p>
                </div>
                <div className="space-y-2">
                  <div className="text-emerald-500 mb-2 bg-emerald-500/10 w-fit p-3 rounded-2xl">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h4 className="text-3xl font-display font-bold text-white leading-none">Same-Day</h4>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Select Services</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Our Primary Locations</h4>
                
                <Link to="/locations/alexandria" className="flex items-center gap-4 group cursor-pointer bg-slate-900/40 p-3 rounded-2xl hover:bg-slate-800/60 border border-white/5 hover:border-brand-blue/30 transition-all">
                  <div className="bg-white/5 p-3 rounded-xl group-hover:bg-brand-blue/10 transition-colors shrink-0">
                    <MapPin className="w-5 h-5 text-slate-400 group-hover:text-brand-blue transition-colors" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm group-hover:text-brand-blue transition-colors">Alexandria Hub</p>
                    <p className="text-slate-500 text-xs mt-0.5">Full-Service Auto, Tires & Glass</p>
                  </div>
                </Link>

                <Link to="/locations/pineville" className="flex items-center gap-4 group cursor-pointer bg-slate-900/40 p-3 rounded-2xl hover:bg-slate-800/60 border border-white/5 hover:border-brand-blue/30 transition-all">
                  <div className="bg-white/5 p-3 rounded-xl group-hover:bg-brand-blue/10 transition-colors shrink-0">
                    <MapPin className="w-5 h-5 text-slate-400 group-hover:text-brand-blue transition-colors" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm group-hover:text-brand-blue transition-colors">Pineville Hub</p>
                    <p className="text-slate-500 text-xs mt-0.5">Full-Service Auto, Tires & Glass</p>
                  </div>
                </Link>

                <a href="https://nattransmission.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer bg-slate-900/40 p-3 rounded-2xl hover:bg-slate-800/60 border border-white/5 hover:border-brand-blue/30 transition-all">
                  <div className="bg-white/5 p-3 rounded-xl group-hover:bg-brand-blue/10 transition-colors shrink-0">
                    <MapPin className="w-5 h-5 text-slate-400 group-hover:text-brand-blue transition-colors" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm group-hover:text-brand-blue transition-colors">Transmission Specialty Shop</p>
                    <p className="text-slate-500 text-xs mt-0.5">Dedicated Transmission Center</p>
                  </div>
                </a>
              </div>

              {/* Tax Time Callout Inside Card */}
              <div className="mt-8 bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-4">
                <div className="flex gap-4">
                  <ShieldCheck className="w-6 h-6 text-brand-blue shrink-0" />
                  <p className="text-sm text-slate-300">
                    <span className="text-white font-bold">Tax Time Special:</span> The Complete Overhaul package is now available.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/20 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
