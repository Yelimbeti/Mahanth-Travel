import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { TripDossier } from "@/components/trip-dossier";
import { getCity, getPlace, originCities, placesList, searchCities } from "@/data/travel";
import { useTripMemory } from "@/lib/memory";

export const Route = createFileRoute("/plan/$slug")({
  validateSearch: (search: Record<string, unknown>) => ({
    from: typeof search.from === "string" && search.from ? search.from : "delhi",
  }),
  head: ({ params }) => {
    const place = getPlace(params.slug);
    return { meta: [{ title: place ? `${place.name} · Marg` : "Trip · Marg" }] };
  },
  component: PlanRoute,
});

function PlanRoute() {
  const { slug } = Route.useParams();
  const { from: fromParam } = Route.useSearch();
  const navigate = Route.useNavigate();
  const memory = useTripMemory();
  const place = getPlace(slug);
  const from = getCity(fromParam) ?? getCity("delhi") ?? originCities()[0];

  useEffect(() => {
    if (memory.ready) memory.setFromSlug(from.slug);
  }, [memory.ready, memory.setFromSlug, from.slug]);

  if (!place || !from) {
    const guesses = searchCities(placesList(), slug).slice(0, 3);
    return (
      <main className="mx-auto max-w-xl px-4 py-16">
        <p className="font-display text-2xl text-ink italic">Marg</p>
        <h1 className="mt-4 font-display text-4xl text-ink">No dossier for that yet.</h1>
        <p className="mt-2 text-muted">Try a city we actually plan: Ladakh, Jaipur, Goa, the backwaters.</p>
        <ul className="mt-4 flex flex-col gap-2">
          {(guesses.length > 0 ? guesses : placesList().slice(0, 3)).map((item) => (
            <li key={item.slug}>
              <Link
                to="/plan/$slug"
                params={{ slug: item.slug }}
                search={{ from: from?.slug ?? "delhi" }}
                className="inline-flex min-h-11 items-center text-accent"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/" className="mt-6 inline-flex min-h-11 items-center text-sm text-ink">
          Back to the start
        </Link>
      </main>
    );
  }

  return (
    <TripDossier
      place={place}
      from={from}
      origins={originCities()}
      saved={memory.isSaved(place.slug)}
      onFrom={(next) => {
        void navigate({
          to: "/plan/$slug",
          params: { slug: place.slug },
          search: { from: next },
          replace: true,
        });
      }}
      onToggleSave={() => memory.toggleSave(place.slug, from.slug)}
    />
  );
}
