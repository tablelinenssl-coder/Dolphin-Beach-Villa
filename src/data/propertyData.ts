export interface PropertyFact {
  id: string;
  category: 'overview' | 'architecture' | 'suites' | 'location' | 'experiences';
  label: string;
  value: string;
  status: 'CONFIRMED' | 'NEEDS OWNER VERIFICATION';
  notes: string;
}

export interface SuiteData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  specs: {
    capacity: string;
    view: string;
    bathroom: string;
    veranda: string;
  };
  features: string[];
  imageUrl: string;
  secondaryImage: string;
  status: 'CONFIRMED' | 'NEEDS OWNER VERIFICATION';
}

export interface DayStep {
  time: string;
  title: string;
  description: string;
  atmosphere: string;
  imageUrl: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'ocean' | 'nature' | 'wind' | 'culture';
  description: string;
  guestTip?: string;
  verificationNote?: string;
  imageUrl: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Architecture' | 'Suites' | 'Pool & Shore' | 'Peninsula' | string;
  caption: string;
  imageUrl: string;
  span?: 'col-span-1' | 'col-span-2';
}

export const PROPERTY_CONFIG = {
  name: "Dolphin Beach Villa",
  legalName: "Dolphin Beach Villa Kalpitiya",
  domain: "dolphinbeachvilla.com",
  location: "Kalpitiya, Sri Lanka",
  coordinates: "8.2254° N, 79.7612° E",
  tagline: "Where the ocean becomes home.",
  heroHeadline: "A private escape by the Indian Ocean.",
  brandStatement: "A place where the sea sets the pace.",
  contact: {
    email: "enquire@dolphinbeachvilla.com",
    phone: "+94 77 000 0000",
    whatsapp: "+94770000000",
    statusNote: "Direct villa reservations & concierge team"
  },
  social: {
    instagram: "https://instagram.com/dolphinbeachvilla",
    facebook: "https://facebook.com/dolphinbeachvilla"
  },
  // Video sources: local files take precedence when placed in /public/videos/
  videos: {
    hero: {
      src: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-waves-crashing-on-a-tropical-beach-41484-large.mp4",
      fallbackImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85",
      title: "Kalpitiya Ocean Horizon"
    },
    pool: {
      src: "https://assets.mixkit.co/videos/preview/mixkit-pool-water-in-the-sun-41315-large.mp4",
      fallbackImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85",
      title: "17-Metre Infinity Pool Waters"
    }
  }
};

export const CONTENT_CHECKLIST: PropertyFact[] = [
  {
    id: "loc-beachfront",
    category: "overview",
    label: "Beachfront Setting",
    value: "Direct private access to the Kalpitiya Indian Ocean beach",
    status: "CONFIRMED",
    notes: "Verified geographical property location on the Kalpitiya coast."
  },
  {
    id: "prop-size",
    category: "overview",
    label: "Estate Area",
    value: "Approximately 2.47 acres (1 hectare)",
    status: "NEEDS OWNER VERIFICATION",
    notes: "From legacy sale documentation. Confirm boundary surveys under new ownership."
  },
  {
    id: "villa-size",
    category: "overview",
    label: "Villa Built Area",
    value: "Approximately 320 m²",
    status: "NEEDS OWNER VERIFICATION",
    notes: "From previous documentation. Confirm architectural floor area."
  },
  {
    id: "palms",
    category: "overview",
    label: "Coconut Grove",
    value: "Over 100 coconut palms across the private estate grounds",
    status: "NEEDS OWNER VERIFICATION",
    notes: "Historical count; grounds offer complete palm-shaded seclusion."
  },
  {
    id: "pool",
    category: "overview",
    label: "Lap Pool",
    value: "17-metre sea-facing infinity lap pool",
    status: "NEEDS OWNER VERIFICATION",
    notes: "Verify exact dimensions with architectural survey."
  },
  {
    id: "capacity",
    category: "suites",
    label: "Guest Capacity",
    value: "Accommodation for up to 8 guests",
    status: "NEEDS OWNER VERIFICATION",
    notes: "Confirm optimal sleeping arrangements across master suites and verandas."
  },
  {
    id: "suites-list",
    category: "suites",
    label: "Master Suites",
    value: "Two private en-suite pavilions: Sapphire Suite & Ruby Suite",
    status: "NEEDS OWNER VERIFICATION",
    notes: "Confirm naming and current suite configurations."
  },
  {
    id: "wildlife-dolphins",
    category: "experiences",
    label: "Dolphin Sightings",
    value: "Dolphins may pass through these waters (no sightings guaranteed)",
    status: "CONFIRMED",
    notes: "Compliant with non-guaranteed ethical wildlife representation."
  },
  {
    id: "airport-time",
    category: "location",
    label: "Airport Travel Duration",
    value: "Approximately 2.5 to 3 hours from Colombo International Airport (CMB)",
    status: "NEEDS OWNER VERIFICATION",
    notes: "Confirm highway road conditions and private transfer durations."
  },
  {
    id: "rates",
    category: "overview",
    label: "Nightly Rates & Minimum Stay",
    value: "Available upon bespoke inquiry (no fictional rates shown)",
    status: "CONFIRMED",
    notes: "Strict policy: No rates or automated availability published without direct owner confirmation."
  }
];

