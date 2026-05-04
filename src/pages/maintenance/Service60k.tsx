import React from 'react';
import GuideLayout from '../../layouts/GuideLayout';

export default function Service60k() {
    return (
        <GuideLayout
            title="60,000 Mile Factory Service"
            subtitle="The defining interval that separates a 200k-mile vehicle from a catastrophic failure."
            heroImage="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&q=80&w=2000"
            readTime="4 Min"
        >
            <h2>The Heavy Maintenance Interval</h2>
            <p>
                At 60,000 miles, your vehicle transitions from "new" to "broken in." This is the point where heat and friction have begun to actively degrade core drive components. Skipping the 60k service is the leading cause of transmission failure and severe engine damage later in the vehicle's life.
            </p>

            <h2>Expanded 60k Diagnostics protocols</h2>
            <p>
                The 60k service includes everything from the 30k interval, plus heavy system evacuations:
            </p>
            <ul>
                <li><strong>Transmission Fluid Flush:</strong> Transmission fluid has lost its friction modifiers by 60k miles. Slipping gears and rough shifts are imminent if this fluid is not exchanged via our dynamic flush machines.</li>
                <li><strong>Coolant/Antifreeze Exchange:</strong> Factory coolant becomes acidic over time. This acid eats away at rubber hoses, water pump seals, and heater cores. We evacuate the system and restore the proper pH balance.</li>
                <li><strong>Drive Belt & Tensioner Inspection:</strong> Serpentine belts dry out and crack. We inspect rubber elasticity and the bearing noise of all pulleys and tensioners.</li>
                <li><strong>Spark Plug Replacement (Model Dependent):</strong> Many vehicles require their initial spark plug replacement at this interval to prevent misfires and maintain fuel economy.</li>
            </ul>

            <h2>Dealership-Level Service, Superior Mechanics</h2>
            <p>
                The 60k service is often where dealerships generate massive revenue through unnecessary up-sells. At National Automotive Group, we provide transparent, digital inspections with photographic evidence of every fluid sample and worn component. You see exactly what our master mechanics see.
            </p>
        </GuideLayout>
    );
}
