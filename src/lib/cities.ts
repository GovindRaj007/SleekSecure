export interface CityData {
  slug: string;
  name: string;
  state: string;
  region: string;
  intro: string;
  highlights: string[];
  localContext: string;
  popularAreas: string[];
}

export const CITIES: CityData[] = [
  {
    slug: "visakhapatnam",
    name: "Visakhapatnam",
    state: "Andhra Pradesh",
    region: "Coastal Andhra",
    intro:
      "Visakhapatnam's coastal climate and high-rise apartment culture make invisible grills the smartest safety upgrade. SafeView Grills delivers SS316 marine-grade installations engineered for salt air, monsoon winds, and unobstructed sea views.",
    highlights: [
      "Marine-grade SS316 wires resist salt-air corrosion",
      "Tested wind resistance for high-rise sea-facing apartments",
      "Same-day site visits across MVP Colony, Madhurawada, Rushikonda",
      "100+ apartment communities served in Vizag",
    ],
    localContext:
      "From sea-facing high-rises in Rushikonda to gated communities in Madhurawada and PM Palem, families across Visakhapatnam trust SafeView Grills for child-safe, view-preserving balcony and window safety.",
    popularAreas: [
      "MVP Colony",
      "Madhurawada",
      "Rushikonda",
      "PM Palem",
      "Gajuwaka",
      "Seethammadhara",
      "Dwaraka Nagar",
    ],
  },
  {
    slug: "vijayawada",
    name: "Vijayawada",
    state: "Andhra Pradesh",
    region: "Krishna District",
    intro:
      "Vijayawada's growing skyline of premium apartments demands invisible grill solutions that protect families without blocking the view. SafeView Grills offers expert installation across Benz Circle, Auto Nagar, and Tadepalli.",
    highlights: [
      "Custom SS316 grills for high-rise apartments",
      "Heat- and dust-resistant finishes for Vijayawada summers",
      "Free site visit and quote within 24 hours",
      "Trusted by 600+ families in Krishna district",
    ],
    localContext:
      "We serve apartment owners and villa residents from Benz Circle and MG Road to Tadepalli and Mangalagiri with premium balcony, window, and staircase invisible grills.",
    popularAreas: [
      "Benz Circle",
      "Auto Nagar",
      "Tadepalli",
      "Mangalagiri",
      "Patamata",
      "Governorpet",
      "Gunadala",
    ],
  },
  {
    slug: "kadapa",
    name: "Kadapa",
    state: "Andhra Pradesh",
    region: "Rayalaseema",
    intro:
      "Kadapa's growing residential sector deserves premium safety upgrades. SafeView Grills delivers SS316 invisible grills and ceiling cloth hangers built for the region's hot, dry climate.",
    highlights: [
      "SS316 marine-grade wires built for Rayalaseema heat",
      "Custom-fit balcony, window and staircase grills",
      "Free measurement and quick installation slots",
      "Trusted by families across Kadapa town and outskirts",
    ],
    localContext:
      "From YSR Circle and One Town to Almaspeta and Nagarajupet, Kadapa families trust SafeView Grills for child-safe, view-preserving balcony and window safety.",
    popularAreas: [
      "YSR Circle",
      "One Town",
      "Almaspeta",
      "Nagarajupet",
      "Bhagya Nagar",
      "RTC Bus Stand Area",
    ],
  },
];

export const getCityBySlug = (slug: string) =>
  CITIES.find((c) => c.slug === slug);
