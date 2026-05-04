import React from 'react';
import GuideLayout from '../../layouts/GuideLayout';

export default function FleetMaintenanceGuide() {
    return (
        <GuideLayout
            title="Commercial Fleet Maintenance Checklist"
            subtitle="Maximize uptime and eliminate catastrophic failures with a rigid preventative maintenance schedule."
            heroImage="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2000"
            readTime="6 Min"
        >
            <h2>The Cost of Downtime</h2>
            <p>
                For a commercial operation, a grounded vehicle isn't just a repair bill; it's lost revenue, angry clients, and disrupted logistics. Waiting for parts to break before replacing them is a strategy guaranteed to burn capital. Preventative maintenance (PM) is the only shield against catastrophic downtime.
            </p>

            <h2>Core Fluid Analytics</h2>
            <p>
                Fluids are the lifeblood of heavy-duty application vehicles. They must be monitored aggressively.
            </p>
            <ul>
                <li><strong>Engine Oil:</strong> The standard 3,000-mile rule does not apply to vehicles idling for hours or hauling maximum payload. Analyze oil for metal shavings and fuel dilution.</li>
                <li><strong>Transmission Fluid:</strong> Heat destroys transmissions. Fleet vehicles generate massive torque. Fluid needs to be flushed long before it smells burnt or loses its viscosity.</li>
                <li><strong>Coolant/Antifreeze:</strong> Maintaining the correct pH balance prevents internal engine corrosion and catastrophic overheating under load.</li>
            </ul>

            <h2>The Heavy-Duty Walkaround (Daily)</h2>
            <p>
                Drivers should be mandated to perform a Pre-Trip Inspection (PTI). Key areas include:
            </p>
            <ul>
                <li><strong>Tire Pressure & Tread Depth:</strong> A blowout on a loaded commercial vehicle is a massive liability. Check for uneven wear patterns which indicate alignment issues.</li>
                <li><strong>Air Brake Systems:</strong> Listen for audible air leaks. Check gladhands and airlines for chafing.</li>
                <li><strong>Lighting & Reflectors:</strong> DOT fines for inoperable lights are an easily avoidable expense.</li>
            </ul>

            <h2>Partnering with National Automotive Group</h2>
            <p>
                We understand the urgency of commercial volume. National Automotive Group offers prioritized bay access, dedicated fleet account managers, and streamlined institutional invoicing. We don't just fix your trucks; we manage their lifecycles.
            </p>
        </GuideLayout>
    );
}
