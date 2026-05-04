import fs from 'fs';
import path from 'path';

const locationUpdates = {
    'Alexandria.tsx': '            description="Serving our local Alexandria drivers and commercial fleets with reliable, expert auto repair, precision alignments, and professional windshield replacement."',
    'Bunkie.tsx': '            description="Bringing our top-rated auto repair services to Bunkie. Trust your vehicle to experienced mechanics who prioritize honest repairs and clear, upfront pricing."',
    'DeRidder.tsx': '            description="Your dependable auto repair shop near DeRidder. We handle everything from heavy-duty engine repairs and electrical diagnostics to keeping your A/C blowing cold."',
    'Leesville.tsx': '            description="Proudly serving the Leesville and Fort Johnson communities. We accommodate family vehicles and large fleets with precision alignments and expert diagnostics."',
    'Many.tsx': '            description="Comprehensive auto repair for the Toledo Bend region. Whether you\'re hauling a boat or commuting to work, we offer reliable transmission and alignment services to keep you moving safely."',
    'Marksville.tsx': '            description="Extending our professional automotive services to Marksville. Skip the long dealership lines and bring your vehicle to mechanics who actually find and fix the root cause."',
    'Natchitoches.tsx': '            description="Your trusted automotive service center near Natchitoches. With 12 high-capacity service bays and expert technicians, we ensure your vehicle gets the dependable care it deserves."',
    'Oakdale.tsx': '            description="Dependable auto repair and maintenance for drivers in Oakdale. We offer fast turnarounds, preventative care, and specialized engine and transmission repairs."',
    'Pineville.tsx': '            description="Just across the river, Pineville residents trust us for honest, high-quality auto repair. From routine maintenance to complex engine rebuilds, we\'ve got you covered."',
    'VillePlatte.tsx': '            description="Bringing top-tier automotive service to Ville Platte. We specialize in suspension repair, brake replacements, and precision alignments for trucks and daily drivers alike."',
};

for (const [file, newDesc] of Object.entries(locationUpdates)) {
    const filePath = path.join('c:/Users/trevo/OneDrive/Desktop/AI Websites/national-automotive-group/src/pages/locations', file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(/\s+description="[^"]+"/, '\n' + newDesc);
        fs.writeFileSync(filePath, content);
    }
}
