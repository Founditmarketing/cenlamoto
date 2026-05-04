import { useState, useEffect } from 'react';

export interface InventoryItem {
  /** Every column from the Google Sheet becomes a string key */
  [key: string]: string;
}

interface UseInventoryResult {
  items: InventoryItem[];
  loading: boolean;
  error: string | null;
}

export function useInventory(): UseInventoryResult {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchInventory() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/inventory');
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        const data: InventoryItem[] = await res.json();
        if (!cancelled) setItems(data);
      } catch (err: any) {
        if (!cancelled) setError(err.message ?? 'Unknown error');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchInventory();
    return () => { cancelled = true; };
  }, []);

  return { items, loading, error };
}
