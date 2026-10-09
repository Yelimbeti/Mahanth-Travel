import { i as __toESM } from "../_runtime.mjs";
import { _ as seasonNow, c as getCity, f as nearestCity, i as estimateRoadKm, m as placesList, o as formatKm, p as originCities } from "./travel-keE9qj0W.mjs";
import { J as require_react, S as require_jsx_runtime, b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as LocateFixed } from "../_libs/lucide-react.mjs";
import { n as useTripMemory, t as CityField } from "./memory-Aa45DZaF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dvm2y7RJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const navigate = useNavigate();
	const memory = useTripMemory();
	const places = placesList();
	const origins = originCities();
	const [to, setTo] = (0, import_react.useState)("");
	const [locNote, setLocNote] = (0, import_react.useState)(null);
	const [month, setMonth] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setMonth((/* @__PURE__ */ new Date()).getMonth() + 1);
	}, []);
	const from = getCity(memory.fromSlug) ?? origins[0];
	function openTrip(slug) {
		const destination = slug || to;
		if (!destination) return;
		memory.setFromSlug(from.slug);
		navigate({
			to: "/plan/$slug",
			params: { slug: destination },
			search: { from: from.slug }
		});
	}
	function locate() {
		if (!navigator.geolocation) {
			setLocNote("This browser can't share a location. Pick a city.");
			return;
		}
		setLocNote("Finding the nearest city…");
		navigator.geolocation.getCurrentPosition((pos) => {
			const city = nearestCity(pos.coords.latitude, pos.coords.longitude);
			memory.setFromSlug(city.slug);
			setLocNote(`Using ${city.name}, the closest city we plan from.`);
		}, () => setLocNote("Location stayed off. Pick the city you're leaving from."), {
			enableHighAccuracy: false,
			timeout: 8e3,
			maximumAge: 6e5
		});
	}
	const prime = month == null ? [] : places.filter((place) => seasonNow(place, month).tone === "open");
	const shoulder = month == null ? [] : places.filter((place) => seasonNow(place, month).tone === "watch");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-5xl px-4 py-6 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-ink italic",
					children: "Marg"
				}), memory.saved.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [memory.saved.length, " saved"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Field notes for a real route"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-5xl leading-none text-balance text-ink sm:text-6xl",
					children: "Tell it the city. Keep the road honest."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-lg text-ink",
					children: "Distance from where you actually are, the way that makes sense this month, towns worth sleeping in, and which gates are usually open."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 max-w-3xl rounded-3xl border border-line bg-surface p-4 sm:p-5",
				onSubmit: (event) => {
					event.preventDefault();
					openTrip(to);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityField, {
							label: "From",
							cities: origins,
							value: from.slug,
							onChange: memory.setFromSlug,
							placeholder: "Your city"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityField, {
							label: "To",
							cities: places,
							value: to,
							onChange: setTo,
							placeholder: "Ladakh, Jaipur, Goa…"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-col gap-2 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: !to,
							className: "min-h-11 rounded-full bg-accent px-5 text-sm font-medium text-foam disabled:opacity-50",
							children: "Show the route"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: locate,
							className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line px-4 text-sm text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocateFixed, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Use my location"]
						})]
					}),
					locNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: locNote
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: places.slice(0, 6).map((place) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => openTrip(place.slug),
							className: "min-h-11 rounded-full border border-line bg-paper px-3 text-sm text-ink",
							children: place.name
						}, place.slug))
					})
				]
			}),
			month != null && (prime.length > 0 || shoulder.length > 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 max-w-3xl text-sm text-muted",
				children: [prime.length > 0 ? `Prime right now: ${prime.map((place) => place.name).join(", ")}.` : "", shoulder.length > 0 ? ` Shoulder or weather-watching: ${shoulder.map((place) => place.name).join(", ")}.` : ""]
			}) : null,
			memory.saved.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-ink",
					children: "Saved"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-wrap gap-2",
					children: memory.saved.map((trip) => {
						const place = places.find((item) => item.slug === trip.slug);
						const start = getCity(trip.fromSlug);
						if (!place || !start) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/plan/$slug",
							params: { slug: trip.slug },
							search: { from: trip.fromSlug },
							className: "inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-3 text-sm text-ink",
							children: [
								start.name,
								" to ",
								place.name
							]
						}) }, trip.slug);
					})
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-ink",
						children: "Nine dossiers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "India, for now. Each one knows its season and its last honest railhead."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: places.map((place) => {
							const km = estimateRoadKm(from, place);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/plan/$slug",
								params: { slug: place.slug },
								search: { from: from.slug },
								className: "flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: place.image,
									alt: place.imageAlt,
									className: "aspect-3/2 w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex flex-1 flex-col p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs tracking-wide text-muted uppercase",
											children: place.region
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 font-display text-3xl text-ink",
											children: place.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 text-sm text-ink",
											children: place.tagline
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-3 text-xs text-muted",
											children: [
												place.bestLabel,
												from.slug === place.slug ? " · you are here" : ` · ${formatKm(km.km)} from ${from.name}`,
												km.estimated ? " (est.)" : ""
											]
										})
									]
								})]
							}) }, place.slug);
						})
					})
				]
			})
		]
	});
}
//#endregion
export { Home as component };
