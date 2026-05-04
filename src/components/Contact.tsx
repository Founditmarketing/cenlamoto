import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Send, Calendar, Car, Wrench, ShieldCheck } from 'lucide-react';
import { useCallRouting } from '../hooks/useCallRouting';

export default function Contact() {
  const { phoneNumber, phoneHref, deskLabel } = useCallRouting();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    service: '',
    vehicle: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out. Our dispatch team will confirm your appointment shortly.');
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Information Column */}
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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs font-bold mb-8 uppercase tracking-widest border border-white/5"
            >
              <Calendar className="w-3 h-3 text-brand-blue" />
              Direct Channel
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 tracking-tight">
              Ready to <br />
              <span className="text-brand-blue text-glow-red">Recalibrate?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium max-w-lg">
              Pineville's master hub for tires, glass, and mechanical excellence. Schedule your intervention or fleet consultation today.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/5 transition-all">
                  <Phone className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{deskLabel}</p>
                  <a href={phoneHref} className="text-xl font-display font-bold text-white hover:text-brand-blue transition-colors">{phoneNumber}</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/5 transition-all">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Operations HQ</p>
                  <p className="text-xl font-display font-bold text-white">400 Hwy 165 South, Pineville, LA</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/5 transition-all">
                  <Clock className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Active Hours</p>
                  <p className="text-xl font-display font-bold text-white">Mon — Fri: 8AM - 5PM</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-[2rem] border border-white/5 flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
              </div>
              <p className="text-slate-400 font-bold text-sm leading-relaxed italic">
                Authorized DOT Inspection Hub — Official Certification Center.
              </p>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/20 to-transparent rounded-[3rem] blur-2xl opacity-50" />
            <form
              onSubmit={handleSubmit}
              className="relative glass p-8 md:p-12 rounded-[3.5rem] border border-white/10 shadow-2xl"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-8 tracking-tight flex items-center gap-3">
                <Wrench className="w-6 h-6 text-brand-blue" />
                Secure Deployment
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-brand-blue/50 focus:bg-white/10 transition-all font-medium text-white placeholder:text-slate-600"
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-brand-blue/50 focus:bg-white/10 transition-all font-medium text-white placeholder:text-slate-600"
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="tel"
                    placeholder="(318) 555-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 focus:outline-none focus:border-brand-blue/50 focus:bg-white/10 transition-all font-medium text-white placeholder:text-slate-600"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Vehicle Details</label>
                  <div className="relative">
                    <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      placeholder="Year, Make, Model"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 focus:outline-none focus:border-brand-blue/50 focus:bg-white/10 transition-all font-medium text-white placeholder:text-slate-600"
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Target Service</label>
                  <select
                    className="w-full bg-slate-800 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-brand-blue/50 appearance-none font-medium text-white cursor-pointer"
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">Select a service...</option>
                    <option value="bundle">Multi-Service Bundle (Discounted)</option>
                    <option value="mechanical">Mechanical Repair / Oil Change</option>
                    <option value="tires">Tires & Alignment</option>
                    <option value="glass">Auto Glass / Windshield</option>
                    <option value="commercial">DOT Inspection / Fleet Service</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-5 rounded-[1.5rem] transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-3 text-lg"
              >
                Request Priority Quote
                <Send className="w-5 h-5" />
              </motion.button>

              <p className="text-center text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] mt-8">
                End-to-end secure scheduling protocol active
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
