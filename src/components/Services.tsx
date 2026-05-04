import React from 'react';
import { motion } from 'motion/react';
import { Disc, Settings, ShieldCheck, ArrowRight, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      category: 'Tire & Maintenance',
      subtitle: 'National Tire & Auto',
      icon: <Disc className="w-8 h-8" />,
      image: '/tire_maintenance.png',
      description: 'Retail & heavy-duty tire solutions paired with routine factory maintenance.',
      gradient: 'from-blue-500/10 to-transparent',
      items: [
        'Retail, Big Truck & 18-Wheeler Tires',
        'Synthetic Oil Changes',
        'Computerized Alignments',
        'Brake System Service',
        'Front-End Suspension Work'
      ]
    },
    {
      category: 'Major Mechanics',
      subtitle: 'National Tire & Auto',
      icon: <Settings className="w-8 h-8" />,
      image: '/major_mechanics.png',
      description: 'Expert heavy repair and complex component replacements you can trust.',
      gradient: 'from-brand-blue/10 to-transparent',
      items: [
        'Engine Repair & Replacements',
        'Transmission Overhauls',
        'Water Pump Replacement',
        'Diagnostic Engine Analysis',
        'Advanced Cooling Systems'
      ]
    },
    {
      category: 'DOT & State Inspections',
      subtitle: 'Complete Certification Center',
      icon: <Target className="w-8 h-8" />,
      image: '/dot_inspection.png',
      description: 'The only local inspection station capable of diagnosing and fixing any failure on the spot.',
      gradient: 'from-emerald-500/10 to-transparent',
      items: [
        'Commercial DOT Inspections',
        'Louisiana State Safety Stickers',
        'Immediate Emissions Solutions',
        'On-Site Compliance Repairs',
        'Fleet Documentation Management'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-900 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.05),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-brand-blue text-xs font-bold mb-6 uppercase tracking-widest"
            >
              <Zap className="w-3 h-3" />
              Service Excellence
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-tight"
            >
              Comprehensive Care for <br />
              <span className="text-slate-500">Every Vehicle Built.</span>
            </motion.h2>
          </div>
            From everyday driver maintenance to complex ADAS glass calibration, we bring expert, reliable care to Central Louisiana. No job is too big or too small.
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-white/5 rounded-[2.5rem] p-8 border border-white/5 hover:border-brand-blue/30 transition-all duration-500 overflow-hidden bg-gradient-to-br ${service.gradient}`}
            >
              {/* Image Background Layer */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.category}
                  className="w-full h-full object-cover opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-[2s]"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60`} />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                  <div className="text-brand-blue">
                    {service.icon}
                  </div>
                </div>
                <div className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">{service.subtitle}</div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">{service.category}</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">{service.description}</p>
                <div className="h-px w-full bg-white/5 mb-8" />
                <ul className="space-y-4 mb-10">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/40 group-hover/item:bg-brand-blue transition-colors" />
                      <span className="text-slate-300 font-bold text-sm tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white tracking-wider uppercase group/link"
                >
                  Book Service
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Decorative Mesh Background for Card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0">
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brand-blue/10 blur-[60px] rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