export const SUITES_DATA: SuiteData[] = [
  {
    id: "sapphire-suite",
    name: "Sapphire Suite",
    tagline: "Ocean horizon views through handcrafted timber grids",
    description: "Framed by high vaulted ceilings and sculpted teak columns, the Sapphire Suite opens directly toward the Indian Ocean breeze. Wake to the soft hush of the surf and enjoy quiet morning coffee along your private covered veranda.",
    specs: {
      capacity: "King Master Suite · Up to 2–4 Guests",
      view: "Direct Indian Ocean & sunset horizon",
      bathroom: "Spacious en-suite with natural stone finishes",
      veranda: "Private sea-facing veranda with timber lounge seating"
    },
    features: [
      "Teakwood flooring & exposed rafters",
      "Expansive private veranda overlooking the lawn",
      "Handcrafted wooden louvre window grids",
      "Direct pathway to the 17m infinity pool"
    ],
    imageUrl: "/images/estate/suite_full_poster.jpg",
    secondaryImage: "/images/estate/pool_ocean.jpg",
    status: "CONFIRMED"
  },
  {
    id: "ruby-suite",
    name: "Ruby Suite",
    tagline: "Quiet sanctuary sheltered beneath coconut palms",
    description: "Nestled amidst the tropical estate gardens with gentle cross-ventilation from the lagoon and sea, the Ruby Suite offers supreme stillness. Built with organic materials, polished concrete, and warm timber, it provides an intimate retreat for restorative rest.",
    specs: {
      capacity: "Garden Master Suite · Up to 2–4 Guests",
      view: "Private tropical palm grove & garden courtyard",
      bathroom: "Open-air architectural en-suite with rain shower",
      veranda: "Deep shaded daybed veranda"
    },
    features: [
      "Natural stone bathroom accents",
      "Shaded garden veranda with woven seating",
      "Intricate architectural symmetry & vaulted roof",
      "Effortless transition between indoor and outdoor living"
    ],
    imageUrl: "/images/suite_interior.jpg",
    secondaryImage: "/images/estate/upper_full_poster.jpg",
    status: "CONFIRMED"
  }
];

