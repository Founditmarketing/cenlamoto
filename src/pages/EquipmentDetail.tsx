import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Loader2, AlertCircle, Tag, Hash, Phone, ChevronRight } from 'lucide-react';
import { useInventory, InventoryItem } from '../hooks/useInventory';
import { useCallRouting } from '../hooks/useCallRouting';

/**
 * Convert a Google Drive share URL to a directly embeddable image URL.
 * e.g. https://drive.google.com/file/d/FILE_ID/view?... → https://drive.google.com/thumbnail?id=FILE_ID&sz=w800
 */
function toDriveImageUrl(url: string): string {
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w800`;
  return url;
}

// Resolve the item id back to an original value (undo URL-encoding/slugging)
function decodeItemId(slug: string): string {
  return decodeURIComponent(slug).replace(/-/g, ' ');
}

// Given the full inventory list and the route slug, find the matching item.
function findItem(
  items: InventoryItem[],
  idSlug: string,
  locationState: InventoryItem | null
): { item: InventoryItem | null; index: number } {
  // Fast path: router state carried the item directly (same-session navigation)
  if (locationState) return { item: locationState, index: -1 };

  // Reconstruct what the slug was built from
  const decoded = decodeItemId(idSlug);

  // Try matching by index (numeric slug)
  const numeric = parseInt(idSlug, 10);
  if (!isNaN(numeric) && items[numeric]) return { item: items[numeric], index: numeric };

  // Try matching by common id/sku columns
  const idColumns = ['id', 'sku', 'item id', 'item_id', 'stock #', 'stock#', 'part number', 'part#'];
  for (const item of items) {
    for (const key of Object.keys(item)) {
      if (idColumns.includes(key.toLowerCase())) {
        const val = item[key].toLowerCase().replace(/\s+/g, '-');
        if (val === idSlug.toLowerCase() || item[key].toLowerCase() === decoded.toLowerCase()) {
          return { item, index: -1 };
        }
      }
    }
  }

  return { item: null, index: -1 };
}

// Columns to exclude from the full detail view (usually handled separately)
const EXCLUDED_DISPLAY_KEYS = new Set(['image', 'images', 'img', 'photo', 'url', 'link', 'thumbnail']);

export default function EquipmentDetail() {
  const { id: idSlug = '' } = useParams<{ id: string }>();
  const location = useLocation();
  const { phoneHref } = useCallRouting();
  const { items, loading, error } = useInventory();

  // The Inventory list page passes state={{ item, index }} for instant rendering
  const locationItem: InventoryItem | null = (location.state as any)?.item ?? null;
  const { item } = findItem(items, idSlug, locationItem);

  // Derive display fields
  const nameKey = item
    ? Object.keys(item).find((k) =>
        ['name', 'title', 'item', 'product', 'description'].includes(k.toLowerCase())
      )
    : null;
  const displayName = item && nameKey ? item[nameKey] : `Equipment #${idSlug}`;

  const priceKey = item
    ? Object.keys(item).find((k) =>
        ['price', 'cost', 'rate', 'msrp'].includes(k.toLowerCase())
      )
    : null;

  const imageKey = item
    ? Object.keys(item).find((k) =>
        ['image', 'images', 'img', 'photo', 'thumbnail'].includes(k.toLowerCase())
      )
    : null;

  // Take only the first image URL if multiple are comma-separated, then convert Drive links
  const rawImageUrl = imageKey && item ? item[imageKey].split(',')[0].trim() : null;
  const imageUrl = rawImageUrl ? toDriveImageUrl(rawImageUrl) : null;

  const displayFields = item
    ? Object.entries(item).filter(
        ([k, v]) => v && k !== nameKey && !EXCLUDED_DISPLAY_KEYS.has(k.toLowerCase())
      )
    : [];

  return (
    <div className="pt-24 min-h-screen bg-slate-900">
      {/* Back breadcrumb */}
      <div className="border-b border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/inventory" className="hover:text-slate-300 transition-colors">Inventory</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-300 font-medium truncate max-w-xs">{displayName}</span>
          </nav>
        </div>
      </div>

      {/* Loading */}
      {loading && !locationItem && (
        <div className="flex flex-col items-center justify-center py-40 gap-4">
          <Loader2 className="w-10 h-10 text-brand-blue animate-spin" />
          <p className="text-slate-400 text-sm font-medium">Loading item details…</p>
        </div>
      )}

      {/* Error */}
      {!loading && error && !locationItem && (
        <div className="flex flex-col items-center justify-center py-40 gap-4">
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
            <AlertCircle className="w-10 h-10 text-red-400" />
          </div>
          <p className="text-slate-300 font-semibold">Unable to load item</p>
          <p className="text-slate-500 text-sm">{error}</p>
          <Link to="/inventory" className="mt-2 flex items-center gap-2 text-brand-blue text-sm font-semibold hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Inventory
          </Link>
        </div>
      )}

      {/* Not Found */}
      {!loading && !error && !item && (
        <div className="flex flex-col items-center justify-center py-40 gap-4">
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
            <AlertCircle className="w-10 h-10 text-slate-500" />
          </div>
          <p className="text-slate-300 font-semibold">Item not found</p>
          <p className="text-slate-500 text-sm">This item may have been removed or sold.</p>
          <Link to="/inventory" className="mt-2 flex items-center gap-2 text-brand-blue text-sm font-semibold hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Inventory
          </Link>
        </div>
      )}

      {/* Detail View */}
      {item && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10">

              {/* Left / Image column */}
              <motion.div
                className="lg:col-span-3 flex flex-col gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Image */}
                {imageUrl ? (
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-800/50 aspect-video flex items-center justify-center">
                    <img
                      src={imageUrl}
                      alt={displayName}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                ) : (
                  <div className="rounded-2xl border border-white/10 bg-slate-800/30 aspect-video flex flex-col items-center justify-center gap-3 text-slate-600">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                      <Hash className="w-8 h-8" />
                    </div>
                    <span className="text-sm">No image available</span>
                  </div>
                )}

                {/* All Data Fields */}
                <div className="bg-slate-800/30 border border-white/5 rounded-2xl divide-y divide-white/5 overflow-hidden">
                  {displayFields.map(([key, value]) => (
                    <div key={key} className="flex items-start justify-between gap-4 px-5 py-3.5">
                      <span className="text-slate-500 text-sm capitalize shrink-0 w-36">{key}</span>
                      <span className="text-slate-200 text-sm font-medium text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right / Summary column */}
              <motion.div
                className="lg:col-span-2 flex flex-col gap-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Title card */}
                <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold uppercase tracking-widest mb-3">
                    <Hash className="w-3.5 h-3.5" />
                    {idSlug}
                  </div>
                  <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-tight">
                    {displayName}
                  </h1>
                  {priceKey && item[priceKey] && (
                    <div className="flex items-center gap-2 text-2xl font-bold text-emerald-400 mb-6">
                      <Tag className="w-5 h-5" />
                      {item[priceKey]}
                    </div>
                  )}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Interested in this item? Contact our team for full specifications, availability confirmation, and pricing details.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={phoneHref}
                      id="equipment-call-cta"
                      className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg"
                    >
                      <Phone className="w-4 h-4" />
                      Call to Inquire
                    </a>
                    <Link
                      to="/contact"
                      id="equipment-contact-cta"
                      className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold py-4 px-6 rounded-xl transition-colors"
                    >
                      Send a Message
                    </Link>
                  </div>
                </div>

                {/* Back link */}
                <Link
                  to="/inventory"
                  id="back-to-inventory"
                  className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to All Inventory
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
