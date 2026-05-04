import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactWidget from './components/ContactWidget';
import LoadingScreen from './components/LoadingScreen';
import SmoothScroll from './components/SmoothScroll';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import TiresAlignment from './pages/TiresAlignment';
import AutoRepair from './pages/AutoRepair';
import GlassCalibration from './pages/GlassCalibration';
import About from './pages/About';
import Careers from './pages/Careers';
import FAQPage from './pages/FAQPage';
import CommercialFleet from './pages/CommercialFleet';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Specials from './pages/Specials';

// Phase 3 Locations & Guides
import Alexandria from './pages/locations/Alexandria';
import Pineville from './pages/locations/Pineville';
import Marksville from './pages/locations/Marksville';
import Leesville from './pages/locations/Leesville';
import Bunkie from './pages/locations/Bunkie';
import Opelousas from './pages/locations/Opelousas';
import Ball from './pages/locations/Ball';
import Tioga from './pages/locations/Tioga';
import GrantParish from './pages/locations/GrantParish';
import Creola from './pages/locations/Creola';
import AdasGuide from './pages/guides/AdasGuide';
import FleetGuide from './pages/guides/FleetGuide';
import RoadForceGuide from './pages/guides/RoadForceGuide';

// Phase 4 Avalanche Imports
import BrakeRepair from './pages/BrakeRepair';
import AcRepair from './pages/AcRepair';
import CheckEngine from './pages/CheckEngine';
import Suspension from './pages/Suspension';
import Service30k from './pages/maintenance/Service30k';
import Service60k from './pages/maintenance/Service60k';
import Service90k from './pages/maintenance/Service90k';
import TransmissionRebuild from './pages/TransmissionRebuild';

// Phase 6 Massive Expansion Imports
import OilChange from './pages/services/OilChange';
import BatteryReplacement from './pages/services/BatteryReplacement';
import PreventativeMaintenance from './pages/services/PreventativeMaintenance';
import ElectricalDiagnostics from './pages/services/ElectricalDiagnostics';
import EngineRepair from './pages/services/EngineRepair';
import TransmissionFlush from './pages/services/TransmissionFlush';
import ExhaustRepair from './pages/services/ExhaustRepair';
import WheelAlignment from './pages/services/WheelAlignment';
import SteeringRack from './pages/services/SteeringRack';
import EuropeanRepair from './pages/services/EuropeanRepair';

import Natchitoches from './pages/locations/Natchitoches';
import VillePlatte from './pages/locations/VillePlatte';
import DeRidder from './pages/locations/DeRidder';
import Oakdale from './pages/locations/Oakdale';
import Many from './pages/locations/Many';

// Brand Landing Pages
import NationalTireAndAuto from './pages/brands/NationalTireAndAuto';
import FastGlass from './pages/brands/FastGlass';
import NationalTransmission from './pages/brands/NationalTransmission';

