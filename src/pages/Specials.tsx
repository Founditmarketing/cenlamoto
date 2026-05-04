import React from 'react';
import MultiServiceDiscount from '../components/MultiServiceDiscount';
import Contact from '../components/Contact';

export default function Specials() {
    return (
        <div className="pt-24 min-h-screen bg-slate-900">
            <MultiServiceDiscount />
            <Contact />
        </div>
    );
}
