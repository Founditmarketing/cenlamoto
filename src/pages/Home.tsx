import React from 'react';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import LocationMap from '../components/LocationMap';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, DollarSign } from 'lucide-react';

export default function Home() {
    return (
        <>
            <Hero />
            <div className="bg-brand-blue/10 border-y border-brand-blue/20 py-4 text-center px-4 backdrop-blur-md">
                <p className="text-white text-sm md:text-base font-bold flex items-center justify-center gap-2 flex-wrap">
                    <Tag className="w-5 h-5 text-brand-blue" />
                    Looking to bundle and save? 
                    <Link to="/specials" className="text-brand-blue hover:text-white underline underline-offset-4 transition-colors flex items-center gap-1">
                        View our multi-service discounts <ArrowRight className="w-4 h-4" />
                    </Link>
                </p>
            </div>
            <Brands />
            <section className="py-20 bg-slate-950 border-t border-white/5 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Transparent Pricing for Every Budget</h2>
                    <p className="text-slate-400 mb-8 text-lg">We believe in honest, upfront pricing without the surprises. Explore our clear service packages and commercial fleet options.</p>
                    <Link to="/pricing" className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark shadow-lg shadow-brand-blue/20 text-white px-8 py-4 rounded-xl font-bold transition-all group">
                        <DollarSign className="w-5 h-5" />
                        View Our Pricing Plans
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
            <WhyChooseUs />
            <Testimonials />
            <LocationMap />
        </>
    );
}
