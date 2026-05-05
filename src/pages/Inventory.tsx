import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Package, AlertCircle, Loader2, ChevronRight, Tag, Layers, ImageOff, Filter,
} from 'lucide-react';
import { useInventory, InventoryItem } from '../hooks/useInventory';

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Convert a Google Drive share link to a direct thumbnail URL */
function toDriveThumb(url: string): string | null {
  if (!url) return null;
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w600`;
  return null;
}

/**
 * Extract the first valid Drive thumbnail from a comma/space-separated Images cell.
 * Some entries are plain filenames (no URL) — skip those.
 */
function getFirstImage(imagesCell: string): string | null {
  if (!imagesCell) return null;
  // Split on commas, then also split fused URLs (no separator between them)
  const parts = imagesCell
    .split(/,|\s+(?=https?:\/\/)/)
    .map((s) => s.trim())
    .filter((s) => s.startsWith('http'));
  for (const url of parts) {
    const thumb = toDriveThumb(url);
    if (thumb) return thumb;
  }
  return null;
}

/** Build a URL-safe slug from SKU or product name */
function getItemSlug(item: InventoryItem, index: number): string {
  const sku = item['SKU']?.trim();
  if (sku && sku.toLowerCase() !== 'no sku') {
    return encodeURIComponent(sku.replace(/\s+/g, '-'));
  }
  const product = item['Product']?.trim();
  if (product) {
    return encodeURIComponent(product.replace(/\s+/g, '-').replace(/['"$]/g, '').slice(0, 60));
  }
  return String(index);
}

/** Format a price string */
function formatPrice(price: string): string {
  const num = parseFloat(price);
  if (isNaN(num)) return price;
  return `$${num.toLocaleString()}`;
}

/** Category colour mapping */
const CATEGORY_COLORS: Record<string, string> = {
  'Golf Carts': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
  'Riding Mowers': 'bg-amber-500/15 text-amber-400 border-amber-500/20',
};
function getCategoryStyle(cat: string): string {
  return CATEGORY_COLORS[cat] ?? 'bg-brand-blue/10 text-brand-blue border-brand-blue/20';
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Inventory() {
  const { items, loading, error } = useInventory();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Build category list preserving sheet order
  const categories = ['All', ...Array.from(new Set(items.map((i) => i['Category']).filter(Boolean)))];

  const filtered = activeCategory === 'All'
    ? items
    : items.filter((i) => i['Category'] === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-slate-900">

      {/* ── Hero ── */}
      <section className="relative py-20 bg-slate-950 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(220,38,38,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold mb-6 uppercase tracking-widest border border-brand-blue/20">
              <Package className="w-3.5 h-3.5" />
              Live Inventory
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 leading-tight">
              Available <span className="text-brand-blue">Inventory</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Real-time stock synced directly from our inventory system. Updated automatically.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <Loader2 className="w-10 h-10 text-brand-blue animate-spin" />
              <p className="text-slate-400 text-sm font-medium">Fetching live inventory…</p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
                <AlertCircle className="w-10 h-10 text-red-400" />
              </div>
              <p className="text-slate-300 font-semibold">Unable to load inventory</p>
              <p className="text-slate-500 text-sm max-w-md text-center">{error}</p>
              <a
                href="/contact"
                className="mt-2 px-6 py-3 bg-brand-blue text-white rounded-xl font-bold text-sm hover:bg-brand-blue/90 transition-colors"
              >
                Contact Us Directly
              </a>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && items.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <Package className="w-10 h-10 text-slate-500" />
              </div>
              <p className="text-slate-300 font-semibold">No inventory items found</p>
              <p className="text-slate-500 text-sm">Check back soon or contact us for availability.</p>
            </div>
          )}

          {/* Inventory */}
          {!loading && !error && items.length > 0 && (
            <>
              {/* Category filter */}
              <div className="flex items-center gap-2 flex-wrap mb-8">
                <Filter className="w-4 h-4 text-slate-500 shrink-0" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                      activeCategory === cat
                        ? 'bg-brand-blue text-white border-brand-blue'
                        : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {cat}
                    {cat !== 'All' && (
                      <span className="ml-1.5 opacity-60">
                        ({items.filter((i) => i['Category'] === cat).length})
                      </span>
                    )}
                  </button>
                ))}
                <span className="ml-auto text-slate-500 text-sm">
                  Showing <span className="text-white font-semibold">{filtered.length}</span> of {items.length} items
                </span>
              </div>

              {/* Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((item, index) => {
                  const slug = getItemSlug(item, index);
                  const thumb = getFirstImage(item['Images'] ?? '');
                  const price = item['Price'];
                  const category = item['Category'];
                  const productType = item['Product Type'];
                  const available = item['Available'];
                  const onHand = item['On Hand'];
                  const inStock = parseInt(onHand || '0', 10) > 0 || parseInt(available || '0', 10) > 0;

                  return (
                    <motion.div
                      key={slug + index}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
                    >
                      <Link
                        to={`/equipment/${slug}`}
                        state={{ item, index }}
                        className="group flex flex-col h-full bg-slate-800/50 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-blue/30 hover:shadow-[0_0_30px_rgba(220,38,38,0.08)] transition-all duration-300 hover:-translate-y-1"
                        aria-label={`View details for ${item['Product']}`}
                      >
                        {/* Image */}
                        <div className="relative aspect-[4/3] bg-slate-900/80 overflow-hidden">
                          {thumb ? (
                            <img
                              src={thumb}
                              alt={item['Product']}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                const t = e.target as HTMLImageElement;
                                t.style.display = 'none';
                                t.nextElementSibling?.classList.remove('hidden');
                              }}
                            />
                          ) : null}
                          {/* Fallback */}
                          <div className={`absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-600 ${thumb ? 'hidden' : ''}`}>
                            <ImageOff className="w-10 h-10" />
                            <span className="text-xs">No image</span>
                          </div>
                          {/* Status badge */}
                          <div className="absolute top-3 right-3">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                              inStock
                                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                                : 'bg-slate-700/80 text-slate-400 border-white/10'
                            }`}>
                              {inStock ? `${onHand} In Stock` : 'Contact Us'}
                            </span>
                          </div>
                        </div>

                        {/* Body */}
                        <div className="flex flex-col flex-1 p-5 gap-3">
                          {/* Category + type */}
                          <div className="flex items-center gap-2 flex-wrap">
                            {category && (
                              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getCategoryStyle(category)}`}>
                                <Layers className="w-3 h-3" />
                                {category}
                              </span>
                            )}
                            {productType && (
                              <span className="text-xs text-slate-500 truncate">{productType}</span>
                            )}
                          </div>

                          {/* Name */}
                          <h2 className="text-white font-bold text-base leading-snug group-hover:text-brand-blue transition-colors line-clamp-2">
                            {item['Product']}
                          </h2>

                          {/* Price */}
                          {price && (
                            <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xl">
                              <Tag className="w-4 h-4" />
                              {formatPrice(price)}
                            </div>
                          )}

                          {/* Footer */}
                          <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-end text-xs text-slate-500 group-hover:text-brand-blue transition-colors font-semibold">
                            View Details <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
