import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingGrid() {
  const tiers = [
    {
      name: 'Essential Maintenance',
      price: 'Starting at $59',
      description: 'Keep your daily driver running smooth and safe with our basic service package.',
      features: [
        'Full Synthetic Oil Change',
        'Multi-Point Inspection',
        'Tire Rotation & Pressure Check',
        'Fluid Top-Off',
        'Battery Health Test'
      ],
      highlighted: false,
      color: 'blue'
    },
    {
      name: 'Complete Protection',
      price: 'Starting at $149',
      description: 'The ultimate care package ensuring long-term reliability and performance.',
      features: [
        'Everything in Essential',
        'Computerized 4-Wheel Alignment',
        'Road Force Tire Balancing',
        'Brake System Evaluation',
        'Filter Replacement Check'
      ],
      highlighted: true,
      color: 'brand-blue'
    },
    {
      name: 'Commercial/Fleet',
      price: 'Custom Pricing',
      description: 'Tailored solutions for your business fleet. Priority service to minimize downtime.',
      features: [
        'Priority Bay Access',
        'Volume Tire Discounts',
        'Dedicated Account Manager',
        'DOT Inspection Certifications',
        'Mobile Service Available'
      ],
      highlighted: false,
      color: 'emerald'
    }
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.03),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-brand-blue text-xs font-bold mb-6 uppercase tracking-widest border border-white/10"
          >
            Clear Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Transparent Solutions for <br />
            <span className="text-slate-500">Every Budget.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative p-8 rounded-[2rem] border transition-all duration-300 flex flex-col h-full bg-slate-900/50 hover:-translate-y-2 hover:shadow-2xl ${
                tier.highlighted 
                  ? 'border-brand-blue/30 shadow-[0_0_40px_rgba(220,38,38,0.1)]' 
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="bg-brand-blue text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                     Most Popular
                   </div>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2 font-display">{tier.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed min-h-[40px]">{tier.description}</p>
              </div>
              
              <div className="mb-8 pb-8 border-b border-white/5">
                <div className="text-3xl font-bold text-white font-display mb-1">{tier.price}</div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 text-${tier.color === 'blue' ? 'blue-500' : tier.color === 'emerald' ? 'emerald-500' : 'brand-blue'}`} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-colors group ${
                  tier.highlighted
                    ? 'bg-brand-blue hover:bg-brand-blue-dark text-white shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/5'
                }`}
              >
                Schedule Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