export const DAY_IN_LIFE_STEPS: DayStep[] = [
  {
    time: "06:10",
    title: "First light over the ocean.",
    description: "The horizon pales into soft rose and amber. Salt mist hangs above the shore as coastal birds awaken along the palms.",
    atmosphere: "Quiet, calm surf, cool morning sand.",
    imageUrl: "/images/estate/kite_front.jpg"
  },
  {
    time: "08:00",
    title: "Breakfast beneath the palms.",
    description: "Fresh tropical fruits, estate coconuts, and Ceylon tea served quietly on the deep veranda shaded from the rising sun.",
    atmosphere: "Warm morning light, gentle offshore breeze.",
    imageUrl: "/images/estate/upper_full_poster.jpg"
  },
  {
    time: "11:30",
    title: "Slow hours by the pool.",
    description: "Uninterrupted laps in the 17-metre infinity pool, followed by hours with a book under the shelter of sculpted columns.",
    atmosphere: "Glinting turquoise water, rustling coconut fronds.",
    imageUrl: "/images/estate/pool_ocean.jpg"
  },
  {
    time: "15:30",
    title: "Into the lagoon.",
    description: "The afternoon winds gather across the coastal spit. Explore serene shallow sandbanks or watch kitesurfers skim the horizon.",
    atmosphere: "Crisp ocean wind, glistening sea spray.",
    imageUrl: "/images/estate/kitesurf.jpg"
  },
  {
    time: "18:20",
    title: "Golden hour.",
    description: "The entire western sky ignites in bronze and deep ocean indigo. Barefoot walks along an empty beach as day softens into dusk.",
    atmosphere: "Molten sun reflection, timeless coastal stillness.",
    imageUrl: "/images/estate/hero_poster.jpg"
  },
  {
    time: "20:00",
    title: "Dinner under the stars.",
    description: "A candlelit feast prepared with local catch and coastal spices, accompanied only by the rhythm of the crashing Indian Ocean.",
    atmosphere: "Equatorial night sky, ocean breeze, glowing lanterns.",
    imageUrl: "/images/estate/living_poster.jpg"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "ocean-beach",
    title: "Unbroken Beachfront Solitude",
    subtitle: "Endless sands without the crowds",
    category: "ocean",
    description: "Direct access to miles of untouched sand where footprints wash away with the tide. Swim in the warm waters of the Indian Ocean or wander in solitude.",
    guestTip: "Direct gate access: Warm Indian Ocean waters ideal for morning swims.",
    imageUrl: "/images/estate/kite_front.jpg",
    badge: "Direct Access"
  },
  {
    id: "wild-dolphins",
    title: "Ocean Dolphin Watching",
    subtitle: "Spinner dolphin pods in offshore waters",
    category: "ocean",
    description: "The offshore continental shelf is celebrated for abundant marine life. In season, pods of hundreds of wild spinner dolphins pass through these quiet coastal channels.",
    guestTip: "Prime season: Morning boat departures from November through April.",
    imageUrl: "/images/estate/dolphins.jpg",
    badge: "Seasonal Marine Life"
  },
  {
    id: "kitesurfing",
    title: "Kalpitiya Wind & Kitesurfing",
    subtitle: "World-class trade winds and flatwater lagoons",
    category: "wind",
    description: "Kalpitiya is Asia’s premier kitesurfing destination. Constant winds and calm lagoon shallows offer ideal conditions for beginner and expert riders alike.",
    guestTip: "Dual wind seasons: May – September & December – March.",
    imageUrl: "/images/estate/kitesurf.jpg",
    badge: "World Renowned"
  },
  {
    id: "wilpattu",
    title: "Wilpattu Wilderness Safari",
    subtitle: "Ancient lakes and leopard sanctuary",
    category: "nature",
    description: "Located across the bay, Wilpattu National Park is Sri Lanka’s oldest and largest wildlife park, known for natural lakes ('villus'), leopards, and sloth bears.",
    guestTip: "Private day jeep safari arranged with curated villa picnic hamper.",
    imageUrl: "/images/estate/leopard.jpg",
    badge: "Day Excursion"
  },
  {
    id: "lagoon-safari",
    title: "Lagoon Mangrove Expeditions",
    subtitle: "Puttalam Lagoon calm waterways & birdlife",
    category: "nature",
    description: "Drift along the serene saltwater channels and mangrove islands of the eastern lagoon. Witness migrating sea eagles, kingfishers, and coastal fishing life.",
    guestTip: "Early morning or sunset boat tours arranged directly by our villa concierge.",
    imageUrl: "/images/estate/arch_grove_poster.jpg",
    badge: "Lagoon Haven"
  },
  {
    id: "elephant-safari",
    title: "Wild Elephant Gathering",
    subtitle: "Gentle giants of the dry zone forests",
    category: "nature",
    description: "Witness Sri Lankan wild elephants roaming through natural scrub forests and watering holes near the sanctuary borders.",
    guestTip: "Late afternoon excursions offer the highest probability of sightings.",
    imageUrl: "/images/estate/elephant.jpg",
    badge: "Wildlife"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Sea-Facing Infinity Lap Pool",
    category: "Pool & Shore",
    caption: "17 metres of tranquil water meeting the Indian Ocean horizon.",
    imageUrl: "/images/estate/pool_ocean.jpg",
    span: "col-span-2"
  },
  {
    id: "g2",
    title: "Vaulted Ceilings & Living Pavilion",
    category: "Architecture",
    caption: "Traditional craftsmanship designed for cooling coastal breezes.",
    imageUrl: "/images/estate/living_poster.jpg",
    span: "col-span-1"
  },
  {
    id: "g_arch2",
    title: "Illuminated Facade & Lap Pool",
    category: "Architecture",
    caption: "Sculpted Roman columns and 17m pool illuminated under twilight skies.",
    imageUrl: "/images/estate/hero_poster.jpg",
    span: "col-span-1"
  },
  {
    id: "g_villa_facade",
    title: "The Villa Estate & Peristyle",
    category: "Architecture",
    caption: "Symmetrical Roman columns, clay tile roofs, and sunset pool terrace.",
    imageUrl: "/images/villa_sunset_pool.jpg",
    span: "col-span-1"
  },
  {
    id: "g3",
    title: "The Sapphire Master Suite",
    category: "Suites",
    caption: "Vaulted teak rafters, natural materials, and private sea-facing verandas.",
    imageUrl: "/images/estate/suite_full_poster.jpg",
    span: "col-span-1"
  },
  {
    id: "g_ruby",
    title: "The Ruby Master Suite",
    category: "Suites",
    caption: "Canopy king bed, vaulted teak ceilings, and private oceanfront veranda.",
    imageUrl: "/images/suite_interior.jpg",
    span: "col-span-1"
  },
  {
    id: "g4",
    title: "Upper Deck Ocean Living",
    category: "Suites",
    caption: "Open-air lounge space with elevated panoramic ocean perspectives.",
    imageUrl: "/images/estate/upper_full_poster.jpg",
    span: "col-span-1"
  },
  {
    id: "g5",
    title: "Estate Palm Grove & Grounds",
    category: "Pool & Shore",
    caption: "Mature tropical grounds providing absolute natural privacy and calm.",
    imageUrl: "/images/estate/arch_grove_poster.jpg",
    span: "col-span-1"
  },
  {
    id: "g6",
    title: "Direct Beachfront Solitude",
    category: "Pool & Shore",
    caption: "Pristine sandy shores and kitesurfing waters steps from the villa lawn.",
    imageUrl: "/images/estate/kite_front.jpg",
    span: "col-span-2"
  },
  {
    id: "g7",
    title: "Coastal Dunes & Palm Verge",
    category: "Pool & Shore",
    caption: "Private estate boundary touching golden sands and wild ocean surf.",
    imageUrl: "/images/estate/estate_tour_poster.jpg",
    span: "col-span-1"
  },
  {
    id: "g8",
    title: "Kalpitiya Spinner Dolphins",
    category: "Peninsula",
    caption: "Hundreds of dolphins migrating through the turquoise offshore waters.",
    imageUrl: "/images/estate/dolphins.jpg",
    span: "col-span-1"
  },
  {
    id: "g9",
    title: "Kalpitiya Flatwater Kitesurfing",
    category: "Peninsula",
    caption: "World-class wind seasons across shallow turquoise sandbanks.",
    imageUrl: "/images/estate/kitesurf.jpg",
    span: "col-span-1"
  },
  {
    id: "g10",
    title: "Wilpattu Wilderness Leopard",
    category: "Peninsula",
    caption: "The elusive Sri Lankan leopard in its natural protected habitat.",
    imageUrl: "/images/estate/leopard.jpg",
    span: "col-span-1"
  },
  {
    id: "g12",
    title: "Wild Elephant Gathering",
    category: "Peninsula",
    caption: "Sri Lankan wilderness giants roaming natural lakes and watering holes.",
    imageUrl: "/images/estate/elephant.jpg",
    span: "col-span-1"
  }
];
