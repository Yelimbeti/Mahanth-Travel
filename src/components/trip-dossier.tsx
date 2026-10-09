import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  BedDouble,
  Bookmark,
  Bus,
  Car,
  ChevronLeft,
  Landmark,
  Plane,
  Train,
} from "lucide-react";
import { CityField } from "@/components/city-field";
import {
  bandLabel,
  buildRoutes,
  estimateRoadKm,
  formatDuration,
  formatInr,
  formatKm,
  gateStatus,
  haversineKm,
  MONTHS,
  nearbyPlaces,
  roadState,
  seasonNow,
  viaFor,
  type Gate,
  type Hub,
  type Mode,
  type Place,
  type Sight,
} from "@/data/travel";

const MODE_ICON = {
  flight: Plane,
  train: Train,
  bus: Bus,
  drive: Car,
} as const;

function toneClass(tone: Gate["tone"]) {
  if (tone === "open") return "bg-pine text-foam";
  if (tone === "watch") return "bg-sand text-ink";
  return "bg-accent text-foam";
}

function OpenBadge({ sight, now }: { sight: Sight; now: Date | null }) {
  if (!now) {
    return (
      <span className="inline-flex min-h-8 items-center rounded-full bg-sand px-2.5 text-xs text-ink">
        Usual hours
      </span>
    );
  }
  const gate = gateStatus(sight, now);
  return (
    <span className={`inline-flex min-h-8 items-center rounded-full px-2.5 text-xs ${toneClass(gate.tone)}`}>
      {gate.label}
    </span>
  );
}

