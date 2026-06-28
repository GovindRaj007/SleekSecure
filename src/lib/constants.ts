export const BUSINESS = {
  name: "SleekSecure Invisible Grills",
  tagline: "Premium Invisible Grills & Safety Solutions",
  phone: "+91 9966909927",
  phoneFormatted: "+91 9966909927",
  whatsapp: "919966909927",
  whatsappMessage: "Hi, I'm interested in your invisible grills and safety solutions. Please provide more details and a free quote for my requirements.",
  email: "sleeksecuresolutions@gmail.com",
  address: "937, Kondapur, JV Hills, Gachibowli, Hyderabad, Telangana 500084",
  addressShort: "Kondapur, JV Hills, Hyderabad - 500084",
  city: "Hyderabad",
  state: "Telangana",
  postalCode: "500084",
  country: "IN",
  latitude: 17.4735626,
  longitude: 78.3529521,
  workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
  website: "https://www.sleeksecure.in",
  author: "SleekSecure Invisible Grills",
  publisher: "SleekSecure Invisible Grills",
  googleBusinessProfile: {
    placeId: "ChIJU6YGZg0rmzkRTfmriq-YV2E",
    reviewUrl: "https://g.page/r/CS7Bsk9pMQqMEBM/review",
    shortReviewUrl: "https://g.page/r/CS7Bsk9pMQqMEBM/review",
    mapsUrl: "https://maps.app.goo.gl/5JAz7aiB14yLQ6nW9",
    directionsUrl: "https://www.google.com/maps/dir//Saraswathi+Heights+Kondapur,+937,+Kondapur,+JV+Hills,+Gachibowli,+Hyderabad,+Telangana+500084/@17.4735677,78.3480812,17z/data=!4m16!1m7!3m6!1s0x3bcb9300351aa505:0x3c5c65d1f98b0288!2sSaraswathi+Heights+Kondapur!8m2!3d17.4735626!4d78.3529521!16s%2Fg%2F11xf6bk_0h!4m7!1m0!1m5!1m1!1s0x3bcb9300351aa505:0x3c5c65d1f98b0288!2m2!1d78.3529521!2d17.4735626?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D",
  },
};

// Location-specific business data with local phone numbers
export const LOCATION_BUSINESS_DATA: Record<string, {
  name: string;
  phone: string;
  whatsapp: string;
}> = {
  gachibowli: { name: "SleekSecure Gachibowli", phone: "9966909927", whatsapp: "919966909927" },
  madhapur: { name: "SleekSecure Madhapur", phone: "9966909927", whatsapp: "919966909927" },
  "hitech-city": { name: "SleekSecure HITEC City", phone: "9966909927", whatsapp: "919966909927" },
  kondapur: { name: "SleekSecure Kondapur", phone: "9966909927", whatsapp: "919966909927" },
  kukatpally: { name: "SleekSecure Kukatpally", phone: "9966909927", whatsapp: "919966909927" },
  miyapur: { name: "SleekSecure Miyapur", phone: "9966909927", whatsapp: "919966909927" },
  manikonda: { name: "SleekSecure Manikonda", phone: "9966909927", whatsapp: "919966909927" },
  kokapet: { name: "SleekSecure Kokapet", phone: "9966909927", whatsapp: "919966909927" },
  tellapur: { name: "SleekSecure Tellapur", phone: "9966909927", whatsapp: "919966909927" },
  "jubilee-hills": { name: "SleekSecure Jubilee Hills", phone: "9966909927", whatsapp: "919966909927" },
  "banjara-hills": { name: "SleekSecure Banjara Hills", phone: "9966909927", whatsapp: "919966909927" },
  secunderabad: { name: "SleekSecure Secunderabad", phone: "9966909927", whatsapp: "919966909927" },
  uppal: { name: "SleekSecure Uppal", phone: "9966909927", whatsapp: "919966909927" },
  "lb-nagar": { name: "SleekSecure LB Nagar", phone: "9966909927", whatsapp: "919966909927" },
  kompally: { name: "SleekSecure Kompally", phone: "9966909927", whatsapp: "919966909927" },
  attapur: { name: "SleekSecure Attapur", phone: "9966909927", whatsapp: "919966909927" },
  malkajgiri: { name: "SleekSecure Malkajgiri", phone: "9966909927", whatsapp: "919966909927" },
  patancheruvu: { name: "SleekSecure Patancheruvu", phone: "9966909927", whatsapp: "919966909927" },
  sangareddy: { name: "SleekSecure Sangareddy", phone: "9966909927", whatsapp: "919966909927" },
  medchal: { name: "SleekSecure Medchal", phone: "9966909927", whatsapp: "919966909927" },
  mehboobnagar: { name: "SleekSecure Mehboobnagar", phone: "9966909927", whatsapp: "919966909927" },
  visakhapatnam: { name: "SleekSecure Visakhapatnam", phone: "9966909927", whatsapp: "919966909927" },
  vijayawada: { name: "SleekSecure Vijayawada", phone: "9966909927", whatsapp: "919966909927" },
  kadapa: { name: "SleekSecure Kadapa", phone: "9966909927", whatsapp: "919966909927" },
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
  { name: "Patancheruvu", slug: "patancheruvu" },
  { name: "Sangareddy", slug: "sangareddy" },
  { name: "Medchal", slug: "medchal" },
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
  { name: "Patancheruvu", slug: "patancheruvu" },
  { name: "Sangareddy", slug: "sangareddy" },
  { name: "Medchal", slug: "medchal" },
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
    id: "child-safety-grills",
    title: "Invisible Grills for Child Safety",
    shortDesc: "Premium child-safe invisible grills designed to protect your little ones.",
    path: "/child-safety-invisible-grills",
  },
  {
    id: "pigeon-safe-grills",
    title: "Pigeon-Safe Balcony Grills",
    shortDesc: "Keep pigeons away while maintaining your premium transparent view.",
    path: "/pigeon-safe-invisible-grills",
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
