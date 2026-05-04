import React from 'react';
import GuideLayout from '../../layouts/GuideLayout';

export default function AdasCalibrationGuide() {
    return (
        <GuideLayout
            title="The Ultimate Guide to ADAS Calibration"
            subtitle="Why your windshield is no longer just glass, and why ignoring recalibration is a fatal mistake."
            heroImage="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=2000"
            readTime="8 Min"
        >
            <h2>What is ADAS?</h2>
            <p>
                Advanced Driver Assistance Systems (ADAS) represent the most significant leap in vehicle safety since the seatbelt. This invisible net of sensors, radar, and cameras works actively to keep your vehicle centered, brake before an imminent collision, and monitor your blind spots.
            </p>

            <p>
                The core of this system, specifically the forward-facing cameras that govern Lane Departure Warning (LDW) and Automatic Emergency Braking (AEB), are mounted directly to your windshield.
            </p>

            <h2>The Danger of Uncalibrated Glass</h2>
            <p>
                When a windshield is replaced, the physical dimensions and optical clarity of the new glass differ microscopically from the factory original. If the camera is removed and reattached to the new windshield without being electronically re-aimed, its perception of the road is skewed.
            </p>

            <blockquote>
                "A camera off by just one millimeter at the windshield equates to a perception error of several feet down the highway. Your car might think the vehicle ahead is in another lane, failing to engage the emergency brakes."
            </blockquote>

            <h2>Static vs. Dynamic Calibration</h2>
            <p>
                Depending on the vehicle manufacturer (OEM), your car requires either Static or Dynamic recalibration, and frequently both.
            </p>
            <ul>
                <li><strong>Static Calibration:</strong> Performed inside our controlled facility using hyper-precise physical targets. The vehicle is leveled, and diagnostic lasers are used to ensure the camera is perfectly aligned with the target boards before the ECU is reset.</li>
                <li><strong>Dynamic Calibration:</strong> Involves plugging a diagnostic scanner into the OBD-II port and driving the vehicle at specific speeds on well-marked roads until the camera "learns" its new position relative to moving traffic and lane lines.</li>
            </ul>

            <h2>The National Standard</h2>
            <p>
                At National Automotive Group, we never replace a windshield without performing a full diagnostic sweep and the required OEM calibration. Safety is not an optional line item on an invoice. We utilize the latest Autel and Hunter calibration sleds to ensure your vehicle leaves our bays entirely restored to factory zero.
            </p>
        </GuideLayout>
    );
}
