import React from 'react';
import GuideLayout from '../../layouts/GuideLayout';

export default function Service30k() {
    return (
        <GuideLayout
            title="30,000 Mile Factory Service"
            subtitle="Protect your powertrain warranty and clear out original break-in fluids."
            heroImage="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=2000"
            readTime="3 Min"
        >
            <h2>The Critical First Threshold</h2>
            <p>
                The 30,000-mile mark is one of the most critical intervals in a vehicle's life. This is typically when the factory "break-in" phase is completely finished. Fluids that have been absorbing microscopic manufacturing debris must be flushed out to ensure long-term durability.
            </p>

            <h2>Core 30k Services Performed</h2>
            <ul>
                <li><strong>Synthetic Fluid Exchange:</strong> Comprehensive engine oil and filter replacement utilizing premium synthetic lubricants.</li>
                <li><strong>Air Induction Cleaning:</strong> Replacement of the engine air filter and cabin air filter, ensuring both the engine and passengers receive unrestricted, clean airflow.</li>
                <li><strong>Brake System Flush:</strong> Brake fluid is hygroscopic (it absorbs moisture). By 30k miles, it often contains enough water to lower its boiling point and corrode ABS modules. We perform a full line flush.</li>
                <li><strong>Tire Rotation & Balance:</strong> Maximizing tread life by addressing initial wear patterns.</li>
            </ul>

            <h2>Warranty Preservation</h2>
            <p>
                You do <strong>not</strong> have to go to the dealership to maintain your factory warranty. The Magnuson-Moss Warranty Act ensures that independent facilities like National Automotive Group can perform your scheduled maintenance. We utilize OEM-approved fluids and document all services directly to your vehicle's CarFax history, preserving its ultimate resale value.
            </p>
        </GuideLayout>
    );
}
