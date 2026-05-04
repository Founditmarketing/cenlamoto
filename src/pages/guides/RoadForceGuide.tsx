import React from 'react';
import GuideLayout from '../../layouts/GuideLayout';

export default function RoadForceGuide() {
    return (
        <GuideLayout
            title="Understanding Road Force Balancing"
            subtitle="Why standard spin-balancing is obsolete, and how Hunter Engineering solves the vibration you can't find."
            heroImage="https://images.unsplash.com/photo-1578356956799-73fb4dc2b0e6?auto=format&fit=crop&q=80&w=2000"
            readTime="5 Min"
        >
            <h2>The Limitation of Standard Balancing</h2>
            <p>
                Traditional wheel balancers spin the tire in the air to find heavy spots, instructing the technician where to place lead or zinc weights. While this corrects weight distribution, it completely ignores a massive variable: the road.
            </p>
            <p>
                A tire that spins perfectly in the air may still vibrate violently when the weight of the vehicle is applied to it against the pavement. Why? Because tires and wheels are rarely perfectly round or uniformly stiff.
            </p>

            <h2>The Road Force Difference</h2>
            <p>
                The Hunter Road Force Elite® is the pinnacle of wheel diagnostic arrays. It utilizes a massive, mechanized roller that applies up to 1,250 pounds of force against the tire as it spins. This simulates the actual weight of the vehicle on the road.
            </p>

            <h2>Detecting Radial Force Variation (RFV)</h2>
            <p>
                As the roller presses against the tire, it measures Radial Force Variation. A tire might have "stiff spots" in the sidewall. Even if the wheel is perfectly weight-balanced, a stiff spot acting against the road will push the suspension upward every revolution, creating a harsh vibration.
            </p>

            <h2>Force Matching: The Ultimate Fix</h2>
            <p>
                When the Hunter machine detects excessive RFV, it performs a procedure called "Force Matching." The machine measures the stiffest point of the tire and the lowest point (the runout) of the metal wheel. It then directs the technician to break the bead and rotate the tire on the rim so the "high/stiff" spot of the rubber matches the "low" spot of the metal.
            </p>
            <p>
                This physically cancels out the vibration, creating a phenomenally smooth, glass-like ride quality that standard balancers simply cannot replicate. At National Automotive Group, we utilize this elite tech on every set of tires we mount.
            </p>
        </GuideLayout>
    );
}
