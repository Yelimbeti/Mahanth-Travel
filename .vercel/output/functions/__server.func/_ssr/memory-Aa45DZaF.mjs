import { i as __toESM } from "../_runtime.mjs";
import { c as getCity, g as searchCities, l as getPlace } from "./travel-keE9qj0W.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/memory-Aa45DZaF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CityField({ label, cities, value, onChange, placeholder }) {
	const selected = cities.find((city) => city.slug === value);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [active, setActive] = (0, import_react.useState)(0);
	const listId = (0, import_react.useId)();
	const wrapRef = (0, import_react.useRef)(null);
	const matches = searchCities(cities, query).slice(0, 7);
	(0, import_react.useEffect)(() => {
		setActive(0);
	}, [query, open]);
	(0, import_react.useEffect)(() => {
		function onDoc(event) {
			if (!wrapRef.current?.contains(event.target)) setOpen(false);
		}
		document.addEventListener("mousedown", onDoc);
		return () => document.removeEventListener("mousedown", onDoc);
	}, []);
	function choose(slug) {
		onChange(slug);
		setOpen(false);
		setQuery("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrapRef,
		className: "relative min-w-0 flex-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "mb-1.5 block text-xs font-medium tracking-wide text-muted uppercase",
				htmlFor: listId,
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-11 items-center gap-2 rounded-2xl border border-line bg-surface px-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
					className: "size-4 shrink-0 text-accent",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: listId,
					role: "combobox",
					"aria-expanded": open,
					"aria-controls": `${listId}-list`,
					"aria-autocomplete": "list",
					className: "min-h-11 w-full bg-transparent text-base text-ink outline-none placeholder:text-muted",
					placeholder,
					value: open ? query : selected?.name ?? "",
					onFocus: () => {
						setOpen(true);
						setQuery("");
					},
					onChange: (event) => {
						setQuery(event.target.value);
						setOpen(true);
					},
					onKeyDown: (event) => {
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
						} else if (event.key === "Escape") setOpen(false);
					}
				})]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				id: `${listId}-list`,
				role: "listbox",
				className: "absolute z-20 mt-1 max-h-72 w-full overflow-auto rounded-2xl border border-line bg-surface py-1 shadow-none",
				children: matches.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "px-3 py-3 text-sm text-muted",
					children: "No city match. Try Ladakh, Jaipur or Goa."
				}) : matches.map((city, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					role: "option",
					"aria-selected": city.slug === value,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: `flex min-h-11 w-full items-baseline justify-between gap-3 px-3 text-left ${index === active ? "bg-sand" : "bg-surface"}`,
						onMouseDown: (event) => {
							event.preventDefault();
							choose(city.slug);
						},
						onMouseEnter: () => setActive(index),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ink",
							children: city.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 text-xs text-muted",
							children: city.region
						})]
					})
				}, city.slug))
			}) : null
		]
	});
}
var KEY = "marg-trips";
function useTripMemory() {
	const [fromSlug, setFromSlugState] = (0, import_react.useState)("delhi");
	const [saved, setSaved] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				if (parsed.fromSlug && getCity(parsed.fromSlug)) setFromSlugState(parsed.fromSlug);
				if (Array.isArray(parsed.saved)) setSaved(parsed.saved.filter((item) => item && getPlace(item.slug) && getCity(item.fromSlug)));
			}
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(KEY, JSON.stringify({
			fromSlug,
			saved
		}));
	}, [
		fromSlug,
		saved,
		ready
	]);
	return {
		fromSlug,
		setFromSlug: (0, import_react.useCallback)((slug) => {
			if (!getCity(slug)) return;
			setFromSlugState((curr) => curr === slug ? curr : slug);
		}, []),
		saved,
		toggleSave: (0, import_react.useCallback)((slug, from) => {
			setSaved((curr) => {
				if (curr.some((item) => item.slug === slug)) return curr.filter((item) => item.slug !== slug);
				return [{
					slug,
					fromSlug: from
				}, ...curr].slice(0, 12);
			});
		}, []),
		isSaved: (0, import_react.useCallback)((slug) => saved.some((item) => item.slug === slug), [saved]),
		ready
	};
}
//#endregion
export { useTripMemory as n, CityField as t };
