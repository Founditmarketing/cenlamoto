import React from 'react';
import LocationLayout from '../../layouts/LocationLayout';

export default function Tioga() {
    return (
        <LocationLayout
            city="Tioga"
            heroImage="https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&q=80&w=2000"
            description="Providing Tioga and nearby communities with uncompromising mechanical care, specialized tire installations, and DOT-certified vehicle inspections."
            landmarks={[
                {
                    name: "Tioga Heritage Park and Museum",
                    description: "Preserving local history while deploying the most advanced 3D laser alignment technology for today's modern vehicles."
                },
                {
                    name: "Camp Beauregard",
                    description: "We salute our National Guard members. Rely on us for uncompromising safety and precision auto repair before and after deployment."
                }
            ]}
        />
    );
}
