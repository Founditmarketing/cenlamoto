import React from 'react';
import LocationLayout from '../../layouts/LocationLayout';

export default function GrantParish() {
    return (
        <LocationLayout
            city="Grant Parish"
            heroImage="https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&q=80&w=2000"
            description="Serving the entirety of Grant Parish with rapid mobile tire dispatch, advanced auto mechanics, and comprehensive commercial fleet services."
            landmarks={[
                {
                    name: "Stuart Lake Recreation Area",
                    description: "Equipping your vehicle for off-road recreation or family weekends at the lake with premium all-terrain tires and suspension service."
                },
                {
                    name: "Grant Parish Courthouse",
                    description: "Proudly supporting the municipal center of Grant Parish with rapid, reliable fleet maintenance and consumer auto repair."
                }
            ]}

        />
    );
}
