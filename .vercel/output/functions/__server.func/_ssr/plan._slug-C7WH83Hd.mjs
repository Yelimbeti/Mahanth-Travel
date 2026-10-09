import { i as __toESM } from "../_runtime.mjs";
import { _ as seasonNow, a as formatInr, c as getCity, d as nearbyPlaces, g as searchCities, h as roadState, i as estimateRoadKm, l as getPlace, m as placesList, n as bandLabel, o as formatKm, p as originCities, r as buildRoutes, s as gateStatus, t as MONTHS, u as haversineKm, v as viaFor } from "./travel-keE9qj0W.mjs";
import { J as require_react, S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Car, d as BedDouble, l as Bus, n as TramFront, o as Landmark, r as Plane, s as ChevronLeft, u as Bookmark } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-CsSkHyiF.mjs";
import { n as useTripMemory, t as CityField } from "./memory-Aa45DZaF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/plan._slug-C7WH83Hd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MODE_ICON = {
	flight: Plane,
	train: TramFront,
	bus: Bus,
	drive: Car
};
function toneClass(tone) {
	if (tone === "open") return "bg-pine text-foam";
	if (tone === "watch") return "bg-sand text-ink";
	return "bg-accent text-foam";
}
function OpenBadge({ sight, now }) {
	if (!now) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex min-h-8 items-center rounded-full bg-sand px-2.5 text-xs text-ink",
		children: "Usual hours"
	});
	const gate = gateStatus(sight, now);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex min-h-8 items-center rounded-full px-2.5 text-xs ${toneClass(gate.tone)}`,
		children: gate.label
	});
}
function TripDossier({ place, from, origins, saved, onFrom, onToggleSave }) {
	const [now, setNow] = (0, import_react.useState)(null);
	const [days, setDays] = (0, import_react.useState)(5);
	const [openMode, setOpenMode] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setNow(/* @__PURE__ */ new Date());
	}, []);
	const month = now ? now.getMonth() + 1 : null;
	const routes = month ? buildRoutes(from, place, month) : null;
	const season = month ? seasonNow(place, month) : null;
	const highway = month ? roadState(place, month) : null;
	const road = estimateRoadKm(from, place);
	const crow = from.slug === place.slug ? 0 : Math.round(haversineKm(from, place));
	const here = from.slug === place.slug;
	const stops = here ? [] : [
		{
			name: from.name,
			note: "Where you are leaving from"
		},
		...viaFor(place, from.slug),
		{
			name: place.name,
			note: "Where the stay begins"
		}
	];
	(0, import_react.useEffect)(() => {
		setOpenMode(routes?.best?.mode ?? null);
	}, [
		routes?.best?.mode,
		from.slug,
		place.slug
	]);
	const openCount = now == null ? null : place.sights.filter((sight) => gateStatus(sight, now).tone === "open").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-3xl px-4 py-5 sm:py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex min-h-11 items-center gap-1 text-sm text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						className: "size-4",
						"aria-hidden": "true"
					}), "All places"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": saved,
					onClick: onToggleSave,
					className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-3 text-sm text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
						className: `size-4 ${saved ? "fill-accent text-accent" : ""}`,
						"aria-hidden": "true"
					}), saved ? "Saved" : "Save trip"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm tracking-wide text-muted uppercase",
				children: place.eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-5xl leading-none text-balance text-ink sm:text-6xl",
				children: place.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-lg text-ink",
				children: place.tagline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-muted",
				children: place.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityField, {
					label: "Travelling from",
					cities: origins,
					value: from.slug,
					onChange: onFrom,
					placeholder: "Delhi, Mumbai, Kochi…"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "relative mt-6 overflow-hidden rounded-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: place.image,
					alt: place.imageAlt,
					className: "aspect-3/2 w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "scrim absolute inset-0 flex flex-col justify-end p-4 text-foam sm:p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								label: "As the crow flies",
								value: here ? "You're there" : formatKm(crow)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								label: road.estimated ? "Road, estimated" : "By road",
								value: here ? "—" : formatKm(road.km)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								label: "Best path",
								value: here ? "Walk" : routes?.best ? modeName(routes.best.mode) : "…"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mt-4 grid grid-cols-4 gap-2 text-center text-sm",
				"aria-label": "On this page",
				children: [
					["#road", "Route"],
					["#stay", "Stay"],
					["#see", "See"],
					["#days", "Days"]
				].map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					className: "min-h-11 rounded-full border border-line bg-surface px-2 py-2.5 text-ink",
					children: label
				}, href))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 scroll-mt-6 rounded-3xl border border-line bg-surface p-4 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-ink",
							children: "When to go"
						}), season ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `inline-flex min-h-8 items-center rounded-full px-2.5 text-xs ${toneClass(season.tone)}`,
							children: season.label
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: place.bestLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 grid grid-cols-12 gap-1",
						children: MONTHS.map((name, index) => {
							const num = index + 1;
							const prime = place.bestMonths.includes(num);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mx-auto block h-2 rounded-full ${prime ? "bg-accent" : "bg-sand"} ${month === num ? "ring-2 ring-ink ring-offset-2 ring-offset-surface" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs text-muted",
									children: name[0]
								})]
							}, name);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink",
						children: season ? season.detail : "Best months are marked. The live call uses your clock."
					}),
					highway && highway !== "open" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: `mt-3 rounded-2xl px-3 py-2 text-sm ${toneClass(highway)}`,
						children: [
							highway === "shut" ? "The overland highway is usually shut this month." : "The highway is open only with a weather check.",
							" ",
							place.roadNote
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: place.roadNote
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "road",
				className: "mt-8 scroll-mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl text-ink",
						children: ["The way from ", from.name]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Fares are typical ranges, not live prices. Times include the boring parts where that matters."
					}),
					here ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 rounded-3xl border border-line bg-surface p-4 text-ink",
						children: [
							"You are already in ",
							place.name,
							". There is no highway to plan — use the stays and the sights below. Distances on each place are from the centre of town."
						]
					}) : routes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-col gap-3",
						children: routes.options.map((option) => {
							const Icon = MODE_ICON[option.mode];
							const best = option.available && routes.best?.mode === option.mode;
							const open = openMode === option.mode;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								className: `rounded-3xl border bg-surface p-4 ${best ? "border-ink" : "border-line"} ${option.available ? "" : "opacity-70"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-sand text-ink",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-5",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-center gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "font-display text-2xl text-ink",
														children: option.title
													}),
													best ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "inline-flex min-h-7 items-center rounded-full bg-pine px-2 text-xs text-foam",
														children: "Best path"
													}) : null,
													!option.available ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "inline-flex min-h-7 items-center rounded-full bg-accent px-2 text-xs text-foam",
														children: "Not this month"
													}) : null
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-ink",
												children: option.detail
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-muted",
												children: option.why
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-2 text-sm tabular-nums text-ink",
												children: [
													formatInr(option.inrLow),
													" – ",
													formatInr(option.inrHigh),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-muted",
														children: [" · ", option.fareNote]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-muted",
												children: [formatKm(option.km), " on this leg"]
											}),
											option.caution ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-ink",
												children: option.caution
											}) : null,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "mt-2 min-h-11 text-sm text-accent",
												"aria-expanded": open,
												onClick: () => setOpenMode(open ? null : option.mode),
												children: open ? "Hide the steps" : "Show the steps"
											}),
											open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
												className: "mt-2 flex flex-col gap-2 border-t border-line pt-3",
												children: option.steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex gap-2 text-sm text-ink",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "w-5 shrink-0 tabular-nums text-muted",
														children: index + 1
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step })]
												}, step))
											}) : null
										]
									})]
								})
							}, option.mode);
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Lining up flight, train, bus and the drive…"
					}),
					!here && stops.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 rounded-3xl border border-line bg-surface p-4 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl text-ink",
								children: "Roadmap"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted",
								children: [
									formatKm(road.km),
									" by road",
									road.estimated ? ", estimated from the straight line" : "",
									".",
									crow > 0 ? ` ${formatKm(crow)} if you could fly like a crow.` : ""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-4",
								children: stops.map((stop, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mt-1.5 size-3 rounded-full ${index === stops.length - 1 ? "bg-accent" : "bg-pine"}` }), index < stops.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px flex-1 bg-line" }) : null]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: index < stops.length - 1 ? "pb-5" : "",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-xl text-ink",
											children: stop.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted",
											children: stop.note
										})]
									})]
								}, `${stop.name}-${index}`))
							})
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "stay",
				className: "mt-10 scroll-mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, {
							className: "size-5 text-accent",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-ink",
							children: "Towns to sleep in"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							"The nearest places worth a night, measured from ",
							place.name,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: place.stayTowns.map((town) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-3xl border border-line bg-surface p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-wide text-muted uppercase",
									children: town.km === 0 ? "In town" : `${formatKm(town.km)} out`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-2xl text-ink",
									children: town.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-ink",
									children: town.why
								})
							]
						}, town.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-8 font-display text-2xl text-ink",
						children: "Hotels and houses"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Bands are rough nightly rates, not a quote."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-col gap-3",
						children: place.hotels.map((hotel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-3xl border border-line bg-surface p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display text-xl text-ink",
										children: hotel.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted",
										children: bandLabel(hotel.band)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: hotel.area
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-ink",
									children: hotel.note
								})
							]
						}, hotel.name))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "see",
				className: "mt-10 scroll-mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, {
							className: "size-5 text-accent",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-ink",
							children: "What to see"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: openCount == null ? "Open or shut follows usual hours and the season, then your clock." : `${openCount} of ${place.sights.length} are inside their usual open window right now.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-col gap-3",
						children: place.sights.map((sight) => {
							const gate = now ? gateStatus(sight, now) : null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-3xl border border-line bg-surface p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-2xl text-ink",
											children: sight.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenBadge, {
											sight,
											now
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted",
										children: sight.km === 0 ? "In town" : `${formatKm(sight.km)} from the centre`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-ink",
										children: sight.why
									}),
									gate ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted",
										children: gate.detail
									}) : null
								]
							}, sight.name);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "days",
				className: "mt-10 scroll-mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-ink",
						children: "A way to spend it"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex gap-2",
						role: "group",
						"aria-label": "Trip length",
						children: [
							3,
							5,
							7
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": days === n,
							onClick: () => setDays(n),
							className: `min-h-11 flex-1 rounded-full border px-3 text-sm ${days === n ? "border-ink bg-ink text-foam" : "border-line bg-surface text-ink"}`,
							children: [n, " days"]
						}, n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 flex flex-col gap-3",
						children: place.plans[days].map((day, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-3xl border border-line bg-surface p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs tracking-wide text-muted uppercase",
									children: ["Day ", index + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-2xl text-ink",
									children: day.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-ink",
									children: day.detail
								})
							]
						}, day.title))
					})
				]
			}),
			place.permit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "mt-8 rounded-3xl border border-line bg-sand p-4 text-sm text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "Paperwork"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: place.permit
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 flex flex-col gap-2",
				children: place.tips.map((tip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-l-2 border-accent pl-3 text-sm text-ink",
					children: tip
				}, tip))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-ink",
					children: "If this isn't the month"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3 sm:grid-cols-3",
					children: nearbyPlaces(place).map(({ place: other, km }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/plan/$slug",
						params: { slug: other.slug },
						search: { from: from.slug },
						className: "block overflow-hidden rounded-3xl border border-line bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: other.image,
							alt: "",
							className: "aspect-3/2 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-xl text-ink",
								children: other.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-xs text-muted",
								children: [
									formatKm(km),
									" from here · ",
									other.bestLabel
								]
							})]
						})]
					}) }, other.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 pb-6 text-xs text-muted",
				children: "Hours, passes and highway gates follow the usual pattern. They are not a live feed — ask locally before a long drive to a high road."
			})
		]
	});
}
function Fact({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-foam/80",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "truncate font-display text-lg text-foam sm:text-2xl",
			children: value
		})]
	});
}
function modeName(mode) {
	if (mode === "flight") return "Flight";
	if (mode === "train") return "Train";
	if (mode === "bus") return "Bus";
	return "Drive";
}
function PlanRoute() {
	const { slug } = Route.useParams();
	const { from: fromParam } = Route.useSearch();
	const navigate = Route.useNavigate();
	const memory = useTripMemory();
	const place = getPlace(slug);
	const from = getCity(fromParam) ?? getCity("delhi") ?? originCities()[0];
	(0, import_react.useEffect)(() => {
		if (memory.ready) memory.setFromSlug(from.slug);
	}, [
		memory.ready,
		memory.setFromSlug,
		from.slug
	]);
	if (!place || !from) {
		const guesses = searchCities(placesList(), slug).slice(0, 3);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-xl px-4 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-ink italic",
					children: "Marg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl text-ink",
					children: "No dossier for that yet."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: "Try a city we actually plan: Ladakh, Jaipur, Goa, the backwaters."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 flex flex-col gap-2",
					children: (guesses.length > 0 ? guesses : placesList().slice(0, 3)).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/plan/$slug",
						params: { slug: item.slug },
						search: { from: from?.slug ?? "delhi" },
						className: "inline-flex min-h-11 items-center text-accent",
						children: item.name
					}) }, item.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex min-h-11 items-center text-sm text-ink",
					children: "Back to the start"
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TripDossier, {
		place,
		from,
		origins: originCities(),
		saved: memory.isSaved(place.slug),
		onFrom: (next) => {
			navigate({
				to: "/plan/$slug",
				params: { slug: place.slug },
				search: { from: next },
				replace: true
			});
		},
		onToggleSave: () => memory.toggleSave(place.slug, from.slug)
	});
}
//#endregion
export { PlanRoute as component };
