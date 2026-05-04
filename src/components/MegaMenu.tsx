import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Activity, Wrench, Shield, Compass, MapPin, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = React.useState('');

    // Close menu on route change
    React.useEffect(() => {
        onClose();
    }, [location, onClose]);

    // Lock scroll when open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                document.getElementById('megamenu-search')?.focus();
            }, 100);
        } else {
            document.body.style.overflow = '';
            setSearchQuery('');
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const menuColumns = [
        {
            title: 'Where to Find Us',
            description: 'Our primary auto service centers & specialty hubs.',
            icon: MapPin,
            links: [
                { name: 'Alexandria Hub', href: '/locations/alexandria', isHighlight: true },
                { name: 'Pineville Hub', href: '/locations/pineville', isHighlight: true },
                { name: 'Transmission Center', href: 'https://nattransmission.com/', isHighlight: true },
                { name: 'Glass Calibration Center', href: '/services/glass-calibration' },
            ]
        },
        {
            title: 'Tires & Auto Service',
            description: 'Core repairs and most common automotive needs.',
            icon: Activity,
            links: [
                { name: 'New Tires & Hunter Alignment', href: '/services/tires-alignment' },
                { name: 'Brake Pads & Rotors', href: '/services/brake-repair-rotors' },
                { name: 'A/C Repair & Recharge', href: '/services/ac-repair-recharge' },
                { name: 'Check Engine Diagnostics', href: '/services/electrical-diagnostics' },
                { name: 'Steering & Suspension', href: '/services/suspension-shocks-struts' }
            ]
        },
        {
            title: 'Maintenance & Specialty',
            description: 'Preventative care & complex technical repairs.',
            icon: Wrench,
            links: [
                { name: 'Oil Changes & Preventative', href: '/services/oil-change-lube' },
                { name: 'Factory Scheduled Maintenance', href: '/services/preventative-maintenance' },
                { name: 'ADAS Glass Calibration', href: '/services/glass-calibration', isHighlight: true },
                { name: 'Transmission Remanufacturing', href: 'https://nattransmission.com/', isHighlight: true },
                { name: 'European & Import Repair', href: '/services/european-import-repair' }
            ]
        },
        {
            title: 'Resources & Fleet',
            description: 'Pricing guides, offers, and business solutions.',
            icon: Shield,
            links: [
                { name: 'Commercial Fleet Services', href: '/fleet', isHighlight: true },
                { name: 'Transparent Pricing Plans', href: '/pricing', isHighlight: true },
                { name: 'Special Offers & Bundles', href: '/specials' },
                { name: 'The National Story', href: '/about' },
                { name: 'Warranties & FAQ', href: '/faq' }
            ]
        }
    ];

    const locations = [
        { name: 'Alexandria Hub', href: '/locations/alexandria' },
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

    const guides = [
        { name: 'ADAS Calibration Science', href: '/guides/the-ultimate-guide-to-adas-calibration' },
        { name: 'Fleet Maintenance Standard', href: '/guides/commercial-fleet-maintenance-checklist' },
        { name: 'Hunter Road Force Tech', href: '/guides/understanding-road-force-balancing' }
    ];

    const filteredColumns = menuColumns.map(col => ({
        ...col,
        links: col.links.filter(link => link.name.toLowerCase().includes(searchQuery.toLowerCase()))
    })).filter(col => col.links.length > 0);

    const filteredLocations = locations.filter(loc => loc.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const filteredGuides = guides.filter(guide => guide.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[100001] bg-slate-950/95 backdrop-blur-3xl overflow-y-auto"
                >
                    {/* Subtle Background Accent */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

                    <div className="min-h-screen max-w-[1600px] mx-auto px-6 py-8 md:py-24 relative z-10">

                        {/* Header / Close */}
                        <div className="flex justify-between items-center mb-16 md:mb-24">
                            <Link to="/" onClick={onClose} className="flex items-center gap-3 group">
                                <img
                                    src="/nattireautologo.png"
                                    alt="National Tire & Auto"
                                    className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-90 transition-transform duration-500 group-hover:scale-105"
                                />
                                <span className="font-display font-bold text-xl tracking-tight text-white uppercase group-hover:text-brand-blue transition-colors hidden sm:block">Command Center</span>
                            </Link>

                            <button
                                onClick={onClose}
                                className="group flex items-center gap-3 text-white hover:text-brand-blue transition-colors"
                            >
                                <span className="text-sm font-bold tracking-widest uppercase hidden md:block">Close Menu</span>
                                <div className="p-3 md:p-4 rounded-full glass-light border border-white/10 group-hover:border-brand-blue/30 transition-all">
                                    <X className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                            </button>
                        </div>

                        {/* Search Bar */}
                        <div className="mb-12 relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-slate-500 group-focus-within:text-brand-blue transition-colors" />
                            </div>
                            <input
                                id="megamenu-search"
                                type="text"
                                className="block w-full pl-12 pr-4 py-4 md:py-5 glass-light border border-white/10 rounded-2xl leading-5 bg-transparent text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all font-display text-lg"
                                placeholder="Search for a service, repair, or location..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Main Navigation Matrix */}
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 md:gap-x-16 gap-y-16 mb-24">
                            {filteredColumns.map((col, idx) => (
                                <motion.div
                                    key={col.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.6 }}
                                >
                                    <div className="flex items-start gap-4 mb-8">
                                        <div className="p-3 bg-brand-blue/10 rounded-xl mt-1 shrink-0">
                                            <col.icon className="w-6 h-6 text-brand-blue" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-display font-bold text-white tracking-tight leading-tight mb-2">{col.title}</h3>
                                            <p className="text-sm font-medium text-slate-400 leading-relaxed pr-4">{col.description}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-4">
                                        {col.links.map((link) => (
                                            <li key={link.name}>
                                                {link.href.startsWith('http') ? (
                                                    <a
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`group flex items-center text-lg lg:text-[1.35rem] leading-snug font-bold ${link.isHighlight ? 'text-brand-blue' : 'text-slate-400 hover:text-white'
                                                            } transition-colors`}
                                                    >
                                                        <span className="relative">
                                                            {link.name}
                                                            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                                        </span>
                                                    </a>
                                                ) : (
                                                    <Link
                                                        to={link.href}
                                                        className={`group flex items-center text-lg lg:text-[1.35rem] leading-snug font-bold ${link.isHighlight ? 'text-brand-blue' : 'text-slate-400 hover:text-white'
                                                            } transition-colors`}
                                                    >
                                                        <span className="relative">
                                                            {link.name}
                                                            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                                        </span>
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        {/* Secondary Footer / Locations */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="border-t border-white/10 pt-16 grid lg:grid-cols-3 gap-12"
                        >
                            <div>
                                <h4 className="text-white font-display font-bold mb-6 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-brand-blue" /> Service Footprint
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {filteredLocations.map(loc => (
                                        <Link key={loc.name} to={loc.href} className="px-4 py-2 rounded-full glass border border-white/10 text-sm font-bold text-slate-300 hover:text-white hover:border-brand-blue/50 transition-colors">
                                            {loc.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <h4 className="text-white font-display font-bold mb-6 flex items-center gap-2">
                                    <Compass className="w-4 h-4 text-brand-blue" /> Authority Guides
                                </h4>
                                <div className="flex flex-col gap-3">
                                    {filteredGuides.map(guide => (
                                        <Link key={guide.name} to={guide.href} className="text-slate-400 hover:text-white text-sm font-bold flex items-center gap-2 group">
                                            <ArrowRight className="w-3 h-3 text-brand-blue opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                            {guide.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
