import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, ArrowRight, MapPin, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const locations = [
      { name: 'Alexandria', href: '/locations/alexandria' },
      { name: 'Pineville', href: '/locations/pineville' },
      { name: 'Marksville', href: '/locations/marksville' },
      { name: 'Leesville', href: '/locations/leesville' },
      { name: 'Bunkie', href: '/locations/bunkie' },
      { name: 'Opelousas', href: '/locations/opelousas' },
      { name: 'Natchitoches', href: '/locations/natchitoches' },
      { name: 'Ville Platte', href: '/locations/ville-platte' },
      { name: 'DeRidder', href: '/locations/deridder' },
      { name: 'Oakdale', href: '/locations/oakdale' },
      { name: 'Many', href: '/locations/many' },
  ];

  const handleClose = React.useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100000] transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`relative overflow-hidden transition-all duration-500 ${scrolled ? 'glass shadow-2xl rounded-2xl border border-white/5' : 'bg-transparent'
            }`}>
            <div className="flex justify-between items-center h-16 md:h-20 px-6">

              {/* Logo Section */}
              <div className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to="/" className="flex items-center gap-3 group">
                    <img
                      src="/brands/national_automotive_group_logo.png"
                      alt="National Automotive Group"
                      className="h-10 md:h-16 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="hidden sm:flex flex-col justify-center">
                      <span className="font-display font-bold text-xl tracking-tight block leading-none text-white uppercase group-hover:text-brand-blue transition-colors duration-300">NATIONAL</span>
                      <span className="text-[10px] text-slate-400 tracking-[0.2em] uppercase font-bold text-nowrap">Tire & Auto</span>
                    </div>
                  </Link>
                </motion.div>
              </div>

              {/* Central Menu Trigger & Book Button */}
              <div className="flex items-center gap-4 md:gap-8">

                {/* Locations Dropdown */}
                <div className="hidden lg:block relative group py-4">
                  <button className="flex items-center gap-2 text-white font-bold tracking-widest uppercase hover:text-brand-blue transition-colors text-sm">
                    <MapPin className="w-4 h-4" />
                    Locations
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-full right-0 w-[400px] glass shadow-2xl rounded-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 p-4 bg-slate-950/90 backdrop-blur-3xl">
                    <div className="grid grid-cols-2 gap-2">
                      {locations.map((loc) => (
                        <Link
                          key={loc.name}
                          to={loc.href}
                          className="px-4 py-3 rounded-xl border border-white/5 hover:border-brand-blue/30 hover:bg-white/5 transition-all text-sm font-bold text-slate-300 hover:text-white flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-blue opacity-50" />
                          {loc.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(true)}
                  className="group flex items-center gap-3 text-white hover:text-brand-blue transition-colors"
                >
                  <span className="text-sm font-bold tracking-widest uppercase hidden md:block group-hover:tracking-[0.3em] transition-all duration-300">Menu</span>
                  <div className="p-2 md:p-3 rounded-full glass-light border border-white/10 group-hover:border-brand-blue/30 transition-all">
                    <Menu className="w-6 h-6" />
                  </div>
                </button>

                <div className="hidden md:block pl-8 border-l border-white/10">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="bg-brand-blue hover:bg-brand-blue-dark text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-brand-blue/20 flex items-center gap-2 group block"
                    >
                      Book Priority
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </nav>

      <MegaMenu isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
