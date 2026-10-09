import { useEffect, useId, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { searchCities, type Hub } from "@/data/travel";

type Props = {
  label: string;
  cities: Hub[];
  value: string;
  onChange: (slug: string) => void;
  placeholder: string;
};

export function CityField({ label, cities, value, onChange, placeholder }: Props) {
  const selected = cities.find((city) => city.slug === value);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const listId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const matches = searchCities(cities, query).slice(0, 7);

  useEffect(() => {
    setActive(0);
  }, [query, open]);

  useEffect(() => {
    function onDoc(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function choose(slug: string) {
    onChange(slug);
    setOpen(false);
    setQuery("");
  }

  return (
    <div ref={wrapRef} className="relative min-w-0 flex-1">
      <label className="mb-1.5 block text-xs font-medium tracking-wide text-muted uppercase" htmlFor={listId}>
        {label}
      </label>
      <div className="flex min-h-11 items-center gap-2 rounded-2xl border border-line bg-surface px-3">
        <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
        <input
          id={listId}
          role="combobox"
          aria-expanded={open}
          aria-controls={`${listId}-list`}
          aria-autocomplete="list"
          className="min-h-11 w-full bg-transparent text-base text-ink outline-none placeholder:text-muted"
          placeholder={placeholder}
          value={open ? query : (selected?.name ?? "")}
          onFocus={() => {
            setOpen(true);
            setQuery("");
          }}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setOpen(true);
              setActive((n) => Math.min(n + 1, Math.max(matches.length - 1, 0)));
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              setActive((n) => Math.max(n - 1, 0));
            } else if (event.key === "Enter") {
              event.preventDefault();
              const pick = matches[active];
              if (pick) choose(pick.slug);
            } else if (event.key === "Escape") {
              setOpen(false);
            }
          }}
        />
      </div>
      {open ? (
        <ul
          id={`${listId}-list`}
          role="listbox"
          className="absolute z-20 mt-1 max-h-72 w-full overflow-auto rounded-2xl border border-line bg-surface py-1 shadow-none"
        >
          {matches.length === 0 ? (
            <li className="px-3 py-3 text-sm text-muted">No city match. Try Ladakh, Jaipur or Goa.</li>
          ) : (
            matches.map((city, index) => (
              <li key={city.slug} role="option" aria-selected={city.slug === value}>
                <button
                  type="button"
                  className={`flex min-h-11 w-full items-baseline justify-between gap-3 px-3 text-left ${index === active ? "bg-sand" : "bg-surface"}`}
                  onMouseDown={(event) => {
                    event.preventDefault();
                    choose(city.slug);
                  }}
                  onMouseEnter={() => setActive(index)}
                >
                  <span className="text-ink">{city.name}</span>
                  <span className="shrink-0 text-xs text-muted">{city.region}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
