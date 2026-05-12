export const BUSINESS = {
  name: "SleekSecure Invisible Grills",
  tagline: "Premium Invisible Grills & Safety Solutions",
  phone: "+91 7893387715",
  phoneFormatted: "+91 7893387715",
  whatsapp: "917893387715",
  whatsappMessage: "Hi, I'm interested in your invisible grills and safety solutions. Please provide more details and a free quote for my requirements.",
  email: "info@sleeksecuregrills.in",
  address: "101, Saraswathi Heights, 937, JV Hills, Street Number 8, Raja Rajeswari Nagar, Kondapur - 500084",
  addressShort: "Kondapur, Hyderabad - 500084",
  city: "Hyderabad",
  state: "Telangana",
  postalCode: "500084",
  country: "IN",
  latitude: 17.47371524335536,
  longitude: 78.35293856107153,
  workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
  website: "https://www.sleeksecuregrills.in",
  author: "SleekSecure Invisible Grills",
  publisher: "SleekSecure Invisible Grills",
};

// Location-specific business data with local phone numbers
export const LOCATION_BUSINESS_DATA: Record<string, {
  name: string;
  phone: string;
  whatsapp: string;
}> = {
  gachibowli: { name: "SleekSecure Gachibowli", phone: "7893387715", whatsapp: "917893387715" },
  madhapur: { name: "SleekSecure Madhapur", phone: "7893387715", whatsapp: "917893387715" },
  "hitech-city": { name: "SleekSecure HITEC City", phone: "7893387715", whatsapp: "917893387715" },
  kondapur: { name: "SleekSecure Kondapur", phone: "7893387715", whatsapp: "917893387715" },
  kukatpally: { name: "SleekSecure Kukatpally", phone: "7893387715", whatsapp: "917893387715" },
  miyapur: { name: "SleekSecure Miyapur", phone: "7893387715", whatsapp: "917893387715" },
  manikonda: { name: "SleekSecure Manikonda", phone: "7893387715", whatsapp: "917893387715" },
  kokapet: { name: "SleekSecure Kokapet", phone: "7893387715", whatsapp: "917893387715" },
  tellapur: { name: "SleekSecure Tellapur", phone: "7893387715", whatsapp: "917893387715" },
  "jubilee-hills": { name: "SleekSecure Jubilee Hills", phone: "7893387715", whatsapp: "917893387715" },
  "banjara-hills": { name: "SleekSecure Banjara Hills", phone: "7893387715", whatsapp: "917893387715" },
  secunderabad: { name: "SleekSecure Secunderabad", phone: "7893387715", whatsapp: "917893387715" },
  uppal: { name: "SleekSecure Uppal", phone: "7893387715", whatsapp: "917893387715" },
  "lb-nagar": { name: "SleekSecure LB Nagar", phone: "7893387715", whatsapp: "917893387715" },
  kompally: { name: "SleekSecure Kompally", phone: "7893387715", whatsapp: "917893387715" },
  attapur: { name: "SleekSecure Attapur", phone: "7893387715", whatsapp: "917893387715" },
  malkajgiri: { name: "SleekSecure Malkajgiri", phone: "7893387715", whatsapp: "917893387715" },
  mehboobnagar: { name: "SleekSecure Mehboobnagar", phone: "7893387715", whatsapp: "917893387715" },
  visakhapatnam: { name: "SleekSecure Visakhapatnam", phone: "7893387715", whatsapp: "917893387715" },
  vijayawada: { name: "SleekSecure Vijayawada", phone: "7893387715", whatsapp: "917893387715" },
  kadapa: { name: "SleekSecure Kadapa", phone: "7893387715", whatsapp: "917893387715" },
};

export const getLocationBusinessData = (slug: string) => {
  return LOCATION_BUSINESS_DATA[slug] || BUSINESS;
};

