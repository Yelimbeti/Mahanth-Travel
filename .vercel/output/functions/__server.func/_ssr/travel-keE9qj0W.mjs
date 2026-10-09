//#region node_modules/.nitro/vite/services/ssr/assets/travel-keE9qj0W.js
var YEAR = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12
];
var MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
var hm = (h, m = 0) => h * 60 + m;
var hubs = [
	{
		slug: "delhi",
		name: "Delhi",
		region: "Delhi",
		lat: 28.6139,
		lng: 77.209,
		airport: "DEL · Indira Gandhi",
		rail: "New Delhi / Nizamuddin",
		aliases: ["new delhi", "dilli"]
	},
	{
		slug: "mumbai",
		name: "Mumbai",
		region: "Maharashtra",
		lat: 19.076,
		lng: 72.8777,
		airport: "BOM · Chhatrapati Shivaji",
		rail: "CSMT / Mumbai Central",
		aliases: ["bombay"]
	},
	{
		slug: "bengaluru",
		name: "Bengaluru",
		region: "Karnataka",
		lat: 12.9716,
		lng: 77.5946,
		airport: "BLR · Kempegowda",
		rail: "KSR Bengaluru",
		aliases: ["bangalore", "bengalore"]
	},
	{
		slug: "chennai",
		name: "Chennai",
		region: "Tamil Nadu",
		lat: 13.0827,
		lng: 80.2707,
		airport: "MAA · Chennai",
		rail: "Chennai Central",
		aliases: ["madras"]
	},
	{
		slug: "kolkata",
		name: "Kolkata",
		region: "West Bengal",
		lat: 22.5726,
		lng: 88.3639,
		airport: "CCU · Netaji Subhas",
		rail: "Howrah / Sealdah",
		aliases: ["calcutta"]
	},
	{
		slug: "hyderabad",
		name: "Hyderabad",
		region: "Telangana",
		lat: 17.385,
		lng: 78.4867,
		airport: "HYD · Rajiv Gandhi",
		rail: "Secunderabad / Kacheguda",
		aliases: []
	},
	{
		slug: "pune",
		name: "Pune",
		region: "Maharashtra",
		lat: 18.5204,
		lng: 73.8567,
		airport: "PNQ · Pune",
		rail: "Pune Junction",
		aliases: ["poona"]
	},
	{
		slug: "ahmedabad",
		name: "Ahmedabad",
		region: "Gujarat",
		lat: 23.0225,
		lng: 72.5714,
		airport: "AMD · Sardar Vallabhbhai",
		rail: "Ahmedabad Junction",
		aliases: ["amdavad"]
	},
	{
		slug: "chandigarh",
		name: "Chandigarh",
		region: "Chandigarh",
		lat: 30.7333,
		lng: 76.7794,
		airport: "IXC · Chandigarh",
		rail: "Chandigarh",
		aliases: []
	},
	{
		slug: "lucknow",
		name: "Lucknow",
		region: "Uttar Pradesh",
		lat: 26.8467,
		lng: 80.9462,
		airport: "LKO · Chaudhary Charan Singh",
		rail: "Lucknow Charbagh",
		aliases: []
	},
	{
		slug: "srinagar",
		name: "Srinagar",
		region: "Jammu & Kashmir",
		lat: 34.0837,
		lng: 74.7973,
		airport: "SXR · Sheikh ul-Alam",
		rail: null,
		aliases: ["kashmir"]
	},
	{
		slug: "kochi",
		name: "Kochi",
		region: "Kerala",
		lat: 9.9312,
		lng: 76.2673,
		airport: "COK · Kochi",
		rail: "Ernakulam Junction",
		aliases: ["cochin", "ernakulam"]
	},
	{
		slug: "dehradun",
		name: "Dehradun",
		region: "Uttarakhand",
		lat: 30.3165,
		lng: 78.0322,
		airport: "DED · Jolly Grant",
		rail: "Dehradun",
		aliases: ["doon"]
	},
	{
		slug: "jammu",
		name: "Jammu",
		region: "Jammu & Kashmir",
		lat: 32.7266,
		lng: 74.857,
		airport: "IXJ · Jammu",
		rail: "Jammu Tawi",
		aliases: []
	},
	{
		slug: "amritsar",
		name: "Amritsar",
		region: "Punjab",
		lat: 31.634,
		lng: 74.8723,
		airport: "ATQ · Sri Guru Ram Das",
		rail: "Amritsar Junction",
		aliases: []
	}
];
var places = [
	{
		slug: "ladakh",
		name: "Ladakh",
		region: "Ladakh",
		eyebrow: "Leh · 3,520 m",
		lat: 34.1526,
		lng: 77.5771,
		airport: "IXL · Kushok Bakula, Leh",
		rail: null,
		aliases: [
			"leh",
			"ladak",
			"leh ladakh",
			"leh-ladakh"
		],
		tagline: "A high desert that only opens when the passes do.",
		blurb: "Leh is the town you sleep in. The lakes, dunes and monasteries are long day-drives over passes that shut with snow. Fly in if the month is uncertain, and do not climb to Pangong on the day you land.",
		image: "/places/ladakh.jpg",
		imageAlt: "Turquoise Pangong Lake against barren ochre mountains in Ladakh",
		bestMonths: [
			6,
			7,
			8,
			9
		],
		bestLabel: "Best Jun–Sep",
		cautionMonths: [],
		seasonLine: "June to September: the high roads are usually open, days are hard and bright, nights are cold.",
		shoulderLine: "May and October are the edges. Passes open late and close early. Fly to Leh unless you have checked the road that morning.",
		avoidLine: "November to April the Manali and Srinagar highways are usually cut. Leh itself is reachable by air, the lakes mostly are not.",
		pace: "hill",
		roadFactor: 1.85,
		roadKm: {
			delhi: 1010,
			chandigarh: 780,
			manali: 470,
			srinagar: 430,
			jammu: 700,
			amritsar: 860,
			dehradun: 1120
		},
		roadOpenMonths: [
			5,
			6,
			7,
			8,
			9,
			10
		],
		roadWatchMonths: [5, 10],
		roadNote: "Two doors, both seasonal. Manali–Leh is about 470 km and is the first to close in October. Srinagar–Leh is about 420 km via Zoji La and is often the better autumn bet, until that pass shuts too.",
		driveKmh: 32,
		busKmh: 28,
		flightFactor: 1.45,
		flights: "regular",
		transferHours: .6,
		airportTransfer: "Leh airport is close to town, about half an hour once you are out. Go straight to the hotel and stay low.",
		railGateway: {
			slug: "chandigarh",
			name: "Chandigarh",
			roadKm: 780,
			note: "No train reaches Ladakh. Chandigarh is the last easy railhead, and Leh is still a mountain crossing."
		},
		driveNote: "If the pass report is clear, the Manali road is the classic one. Start at dawn, carry water, and sleep before the high section — not on it.",
		busNote: "HRTC and shared sumos run Manali–Leh and Srinagar–Leh only while the passes are honestly open. There is no comfortable direct bus from the plains in the shoulder months.",
		via: [{
			name: "Manali",
			note: "Sleep here. The high road starts at first light, not after a night bus."
		}],
		viaByOrigin: {
			srinagar: [{
				name: "Kargil",
				note: "The natural night between Srinagar and Leh. Zoji La decides whether you get here."
			}],
			jammu: [{
				name: "Srinagar",
				note: "Break the journey. The valley is not a shortcut you drive through in the dark."
			}, {
				name: "Kargil",
				note: "Second night. Leh is tomorrow, if the pass behaved."
			}],
			manali: [],
			leh: []
		},
		stayTowns: [
			{
				name: "Leh",
				km: 0,
				why: "The only sensible first base. Clinics, permits, food, and a night at a liveable altitude."
			},
			{
				name: "Diskit & Hunder",
				km: 120,
				why: "Nubra’s dunes and monasteries. Sleep here instead of driving back over Khardung La in the dark."
			},
			{
				name: "Spangmik",
				km: 160,
				why: "The village on Pangong. Camps are seasonal and very cold after sunset."
			},
			{
				name: "Kargil",
				km: 210,
				why: "A stop on the Srinagar road, not a holiday. Useful if that highway is the one that’s open."
			}
		],
		hotels: [
			{
				name: "The Grand Dragon",
				area: "Leh",
				band: "luxe",
				note: "Reliable heat and a central bed for the first two nights of acclimatising."
			},
			{
				name: "The Indus",
				area: "Leh",
				band: "mid",
				note: "Straightforward hotel in town, easier than a camp when you are still short of breath."
			},
			{
				name: "Changspa homestays",
				area: "Old Leh",
				band: "budget",
				note: "Family houses along Changspa Road. Book one with a hot shower; nights freeze."
			}
		],
		sights: [
			{
				name: "Shanti Stupa",
				why: "The easy first sunset. You can see the bowl of Leh without a long drive.",
				km: 3,
				opens: hm(5),
				closes: hm(21),
				hoursNote: "Dawn to evening"
			},
			{
				name: "Leh Palace & market",
				why: "The old royal palace above the bazaar. Keep it for when your head is clear.",
				km: 1,
				opens: hm(9),
				closes: hm(17),
				hoursNote: "Palace daytime; market into the evening"
			},
			{
				name: "Thiksey Monastery",
				why: "The hill monastery east of town. A half day with Shey and Hemis.",
				km: 19,
				opens: hm(6),
				closes: hm(18),
				hoursNote: "Morning prayers are the reason to go early"
			},
			{
				name: "Pangong Tso",
				why: "The long blue lake. A very early start, and a night out there if you can get a camp.",
				km: 160,
				alwaysOpen: true,
				hoursNote: "No gate — the road is the limit",
				closedMonths: [
					11,
					12,
					1,
					2,
					3,
					4
				],
				closedReason: "The lake road crosses high passes and is usually shut in winter.",
				watchMonths: [5, 10],
				watchReason: "Early October can still be open. Snow closes it with a day’s notice. Ask in Leh that morning."
			},
			{
				name: "Nubra and Hunder",
				why: "Sand dunes, the Diskit Buddha, and a valley over Khardung La.",
				km: 120,
				alwaysOpen: true,
				hoursNote: "Daylight visit; the pass has its own cutoff",
				closedMonths: [
					11,
					12,
					1,
					2,
					3,
					4
				],
				closedReason: "Khardung La is a winter closure, not a short delay.",
				watchMonths: [5, 10],
				watchReason: "The pass opens and shuts on army orders. A permit is not a guarantee you will cross."
			},
			{
				name: "Magnetic Hill & Pathar Sahib",
				why: "The short westward loop from Leh, on the Srinagar road. Fine once you feel normal.",
				km: 30,
				alwaysOpen: true,
				hoursNote: "Outdoor, any daylight"
			}
		],
		plans: {
			3: [
				{
					title: "Land and stay low",
					detail: "Hotel, tea, Shanti Stupa at sunset. No lake today, even if you feel heroic at the airport."
				},
				{
					title: "Monasteries east of Leh",
					detail: "Thiksey, Hemis and Shey. Back in Leh for an early night."
				},
				{
					title: "Palace, market, maybe the west loop",
					detail: "Leh Palace and the bazaar. Add Pathar Sahib only if your head is fine."
				}
			],
			5: [
				{
					title: "Arrive and do almost nothing",
					detail: "Acclimatise. A slow walk and the stupa. Sleep."
				},
				{
					title: "Monastery circuit",
					detail: "Thiksey, Hemis, Shey. Permits for Nubra or Pangong if you did not get them online."
				},
				{
					title: "Nubra, if the pass is open",
					detail: "Khardung La in the morning, Diskit and Hunder, night in the valley."
				},
				{
					title: "Back to Leh",
					detail: "Return before dark. Market and palace in whatever energy is left."
				},
				{
					title: "Buffer",
					detail: "Use it for weather, a clinic, or a short west loop. Do not invent a Pangong dash on the last morning."
				}
			],
			7: [
				{
					title: "Rest in Leh",
					detail: "First night is for altitude, not for sightseeing."
				},
				{
					title: "East monasteries",
					detail: "Thiksey, Hemis and Shey, with a long lunch back toward town."
				},
				{
					title: "Over to Nubra",
					detail: "Cross Khardung La early. Night in Hunder or Diskit."
				},
				{
					title: "Nubra morning, return",
					detail: "Dunes at a civilised hour, then back to Leh. Do not add Pangong on the same day."
				},
				{
					title: "Pangong, one direction",
					detail: "Leave before dawn. Night at Spangmik if the camps are still up."
				},
				{
					title: "Pangong to Leh",
					detail: "The return is longer than it looks. Keep the evening empty."
				},
				{
					title: "Leave",
					detail: "Market, a last permit photocopy, and a flight. The road out is a separate trip."
				}
			]
		},
		tips: [
			"Spend a full night in Leh before any pass. Headache plus a 5,000 m road is how trips end early.",
			"Cash still matters in the smaller valleys. Cards are a Leh convenience.",
			"October nights go well below freezing. A city jacket is not a Ladakh jacket."
		],
		permit: "Indian travellers need an Inner Line Permit for Nubra, Pangong, Tso Moriri and Dah. Get it in Leh or online, and carry the ID you applied with."
	},
	{
		slug: "manali",
		name: "Manali",
		region: "Himachal Pradesh",
		eyebrow: "Kullu valley · 2,050 m",
		lat: 32.2396,
		lng: 77.1887,
		airport: "KUU · Bhuntar",
		rail: null,
		aliases: ["kullu", "kullu manali"],
		tagline: "Cedar, river, and the last easy town before the high road.",
		blurb: "Manali is the Beas valley done properly: a walkable old village, a louder mall, and day trips up to Solang or through the Atal Tunnel. It is also the honest overnight if you are trying to drive into Ladakh.",
		image: "/places/manali.jpg",
		imageAlt: "Beas river, cedar forest and snow ridgelines near Manali",
		bestMonths: [
			1,
			2,
			3,
			4,
			5,
			6,
			10,
			11,
			12
		],
		bestLabel: "Best Oct–Jun",
		cautionMonths: [7, 8],
		seasonLine: "October to June is the working season: clear October, snow in deep winter, warm days in May.",
		shoulderLine: "The edges of winter mean closed viewpoints, not a closed town. Ask about Rohtang before you promise anyone snow.",
		avoidLine: "July and August are landslide months. The valley is green and the highway is moody. Build a spare day.",
		pace: "hill",
		roadFactor: 1.45,
		roadKm: {
			delhi: 540,
			chandigarh: 280,
			dehradun: 500,
			amritsar: 420,
			jammu: 450,
			srinagar: 700
		},
		roadOpenMonths: YEAR,
		roadWatchMonths: [7, 8],
		roadNote: "The Chandigarh–Mandi highway is the normal door. Monsoon slips around Mandi and Aut can add hours. Rohtang, beyond town, is a separate permit and a separate closure.",
		driveKmh: 45,
		busKmh: 40,
		flightFactor: 1.15,
		flights: "sparse",
		transferHours: 1.6,
		airportTransfer: "Bhuntar is about 50 km down-valley, and flights are few. A lot of people fly to Chandigarh and drive the rest.",
		railGateway: {
			slug: "chandigarh",
			name: "Chandigarh",
			roadKm: 280,
			note: "There is no broad-gauge station in Manali. Chandigarh, then a cab or a Volvo, is the sane rail split."
		},
		driveNote: "Leave the plains early. The last stretch after Aut is mountain road, and fog after dusk is miserable.",
		busNote: "Overnight Volvos from Delhi are the default. They are fine. They are not fast, and the last hour into town crawls.",
		via: [{
			name: "Mandi",
			note: "A useful lunch, not a night, unless the highway has already misbehaved."
		}],
		viaByOrigin: {
			chandigarh: [],
			delhi: [{
				name: "Mandi",
				note: "Stretch your legs. The Beas gorge starts to feel like the hills after this."
			}]
		},
		stayTowns: [
			{
				name: "Old Manali",
				km: 2,
				why: "The walkable side: river, cafes, fewer horns than the mall."
			},
			{
				name: "Vashisht",
				km: 3,
				why: "A quieter slope and public hot springs. Good if you want to sleep early."
			},
			{
				name: "Naggar",
				km: 22,
				why: "Castle ridge up the valley. Calmer, and a better base if Manali town feels crowded."
			},
			{
				name: "Solang",
				km: 14,
				why: "Stay only if you came for the activities. Windy, and shut early."
			}
		],
		hotels: [
			{
				name: "Johnsons Lodge",
				area: "Circuit House road",
				band: "mid",
				note: "A long-running garden hotel, walking distance to the noisier streets but not in them."
			},
			{
				name: "Old Manali guesthouses",
				area: "Old Manali",
				band: "budget",
				note: "Wood houses above the river. Read the latest notes on heating before a winter booking."
			},
			{
				name: "A Naggar heritage stay",
				area: "Naggar",
				band: "luxe",
				note: "Pay more to be out of town. The castle loop is then a walk, not a taxi negotiation."
			}
		],
		sights: [
			{
				name: "Hadimba Temple",
				why: "The cedar grove in the middle of town. Short, and best before the coaches.",
				km: 2,
				opens: hm(8),
				closes: hm(18),
				hoursNote: "Daytime"
			},
			{
				name: "Old Manali & Manu Temple",
				why: "The village lane and the river. This is the part worth staying for.",
				km: 2,
				alwaysOpen: true,
				hoursNote: "Walk any time; temple mornings are quieter"
			},
			{
				name: "Vashisht hot spring",
				why: "A public bath and a small temple above town.",
				km: 3,
				opens: hm(6),
				closes: hm(20),
				hoursNote: "Go early if you want it to yourself"
			},
			{
				name: "Solang Valley",
				why: "The activity bowl: views, zorbing, and snow play when there is snow.",
				km: 14,
				opens: hm(9),
				closes: hm(17),
				hoursNote: "Operators wind down by late afternoon"
			},
			{
				name: "Atal Tunnel & Sissu",
				why: "The tunnel skips Rohtang and lands you in Lahaul. Worth it on a clear day.",
				km: 25,
				alwaysOpen: true,
				hoursNote: "Road hours; tunnel can close for weather or maintenance",
				watchMonths: [
					1,
					2,
					12
				],
				watchReason: "Winter snow on the Lahaul side can shut the road beyond the tunnel even when Manali is fine."
			},
			{
				name: "Rohtang Pass",
				why: "The old high pass. It needs a permit and it is not a casual add-on.",
				km: 51,
				alwaysOpen: true,
				hoursNote: "Permit and a morning departure",
				closedMonths: [
					12,
					1,
					2,
					3
				],
				closedReason: "Rohtang is a winter closure. Do Sissu instead, if the tunnel side is open.",
				watchMonths: [4, 11],
				watchReason: "Shoulder months depend on the last snowfall. Permits sell out and the pass still may not."
			}
		],
		plans: {
			3: [
				{
					title: "Arrive and walk Old Manali",
					detail: "Check in, river path, Vashisht if the evening is kind."
				},
				{
					title: "Town, slowly",
					detail: "Hadimba early, Manu Temple, and nothing that requires a highway."
				},
				{
					title: "One valley",
					detail: "Solang, or the Atal Tunnel to Sissu if the report is clear. Not both."
				}
			],
			5: [
				{
					title: "Settle",
					detail: "Old Manali or Vashisht. Unwind the drive."
				},
				{
					title: "Hadimba and the village",
					detail: "Morning temple, long lunch, mall only if you need something practical."
				},
				{
					title: "Solang",
					detail: "Go early and leave when the day-trippers peak."
				},
				{
					title: "Naggar",
					detail: "Castle, the Roerich gallery if it is open, and the quieter ridge."
				},
				{
					title: "Lahaul or a spare day",
					detail: "Atal Tunnel to Sissu, with a hard turnaround time. If the sky is bad, walk instead."
				}
			],
			7: [
				{
					title: "Arrive",
					detail: "Do not schedule a pass on the arrival day."
				},
				{
					title: "Old Manali",
					detail: "Village, river, and an early night."
				},
				{
					title: "Hadimba and Vashisht",
					detail: "The two short classics, with space between them."
				},
				{
					title: "Solang",
					detail: "Half a day is enough unless you are actually skiing or riding."
				},
				{
					title: "Naggar",
					detail: "Move slower up the valley. Stay the night if town has worn you out."
				},
				{
					title: "Sissu",
					detail: "Through the tunnel and back, or sleep in Lahaul if rooms are open."
				},
				{
					title: "Buffer and leave",
					detail: "Monsoon or snow delays belong on this day, not on your flight."
				}
			]
		},
		tips: [
			"Rohtang permits are a project. The Atal Tunnel to Sissu is the simpler mountain hour.",
			"Taxis double their mood on long weekends. Agree the day rate before you sit down.",
			"If Ladakh is the real goal, treat Manali as a sleep and a supply stop, not a third adventure the same morning."
		]
	},
	{
		slug: "goa",
		name: "Goa",
		region: "Goa",
		eyebrow: "Arabian coast",
		lat: 15.4909,
		lng: 73.8278,
		airport: "GOI · Manohar or Dabolim",
		rail: "Madgaon Junction",
		aliases: [
			"panaji",
			"panjim",
			"madgaon",
			"margao"
		],
		tagline: "A coast that is best when you pick a side and stay there.",
		blurb: "North Goa is cliffs, nights and crowds. South Goa is longer beaches and earlier evenings. Panaji, in the middle, is the prettiest town to actually walk. October is green and half-open, not yet the December postcard.",
		image: "/places/goa.jpg",
		imageAlt: "A quiet Goa beach with coconut palms and a green sea",
		bestMonths: [
			11,
			12,
			1,
			2
		],
		bestLabel: "Best Nov–Feb",
		cautionMonths: [],
		seasonLine: "November to February: dry, swimmable, and busy enough that you should book the bed.",
		shoulderLine: "October is the coast waking up — cheaper, greener, some shacks still shut, sea not yet flat. March is the other edge, hotter and quieter.",
		avoidLine: "June to September the monsoon closes many beach shacks and makes the swimming ordinary. The inland is lush if you like rain.",
		pace: "plain",
		roadFactor: 1.32,
		roadKm: {
			mumbai: 590,
			pune: 450,
			bengaluru: 560,
			delhi: 1860,
			hyderabad: 700,
			ahmedabad: 1100
		},
		roadOpenMonths: YEAR,
		roadWatchMonths: [],
		roadNote: "The coastal highway is open year-round. Monsoon can slow the Western Ghats sections from the Deccan, not the beaches themselves.",
		driveKmh: 55,
		busKmh: 45,
		flightFactor: 1,
		flights: "regular",
		transferHours: 1,
		airportTransfer: "Ask which airport you landed at. Mopa and Dabolim are on opposite sides of the state, and the wrong taxi assumption costs an hour.",
		railGateway: null,
		driveNote: "From Mumbai or Pune this is a real highway day. Start early and expect the last beach road to be slower than the map.",
		busNote: "Overnight Volvo from Mumbai and Pune is a classic and a good one. From Delhi, take the train or a flight instead.",
		via: [],
		viaByOrigin: {
			mumbai: [{
				name: "Mapusa or Madgaon",
				note: "Night buses tend to split here. Know which beach you are actually going to before you get off."
			}],
			pune: [{
				name: "Madgaon",
				note: "The south and central beaches are simpler from here than from the far north."
			}]
		},
		stayTowns: [
			{
				name: "Panaji",
				km: 0,
				why: "Fontainhas, the river, and a real town. The best base if you want more than a beach shack."
			},
			{
				name: "Anjuna & Vagator",
				km: 20,
				why: "North cliffs. Stay here for the plateau, not if you want quiet mornings."
			},
			{
				name: "Palolem",
				km: 70,
				why: "The southern crescent. Calmer water, longer to reach, earlier nights."
			},
			{
				name: "Benaulim",
				km: 40,
				why: "A wide, local beach south of Madgaon. Useful if Palolem feels far."
			}
		],
		hotels: [
			{
				name: "Taj Exotica",
				area: "Benaulim",
				band: "luxe",
				note: "A proper resort on the south coast when you want the beach without the shack lottery."
			},
			{
				name: "Panjim Inn",
				area: "Fontainhas",
				band: "mid",
				note: "A heritage house in the old Latin quarter. You walk dinner."
			},
			{
				name: "Palolem guesthouses",
				area: "Palolem",
				band: "budget",
				note: "Book a room, not just a beach hut, if you are travelling in October — huts come back slowly after the rain."
			}
		],
		sights: [
			{
				name: "Fontainhas, Panaji",
				why: "The old quarter of painted houses. The best hour in the state that is not a beach.",
				km: 0,
				alwaysOpen: true,
				hoursNote: "A walk; mornings and late afternoons"
			},
			{
				name: "Basilica of Bom Jesus",
				why: "Old Goa, with the cathedral a short walk on. Go before the heat.",
				km: 10,
				opens: hm(9),
				closes: hm(18, 30),
				hoursNote: "Church hours; shoulders and knees covered"
			},
			{
				name: "Fort Aguada",
				why: "The headland above the river mouth. Sunset is the point.",
				km: 18,
				alwaysOpen: true,
				hoursNote: "Outdoor; the lower fort and the upper view are different stops"
			},
			{
				name: "Vagator cliffs",
				why: "The north coast in one glance. Come for the light, leave before the traffic.",
				km: 22,
				alwaysOpen: true,
				hoursNote: "Outdoor cliffs; sunset is the hour"
			},
			{
				name: "Palolem beach",
				why: "A crescent you can walk end to end. Kayaks in season, quiet in October.",
				km: 70,
				alwaysOpen: true,
				hoursNote: "Always there; shacks and rentals follow the season",
				watchMonths: [
					6,
					7,
					8,
					9,
					10
				],
				watchReason: "Many beach operations close in the rains and reopen through October. Swim only where it looks ordinary."
			},
			{
				name: "Dudhsagar Falls",
				why: "The monsoon waterfall in the ghats. A jeep or a restricted train window, not a casual taxi.",
				km: 55,
				opens: hm(8),
				closes: hm(16),
				hoursNote: "Last entries are early",
				closedMonths: [
					6,
					7,
					8,
					9
				],
				closedReason: "The falls trail and jeep route are a monsoon closure.",
				watchMonths: [10],
				watchReason: "October is when it starts to reopen. Confirm the jeep gate the day before."
			}
		],
		plans: {
			3: [
				{
					title: "Panaji and Old Goa",
					detail: "Fontainhas, the basilica, and a river evening. Do not change hotels tonight."
				},
				{
					title: "Pick a coast",
					detail: "Either the north cliffs or one south beach. Not a survey of all of them."
				},
				{
					title: "Repeat the good beach",
					detail: "A second unhurried morning beats a new town and a traffic jam."
				}
			],
			5: [
				{
					title: "Arrive in Panaji",
					detail: "Walk Fontainhas before you touch a beach."
				},
				{
					title: "Old Goa",
					detail: "Churches in the morning, then west to Aguada for the light."
				},
				{
					title: "North",
					detail: "Anjuna and Vagator. Eat and come back, unless you deliberately booked the north."
				},
				{
					title: "South",
					detail: "Move once, to Palolem or Benaulim, and stop moving."
				},
				{
					title: "Water or falls",
					detail: "A beach day. Add Dudhsagar only if the gate is actually open."
				}
			],
			7: [
				{
					title: "Panaji",
					detail: "Old quarter and a slow meal. This is the town day."
				},
				{
					title: "Old Goa and Aguada",
					detail: "Churches, then the fort before sunset."
				},
				{
					title: "North day",
					detail: "Cliffs and a market if one is on. Sleep back in Panaji or move north tonight."
				},
				{
					title: "Move south",
					detail: "One transfer. Palolem or Benaulim. Unpack properly."
				},
				{
					title: "Beach",
					detail: "Nothing with a departure time."
				},
				{
					title: "Inland or another cove",
					detail: "Dudhsagar if it is open, otherwise a smaller beach and an earlier dinner."
				},
				{
					title: "Leave without a new plan",
					detail: "Airports eat the afternoon. Don’t invent Colva on the way unless it is actually on the way."
				}
			]
		},
		tips: [
			"Choose north or south for the nights. Crossing the state for dinner is how people learn to hate the highway.",
			"October swimming is moodier than December. Watch the locals, not the other tourists.",
			"Rent a scooter only for short loops. The highway at night is not a scenery road."
		]
	},
	{
		slug: "jaipur",
		name: "Jaipur",
		region: "Rajasthan",
		eyebrow: "Pink city",
		lat: 26.9124,
		lng: 75.7873,
		airport: "JAI · Jaipur",
		rail: "Jaipur Junction",
		aliases: ["pink city"],
		tagline: "Forts, a planned old city, and a highway that is actually short.",
		blurb: "Jaipur is the easy Rajasthan trip: one city, a ridge of forts, and bazaars you can walk. From Delhi it is a morning’s drive. October is exactly when the stone stops burning your hand.",
		image: "/places/jaipur.jpg",
		imageAlt: "Amber Fort sandstone ramparts on a dry ridge above Jaipur",
		bestMonths: [
			10,
			11,
			12,
			1,
			2,
			3
		],
		bestLabel: "Best Oct–Mar",
		cautionMonths: [],
		seasonLine: "October to March is the season the city was built for: warm days, nights that want a shawl, forts you can climb.",
		shoulderLine: "April and September are workable if you start at opening time and hide at lunch.",
		avoidLine: "May and June are a furnace. July and August rain on the Aravallis and flatten the light.",
		pace: "plain",
		roadFactor: 1.22,
		roadKm: {
			delhi: 280,
			ahmedabad: 660,
			udaipur: 390,
			jaisalmer: 570,
			mumbai: 1140,
			agra: 240
		},
		roadOpenMonths: YEAR,
		roadWatchMonths: [],
		roadNote: "The Delhi–Jaipur expressway is the straightforward drive in the country. It does not close for season.",
		driveKmh: 55,
		busKmh: 48,
		flightFactor: 1,
		flights: "regular",
		transferHours: .6,
		airportTransfer: "The airport sits south of the city, about 40 minutes to the old gates in ordinary traffic.",
		railGateway: null,
		driveNote: "From Delhi, leave after breakfast and you are in the old city for a late lunch. Don’t overthink this one.",
		busNote: "Frequent deluxe buses from Delhi. Useful and unglamorous. The train is more pleasant if you get a seat.",
		via: [],
		stayTowns: [
			{
				name: "Old City",
				km: 0,
				why: "Inside or just outside the gates. You walk to the palace and the bazaars."
			},
			{
				name: "C-Scheme & Bani Park",
				km: 3,
				why: "Quieter hotels, a short ride from the sights, easier parking."
			},
			{
				name: "Amer",
				km: 11,
				why: "Stay by the fort only if the fort is the whole point. Town dinners become a ride."
			},
			{
				name: "Samode",
				km: 40,
				why: "A palace village for a night when Jaipur itself feels like enough."
			}
		],
		hotels: [
			{
				name: "Rambagh Palace",
				area: "Bhawani Singh Road",
				band: "luxe",
				note: "The former palace, gardens, and a pool you will not want to leave at noon."
			},
			{
				name: "Samode Haveli",
				area: "Old City",
				band: "luxe",
				note: "A haveli among the lanes. You step out into the city you came for."
			},
			{
				name: "Pearl Palace Heritage",
				area: "Hathroi",
				band: "mid",
				note: "The reliable independent hotel: rooftop, clear rooms, no palace theatre."
			}
		],
		sights: [
			{
				name: "Amber Fort",
				why: "The ridge palace. Go at opening, before the courtyards fill.",
				km: 11,
				opens: hm(8),
				closes: hm(17, 30),
				hoursNote: "Daytime fort; the night show is a separate ticket"
			},
			{
				name: "Hawa Mahal",
				why: "The facade is the sight. The interior is a short climb for the view back.",
				km: 1,
				opens: hm(9),
				closes: hm(16, 30),
				hoursNote: "Closes earlier than the fort"
			},
			{
				name: "City Palace",
				why: "Still a royal seat, with courtyards and textiles. Give it a full morning if you like rooms.",
				km: 1,
				opens: hm(9, 30),
				closes: hm(17),
				hoursNote: "Daytime"
			},
			{
				name: "Jantar Mantar",
				why: "The open-air observatory next door. It is better than people expect.",
				km: 1,
				opens: hm(9),
				closes: hm(16, 30),
				hoursNote: "Same lane as the palace"
			},
			{
				name: "Nahargarh",
				why: "Sunset over the pink grid. The road up is the constraint, not the gate.",
				km: 8,
				opens: hm(10),
				closes: hm(17, 30),
				hoursNote: "Daytime entry; arrive before the cutoff if you want the ramparts"
			},
			{
				name: "Johari & Bapu bazaars",
				why: "Jewellery, textiles, and the lanes between the big monuments.",
				km: 1,
				alwaysOpen: true,
				hoursNote: "Shops wander open mid-morning and shut late"
			}
		],
		plans: {
			3: [
				{
					title: "Amber at opening",
					detail: "Fort first, then lunch, then Hawa Mahal from the outside when the light is lower."
				},
				{
					title: "Palace quarter",
					detail: "City Palace and Jantar Mantar, then the bazaars without a schedule."
				},
				{
					title: "Ridge at the end of the day",
					detail: "Nahargarh for sunset. Leave the morning for a gate you missed or for doing nothing."
				}
			],
			5: [
				{
					title: "Arrive and walk one gate",
					detail: "Old city orientation. Don’t add Amber onto a late arrival."
				},
				{
					title: "Amber",
					detail: "Early fort, slow return, evening in the lanes."
				},
				{
					title: "City Palace and Jantar Mantar",
					detail: "One ticketed morning. Bazaar after."
				},
				{
					title: "Nahargarh and a workshop",
					detail: "Sunset fort, or a block-print visit if you would rather be in the shade."
				},
				{
					title: "Samode or a spare city day",
					detail: "The village palace if you want out. Otherwise repeat the old city properly."
				}
			],
			7: [
				{
					title: "Settle in the old city",
					detail: "Walk until dinner. No fort."
				},
				{
					title: "Amber",
					detail: "The whole ridge, not a photo stop."
				},
				{
					title: "Palace and observatory",
					detail: "Morning tickets, long lunch, closed shutters in the afternoon."
				},
				{
					title: "Bazaars",
					detail: "Johari, Bapu, and a single thing you actually want to buy."
				},
				{
					title: "Nahargarh",
					detail: "Go up late. Come down before the road feels like a gamble."
				},
				{
					title: "Samode",
					detail: "A day out, or a night, in the palace village."
				},
				{
					title: "Leave on a quiet morning",
					detail: "One last lane and the station or the expressway."
				}
			]
		},
		tips: [
			"Amber and the City Palace on the same day is how Jaipur starts to blur. Split them.",
			"Auto rates are a conversation. Use a metered ride or agree the number first.",
			"From Delhi this is a weekend. It is a better long weekend."
		]
	},
	{
		slug: "kerala",
		name: "Alleppey",
		region: "Kerala",
		eyebrow: "Backwaters",
		lat: 9.4981,
		lng: 76.3388,
		airport: "COK · Kochi",
		rail: "Alappuzha",
		aliases: [
			"alleppey",
			"alappuzha",
			"kerala",
			"backwaters",
			"kumarakom"
		],
		tagline: "Canals, a houseboat night, and a coast that stays green.",
		blurb: "Alleppey is the backwater town: finish the road, get on the water, and stop collecting destinations. Kochi is the airport and a good extra day, not the same trip.",
		image: "/places/kerala.jpg",
		imageAlt: "Still Kerala backwaters, a wooden canoe and coconut palms",
		bestMonths: [
			10,
			11,
			12,
			1,
			2,
			3
		],
		bestLabel: "Best Oct–Mar",
		cautionMonths: [],
		seasonLine: "October to March is dry enough for the boats and kind enough to sit outside at noon.",
		shoulderLine: "April is hot. September is the rain letting go. Both can be beautiful and both will be humid.",
		avoidLine: "June to August is real monsoon. Boats still run, the light is extraordinary, and a lot of the day is spent under a roof.",
		pace: "plain",
		roadFactor: 1.35,
		roadKm: {
			kochi: 65,
			bengaluru: 540,
			chennai: 720,
			delhi: 2700,
			mumbai: 1400
		},
		roadOpenMonths: YEAR,
		roadWatchMonths: [6, 7],
		roadNote: "The coast road is open. A heavy monsoon week can slow the ghats if you are driving from Bengaluru or Tamil Nadu.",
		driveKmh: 48,
		busKmh: 42,
		flightFactor: 1,
		flights: "regular",
		transferHours: 2,
		airportTransfer: "Kochi airport is about 80 km north. Budget two hours before anyone talks about a boat.",
		railGateway: null,
		driveNote: "From Kochi this is a short southbound ride. From further away, fly to Kochi and start the trip there.",
		busNote: "State buses from Kochi and Kottayam are constant and cheap. Use them for the hop, not for a cross-country haul.",
		via: [],
		viaByOrigin: {
			bengaluru: [{
				name: "Kochi",
				note: "Break or fly here. Alleppey as a single driving day from the Deccan is a long one."
			}],
			chennai: [{
				name: "Kochi",
				note: "The sensible night. The last stretch south is then easy."
			}]
		},
		stayTowns: [
			{
				name: "Alleppey finishing point",
				km: 0,
				why: "Where the houseboats dock. Stay on land here the night before or after the boat."
			},
			{
				name: "Kumarakom",
				km: 35,
				why: "The quieter bird and backwater side, often reached as part of the cruise."
			},
			{
				name: "Marari",
				km: 15,
				why: "A fishing beach when you want salt air after the canals."
			},
			{
				name: "Fort Kochi",
				km: 70,
				why: "The port quarter. Worth a night if your flight is the next day, not a same-evening add-on."
			}
		],
		hotels: [
			{
				name: "Coconut Lagoon",
				area: "Kumarakom",
				band: "luxe",
				note: "A CGH Earth backwater hotel. The reason to sleep in Kumarakom rather than only pass it."
			},
			{
				name: "A private kettuvallam",
				area: "Vembanad",
				band: "mid",
				note: "One night on a houseboat is the trip. Day two on a boat is usually too much."
			},
			{
				name: "Finishing-point homestays",
				area: "Alleppey",
				band: "budget",
				note: "Simple rooms by the docks. Good for the night you are not on the water."
			}
		],
		sights: [
			{
				name: "Houseboat on Vembanad",
				why: "The point of coming. A day cruise or one night. Watch the village banks go by slowly.",
				km: 2,
				opens: hm(11),
				closes: hm(17),
				hoursNote: "Boats leave late morning; night boats stay out",
				watchMonths: [
					6,
					7,
					8
				],
				watchReason: "Monsoon boats run, but locks, rough weather and cancelled village stops are normal."
			},
			{
				name: "Alleppey beach",
				why: "A working beach and a pier, not a resort bay. Go for the evening.",
				km: 3,
				alwaysOpen: true,
				hoursNote: "Any time; swimming is not the attraction"
			},
			{
				name: "Marari beach",
				why: "Quieter sand and fishing boats, a short ride south.",
				km: 15,
				alwaysOpen: true,
				hoursNote: "Daylight is enough"
			},
			{
				name: "Kumarakom bird sanctuary",
				why: "Backwater paths and birds, best with a morning when the boats are still quiet.",
				km: 35,
				opens: hm(6, 30),
				closes: hm(17),
				hoursNote: "Early entry is the good one"
			},
			{
				name: "Fort Kochi",
				why: "Chinese fishing nets, Jew Town, and a walkable port. A separate day from the canals.",
				km: 70,
				alwaysOpen: true,
				hoursNote: "A neighbourhood; shops follow ordinary hours"
			},
			{
				name: "Village canoe",
				why: "Narrow canals a houseboat cannot enter. Half a day, and often the better memory.",
				km: 5,
				opens: hm(8),
				closes: hm(16),
				hoursNote: "Go before the heat"
			}
		],
		plans: {
			3: [
				{
					title: "Arrive and sleep on land",
					detail: "Kochi transfer, finishing-point room, a canal-edge walk. The boat is tomorrow."
				},
				{
					title: "Houseboat",
					detail: "One night on Vembanad, or a long day cruise if you would rather sleep ashore."
				},
				{
					title: "Beach morning",
					detail: "Marari or Alleppey beach, then the road back to Kochi if you fly."
				}
			],
			5: [
				{
					title: "Land in Kochi, move south",
					detail: "Don’t try to see Fort Kochi properly and reach a boat the same evening."
				},
				{
					title: "Canoe and town",
					detail: "A village canal in the morning, beach in the evening."
				},
				{
					title: "Houseboat night",
					detail: "Board late morning. The night is the experience."
				},
				{
					title: "Kumarakom or Marari",
					detail: "Birds, or the fishing beach. One of them."
				},
				{
					title: "Fort Kochi on the way out",
					detail: "A night or a long afternoon in the port before the airport."
				}
			],
			7: [
				{
					title: "Fort Kochi first",
					detail: "Use the arrival day on foot in the port."
				},
				{
					title: "South to Alleppey",
					detail: "Move, unpack, walk the finishing point."
				},
				{
					title: "Village canoe",
					detail: "Narrow water, no itinerary."
				},
				{
					title: "Houseboat",
					detail: "One night. Tell them you care about the route more than the playlist."
				},
				{
					title: "Back on land",
					detail: "A quiet recovery day. The boat is not restful for everyone."
				},
				{
					title: "Marari",
					detail: "Beach, fish, early evening."
				},
				{
					title: "Kumarakom or the flight",
					detail: "Birds in the morning if the flight is late. Otherwise start north."
				}
			]
		},
		tips: [
			"One houseboat night is plenty. The second day is a corridor with lunch.",
			"Agree what “AC hours” means on the boat before you pay.",
			"The airport is in Kochi. Build the transfer as a real leg, not a footnote."
		]
	},
	{
		slug: "varanasi",
		name: "Varanasi",
		region: "Uttar Pradesh",
		eyebrow: "The ghats",
		lat: 25.3176,
		lng: 82.9739,
		airport: "VNS · Lal Bahadur Shastri",
		rail: "Varanasi Junction / Cantt",
		aliases: [
			"banaras",
			"benaras",
			"kashi",
			"banares"
		],
		tagline: "A river city that is best at dawn and after dark.",
		blurb: "Varanasi is not a monument checklist. It is one river, a walk that keeps turning, and Sarnath when you need quiet. Stay near the ghats or you will spend the trip in traffic trying to reach them.",
		image: "/places/varanasi.jpg",
		imageAlt: "Sandstone ghats stepping into the river at blue hour in Varanasi",
		bestMonths: [
			10,
			11,
			12,
			1,
			2,
			3
		],
		bestLabel: "Best Oct–Mar",
		cautionMonths: [],
		seasonLine: "October to March: mornings you can stand on a boat, evenings that are busy but not melting.",
		shoulderLine: "April and September work if you protect the middle of the day and keep the dawn boat.",
		avoidLine: "May and June are severe. The monsoon swells the river and can flood the lower steps.",
		pace: "plain",
		roadFactor: 1.25,
		roadKm: {
			delhi: 820,
			lucknow: 320,
			kolkata: 680,
			hyderabad: 1100
		},
		roadOpenMonths: YEAR,
		roadWatchMonths: [7, 8],
		roadNote: "Highways from Lucknow and Delhi stay open. Monsoon is a river problem inside the city, not a road closure on the way in.",
		driveKmh: 55,
		busKmh: 48,
		flightFactor: 1,
		flights: "regular",
		transferHours: .8,
		airportTransfer: "The airport is well north-west of the ghats. Leave longer than the map says once you hit the old lanes.",
		railGateway: null,
		driveNote: "From Lucknow this is a straightforward day. From Delhi it is a long one — the overnight train is kinder.",
		busNote: "Buses exist from Lucknow and Delhi. The train is the better overnight.",
		via: [],
		viaByOrigin: { delhi: [{
			name: "Lucknow",
			note: "Only if you are breaking a drive. Otherwise sleep on the train and start at the river."
		}] },
		stayTowns: [
			{
				name: "Assi Ghat",
				km: 0,
				why: "The southern ghat. Slightly easier evenings, and you can walk north in the morning."
			},
			{
				name: "Dashashwamedh lanes",
				km: 2,
				why: "In the middle of it. Extraordinary and loud. Book a room that is not on the alley itself."
			},
			{
				name: "Cantonment",
				km: 8,
				why: "Only if you need a quiet hotel near the station. You will cab to the river every time."
			},
			{
				name: "Sarnath",
				km: 10,
				why: "A calm night among the stupas if the city has been a lot."
			}
		],
		hotels: [
			{
				name: "BrijRama Palace",
				area: "Darbhanga Ghat",
				band: "luxe",
				note: "A palace on the river. You watch the boats from the room."
			},
			{
				name: "Ganpati Guest House",
				area: "Meer Ghat",
				band: "mid",
				note: "The long-loved ghat hotel. Ask for a river side and mean it."
			},
			{
				name: "Assi homestays",
				area: "Assi",
				band: "budget",
				note: "Family houses a short walk from the quieter ghat. Confirm the walk is actually short."
			}
		],
		sights: [
			{
				name: "Dawn boat",
				why: "The city from the water, before the heat. This is the one you should not skip.",
				km: 0,
				opens: hm(5),
				closes: hm(8),
				hoursNote: "The hour that matters is sunrise. Boats run later, and they are a different thing.",
				alwaysOpen: false
			},
			{
				name: "The ghats on foot",
				why: "Walk from Assi toward Manikarnika. Go slowly and don’t pretend it is a promenade.",
				km: 0,
				alwaysOpen: true,
				hoursNote: "Always. Dawn and dusk are the two different cities."
			},
			{
				name: "Dashashwamedh aarti",
				why: "The evening ceremony. The ghat is always open; this is the window to be in the crowd or just beside it.",
				km: 2,
				opens: hm(18),
				closes: hm(19, 30),
				hoursNote: "Ceremony time shifts a little with sunset"
			},
			{
				name: "Kashi Vishwanath",
				why: "The temple in the lanes. Security is real and phones stay outside.",
				km: 2,
				opens: hm(4),
				closes: hm(23),
				hoursNote: "Long hours, with inner breaks. The lane takes as long as the temple."
			},
			{
				name: "Sarnath",
				why: "The Buddhist stupas and the museum, a short ride out. The quiet contrast.",
				km: 10,
				opens: hm(9),
				closes: hm(17),
				hoursNote: "Museum and the main site follow daytime hours"
			},
			{
				name: "Silk alleys",
				why: "Weaving workshops north of the river bustle. Go with time, not with a fixed shopping list.",
				km: 3,
				opens: hm(10),
				closes: hm(19),
				hoursNote: "Shops, not monuments"
			}
		],
		plans: {
			3: [
				{
					title: "Evening arrival walk",
					detail: "Drop bags near Assi or Dashashwamedh and see the aarti without trying to understand everything."
				},
				{
					title: "Dawn on the river",
					detail: "Boat, then a long ghat walk. Sleep in the afternoon. You will need it."
				},
				{
					title: "Sarnath",
					detail: "Morning among the stupas, then the lanes only if you still want them."
				}
			],
			5: [
				{
					title: "Arrive and stay near the water",
					detail: "Check the walk to the ghat in daylight so dawn is not a navigation exercise."
				},
				{
					title: "First dawn",
					detail: "Boat, tea, and a short walk. Stop before you are done."
				},
				{
					title: "The long walk",
					detail: "Assi to Manikarnika and back by lane, not by the same steps."
				},
				{
					title: "Sarnath",
					detail: "The whole morning. Evening aarti only if you want the crowd again."
				},
				{
					title: "Silk and a second dawn",
					detail: "Workshops, or another boat if the first one was fog. Leave from here."
				}
			],
			7: [
				{
					title: "Land and walk Assi",
					detail: "Nothing ticketed."
				},
				{
					title: "Dawn boat",
					detail: "The essential morning."
				},
				{
					title: "Ghat walk",
					detail: "Take the middle of the day off. The stone is hot and the lanes are enough."
				},
				{
					title: "Temple lane",
					detail: "Vishwanath with patience, then a quieter ghat."
				},
				{
					title: "Sarnath",
					detail: "A full morning out of the city."
				},
				{
					title: "Workshops",
					detail: "Silk, or a music hour, or nothing."
				},
				{
					title: "One more dawn, then leave",
					detail: "The second sunrise is when you notice what you missed."
				}
			]
		},
		tips: [
			"Book a room you have seen on a map, with the lane named. “Near the ghats” can mean a 25-minute walk with luggage.",
			"A private boat at dawn is worth more than a bigger boat later.",
			"Give yourself an empty afternoon. The city is tiring in a way monuments are not."
		]
	},
	{
		slug: "udaipur",
		name: "Udaipur",
		region: "Rajasthan",
		eyebrow: "Lake city",
		lat: 24.5854,
		lng: 73.7125,
		airport: "UDR · Maharana Pratap",
		rail: "Udaipur City",
		aliases: ["lake city"],
		tagline: "White palaces on a lake, and hills that keep the scale human.",
		blurb: "Udaipur is the gentle Rajasthan city: one lake, a palace you can spend a morning in, and old-town ghats for the evening. It pairs cleanly with a night in the villages or a long day toward Kumbhalgarh.",
		image: "/places/udaipur.jpg",
		imageAlt: "White palaces along Lake Pichola in Udaipur under morning haze",
		bestMonths: [
			10,
			11,
			12,
			1,
			2,
			3
		],
		bestLabel: "Best Oct–Mar",
		cautionMonths: [],
		seasonLine: "October to March is lake weather: clear air, boats running, evenings you can sit outside.",
		shoulderLine: "April and September are warm but still walkable if you take the palace first.",
		avoidLine: "May and June bake the old city. The monsoon fills the lakes and can cancel the boat.",
		pace: "plain",
		roadFactor: 1.28,
		roadKm: {
			delhi: 660,
			ahmedabad: 260,
			jaipur: 390,
			mumbai: 760,
			jaisalmer: 500
		},
		roadOpenMonths: YEAR,
		roadWatchMonths: [7, 8],
		roadNote: "Highways from Ahmedabad and Jaipur are ordinary trunk roads. Heavy monsoon rain in the Aravallis can slow the ghats for a day, not the season.",
		driveKmh: 52,
		busKmh: 45,
		flightFactor: 1,
		flights: "regular",
		transferHours: .7,
		airportTransfer: "The airport is east of the lakes, about 40 minutes from the old city.",
		railGateway: null,
		driveNote: "Ahmedabad is the short drive. From Delhi or Mumbai, the train or a flight will treat you better.",
		busNote: "Volvo buses from Ahmedabad and Jaipur are common. Fine for a night, dull for a day.",
		via: [],
		viaByOrigin: {
			delhi: [{
				name: "Jaipur",
				note: "Worth a night if you want both cities. Skip it if Udaipur is the only point."
			}],
			mumbai: [{
				name: "Ahmedabad",
				note: "A natural break if you are driving the whole way."
			}]
		},
		stayTowns: [
			{
				name: "Old city ghats",
				km: 0,
				why: "Lake-side havelis. You walk to dinner and to the boat jetty."
			},
			{
				name: "Lake Pichola palace hotels",
				km: 1,
				why: "On the water. Beautiful, and you depend on a boat for everything."
			},
			{
				name: "Fateh Sagar side",
				km: 4,
				why: "Quieter, more ordinary hotels, a ride back to the old city."
			},
			{
				name: "Kumbhalgarh",
				km: 85,
				why: "The fort in the hills. A night of your own, not a hurried out-and-back after a palace morning."
			}
		],
		hotels: [
			{
				name: "Taj Lake Palace",
				area: "Lake Pichola",
				band: "luxe",
				note: "The island palace. Go for a night, not as a base for sightseeing."
			},
			{
				name: "Jagat Niwas Palace",
				area: "Lal Ghat",
				band: "mid",
				note: "A haveli on the ghat with a courtyard and a view that does the job."
			},
			{
				name: "Chandpol guesthouses",
				area: "Old city",
				band: "budget",
				note: "Rooftop rooms in the lanes. Ask which window actually faces the lake."
			}
		],
		sights: [
			{
				name: "City Palace",
				why: "The long royal complex above the lake. It needs a morning, not a half hour.",
				km: 0,
				opens: hm(9, 30),
				closes: hm(17, 30),
				hoursNote: "Daytime"
			},
			{
				name: "Lake Pichola boat",
				why: "The palaces from the water, including a stop at Jag Mandir when it is running.",
				km: 0,
				opens: hm(10),
				closes: hm(17),
				hoursNote: "Daytime rides from the city jetty",
				watchMonths: [
					7,
					8,
					9
				],
				watchReason: "After heavy rain the boat is sometimes suspended. The ghats still work."
			},
			{
				name: "Jagdish Temple",
				why: "The carved temple just above the palace lane. Short, and in the walk anyway.",
				km: 0,
				opens: hm(5),
				closes: hm(21),
				hoursNote: "Long hours; mornings are calmer"
			},
			{
				name: "Bagore ki Haveli",
				why: "A restored haveli and, if you want it, the evening dance in the courtyard.",
				km: 0,
				opens: hm(10),
				closes: hm(17),
				hoursNote: "Museum by day; the performance is a separate evening ticket"
			},
			{
				name: "Sajjangarh",
				why: "The monsoon palace on the ridge. Go for the view of the lakes, late.",
				km: 8,
				opens: hm(9),
				closes: hm(18),
				hoursNote: "Last entry before closing"
			},
			{
				name: "Kumbhalgarh",
				why: "The long fort wall in the Aravallis. A full day, and a great one.",
				km: 85,
				opens: hm(9),
				closes: hm(18),
				hoursNote: "Leave Udaipur early"
			}
		],
		plans: {
			3: [
				{
					title: "Palace morning",
					detail: "City Palace, then the ghat lanes when the heat drops."
				},
				{
					title: "Boat and ridge",
					detail: "Lake ride, a slow lunch, Sajjangarh toward evening."
				},
				{
					title: "Old city without a ticket",
					detail: "Jagdish, the ghats, and whatever rooftop you already like."
				}
			],
			5: [
				{
					title: "Arrive into the lanes",
					detail: "Find the hotel in daylight. The old city is a knot after dark."
				},
				{
					title: "City Palace",
					detail: "Give it the cool hours."
				},
				{
					title: "Boat and Bagore",
					detail: "Water by day, haveli courtyard later if you want the performance."
				},
				{
					title: "Sajjangarh",
					detail: "The ridge, then a night you don’t fill."
				},
				{
					title: "Kumbhalgarh or nothing",
					detail: "The fort day, or a second aimless morning if you are leaving at noon."
				}
			],
			7: [
				{
					title: "Settle on a ghat",
					detail: "Walk and stop. The lake is the orientation."
				},
				{
					title: "City Palace",
					detail: "A full morning inside."
				},
				{
					title: "Boat",
					detail: "Pichola and Jag Mandir, then nothing ambitious."
				},
				{
					title: "Bagore and the lanes",
					detail: "Haveli, temple, shops you can walk away from."
				},
				{
					title: "Sajjangarh",
					detail: "Late light on the ridge."
				},
				{
					title: "Kumbhalgarh",
					detail: "Out early, back by dark, or sleep near the fort."
				},
				{
					title: "A blank morning",
					detail: "The trip is better if the last day is not a new fort."
				}
			]
		},
		tips: [
			"A lake-facing room is the luxury that matters here, even in a small haveli.",
			"Don’t plan Kumbhalgarh after a palace morning. It is its own day.",
			"Monsoon boats are a maybe. Have a walking evening in reserve."
		]
	},
	{
		slug: "rishikesh",
		name: "Rishikesh",
		region: "Uttarakhand",
		eyebrow: "The Ganges",
		lat: 30.0869,
		lng: 78.2676,
		airport: "DED · Dehradun",
		rail: "Rishikesh",
		aliases: [
			"hrishikesh",
			"tapovan",
			"laxman jhula"
		],
		tagline: "A river town for walking, rafting, and an early night.",
		blurb: "Rishikesh is the Ganges leaving the hills: two footbridges, ashram lanes, and rafting that starts when the monsoon river calms down. From Delhi it is close enough to do properly over a long weekend.",
		image: "/places/rishikesh.jpg",
		imageAlt: "The Ganges at Rishikesh with forested hills and a suspension bridge",
		bestMonths: [
			2,
			3,
			4,
			5,
			6,
			9,
			10,
			11
		],
		bestLabel: "Best Sep–Jun",
		cautionMonths: [7, 8],
		seasonLine: "Late September through June: the river is workable, the walks are dry, and October is when rafting feels like the reason you came.",
		shoulderLine: "December and January are clear and cold. Beautiful for walking, gloomy for the water.",
		avoidLine: "July and August the river runs high. Rafting stops, and some beaches disappear under brown water.",
		pace: "plain",
		roadFactor: 1.3,
		roadKm: {
			delhi: 240,
			dehradun: 45,
			chandigarh: 280,
			lucknow: 550
		},
		roadOpenMonths: YEAR,
		roadWatchMonths: [7, 8],
		roadNote: "The Delhi highway is open year-round. Monsoon is a hill-road nuisance on side valleys, not on the main run into town.",
		driveKmh: 55,
		busKmh: 48,
		flightFactor: 1,
		flights: "regular",
		transferHours: 1,
		airportTransfer: "Flights use Dehradun, about 45 minutes once you are on the road. The Rishikesh railway station is small; Haridwar is the bigger railhead.",
		railGateway: null,
		driveNote: "From Delhi this is a morning drive if you leave early and don’t treat the last ghats as a racetrack.",
		busNote: "Volvo and ordinary buses from Delhi are constant. You will arrive at a stand that is not next to either bridge — budget the last ride.",
		via: [],
		viaByOrigin: { delhi: [{
			name: "Haridwar",
			note: "Optional. The temples are a different town. Don’t stop if Rishikesh is where your room is."
		}] },
		stayTowns: [
			{
				name: "Tapovan",
				km: 0,
				why: "Lanes above Laxman Jhula. The practical base: food, yoga, and the bridge on foot."
			},
			{
				name: "Laxman Jhula",
				km: 1,
				why: "Louder and closer to the crossing. Fine if your room is off the main alley."
			},
			{
				name: "Ram Jhula & Swarg Ashram",
				km: 4,
				why: "The older ashram side. Quieter evenings."
			},
			{
				name: "Shivpuri",
				km: 18,
				why: "Upstream, where the rafting camps are. Stay here only if the river day is the trip."
			}
		],
		hotels: [
			{
				name: "The Glasshouse on the Ganges",
				area: "above the river",
				band: "luxe",
				note: "A Neemrana house with lawns on the water. You are slightly out of the bustle, on purpose."
			},
			{
				name: "Tapovan riverside guesthouses",
				area: "Tapovan",
				band: "mid",
				note: "Balconies over the river. Ask about generator hours and how many stairs the “view” costs."
			},
			{
				name: "High Bank cottages",
				area: "toward Tapovan",
				band: "budget",
				note: "Simple rooms in the cafes-and-yoga belt. Good for a few nights, not for silence."
			}
		],
		sights: [
			{
				name: "Laxman Jhula & Ram Jhula",
				why: "The two footbridges. Walk both, at different times of day.",
				km: 1,
				alwaysOpen: true,
				hoursNote: "Always open to walk"
			},
			{
				name: "Beatles Ashram",
				why: "Chaurasi Kutia, the abandoned ashram with the graffiti halls. Stranger and better than the postcard.",
				km: 4,
				opens: hm(10),
				closes: hm(16),
				hoursNote: "Daytime entry"
			},
			{
				name: "Triveni Ghat aarti",
				why: "The evening ceremony on the quieter ghat. The steps are there all day.",
				km: 6,
				opens: hm(17, 30),
				closes: hm(19),
				hoursNote: "The ceremony window, around sunset"
			},
			{
				name: "Ganges rafting",
				why: "Shivpuri to the town is the standard run. October is the month people mean when they say rafting season.",
				km: 18,
				opens: hm(8),
				closes: hm(16),
				hoursNote: "Morning trips are the calm ones",
				closedMonths: [
					7,
					8,
					9
				],
				closedReason: "The river is closed to rafting while the monsoon water stays high.",
				watchMonths: [6],
				watchReason: "Early rains can pause trips even when the town looks fine."
			},
			{
				name: "Neer Garh waterfall",
				why: "A short, wet walk in the forest above town.",
				km: 3,
				opens: hm(8),
				closes: hm(17),
				hoursNote: "Daylight; the path is slippery after rain"
			},
			{
				name: "A yoga morning",
				why: "Drop-in halls all over Tapovan. Go once, to a class that publishes its hour.",
				km: 0,
				opens: hm(6),
				closes: hm(9),
				hoursNote: "Morning sessions; evening classes exist too"
			}
		],
		plans: {
			3: [
				{
					title: "Bridges",
					detail: "Arrive, walk Laxman Jhula before dark, eat above the river."
				},
				{
					title: "Ashram and aarti",
					detail: "Beatles Ashram by day, Triveni in the evening."
				},
				{
					title: "River or waterfall",
					detail: "Raft if the season is open. Otherwise Neer Garh and a second bridge walk."
				}
			],
			5: [
				{
					title: "Settle in Tapovan",
					detail: "Learn which bridge is yours."
				},
				{
					title: "Walk both bridges",
					detail: "Ram Jhula and the ashram side without a clock."
				},
				{
					title: "Beatles Ashram",
					detail: "Morning inside, empty afternoon."
				},
				{
					title: "Raft or refuse to",
					detail: "The Shivpuri run in season. A waterfall and a book if it is not."
				},
				{
					title: "Aarti and leave",
					detail: "Triveni at dusk if you are still here, or a dawn start back to Delhi."
				}
			],
			7: [
				{
					title: "Arrive slowly",
					detail: "The highway is not long. Don’t fill the evening."
				},
				{
					title: "Laxman Jhula",
					detail: "Lanes, river, and an early night."
				},
				{
					title: "Ram Jhula side",
					detail: "The older ashrams and a quieter walk."
				},
				{
					title: "Beatles Ashram",
					detail: "Give it time. It is not a courtyard you cross."
				},
				{
					title: "Rafting",
					detail: "A full river morning, then nothing."
				},
				{
					title: "Waterfall and a class",
					detail: "Neer Garh, or a yoga hour, or both if you are that person."
				},
				{
					title: "Triveni and the road",
					detail: "Evening aarti the night before you leave, not as you are catching a bus."
				}
			]
		},
		tips: [
			"Tapovan and the ashram side feel like different towns. Pick one to sleep in.",
			"Rafting operators cluster near the stands. A morning slot is calmer water and a calmer road back.",
			"From Delhi, driving yourself home after a full river day is the mistake. Leave the next morning."
		]
	},
	{
		slug: "jaisalmer",
		name: "Jaisalmer",
		region: "Rajasthan",
		eyebrow: "The golden fort",
		lat: 26.9157,
		lng: 70.9083,
		airport: "JSA · Jaisalmer",
		rail: "Jaisalmer",
		aliases: ["jaiselmer", "golden city"],
		tagline: "A living fort, then the dunes once the town lets you go.",
		blurb: "Jaisalmer is the edge of the Thar: a fort still full of houses, carved havelis below it, and desert camps that are worth one night and not three. Sleep outside the fort walls. The citadel is fragile.",
		image: "/places/jaisalmer.jpg",
		imageAlt: "Jaisalmer Fort in warm sandstone above the desert",
		bestMonths: [
			10,
			11,
			12,
			1,
			2
		],
		bestLabel: "Best Oct–Feb",
		cautionMonths: [],
		seasonLine: "October to February: days are bright, nights in the dunes actually get cold, and walking the fort is pleasant.",
		shoulderLine: "March and September are hot by noon and still possible if you are inside or in a car during the worst hours.",
		avoidLine: "April to June is extreme desert heat. The fort in the afternoon is not a walk.",
		pace: "plain",
		roadFactor: 1.28,
		roadKm: {
			delhi: 800,
			jaipur: 570,
			ahmedabad: 560,
			udaipur: 500,
			jodhpur: 290,
			mumbai: 1150
		},
		roadOpenMonths: YEAR,
		roadWatchMonths: [],
		roadNote: "Desert highways stay open. Summer is a comfort problem, not a closure. Jodhpur is the nearest big city if you are stitching a Rajasthan route.",
		driveKmh: 55,
		busKmh: 48,
		flightFactor: 1.05,
		flights: "regular",
		transferHours: .4,
		airportTransfer: "The small airport is close to town. Flights are fewer than Jaipur or Udaipur, so hold the train as a backup.",
		railGateway: null,
		driveNote: "The last hours are open desert highway. Carry water anyway. Night driving among trucks and cattle is the part to avoid.",
		busNote: "Overnight buses from Jodhpur, Jaipur and Ahmedabad are normal. The train berth is more restful if you can get one.",
		via: [],
		viaByOrigin: {
			delhi: [{
				name: "Jodhpur",
				note: "The right break if you are driving. Otherwise take the overnight train straight in."
			}],
			jaipur: [{
				name: "Jodhpur",
				note: "A sensible night, and a different city, on a two-day drive."
			}],
			udaipur: [{
				name: "Jodhpur",
				note: "Again the natural stop. Don’t try to stitch Udaipur to a dune camp in one day."
			}]
		},
		stayTowns: [
			{
				name: "Outside the fort, in town",
				km: 0,
				why: "Haveli hotels below the walls. You walk up to the fort and you don’t add weight to it overnight."
			},
			{
				name: "Sam",
				km: 40,
				why: "The famous dunes. One camp night. Days are for sunset, not for sitting in a tent at noon."
			},
			{
				name: "Khuri",
				km: 50,
				why: "Quieter dunes. Choose this if Sam sounds like a fairground."
			},
			{
				name: "Kuldhara side",
				km: 18,
				why: "Not really a base. A stop on the way to the sand."
			}
		],
		hotels: [
			{
				name: "Suryagarh",
				area: "out on the Jodhpur road",
				band: "luxe",
				note: "A modern palace in the desert, a short ride from town. The comfortable answer."
			},
			{
				name: "Nachana Haveli",
				area: "below the fort",
				band: "mid",
				note: "A town haveli with a courtyard. You are in Jaisalmer, not in a resort pretending."
			},
			{
				name: "Sam desert camp",
				area: "Sam dunes",
				band: "mid",
				note: "One night. Ask whether the tent has a proper bath and a heater in winter."
			}
		],
		sights: [
			{
				name: "Jaisalmer Fort",
				why: "A living fort: lanes, houses, temples, and a palace museum. Walk it in the morning.",
				km: 0,
				opens: hm(9),
				closes: hm(17),
				hoursNote: "The palace museum is daytime; the lanes are a neighbourhood",
				alwaysOpen: false
			},
			{
				name: "Patwon ki Haveli",
				why: "The best of the carved merchant houses below the fort.",
				km: 1,
				opens: hm(9),
				closes: hm(17),
				hoursNote: "Daytime"
			},
			{
				name: "Sam sand dunes",
				why: "Sunset on the sand, camel or jeep, and a night sky that earns the camp.",
				km: 40,
				alwaysOpen: true,
				hoursNote: "Go for late light. Noon on the dunes is pointless.",
				watchMonths: [
					4,
					5,
					6
				],
				watchReason: "Summer afternoons are dangerous heat. If you must, make it a sunset-only dash."
			},
			{
				name: "Bada Bagh",
				why: "Cenotaphs among the trees, with the fort on the horizon. A short stop on the dune road.",
				km: 6,
				opens: hm(8),
				closes: hm(18),
				hoursNote: "Daylight"
			},
			{
				name: "Kuldhara",
				why: "The abandoned village. Eerie in a plain way, and quick.",
				km: 18,
				opens: hm(8),
				closes: hm(18),
				hoursNote: "Daylight"
			},
			{
				name: "Salim Singh and Nathmal havelis",
				why: "Two more carved houses if Patwon left you wanting the craft, not just the photo.",
				km: 1,
				opens: hm(9),
				closes: hm(17),
				hoursNote: "Daytime, often with a combined look"
			}
		],
		plans: {
			3: [
				{
					title: "Fort in the morning",
					detail: "Walk the lanes before the palace museum, then one haveli."
				},
				{
					title: "Havelis, then the dunes",
					detail: "Patwon by day. Out to Sam for sunset and the camp."
				},
				{
					title: "Sunrise and town",
					detail: "Leave the sand early. Bada Bagh on the way back if you still want a stop."
				}
			],
			5: [
				{
					title: "Arrive and look up",
					detail: "The fort from below, in the last light. Don’t rush the gate."
				},
				{
					title: "Fort properly",
					detail: "Morning lanes and the palace. Afternoon off."
				},
				{
					title: "Havelis",
					detail: "Patwon first, the others only if you are still curious."
				},
				{
					title: "Kuldhara and Sam",
					detail: "Village in the afternoon, dunes at sunset, night in camp."
				},
				{
					title: "Back before the heat",
					detail: "Sunrise, Bada Bagh, and a town meal that is not a buffet."
				}
			],
			7: [
				{
					title: "Settle below the fort",
					detail: "Walk the outside walls."
				},
				{
					title: "Fort day",
					detail: "Slow lanes. Buy one thing or nothing."
				},
				{
					title: "Havelis",
					detail: "Patwon and a long lunch in town."
				},
				{
					title: "Bada Bagh and a blank afternoon",
					detail: "The cenotaphs, then shade."
				},
				{
					title: "Toward Khuri or Sam",
					detail: "Pick the quieter dunes if you can. Sunset is the appointment."
				},
				{
					title: "Desert morning",
					detail: "Leave camp early. Kuldhara if it is on your road and you are not already tired of ruins."
				},
				{
					title: "Fort once more, from a rooftop",
					detail: "You will see it differently. Then the train or the highway."
				}
			]
		},
		tips: [
			"Stay outside the fort. It is a lived-in, stressed monument, not a hotel district that needs another rooftop party.",
			"One dune night. The second is the same buffet and a colder bed.",
			"The overnight train is the right arrival from Delhi or Jaipur if the flight times are awkward."
		]
	}
];
function haversineKm(a, b) {
	const R = 6371;
	const dLat = (b.lat - a.lat) * Math.PI / 180;
	const dLng = (b.lng - a.lng) * Math.PI / 180;
	const la1 = a.lat * Math.PI / 180;
	const la2 = b.lat * Math.PI / 180;
	const h = Math.sin(dLat / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin(dLng / 2) ** 2;
	return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}
function placesList() {
	return places;
}
function originCities() {
	return [...hubs, ...places.map(asHub)];
}
function asHub(p) {
	return {
		slug: p.slug,
		name: p.name,
		region: p.region,
		lat: p.lat,
		lng: p.lng,
		airport: p.airport,
		rail: p.rail,
		aliases: p.aliases
	};
}
function getCity(slug) {
	return originCities().find((c) => c.slug === slug);
}
function getPlace(slug) {
	return places.find((p) => p.slug === slug);
}
function searchCities(list, q) {
	const s = q.trim().toLowerCase();
	if (!s) return list;
	return list.map((c) => {
		const name = c.name.toLowerCase();
		const region = c.region.toLowerCase();
		const aliases = c.aliases.map((a) => a.toLowerCase());
		let score = 0;
		if (name === s || c.slug === s || aliases.includes(s)) score = 100;
		else if (name.startsWith(s) || aliases.some((a) => a.startsWith(s))) score = 80;
		else if (name.includes(s) || region.includes(s) || aliases.some((a) => a.includes(s))) score = 50;
		return {
			c,
			score
		};
	}).filter((x) => x.score > 0).sort((a, b) => b.score - a.score || a.c.name.localeCompare(b.c.name)).map((x) => x.c);
}
function nearestCity(lat, lng) {
	let best = originCities()[0];
	let bestD = Infinity;
	for (const c of originCities()) {
		const d = haversineKm({
			lat,
			lng
		}, c);
		if (d < bestD) {
			best = c;
			bestD = d;
		}
	}
	return best;
}
function estimateRoadKm(from, to) {
	if (from.slug === to.slug) return {
		km: 0,
		estimated: false
	};
	const override = to.roadKm[from.slug];
	if (typeof override === "number") return {
		km: override,
		estimated: false
	};
	return {
		km: Math.round(haversineKm(from, to) * to.roadFactor),
		estimated: true
	};
}
function roadState(place, month) {
	if (place.roadWatchMonths.includes(month)) return "watch";
	if (!place.roadOpenMonths.includes(month)) return "shut";
	return "open";
}
function seasonNow(place, month) {
	if (place.cautionMonths.includes(month)) return {
		tone: "watch",
		label: "Go carefully",
		detail: place.avoidLine
	};
	if (place.bestMonths.includes(month)) return {
		tone: "open",
		label: "Prime time",
		detail: place.seasonLine
	};
	if (place.bestMonths.some((m) => {
		return Math.min(Math.abs(m - month), 12 - Math.abs(m - month)) === 1;
	})) return {
		tone: "watch",
		label: "Shoulder season",
		detail: place.shoulderLine
	};
	return {
		tone: "shut",
		label: "Off season",
		detail: place.avoidLine
	};
}
function viaFor(place, fromSlug) {
	if (place.viaByOrigin && Object.prototype.hasOwnProperty.call(place.viaByOrigin, fromSlug)) return place.viaByOrigin[fromSlug] ?? [];
	return place.via;
}
function nearbyPlaces(place) {
	return places.filter((p) => p.slug !== place.slug).map((p) => ({
		place: p,
		km: Math.round(haversineKm(place, p))
	})).sort((a, b) => a.km - b.km).slice(0, 3);
}
function formatDuration(hours) {
	if (!Number.isFinite(hours) || hours <= .08) return "under 10m";
	const total = Math.round(hours * 60);
	const h = Math.floor(total / 60);
	const m = total % 60;
	if (h >= 48) {
		const d = Math.floor(h / 24);
		const rh = h % 24;
		return rh ? `${d}d ${rh}h` : `${d}d`;
	}
	if (h <= 0) return `${m}m`;
	if (m < 8) return `${h}h`;
	return `${h}h ${m}m`;
}
function formatKm(n) {
	return `${new Intl.NumberFormat("en-IN").format(Math.max(0, Math.round(n)))} km`;
}
function formatInr(n) {
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0
	}).format(Math.round(n));
}
function roundInr(n) {
	if (n < 2e3) return Math.max(100, Math.round(n / 50) * 50);
	if (n < 12e3) return Math.round(n / 100) * 100;
	return Math.round(n / 500) * 500;
}
function clock(mins) {
	const h24 = Math.floor(mins / 60);
	const min = mins % 60;
	const ap = h24 >= 12 ? "pm" : "am";
	const hr = h24 % 12 === 0 ? 12 : h24 % 12;
	return min ? `${hr}:${String(min).padStart(2, "0")} ${ap}` : `${hr} ${ap}`;
}
function gateStatus(sight, now) {
	const month = now.getMonth() + 1;
	const day = now.getDay();
	if (sight.closedMonths?.includes(month)) return {
		tone: "shut",
		label: "Closed this season",
		detail: sight.closedReason ?? "Usually shut this month."
	};
	if (sight.watchMonths?.includes(month)) return {
		tone: "watch",
		label: "Check before you go",
		detail: sight.watchReason ?? "Unreliable this month."
	};
	if (sight.closedWeekdays?.includes(day)) return {
		tone: "shut",
		label: "Closed today",
		detail: "Usually shut on this weekday."
	};
	if (sight.alwaysOpen || sight.opens == null || sight.closes == null) return {
		tone: "open",
		label: "Open today",
		detail: sight.hoursNote
	};
	const mins = now.getHours() * 60 + now.getMinutes();
	if (mins < sight.opens) return {
		tone: "shut",
		label: "Closed now",
		detail: `Opens ${clock(sight.opens)}. ${sight.hoursNote}`
	};
	if (mins >= sight.closes) return {
		tone: "shut",
		label: "Closed now",
		detail: `Opens ${clock(sight.opens)}. ${sight.hoursNote}`
	};
	return {
		tone: "open",
		label: "Open now",
		detail: `Until ${clock(sight.closes)}`
	};
}
function buildRoutes(from, to, month) {
	const gcKm = Math.round(haversineKm(from, to));
	const road = estimateRoadKm(from, to);
	const state = roadState(to, month);
	if (from.slug === to.slug || road.km === 0) return {
		gcKm: 0,
		roadKm: 0,
		roadEstimated: false,
		road: state,
		options: [],
		best: null
	};
	const options = [];
	const driveHours = road.km / to.driveKmh;
	const busHours = road.km / to.busKmh;
	if (from.airport && to.airport) {
		const airKm = Math.max(150, Math.round(gcKm * 1.06));
		const moving = airKm / 760 + .35;
		const door = moving + 4.2 + to.transferHours;
		const low = roundInr((2800 + airKm * 3.2) * to.flightFactor);
		const high = roundInr((5500 + airKm * 7) * to.flightFactor);
		const sparse = to.flights === "sparse";
		let score = 40 - door;
		if (road.km > 900) score += 12;
		else if (road.km > 600) score += 6;
		if (state === "shut") score += 8;
		if (state === "open" && driveHours < 14) score -= 4;
		if (sparse) score -= 7;
		if (road.km < 280) score -= 6;
		options.push({
			mode: "flight",
			title: `Fly toward ${to.name}`,
			why: sparse ? "Fast when a seat exists. The timetable is thin, so keep a land backup." : road.km > 700 ? "You get the day back. On a long haul that matters more than the highway." : "Short in the air, and slow once both airports are counted.",
			km: airKm,
			movingHours: moving,
			doorHours: door,
			inrLow: low,
			inrHigh: high,
			fareNote: "One person, typical fare",
			available: true,
			caution: sparse ? `${to.airport} has few flights. Build in a spare day.` : void 0,
			steps: [
				`Leave ${from.name} for ${from.airport}.`,
				`Fly toward ${to.airport}. About ${formatDuration(moving)} in the air.`,
				to.airportTransfer
			],
			score,
			detail: `${formatDuration(moving)} in the air · ${formatDuration(door)} door to door`
		});
	}
	if (from.rail) {
		if (to.rail) {
			const railKm = Math.max(40, Math.round(road.km * .95));
			const moving = railKm / 50 + .8;
			let score = 40 - moving;
			if (moving >= 6 && moving <= 20) score += 6;
			options.push({
				mode: "train",
				title: `Train to ${to.name}`,
				why: moving <= 20 ? "A berth overnight is often the most human way to arrive." : "Long, but you step off in the city itself.",
				km: railKm,
				movingHours: moving,
				doorHours: moving + 1.2,
				inrLow: roundInr(Math.max(250, railKm * .45)),
				inrHigh: roundInr(Math.max(700, railKm * 1.55)),
				fareNote: "Sleeper to 3AC, one person",
				available: true,
				steps: [
					`Board at ${from.rail}.`,
					`Ride toward ${to.rail}. About ${formatDuration(moving)} with halts.`,
					"Keep a short local ride for the last stretch to your stay."
				],
				score,
				detail: formatDuration(moving)
			});
		} else if (to.railGateway && to.railGateway.slug !== from.slug) {
			const gate = getCity(to.railGateway.slug);
			if (gate?.rail) {
				const railKm = Math.max(30, Math.round(haversineKm(from, gate) * 1.2));
				const railHours = railKm / 52 + .6;
				const onwardHours = to.railGateway.roadKm / to.driveKmh;
				const moving = railHours + onwardHours;
				const shut = state === "shut";
				let score = 40 - moving - (shut ? 30 : state === "watch" ? 6 : 0);
				options.push({
					mode: "train",
					title: `Train to ${to.railGateway.name}, then the road`,
					why: to.railGateway.note,
					km: railKm + to.railGateway.roadKm,
					movingHours: moving,
					doorHours: moving + 1,
					inrLow: roundInr(Math.max(200, railKm * .45)),
					inrHigh: roundInr(Math.max(600, railKm * 1.5)),
					fareNote: "Train fare only — the road after is extra",
					available: !shut,
					caution: shut ? "The highway beyond the railhead is shut this month." : state === "watch" ? "Reaching the railhead is easy. The road after it may not be." : void 0,
					steps: [`Train from ${from.rail} toward ${gate.rail}. About ${formatDuration(railHours)}.`, `Then about ${formatKm(to.railGateway.roadKm)} by road to ${to.name}. ${to.railGateway.note}`],
					score,
					detail: `${formatDuration(railHours)} by rail · ${formatDuration(onwardHours)} onward`
				});
			}
		}
	}
	const driveNights = driveHours > 11 ? Math.ceil(driveHours / 9) - 1 : 0;
	let driveScore = 40 - driveHours;
	if (driveHours <= 10) driveScore += 7;
	if (driveHours <= 6) driveScore += 6;
	if (road.km < 320) driveScore += 4;
	if (state === "watch") driveScore -= 8;
	if (state === "open" && to.pace === "hill" && driveHours <= 14) driveScore += 8;
	if (state === "shut") driveScore -= 40;
	options.push({
		mode: "drive",
		title: "Drive the highway",
		why: driveNights > 0 ? `About ${driveNights} night${driveNights > 1 ? "s" : ""} on the way. This is not one sitting.` : "Best when the road is short enough to be the pleasure, not the ordeal.",
		km: road.km,
		movingHours: driveHours,
		doorHours: driveHours,
		inrLow: roundInr(road.km / 18 * 100),
		inrHigh: roundInr(road.km / 12 * 110),
		fareNote: "Fuel for one car, tolls extra",
		available: state !== "shut",
		caution: state === "open" ? void 0 : to.roadNote,
		steps: [
			`Leave ${from.name} in the morning, not after lunch.`,
			to.driveNote,
			driveNights > 0 ? `Plan ${driveNights} overnight stop${driveNights > 1 ? "s" : ""} before ${to.name}.` : `You can be in ${to.name} the same day if the road behaves.`
		],
		score: driveScore,
		detail: driveNights > 0 ? `${formatDuration(driveHours)} at the wheel · ${driveNights} overnight${driveNights > 1 ? "s" : ""}` : `${formatDuration(driveHours)} at the wheel`
	});
	const busNights = busHours > 16 ? Math.ceil(busHours / 15) - 1 : 0;
	let busScore = 40 - busHours;
	if (road.km > 200 && road.km < 750) busScore += 4;
	if (state === "watch") busScore -= 8;
	if (state === "shut") busScore -= 40;
	if (to.pace === "hill" && state === "open" && busHours <= 16) busScore += 3;
	options.push({
		mode: "bus",
		title: "Bus or shared seat",
		why: to.busNote,
		km: road.km,
		movingHours: busHours,
		doorHours: busHours + .8,
		inrLow: roundInr(Math.max(350, road.km * 1.15)),
		inrHigh: roundInr(Math.max(700, road.km * 2.5)),
		fareNote: "One seat, ordinary to Volvo",
		available: state !== "shut",
		caution: state === "open" ? void 0 : to.roadNote,
		steps: [
			busNights > 0 ? `This is a multi-day coach from ${from.name}, not an overnight hop.` : `Coach from ${from.name}. Day or night, depending on who is running.`,
			to.busNote,
			`Finish with a short ride to the stay once you are in ${to.name}.`
		],
		score: busScore,
		detail: busNights > 0 ? `${formatDuration(busHours)} · more than one day` : formatDuration(busHours)
	});
	const ranked = [...options].sort((a, b) => Number(b.available) - Number(a.available) || b.score - a.score);
	return {
		gcKm,
		roadKm: road.km,
		roadEstimated: road.estimated,
		road: state,
		options: ranked,
		best: ranked.find((o) => o.available) ?? null
	};
}
function bandLabel(band) {
	if (band === "budget") return "Budget · ₹1,200–3,500";
	if (band === "mid") return "Comfort · ₹4,000–9,000";
	return "Splurge · ₹14,000 and up";
}
//#endregion
export { seasonNow as _, formatInr as a, getCity as c, nearbyPlaces as d, nearestCity as f, searchCities as g, roadState as h, estimateRoadKm as i, getPlace as l, placesList as m, bandLabel as n, formatKm as o, originCities as p, buildRoutes as r, gateStatus as s, MONTHS as t, haversineKm as u, viaFor as v };
