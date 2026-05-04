import { useLocation } from 'react-router-dom';

export function useCallRouting() {
    const location = useLocation();
    const path = location.pathname.toLowerCase();

    let phoneNumber = "(318) 442-2003";
    let phoneHref = "tel:3184422003";
    let deskLabel = "Emergency Dispatch";

    if (path.includes('/glass')) {
        phoneNumber = "(318) 442-GLASS";
        phoneHref = "tel:3184424527";
        deskLabel = "Fast Glass Desk";
    } else if (path.includes('/tire') || path.includes('/wheel') || path.includes('alignment') || path.includes('suspension')) {
        phoneNumber = "(318) 442-TIRE";
        phoneHref = "tel:3184428473";
        deskLabel = "Tire & Alignment Desk";
    } else if (path.includes('/fleet') || path.includes('commercial')) {
        phoneNumber = "(318) 442-2003";
        phoneHref = "tel:3184422003";
        deskLabel = "Commercial Fleet Desk";
    } else if (
        path.includes('repair') ||
        path.includes('maintenance') ||
        path.includes('engine') ||
        path.includes('transmission') ||
        path.includes('brake') ||
        path.includes('service')
    ) {
        phoneNumber = "(318) 442-2003";
        phoneHref = "tel:3184422003";
        deskLabel = "Service & Repair Desk";
    }

    return { phoneNumber, phoneHref, deskLabel };
}
