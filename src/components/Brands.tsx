import React from 'react';
import { motion } from 'motion/react';
import { Car, Wrench, Shield, Cog } from 'lucide-react';

export default function Brands() {
  const brands = [
    {
      name: 'National Tire & Auto',
      description: 'The industrial cornerstone for retail tires, heavy-duty truck maintenance, and full-spectrum mechanical repair.',
      icon: <Wrench className="w-10 h-10 text-brand-blue" />,
      color: 'border-brand-blue/20 bg-brand-blue/5',
    },
    {
      name: 'Fast Glass',
      description: 'Pineville\'s expert hub for windshield repair, complete replacements, and professional window tinting.',
      icon: <Shield className="w-10 h-10 text-blue-500" />,
      color: 'border-blue-500/20 bg-blue-500/5',
    },
    {
      name: 'National Autoplex',
      description: 'Streamlined automotive acquisition and pre-owned vehicle sales under a trusted regional brand.',
      icon: <Car className="w-10 h-10 text-emerald-500" />,
      color: 'border-emerald-500/20 bg-emerald-500/5',
    },
    {
      name: 'National Transmission',
      description: 'Expert 1-3 day turnaround for remanufactured transmissions. We remanufacture to the highest of standards rather than simply rebuilding.',
      icon: <Cog className="w-10 h-10 text-orange-500" />,
      color: 'border-orange-500/20 bg-orange-500/5',
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs font-bold mb-8 uppercase tracking-widest border border-white/5"
          >
            Regional Powerhouse
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tight">
            Four Entities. <br />
            <span className="text-brand-blue">One Strategic Hub.</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium leading-relaxed">
            We have engineered a consolidated automotive ecosystem in Pineville. Integrated services, synchronized logistics, and unparalleled efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`group p-10 rounded-[2.5rem] border ${brand.color} glass hover:shadow-2xl transition-all duration-500`}
            >
              <div className="mb-8 inline-flex p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {brand.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{brand.name}</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                {brand.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
