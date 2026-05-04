import React from 'react';
import LocationLayout from '../../layouts/LocationLayout';

export default function Ball() {
    return (
        <LocationLayout
            city="Ball"
            heroImage="https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&q=80&w=2000"
            description="Serving our local Ball drivers and commercial fleets with reliable, expert auto repair, precision alignments, and professional windshield replacement."
            landmarks={[
                {
                    name: "Ball Town Hall",
                    description: "Centrally located to support the local municipal workforce and municipal fleets with priority tire and alignment service."
                },
                {
                    name: "Hwy 165 Corridor",
                    description: "Located perfectly along the main artery through town, providing rapid emergency dispatch and glass service for commuters."
                }
            ]}
        />
    );
}
