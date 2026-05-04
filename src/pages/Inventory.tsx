import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Package, AlertCircle, Loader2, ChevronRight, Tag, Hash } from 'lucide-react';
import { useInventory, InventoryItem } from '../hooks/useInventory';

// Build a URL-safe slug from the item — prefers an "id", "ID", or "sku" column, else falls back to index.
function getItemId(item: InventoryItem, index: number): string {
  const idField = Object.keys(item).find((k) =>
    ['id', 'sku', 'item id', 'item_id', 'stock #', 'stock#', 'part number', 'part#'].includes(
      k.toLowerCase()
    )
  );
  if (idField && item[idField]) {
    return encodeURIComponent(item[idField].replace(/\s+/g, '-'));
  }
  return String(index);
}

// Pick display-worthy columns for the card preview (skip verbose or id columns)
function getPreviewFields(item: InventoryItem): { label: string; value: string }[] {
  const skipKeys = ['description', 'notes', 'image', 'img', 'photo', 'url', 'link'];
  return Object.entries(item)
    .filter(([k, v]) => v && !skipKeys.some((s) => k.toLowerCase().includes(s)))
    .slice(0, 4)
    .map(([k, v]) => ({ label: k, value: v }));
}

export default function Inventory() {
  const { items, loading, error } = useInventory();

  return (
    <div className="pt-24 min-h-screen bg-slate-900">
      {/* Hero Banner */}
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
              Real-time stock synced directly from our inventory system. Updated automatically — no refresh needed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <Loader2 className="w-10 h-10 text-brand-blue animate-spin" />
              <p className="text-slate-400 text-sm font-medium">Fetching live inventory…</p>
            </div>
          )}

          {/* Error State */}
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

          {/* Empty State */}
          {!loading && !error && items.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <Package className="w-10 h-10 text-slate-500" />
              </div>
              <p className="text-slate-300 font-semibold">No inventory items found</p>
              <p className="text-slate-500 text-sm">Check back soon or contact us for availability.</p>
            </div>
          )}

          {/* Inventory Grid */}
          {!loading && !error && items.length > 0 && (
            <>
              <p className="text-slate-500 text-sm mb-8">
                Showing <span className="text-white font-semibold">{items.length}</span> items in stock
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((item, index) => {
                  const itemId = getItemId(item, index);
                  const preview = getPreviewFields(item);
                  // Try to find a "name" or "title" column for the card heading
                  const nameKey = Object.keys(item).find((k) =>
                    ['name', 'title', 'item', 'product', 'description'].includes(k.toLowerCase())
                  );
                  const displayName = nameKey ? item[nameKey] : `Item ${index + 1}`;
                  const priceKey = Object.keys(item).find((k) =>
                    ['price', 'cost', 'rate', 'msrp'].includes(k.toLowerCase())
                  );

                  return (
                    <motion.div
                      key={itemId}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.6) }}
                    >
                      <Link
                        to={`/equipment/${itemId}`}
                        state={{ item, index }}
                        className="group flex flex-col h-full bg-slate-800/50 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-blue/30 hover:shadow-[0_0_30px_rgba(220,38,38,0.08)] transition-all duration-300 hover:-translate-y-1"
                        aria-label={`View details for ${displayName}`}
                      >
                        {/* Card Header */}
                        <div className="bg-slate-900/80 px-5 py-4 border-b border-white/5">
                          <div className="flex items-start justify-between gap-3">
                            <h2 className="text-white font-bold text-base leading-snug line-clamp-2 group-hover:text-brand-blue transition-colors">
                              {displayName}
                            </h2>
                            {priceKey && item[priceKey] && (
                              <span className="shrink-0 flex items-center gap-1 text-emerald-400 font-bold text-sm whitespace-nowrap">
                                <Tag className="w-3 h-3" />
                                {item[priceKey]}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Card Body — field previews */}
                        <div className="flex-1 px-5 py-4 space-y-2">
                          {preview.map(({ label, value }) => (
                            <div key={label} className="flex items-center justify-between gap-2 text-sm">
                              <span className="text-slate-500 shrink-0 capitalize">{label}</span>
                              <span className="text-slate-300 font-medium text-right line-clamp-1">{value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Card Footer */}
                        <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 group-hover:text-brand-blue transition-colors">
                          <span className="flex items-center gap-1">
                            <Hash className="w-3 h-3" />
                            {itemId}
                          </span>
                          <span className="flex items-center gap-1 font-semibold">
                            View Details <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </span>
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