import LLMStructuredData from './components/LLMStructuredData';
import EmergencyAlignmentAd from './pages/campaigns/EmergencyAlignmentAd';
import Inventory from './pages/Inventory';
import EquipmentDetail from './pages/EquipmentDetail';
import FleetMaintenanceAd from './pages/campaigns/FleetMaintenanceAd';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen bg-slate-900 font-sans text-white selection:bg-brand-blue selection:text-white antialiased">
          <div className="bg-noise fixed inset-0 z-[99999] pointer-events-none mix-blend-overlay opacity-40"></div>
          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingScreen onComplete={() => setIsLoading(false)} />
            ) : (
              <>
                <LLMStructuredData />
                <Navbar />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/tires-alignment" element={<TiresAlignment />} />
                    <Route path="/services/advanced-auto-repair" element={<AutoRepair />} />
                    <Route path="/services/glass-calibration" element={<GlassCalibration />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/fleet" element={<CommercialFleet />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/specials" element={<Specials />} />

                    {/* Phase 4 Content Avalanche Routes */}
                    <Route path="/services/brake-repair-rotors" element={<BrakeRepair />} />
                    <Route path="/services/ac-repair-recharge" element={<AcRepair />} />
                    <Route path="/services/check-engine-diagnostics" element={<CheckEngine />} />
                    <Route path="/services/suspension-shocks-struts" element={<Suspension />} />
                    <Route path="/services/transmission-rebuild" element={<TransmissionRebuild />} />

                    <Route path="/maintenance/30k-mile-service" element={<Service30k />} />
                    <Route path="/maintenance/60k-mile-service" element={<Service60k />} />
                    <Route path="/maintenance/90k-mile-service" element={<Service90k />} />

                    {/* Phase 6 Massive Service Expansion */}
                    <Route path="/services/oil-change-lube" element={<OilChange />} />
                    <Route path="/services/battery-testing-replacement" element={<BatteryReplacement />} />
                    <Route path="/services/preventative-maintenance" element={<PreventativeMaintenance />} />
                    <Route path="/services/electrical-diagnostics" element={<ElectricalDiagnostics />} />
                    <Route path="/services/engine-repair-rebuild" element={<EngineRepair />} />
                    <Route path="/services/transmission-flush" element={<TransmissionFlush />} />
                    <Route path="/services/exhaust-muffler-repair" element={<ExhaustRepair />} />
                    <Route path="/services/wheel-alignment-balancing" element={<WheelAlignment />} />
                    <Route path="/services/steering-rack-pinion" element={<SteeringRack />} />
                    <Route path="/services/european-import-repair" element={<EuropeanRepair />} />

                    {/* Hyper-Local Routes */}
                    <Route path="/locations/alexandria" element={<Alexandria />} />
                    <Route path="/locations/pineville" element={<Pineville />} />
                    <Route path="/locations/marksville" element={<Marksville />} />
                    <Route path="/locations/leesville" element={<Leesville />} />
                    <Route path="/locations/bunkie" element={<Bunkie />} />
                    <Route path="/locations/opelousas" element={<Opelousas />} />
                    <Route path="/locations/ball" element={<Ball />} />
                    <Route path="/locations/tioga" element={<Tioga />} />
                    <Route path="/locations/grant-parish" element={<GrantParish />} />
                    <Route path="/locations/creola" element={<Creola />} />
                    <Route path="/locations/natchitoches" element={<Natchitoches />} />
                    <Route path="/locations/ville-platte" element={<VillePlatte />} />
                    <Route path="/locations/deridder" element={<DeRidder />} />
                    <Route path="/locations/oakdale" element={<Oakdale />} />
                    <Route path="/locations/many" element={<Many />} />

                    {/* Pillar Guide Routes */}
                    <Route path="/guides/the-ultimate-guide-to-adas-calibration" element={<AdasGuide />} />
                    <Route path="/guides/commercial-fleet-maintenance-checklist" element={<FleetGuide />} />
                    <Route path="/guides/understanding-road-force-balancing" element={<RoadForceGuide />} />

                    {/* Brand Pages */}
                    <Route path="/brands/national-tire-and-auto" element={<NationalTireAndAuto />} />
                    <Route path="/brands/fast-glass" element={<FastGlass />} />
                    <Route path="/brands/national-transmission" element={<NationalTransmission />} />

                    {/* AdWords Keyword Match Pages */}
                    <Route path="/campaigns/emergency-alignment" element={<EmergencyAlignmentAd />} />
                    <Route path="/campaigns/fleet-maintenance-deals" element={<FleetMaintenanceAd />} />

                    {/* Live Inventory — Google Sheets powered */}
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/equipment/:id" element={<EquipmentDetail />} />
                  </Routes>
                </main>
                <Footer />
                <ContactWidget />
              </>
            )}
          </AnimatePresence>
        </div>
      </SmoothScroll>
    </Router>
  );
}
