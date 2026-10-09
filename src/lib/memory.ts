import { useCallback, useEffect, useState } from "react";
import { getCity, getPlace } from "@/data/travel";

export type SavedTrip = { slug: string; fromSlug: string };

const KEY = "marg-trips";

export function useTripMemory() {
  const [fromSlug, setFromSlugState] = useState("delhi");
  const [saved, setSaved] = useState<SavedTrip[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { fromSlug?: string; saved?: SavedTrip[] };
        if (parsed.fromSlug && getCity(parsed.fromSlug)) setFromSlugState(parsed.fromSlug);
        if (Array.isArray(parsed.saved)) {
          setSaved(
            parsed.saved.filter(
              (item) => item && getPlace(item.slug) && getCity(item.fromSlug),
            ),
          );
        }
      }
    } catch {
      /* keep defaults */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify({ fromSlug, saved }));
  }, [fromSlug, saved, ready]);

  const setFromSlug = useCallback((slug: string) => {
    if (!getCity(slug)) return;
    setFromSlugState((curr) => (curr === slug ? curr : slug));
  }, []);

  const toggleSave = useCallback((slug: string, from: string) => {
    setSaved((curr) => {
      if (curr.some((item) => item.slug === slug)) return curr.filter((item) => item.slug !== slug);
      return [{ slug, fromSlug: from }, ...curr].slice(0, 12);
    });
  }, []);

  const isSaved = useCallback((slug: string) => saved.some((item) => item.slug === slug), [saved]);

  return { fromSlug, setFromSlug, saved, toggleSave, isSaved, ready };
}
