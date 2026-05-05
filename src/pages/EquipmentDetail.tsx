import React, { useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft, Loader2, AlertCircle, Tag, Phone, ChevronRight, Layers, ImageOff, ChevronLeft,
} from 'lucide-react';
import { useInventory, InventoryItem } from '../hooks/useInventory';
import { useCallRouting } from '../hooks/useCallRouting';

// ── Image helpers ─────────────────────────────────────────────────────────────

function toDriveThumb(url: string, size = 'w1200'): string | null {
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://drive.google.com/thumbnail?id=${match[1]}&sz=${size}`;
  return null;
}

/** Extract ALL valid Drive thumbnail URLs from the Images cell */
function getAllImages(imagesCell: string): string[] {
  if (!imagesCell) return [];
  const parts = imagesCell
    .split(/,|\s+(?=https?:\/\/)/)
    .map((s) => s.trim())
    .filter((s) => s.startsWith('http'));
  return parts.map((u) => toDriveThumb(u)).filter(Boolean) as string[];
}

// ── Item lookup ───────────────────────────────────────────────────────────────

function findItem(
  items: InventoryItem[],
  idSlug: string,
  locationState: InventoryItem | null
): { item: InventoryItem | null } {
  if (locationState) return { item: locationState };
  const decoded = decodeURIComponent(idSlug).replace(/-/g, ' ');
  const numeric = parseInt(idSlug, 10);
  if (!isNaN(numeric) && items[numeric]) return { item: items[numeric] };
  for (const item of items) {
    const productSlug = (item['Product'] ?? '').replace(/\s+/g, '-').replace(/['"$]/g, '').slice(0, 60);
    if (productSlug.toLowerCase() === decoded.toLowerCase()) return { item };
    if ((item['SKU'] ?? '').toLowerCase() === decoded.toLowerCase()) return { item };
  }
  return { item: null };
}

// ── Format helpers ────────────────────────────────────────────────────────────

function formatPrice(price: string): string {
  const num = parseFloat(price);
  if (isNaN(num)) return price;
  return `$${num.toLocaleString()}`;
}

const CATEGORY_COLORS: Record<string, string> = {
  'Golf Carts': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
  'Riding Mowers': 'bg-amber-500/15 text-amber-400 border-amber-500/20',
};
function getCategoryStyle(cat: string): string {
  return CATEGORY_COLORS[cat] ?? 'bg-brand-blue/10 text-brand-blue border-brand-blue/20';
}

// Fields to hide from the spec table (handled in UI separately)
const HIDDEN_FIELDS = new Set(['Product', 'Images', 'Price', 'Unavailable', 'Committed', 'Incoming']);

// ── Component ─────────────────────────────────────────────────────────────────

export default function EquipmentDetail() {
  const { id: idSlug = '' } = useParams<{ id: string }>();
  const location = useLocation();
  const { phoneHref } = useCallRouting();
  const { items, loading, error } = useInventory();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const locationItem: InventoryItem | null = (location.state as any)?.item ?? null;
  const { item } = findItem(items, idSlug, locationItem);

  const images = item ? getAllImages(item['Images'] ?? '') : [];
  const activeImage = images[photoIndex] ?? null;

  const category = item?.['Category'] ?? '';
  const price = item?.['Price'] ?? '';
  const available = item?.['Available'] ?? '0';
  const onHand = item?.['On Hand'] ?? '0';
  const inStock = parseInt(onHand, 10) > 0 || parseInt(available, 10) > 0;

  const specFields = item
    ? Object.entries(item).filter(([k]) => !HIDDEN_FIELDS.has(k))
    : [];

  return (
    <div className="pt-24 min-h-screen bg-slate-900">

      {/* Breadcrumb */}
      <div className="border-b border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/inventory" className="hover:text-slate-300 transition-colors">Inventory</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-300 font-medium truncate max-w-xs">{item?.['Product'] ?? idSlug}</span>
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

      {/* Detail */}
      {item && (
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10">

              {/* ── Left: Images + Specs ── */}
              <motion.div
                className="lg:col-span-3 flex flex-col gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Main image */}
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-800/50 aspect-[4/3] flex items-center justify-center relative">
                  {activeImage && !imgError ? (
                    <img
                      key={activeImage}
                      src={activeImage}
                      alt={item['Product']}
                      className="w-full h-full object-cover"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-3 text-slate-600">
                      <ImageOff className="w-12 h-12" />
                      <span className="text-sm">No image available</span>
                    </div>
                  )}

                  {/* Prev/Next arrows when multiple images */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => { setImgError(false); setPhotoIndex((i) => (i - 1 + images.length) % images.length); }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => { setImgError(false); setPhotoIndex((i) => (i + 1) % images.length); }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => { setImgError(false); setPhotoIndex(i); }}
                            className={`w-2 h-2 rounded-full transition-all ${i === photoIndex ? 'bg-white scale-125' : 'bg-white/40'}`}
                            aria-label={`Photo ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnail strip */}
                {images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => { setImgError(false); setPhotoIndex(i); }}
                        className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          i === photoIndex ? 'border-brand-blue' : 'border-white/10 opacity-60 hover:opacity-100'
                        }`}
                        aria-label={`Thumbnail ${i + 1}`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Spec table */}
                <div className="bg-slate-800/30 border border-white/5 rounded-2xl divide-y divide-white/5 overflow-hidden">
                  <div className="px-5 py-3 bg-slate-900/50">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Specifications</p>
                  </div>
                  {specFields.map(([key, value]) => (
                    <div key={key} className="flex items-start justify-between gap-4 px-5 py-3.5">
                      <span className="text-slate-500 text-sm capitalize shrink-0 w-36">{key}</span>
                      <span className="text-slate-200 text-sm font-medium text-right">{value || '—'}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ── Right: Summary + CTA ── */}
              <motion.div
                className="lg:col-span-2 flex flex-col gap-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-slate-800/50 border border-white/5 rounded-2xl p-6 flex flex-col gap-4">
                  {/* Category badge */}
                  {category && (
                    <span className={`inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryStyle(category)}`}>
                      <Layers className="w-3.5 h-3.5" />
                      {category}
                    </span>
                  )}

                  {/* Name */}
                  <h1 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                    {item['Product']}
                  </h1>

                  {/* Price */}
                  {price && (
                    <div className="flex items-center gap-2 text-3xl font-bold text-emerald-400">
                      <Tag className="w-6 h-6" />
                      {formatPrice(price)}
                    </div>
                  )}

                  {/* Stock status */}
                  <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold border self-start ${
                    inStock
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : 'bg-slate-700/50 text-slate-400 border-white/10'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${inStock ? 'bg-emerald-400' : 'bg-slate-500'}`} />
                    {inStock ? `${onHand} In Stock` : 'Contact Us for Availability'}
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    Interested in this item? Contact our team for full details, availability confirmation, and financing options.
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3 pt-2">
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

                {/* Back */}
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
