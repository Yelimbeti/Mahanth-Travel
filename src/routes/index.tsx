import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { LocateFixed } from "lucide-react";
import { CityField } from "@/components/city-field";
import {
  estimateRoadKm,
  formatKm,
  getCity,
  nearestCity,
  originCities,
  placesList,
  seasonNow,
} from "@/data/travel";
import { useTripMemory } from "@/lib/memory";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const navigate = useNavigate();
  const memory = useTripMemory();
  const places = placesList();
  const origins = originCities();
  const [to, setTo] = useState("");
  const [locNote, setLocNote] = useState<string | null>(null);
  const [month, setMonth] = useState<number | null>(null);

  useEffect(() => {
    setMonth(new Date().getMonth() + 1);
  }, []);

  const from = getCity(memory.fromSlug) ?? origins[0];

  function openTrip(slug: string) {
    const destination = slug || to;
    if (!destination) return;
    memory.setFromSlug(from.slug);
    void navigate({
      to: "/plan/$slug",
      params: { slug: destination },
      search: { from: from.slug },
    });
  }

  function locate() {
    if (!navigator.geolocation) {
      setLocNote("This browser can't share a location. Pick a city.");
      return;
    }
    setLocNote("Finding the nearest city…");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const city = nearestCity(pos.coords.latitude, pos.coords.longitude);
        memory.setFromSlug(city.slug);
        setLocNote(`Using ${city.name}, the closest city we plan from.`);
      },
      () => setLocNote("Location stayed off. Pick the city you're leaving from."),
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 },
    );
  }

  const prime = month == null ? [] : places.filter((place) => seasonNow(place, month).tone === "open");
  const shoulder =
    month == null ? [] : places.filter((place) => seasonNow(place, month).tone === "watch");

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-6 sm:py-10">
      <header className="flex items-center justify-between gap-3">
        <p className="font-display text-2xl text-ink italic">Mahanth-Traveller</p>
        {memory.saved.length > 0 ? (
          <p className="text-sm text-muted">{memory.saved.length} saved</p>
        ) : (
          <p className="text-sm text-muted">I Am Allu Arjun </p>
        )}
      </header>

      <div className="mt-8 max-w-3xl">
        <h1 className="font-display text-5xl leading-none text-balance text-ink sm:text-6xl">
          Tell it the city. Keep the road honest.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink">
          Distance from where you actually are, the way that makes sense this month, towns worth sleeping in, and which gates are usually open.
        </p>
      </div>

      <form
        className="mt-8 max-w-3xl rounded-3xl border border-line bg-surface p-4 sm:p-5"
        onSubmit={(event) => {
          event.preventDefault();
          openTrip(to);
        }}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CityField
            label="From"
            cities={origins}
            value={from.slug}
            onChange={memory.setFromSlug}
            placeholder="Your city"
          />
          <CityField
            label="To"
            cities={places}
            value={to}
            onChange={setTo}
            placeholder="Ladakh, Jaipur, Goa…"
          />
        </div>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={!to}
            className="min-h-11 rounded-full bg-accent px-5 text-sm font-medium text-foam disabled:opacity-50"
          >
            Show the route
          </button>
          <button
            type="button"
            onClick={locate}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line px-4 text-sm text-ink"
          >
            <LocateFixed className="size-4" aria-hidden="true" />
            Use my location
          </button>
        </div>
        {locNote ? <p className="mt-2 text-sm text-muted">{locNote}</p> : null}
        <div className="mt-4 flex flex-wrap gap-2">
          {places.slice(0, 6).map((place) => (
            <button
              key={place.slug}
              type="button"
              onClick={() => openTrip(place.slug)}
              className="min-h-11 rounded-full border border-line bg-paper px-3 text-sm text-ink"
            >
              {place.name}
            </button>
          ))}
        </div>
      </form>

      {month != null && (prime.length > 0 || shoulder.length > 0) ? (
        <p className="mt-6 max-w-3xl text-sm text-muted">
          {prime.length > 0 ? `Prime right now: ${prime.map((place) => place.name).join(", ")}.` : ""}
          {shoulder.length > 0
            ? ` Shoulder or weather-watching: ${shoulder.map((place) => place.name).join(", ")}.`
            : ""}
        </p>
      ) : null}

      {memory.saved.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-display text-2xl text-ink">Saved</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {memory.saved.map((trip) => {
              const place = places.find((item) => item.slug === trip.slug);
              const start = getCity(trip.fromSlug);
              if (!place || !start) return null;
              return (
                <li key={trip.slug}>
                  <Link
                    to="/plan/$slug"
                    params={{ slug: trip.slug }}
                    search={{ from: trip.fromSlug }}
                    className="inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-3 text-sm text-ink"
                  >
                    {start.name} to {place.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="font-display text-3xl text-ink">Nine dossiers</h2>
        <p className="mt-1 text-sm text-muted">India, for now. Each one knows its season and its last honest railhead.</p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((place) => {
            const km = estimateRoadKm(from, place);
            return (
              <li key={place.slug}>
                <Link
                  to="/plan/$slug"
                  params={{ slug: place.slug }}
                  search={{ from: from.slug }}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface"
                >
                  <img src={place.image} alt={place.imageAlt} className="aspect-3/2 w-full object-cover" />
                  <span className="flex flex-1 flex-col p-4">
                    <span className="text-xs tracking-wide text-muted uppercase">{place.region}</span>
                    <span className="mt-1 font-display text-3xl text-ink">{place.name}</span>
                    <span className="mt-1 text-sm text-ink">{place.tagline}</span>
                    <span className="mt-3 text-xs text-muted">
                      {place.bestLabel}
                      {from.slug === place.slug ? " · you are here" : ` · ${formatKm(km.km)} from ${from.name}`}
                      {km.estimated ? " (est.)" : ""}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
