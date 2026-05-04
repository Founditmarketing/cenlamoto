import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.03),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Link to="/" className="flex items-center gap-3 group">
                <img
                  src="/brands/national_automotive_group_logo.png"
                  alt="National Automotive Group"
                  className="h-10 md:h-16 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="flex flex-col justify-center">
                  <span className="font-display font-bold text-xl tracking-tight block leading-none text-white uppercase group-hover:text-brand-blue transition-colors duration-300">NATIONAL</span>
                  <span className="text-[10px] text-slate-400 tracking-[0.2em] uppercase font-bold text-nowrap">Tire & Auto</span>
                </div>
              </Link>
            </div>
            <p className="text-slate-400 max-w-sm font-medium leading-relaxed text-lg mb-8">
              Central Louisiana's premier destination for tires, auto repair, glass, and fleet services. Precise engineering for every asset.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/nationaltireandauto" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue/10 hover:border-brand-blue/30 transition-all text-slate-400 hover:text-brand-blue">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/nationaltireandauto" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue/10 hover:border-brand-blue/30 transition-all text-slate-400 hover:text-brand-blue">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/nationaltireandauto" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue/10 hover:border-brand-blue/30 transition-all text-slate-400 hover:text-brand-blue">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-8 uppercase tracking-widest text-xs flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" /> Quick Links
            </h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><Link to="/" className="hover:text-brand-blue transition-colors">Home Terminal</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Service Sectors</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-blue transition-colors">Pricing Plans</Link></li>
              <li><Link to="/specials" className="hover:text-brand-blue transition-colors">Special Offers</Link></li>
              <li><Link to="/fleet" className="hover:text-brand-blue transition-colors">Commercial Fleet</Link></li>
              <li><Link to="/about" className="hover:text-brand-blue transition-colors">The National Story</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact HQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-8 uppercase tracking-widest text-xs flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" /> Areas Served
            </h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><Link to="/locations/alexandria" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-brand-blue opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Alexandria Hub</Link></li>
              <li><Link to="/locations/pineville" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-brand-blue opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Pineville</Link></li>
              <li><Link to="/locations/marksville" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-brand-blue opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Marksville</Link></li>
              <li><Link to="/locations/leesville" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-brand-blue opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Leesville</Link></li>
              <li><Link to="/locations/bunkie" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-brand-blue opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Bunkie</Link></li>
              <li><Link to="/locations/opelousas" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-brand-blue opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Opelousas</Link></li>
              <li><Link to="/locations/natchitoches" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-brand-blue opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Natchitoches</Link></li>
              <li><Link to="/locations/ville-platte" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-brand-blue opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Ville Platte</Link></li>
              <li><Link to="/locations/deridder" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-brand-blue opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> DeRidder</Link></li>
              <li><Link to="/locations/oakdale" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-brand-blue opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Oakdale</Link></li>
              <li><Link to="/locations/many" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="w-3 h-3 text-brand-blue opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Many</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold mb-8 uppercase tracking-widest text-xs flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" /> Resources
            </h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><Link to="/guides/the-ultimate-guide-to-adas-calibration" className="hover:text-white transition-colors flex items-center gap-2 group leading-snug"><ChevronRight className="w-3 h-3 text-brand-blue opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all shrink-0" /> ADAS Calibration Science</Link></li>
              <li><Link to="/guides/commercial-fleet-maintenance-checklist" className="hover:text-white transition-colors flex items-center gap-2 group leading-snug"><ChevronRight className="w-3 h-3 text-brand-blue opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all shrink-0" /> Fleet Maintenance Standard</Link></li>
              <li><Link to="/guides/understanding-road-force-balancing" className="hover:text-white transition-colors flex items-center gap-2 group leading-snug"><ChevronRight className="w-3 h-3 text-brand-blue opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all shrink-0" /> Hunter Road Force Tech</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors flex items-center gap-2 group leading-snug"><ChevronRight className="w-3 h-3 text-brand-blue opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all shrink-0" /> Warranties & Insurance</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-600 text-center md:text-left">
            &copy; {new Date().getFullYear()} National Tire & Auto. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs font-bold tracking-widest uppercase">
            <Link to="/privacy-policy" className="text-slate-600 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-slate-600 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
