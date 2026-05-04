import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold mb-6 uppercase tracking-widest border border-brand-blue/20">
              Inside Our Shop
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              See the National <br />
              <span className="text-brand-blue">Difference.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Take a quick tour of our state-of-the-art facility. From our advanced diagnostic bays to our comfortable customer lounge, see why Central Louisiana trusts us with their vehicles.
            </p>
            <ul className="space-y-4 mb-8 text-slate-300 font-medium">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                Modern, clean service bays
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                Factory-trained technicians at work
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                Real customer experiences
              </li>
            </ul>
          </motion.div>

          {/* Video Thumbnail Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div 
              className="relative rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/10 shadow-2xl aspect-video bg-slate-800"
              onClick={() => setIsVideoOpen(true)}
            >
              {/* Fallback image if video not loaded/provided */}
              <div className="absolute inset-0 bg-slate-800 bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-500" style={{ backgroundImage: "url('/precision_mechanic.png')" }} />
              <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.4)] group-hover:scale-110 group-active:scale-95 transition-all duration-300 relative">
                  <Play className="w-8 h-8 text-white ml-2" fill="currentColor" />
                  <div className="absolute inset-0 bg-brand-blue rounded-full animate-ping opacity-20" />
                </div>
              </div>
            </div>
            
            {/* Decorative blobs */}
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-brand-blue/30 blur-[60px] rounded-full" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-5xl rounded-2xl overflow-hidden aspect-video bg-black shadow-2xl border border-white/10 flex items-center justify-center"
            >
                {/* Embedded Video Placeholder */}
                <div className="text-center p-8">
                    <Play className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                    <p className="text-slate-400 font-display text-xl">Promotional Video Coming Soon</p>
                    <p className="text-slate-500 text-sm mt-2">Space reserved for YouTube/Vimeo embed</p>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
