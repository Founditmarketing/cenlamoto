import React from 'react';
import PricingGrid from '../components/PricingGrid';
import Contact from '../components/Contact';

export default function Pricing() {
    return (
        <div className="pt-24 min-h-screen bg-slate-900">
            <PricingGrid />
            <Contact />
        </div>
    );
}