export function TripDossier({
  place,
  from,
  origins,
  saved,
  onFrom,
  onToggleSave,
}: {
  place: Place;
  from: Hub;
  origins: Hub[];
  saved: boolean;
  onFrom: (slug: string) => void;
  onToggleSave: () => void;
}) {
  const [now, setNow] = useState<Date | null>(null);
  const [days, setDays] = useState<3 | 5 | 7>(5);
  const [openMode, setOpenMode] = useState<Mode | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  const month = now ? now.getMonth() + 1 : null;
  const routes = month ? buildRoutes(from, place, month) : null;
  const season = month ? seasonNow(place, month) : null;
  const highway = month ? roadState(place, month) : null;
  const road = estimateRoadKm(from, place);
  const crow = from.slug === place.slug ? 0 : Math.round(haversineKm(from, place));
  const here = from.slug === place.slug;
  const stops = here
    ? []
    : [
        { name: from.name, note: "Where you are leaving from" },
        ...viaFor(place, from.slug),
        { name: place.name, note: "Where the stay begins" },
      ];

  useEffect(() => {
    setOpenMode(routes?.best?.mode ?? null);
  }, [routes?.best?.mode, from.slug, place.slug]);

  const openCount =
    now == null ? null : place.sights.filter((sight) => gateStatus(sight, now).tone === "open").length;

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-5 sm:py-8">
      <header className="mb-6 flex items-center justify-between gap-3">
        <Link to="/" className="inline-flex min-h-11 items-center gap-1 text-sm text-ink">
          <ChevronLeft className="size-4" aria-hidden="true" />
          All places
        </Link>
        <button
          type="button"
          aria-pressed={saved}
          onClick={onToggleSave}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-3 text-sm text-ink"
        >
          <Bookmark className={`size-4 ${saved ? "fill-accent text-accent" : ""}`} aria-hidden="true" />
          {saved ? "Saved" : "Save trip"}
        </button>
      </header>

      <p className="text-sm tracking-wide text-muted uppercase">{place.eyebrow}</p>
      <h1 className="mt-1 font-display text-5xl leading-none text-balance text-ink sm:text-6xl">{place.name}</h1>
      <p className="mt-3 max-w-xl text-lg text-ink">{place.tagline}</p>
      <p className="mt-2 max-w-xl text-muted">{place.blurb}</p>

      <div className="mt-6">
        <CityField
          label="Travelling from"
          cities={origins}
          value={from.slug}
          onChange={onFrom}
          placeholder="Delhi, Mumbai, Kochi…"
        />
      </div>

      <figure className="relative mt-6 overflow-hidden rounded-3xl">
        <img
          src={place.image}
          alt={place.imageAlt}
          className="aspect-3/2 w-full object-cover"
        />
        <figcaption className="scrim absolute inset-0 flex flex-col justify-end p-4 text-foam sm:p-6">
          <div className="grid grid-cols-3 gap-2">
            <Fact label="As the crow flies" value={here ? "You're there" : formatKm(crow)} />
            <Fact
              label={road.estimated ? "Road, estimated" : "By road"}
              value={here ? "—" : formatKm(road.km)}
            />
            <Fact
              label="Best path"
              value={here ? "Walk" : routes?.best ? modeName(routes.best.mode) : "…"}
            />
          </div>
        </figcaption>
      </figure>

      <nav className="mt-4 grid grid-cols-4 gap-2 text-center text-sm" aria-label="On this page">
        {[
          ["#road", "Route"],
          ["#stay", "Stay"],
          ["#see", "See"],
          ["#days", "Days"],
        ].map(([href, label]) => (
          <a key={href} href={href} className="min-h-11 rounded-full border border-line bg-surface px-2 py-2.5 text-ink">
            {label}
          </a>
        ))}
      </nav>

      <section className="mt-8 scroll-mt-6 rounded-3xl border border-line bg-surface p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="font-display text-3xl text-ink">When to go</h2>
          {season ? (
            <span className={`inline-flex min-h-8 items-center rounded-full px-2.5 text-xs ${toneClass(season.tone)}`}>
              {season.label}
            </span>
          ) : null}
        </div>
        <p className="mt-2 text-sm text-muted">{place.bestLabel}</p>
        <ol className="mt-4 grid grid-cols-12 gap-1">
          {MONTHS.map((name, index) => {
            const num = index + 1;
            const prime = place.bestMonths.includes(num);
            const current = month === num;
            return (
              <li key={name} className="text-center">
                <span
                  className={`mx-auto block h-2 rounded-full ${prime ? "bg-accent" : "bg-sand"} ${current ? "ring-2 ring-ink ring-offset-2 ring-offset-surface" : ""}`}
                />
                <span className="mt-1 block text-xs text-muted">{name[0]}</span>
              </li>
            );
          })}
        </ol>
        <p className="mt-4 text-ink">{season ? season.detail : "Best months are marked. The live call uses your clock."}</p>
        {highway && highway !== "open" ? (
          <p className={`mt-3 rounded-2xl px-3 py-2 text-sm ${toneClass(highway)}`}>
            {highway === "shut" ? "The overland highway is usually shut this month." : "The highway is open only with a weather check."}{" "}
            {place.roadNote}
          </p>
        ) : (
          <p className="mt-3 text-sm text-muted">{place.roadNote}</p>
        )}
      </section>

      <section id="road" className="mt-8 scroll-mt-6">
        <h2 className="font-display text-3xl text-ink">The way from {from.name}</h2>
        <p className="mt-1 text-sm text-muted">
          Fares are typical ranges, not live prices. Times include the boring parts where that matters.
        </p>
        {here ? (
          <p className="mt-4 rounded-3xl border border-line bg-surface p-4 text-ink">
            You are already in {place.name}. There is no highway to plan — use the stays and the sights below.
            Distances on each place are from the centre of town.
          </p>
        ) : routes ? (
          <div className="mt-4 flex flex-col gap-3">
            {routes.options.map((option) => {
              const Icon = MODE_ICON[option.mode];
              const best = option.available && routes.best?.mode === option.mode;
              const open = openMode === option.mode;
              return (
                <article
                  key={option.mode}
                  className={`rounded-3xl border bg-surface p-4 ${best ? "border-ink" : "border-line"} ${option.available ? "" : "opacity-70"}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-sand text-ink">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-2xl text-ink">{option.title}</h3>
                        {best ? (
                          <span className="inline-flex min-h-7 items-center rounded-full bg-pine px-2 text-xs text-foam">
                            Best path
                          </span>
                        ) : null}
                        {!option.available ? (
                          <span className="inline-flex min-h-7 items-center rounded-full bg-accent px-2 text-xs text-foam">
                            Not this month
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm text-ink">{option.detail}</p>
                      <p className="mt-1 text-sm text-muted">{option.why}</p>
                      <p className="mt-2 text-sm tabular-nums text-ink">
                        {formatInr(option.inrLow)} – {formatInr(option.inrHigh)}
                        <span className="text-muted"> · {option.fareNote}</span>
                      </p>
                      <p className="text-xs text-muted">{formatKm(option.km)} on this leg</p>
                      {option.caution ? <p className="mt-2 text-sm text-ink">{option.caution}</p> : null}
                      <button
                        type="button"
                        className="mt-2 min-h-11 text-sm text-accent"
                        aria-expanded={open}
                        onClick={() => setOpenMode(open ? null : option.mode)}
                      >
                        {open ? "Hide the steps" : "Show the steps"}
                      </button>
                      {open ? (
                        <ol className="mt-2 flex flex-col gap-2 border-t border-line pt-3">
                          {option.steps.map((step, index) => (
                            <li key={step} className="flex gap-2 text-sm text-ink">
                              <span className="w-5 shrink-0 tabular-nums text-muted">{index + 1}</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <p className="mt-4 text-muted">Lining up flight, train, bus and the drive…</p>
        )}

        {!here && stops.length > 0 ? (
          <div className="mt-5 rounded-3xl border border-line bg-surface p-4 sm:p-5">
            <h3 className="font-display text-2xl text-ink">Roadmap</h3>
            <p className="mt-1 text-sm text-muted">
              {formatKm(road.km)} by road{road.estimated ? ", estimated from the straight line" : ""}.
              {crow > 0 ? ` ${formatKm(crow)} if you could fly like a crow.` : ""}
            </p>
            <ol className="mt-4">
              {stops.map((stop, index) => (
                <li key={`${stop.name}-${index}`} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span className={`mt-1.5 size-3 rounded-full ${index === stops.length - 1 ? "bg-accent" : "bg-pine"}`} />
                    {index < stops.length - 1 ? <span className="w-px flex-1 bg-line" /> : null}
                  </div>
                  <div className={index < stops.length - 1 ? "pb-5" : ""}>
                    <p className="font-display text-xl text-ink">{stop.name}</p>
                    <p className="text-sm text-muted">{stop.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </section>

      <section id="stay" className="mt-10 scroll-mt-6">
        <div className="flex items-center gap-2">
          <BedDouble className="size-5 text-accent" aria-hidden="true" />
          <h2 className="font-display text-3xl text-ink">Towns to sleep in</h2>
        </div>
        <p className="mt-1 text-sm text-muted">The nearest places worth a night, measured from {place.name}.</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {place.stayTowns.map((town) => (
            <li key={town.name} className="rounded-3xl border border-line bg-surface p-4">
              <p className="text-xs tracking-wide text-muted uppercase">
                {town.km === 0 ? "In town" : `${formatKm(town.km)} out`}
              </p>
              <h3 className="mt-1 font-display text-2xl text-ink">{town.name}</h3>
              <p className="mt-1 text-sm text-ink">{town.why}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-8 font-display text-2xl text-ink">Hotels and houses</h3>
        <p className="mt-1 text-sm text-muted">Bands are rough nightly rates, not a quote.</p>
        <ul className="mt-3 flex flex-col gap-3">
          {place.hotels.map((hotel) => (
            <li key={hotel.name} className="rounded-3xl border border-line bg-surface p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-display text-xl text-ink">{hotel.name}</h4>
                <span className="text-xs text-muted">{bandLabel(hotel.band)}</span>
              </div>
              <p className="text-sm text-muted">{hotel.area}</p>
              <p className="mt-1 text-sm text-ink">{hotel.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="see" className="mt-10 scroll-mt-6">
        <div className="flex items-center gap-2">
          <Landmark className="size-5 text-accent" aria-hidden="true" />
          <h2 className="font-display text-3xl text-ink">What to see</h2>
        </div>
        <p className="mt-1 text-sm text-muted">
          {openCount == null
            ? "Open or shut follows usual hours and the season, then your clock."
            : `${openCount} of ${place.sights.length} are inside their usual open window right now.`}
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {place.sights.map((sight) => {
            const gate = now ? gateStatus(sight, now) : null;
            return (
              <li key={sight.name} className="rounded-3xl border border-line bg-surface p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-display text-2xl text-ink">{sight.name}</h3>
                  <OpenBadge sight={sight} now={now} />
                </div>
                <p className="mt-1 text-xs text-muted">
                  {sight.km === 0 ? "In town" : `${formatKm(sight.km)} from the centre`}
                </p>
                <p className="mt-2 text-sm text-ink">{sight.why}</p>
                {gate ? <p className="mt-2 text-sm text-muted">{gate.detail}</p> : null}
              </li>
            );
          })}
        </ul>
      </section>

      <section id="days" className="mt-10 scroll-mt-6">
        <h2 className="font-display text-3xl text-ink">A way to spend it</h2>
        <div className="mt-3 flex gap-2" role="group" aria-label="Trip length">
          {([3, 5, 7] as const).map((n) => (
            <button
              key={n}
              type="button"
              aria-pressed={days === n}
              onClick={() => setDays(n)}
              className={`min-h-11 flex-1 rounded-full border px-3 text-sm ${days === n ? "border-ink bg-ink text-foam" : "border-line bg-surface text-ink"}`}
            >
              {n} days
            </button>
          ))}
        </div>
        <ol className="mt-4 flex flex-col gap-3">
          {place.plans[days].map((day, index) => (
            <li key={day.title} className="rounded-3xl border border-line bg-surface p-4">
              <p className="text-xs tracking-wide text-muted uppercase">Day {index + 1}</p>
              <h3 className="mt-1 font-display text-2xl text-ink">{day.title}</h3>
              <p className="mt-1 text-sm text-ink">{day.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      {place.permit ? (
        <aside className="mt-8 rounded-3xl border border-line bg-sand p-4 text-sm text-ink">
          <p className="font-medium">Paperwork</p>
          <p className="mt-1">{place.permit}</p>
        </aside>
      ) : null}

      <ul className="mt-4 flex flex-col gap-2">
        {place.tips.map((tip) => (
          <li key={tip} className="border-l-2 border-accent pl-3 text-sm text-ink">
            {tip}
          </li>
        ))}
      </ul>

      <section className="mt-10">
        <h2 className="font-display text-3xl text-ink">If this isn't the month</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {nearbyPlaces(place).map(({ place: other, km }) => (
            <li key={other.slug}>
              <Link
                to="/plan/$slug"
                params={{ slug: other.slug }}
                search={{ from: from.slug }}
                className="block overflow-hidden rounded-3xl border border-line bg-surface"
              >
                <img src={other.image} alt="" className="aspect-3/2 w-full object-cover" />
                <span className="block p-3">
                  <span className="block font-display text-xl text-ink">{other.name}</span>
                  <span className="block text-xs text-muted">{formatKm(km)} from here · {other.bestLabel}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-8 pb-6 text-xs text-muted">
        Hours, passes and highway gates follow the usual pattern. They are not a live feed — ask locally before a long drive to a high road.
      </p>
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-xs text-foam/80">{label}</p>
      <p className="truncate font-display text-lg text-foam sm:text-2xl">{value}</p>
    </div>
  );
}

function modeName(mode: Mode) {
  if (mode === "flight") return "Flight";
  if (mode === "train") return "Train";
  if (mode === "bus") return "Bus";
  return "Drive";
}