export const SERVICE_AREAS = [
  // Hyderabad Locations (Footer)
  { name: "Gachibowli", slug: "gachibowli" },
  { name: "Madhapur", slug: "madhapur" },
  { name: "HITEC City", slug: "hitech-city" },
  { name: "Kondapur", slug: "kondapur" },
  { name: "Kukatpally", slug: "kukatpally" },
  { name: "Miyapur", slug: "miyapur" },
  { name: "Manikonda", slug: "manikonda" },
  { name: "Kokapet", slug: "kokapet" },
  { name: "Tellapur", slug: "tellapur" },
  { name: "Jubilee Hills", slug: "jubilee-hills" },
  { name: "Banjara Hills", slug: "banjara-hills" },
  { name: "Secunderabad", slug: "secunderabad" },
  { name: "Uppal", slug: "uppal" },
  { name: "LB Nagar", slug: "lb-nagar" },
  { name: "Kompally", slug: "kompally" },
  { name: "Attapur", slug: "attapur" },
  { name: "Malkajgiri", slug: "malkajgiri" },
  { name: "Mehboobnagar", slug: "mehboobnagar" },
  // Regional Service Areas
  { name: "Hyderabad", slug: "hyderabad" },
  { name: "Telangana", slug: "telangana" },
  { name: "Andhra Pradesh", slug: "andhra-pradesh" },
  { name: "Visakhapatnam", slug: "visakhapatnam" },
  { name: "Vijayawada", slug: "vijayawada" },
  { name: "Kadapa", slug: "kadapa" },
];

// Display areas for service pages: 8 main Hyderabad + Mehboobnagar + AP locations
export const SERVICE_PAGES_DISPLAY_AREAS = [
  // Main Hyderabad Locations
  { name: "Gachibowli", slug: "gachibowli" },
  { name: "Madhapur", slug: "madhapur" },
  { name: "HITEC City", slug: "hitech-city" },
  { name: "Kondapur", slug: "kondapur" },
  { name: "Kukatpally", slug: "kukatpally" },
  { name: "Jubilee Hills", slug: "jubilee-hills" },
  { name: "Banjara Hills", slug: "banjara-hills" },
  { name: "Secunderabad", slug: "secunderabad" },
  // Mehboobnagar
  { name: "Mehboobnagar", slug: "mehboobnagar" },
  // Andhra Pradesh Locations
  { name: "Visakhapatnam", slug: "visakhapatnam" },
  { name: "Vijayawada", slug: "vijayawada" },
  { name: "Kadapa", slug: "kadapa" },
  { name: "Andhra Pradesh", slug: "andhra-pradesh" },
];

// Grouped locations for homepage and footer
export const TELANGANA_LOCATIONS = [
  { name: "Gachibowli", slug: "gachibowli" },
  { name: "Madhapur", slug: "madhapur" },
  { name: "HITEC City", slug: "hitech-city" },
  { name: "Kondapur", slug: "kondapur" },
  { name: "Kukatpally", slug: "kukatpally" },
  { name: "Miyapur", slug: "miyapur" },
  { name: "Manikonda", slug: "manikonda" },
  { name: "Kokapet", slug: "kokapet" },
  { name: "Tellapur", slug: "tellapur" },
  { name: "Jubilee Hills", slug: "jubilee-hills" },
  { name: "Banjara Hills", slug: "banjara-hills" },
  { name: "Secunderabad", slug: "secunderabad" },
  { name: "Uppal", slug: "uppal" },
  { name: "LB Nagar", slug: "lb-nagar" },
  { name: "Kompally", slug: "kompally" },
  { name: "Attapur", slug: "attapur" },
  { name: "Malkajgiri", slug: "malkajgiri" },
  { name: "Mehboobnagar", slug: "mehboobnagar" },
];

export const ANDHRA_PRADESH_LOCATIONS = [
  { name: "Visakhapatnam", slug: "visakhapatnam" },
  { name: "Vijayawada", slug: "vijayawada" },
  { name: "Kadapa", slug: "kadapa" },
];

export const SERVICES = [
  {
    id: "balcony-grills",
    title: "Invisible Grills for Balcony",
    shortDesc: "Keep your balcony safe and beautiful with nearly invisible safety grills.",
    path: "/balcony-invisible-grills",
  },
  {
    id: "window-grills",
    title: "Invisible Grills for Windows",
    shortDesc: "Child-safe window grills that let in light and air without compromising safety.",
    path: "/window-invisible-grills",
  },
  {
    id: "ceiling-cloth-hangers",
    title: "Ceiling Cloth Hangers",
    shortDesc: "Space-saving ceiling-mounted cloth drying solutions for modern apartments.",
    path: "/ceiling-cloth-hangers",
  },
];

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    children: SERVICES.map((s) => ({ label: s.title, path: s.path })),
  },
  {
    label: "Locations",
    path: null,
    children: [
      ...TELANGANA_LOCATIONS.map((l) => ({ label: l.name, path: `/invisible-grills-${l.slug}` })),
      ...ANDHRA_PRADESH_LOCATIONS.map((l) => ({ label: l.name, path: `/invisible-grills-${l.slug}` })),
    ],
  },
  { label: "Contact", path: "/contact" },
];
