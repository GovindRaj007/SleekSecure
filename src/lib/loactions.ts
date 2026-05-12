export interface LocationData {
  slug: string; // url path segment after /invisible-grills-
  name: string;
  intro: string;
  context: string;
}

export const HYD_LOCATIONS: LocationData[] = [
  { slug: "gachibowli", name: "Gachibowli", intro: "Premium SS316 invisible grills and ceiling cloth hangers for high-rise apartments and gated communities across Gachibowli.", context: "From DLF and Aparna towers to villa communities along the Financial District, Gachibowli families trust our invisible grills for child safety and a clear skyline view." },
  { slug: "madhapur", name: "Madhapur", intro: "Modern invisible grill installation and ceiling cloth hangers for apartments and IT-corridor homes in Madhapur.", context: "We serve high-rise residences near HITEC City, Image Gardens and Ayyappa Society with view-preserving balcony safety solutions." },
  { slug: "hitech-city", name: "HITEC City", intro: "Apartment-grade invisible grills and space-saving ceiling cloth hangers for HITEC City homes.", context: "Tailored for modern IT-corridor apartments where unobstructed skyline views and child safety matter equally." },
  { slug: "kondapur", name: "Kondapur", intro: "SS316 marine-grade invisible grills and premium ceiling cloth hangers across Kondapur’s apartment communities.", context: "From Botanical Garden Road to Gopanpally, our installations protect families without blocking light, air or views." },
  { slug: "kukatpally", name: "Kukatpally", intro: "Premium invisible grill and ceiling cloth hanger installation for KPHB and Kukatpally apartment owners.", context: "Trusted across KPHB phases, JNTU and Vivekananda Nagar for invisible safety that complements modern interiors." },
  { slug: "miyapur", name: "Miyapur", intro: "Invisible grills and ceiling cloth hangers built for Miyapur’s growing apartment skyline.", context: "From Allwyn Colony to Bachupally Road, families choose our SS316 grills for long-lasting balcony and window safety." },
  { slug: "manikonda", name: "Manikonda", intro: "Premium invisible grill installation and ceiling cloth hangers in Manikonda and Puppalaguda.", context: "We secure balconies and utility areas of apartments across Lanco Hills, Alkapur and OU Colony." },
  { slug: "kokapet", name: "Kokapet", intro: "Luxury-grade SS316 invisible grills and ceiling cloth hangers for Kokapet’s premium high-rise communities.", context: "Designed for ultra-tall towers in Neopolis and Financial District extension where wind rating and view-clarity are critical." },
  { slug: "tellapur", name: "Tellapur", intro: "Invisible grill and ceiling cloth hanger installation for Tellapur’s newly built apartment ecosystem.", context: "Trusted by families in Aparna Sarovar, Honer Vivantis and other Tellapur communities for safe, modern balconies." },
  { slug: "jubilee-hills", name: "Jubilee Hills", intro: "Bespoke invisible grills and premium ceiling cloth hangers for Jubilee Hills villas and apartments.", context: "Our discreet, marine-grade SS316 wires preserve the architectural character of Jubilee Hills homes." },
  { slug: "banjara-hills", name: "Banjara Hills", intro: "Premium invisible grills and ceiling cloth hanger installation across Banjara Hills road numbers.", context: "Ideal for luxury apartments and independent residences where aesthetics and child safety must coexist." },
  { slug: "secunderabad", name: "Secunderabad", intro: "Reliable invisible grills and ceiling cloth hangers for Secunderabad apartments and independent homes.", context: "We cover Trimulgherry, Sainikpuri, Tarnaka and AS Rao Nagar with same-week installation slots." },
  { slug: "uppal", name: "Uppal", intro: "Affordable, premium-grade invisible grills and ceiling cloth hangers for Uppal homes.", context: "From Habsiguda to Boduppal, our SS316 grills add safety without changing the look of your apartment." },
  { slug: "lb-nagar", name: "LB Nagar", intro: "Invisible grill installation and ceiling cloth hangers for LB Nagar’s apartment communities.", context: "We serve Kothapet, Mansoorabad, Vanasthalipuram and surrounding neighborhoods." },
  { slug: "kompally", name: "Kompally", intro: "Premium invisible grills and space-saving ceiling cloth hangers for Kompally’s growing apartments.", context: "Suitable for high-rises along Medchal Road and gated villa communities in Kompally." },
  { slug: "attapur", name: "Attapur", intro: "SS316 invisible grills and ceiling cloth hangers for Attapur, Hyderguda and Rajendra Nagar homes.", context: "Built to handle Hyderabad’s heat and dust while keeping balconies and windows fully usable." },
  { slug: "malkajgiri", name: "Malkajgiri", intro: "Trusted invisible grill and ceiling cloth hanger installation across Malkajgiri and Neredmet.", context: "We help families upgrade older balconies and windows with virtually invisible safety wires." },
  { slug: "mehboobnagar", name: "Mehboobnagar", intro: "Premium invisible grills and ceiling cloth hangers for Mehboobnagar homes and apartments.", context: "Same SS316 marine-grade quality our Hyderabad customers trust, delivered locally with free site visits." },
];

export const getLocationBySlug = (slug: string) =>
  HYD_LOCATIONS.find((l) => l.slug === slug);

// Returns ~3 nearby locations (simple round-robin neighbours)
export const getNearbyLocations = (slug: string, count = 4): LocationData[] => {
  const idx = HYD_LOCATIONS.findIndex((l) => l.slug === slug);
  if (idx === -1) return HYD_LOCATIONS.slice(0, count);
  const out: LocationData[] = [];
  for (let offset = 1; out.length < count; offset++) {
    const a = HYD_LOCATIONS[(idx + offset) % HYD_LOCATIONS.length];
    const b = HYD_LOCATIONS[(idx - offset + HYD_LOCATIONS.length) % HYD_LOCATIONS.length];
    if (a && a.slug !== slug && !out.includes(a)) out.push(a);
    if (out.length < count && b && b.slug !== slug && !out.includes(b)) out.push(b);
    if (offset > HYD_LOCATIONS.length) break;
  }
  return out.slice(0, count);
};
