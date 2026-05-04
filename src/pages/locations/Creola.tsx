import React from 'react';
import LocationLayout from '../../layouts/LocationLayout';

export default function Creola() {
    return (
        <LocationLayout
            city="Creola"
            heroImage="https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&q=80&w=2000"
            description="Premier automotive support for Creola residents, specializing in precision alignments, diagnostic testing, and reliable windshield calibration."
            landmarks={[
                {
                    name: "I-49 Corridor",
                    description: "Perfectly positioned near major interstates to provide Creola commuters with rapid emergency dispatch and glass service."
                },
                {
                    name: "Local Agricultural Hubs",
                    description: "Heavy-duty truck and tractor repair for our robust local farming community. We handle 18-wheeler fleet logistics daily."
                }
            ]}

        />
    );
}
