import { BUSINESS, SERVICES, SERVICE_AREAS } from "./constants";
import { SITE_URL, SITE_NAME } from "@/components/shared/Seo";

export const orgSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "SleekSecure",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: `+91 ${BUSINESS.phone}`,
  email: BUSINESS.email,
  description: BUSINESS.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
  hasMap: BUSINESS.googleBusinessProfile?.mapsUrl,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+91 ${BUSINESS.phone}`,
    contactType: "Customer Service",
    areaServed: SERVICE_AREAS.map((a) => a.name),
  },
  sameAs: BUSINESS.googleBusinessProfile
    ? [
        BUSINESS.googleBusinessProfile.shortReviewUrl,
        BUSINESS.googleBusinessProfile.mapsUrl,
      ]
    : [],
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  alternateName: "SleekSecure",
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo.png`,
  url: SITE_URL,
  telephone: `+91 ${BUSINESS.phone}`,
  email: BUSINESS.email,
  description: "Premium SS316 invisible grills and ceiling cloth hanger installation services.",
  priceRange: "₹100-₹145 per sq ft",
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.latitude,
    longitude: BUSINESS.longitude,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
  areaServed: SERVICE_AREAS.map((a) => ({ 
    "@type": "City", 
    name: a.name,
    address: { "@type": "PostalAddress", addressCountry: "IN" }
  })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
  serviceArea: SERVICE_AREAS.map((a) => ({ 
    "@type": "City", 
    name: a.name 
  })),
  knowsAbout: [
    "Invisible Grills",
    "SS316 Stainless Steel",
    "Window Safety",
    "Balcony Safety",
    "Child Safety",
    "Ceiling Cloth Hangers",
  ],
});

export const cityBusinessSchema = (city: {
  name: string;
  slug: string;
  state: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/invisible-grills-${city.slug}#localbusiness`,
  name: `${SITE_NAME} — ${city.name}`,
  url: `${SITE_URL}/invisible-grills-${city.slug}`,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo.png`,
  telephone: `+91 ${BUSINESS.phone}`,
  email: BUSINESS.email,
  description: `Premium SS316 invisible grills and ceiling cloth hangers in ${city.name}`,
  priceRange: "₹100-₹145 per sq ft",
  address: {
    "@type": "PostalAddress",
    addressLocality: city.name,
    addressRegion: city.state,
    addressCountry: "IN",
  },
  areaServed: { "@type": "City", name: city.name },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "17:00",
    },
  ],
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: "SleekSecure",
  description: BUSINESS.tagline,
  inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: `${SITE_URL}/logo.png`,
  },
});

export const breadcrumbSchema = (
  items: { name: string; path: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE_URL}${it.path === "/" ? "" : it.path}`,
  })),
});

/** Machine-readable prices (quoted by search and AI answers for "cost" queries). */
const GRILL_OFFER = {
  "@type": "Offer",
  priceCurrency: "INR",
  availability: "https://schema.org/InStock",
  priceSpecification: {
    "@type": "UnitPriceSpecification",
    minPrice: 100,
    maxPrice: 145,
    priceCurrency: "INR",
    unitText: "per square foot",
    unitCode: "FTK",
  },
  description: "SS316 invisible grills, 2mm cable, 25mm child-safe spacing, 10-year warranty. Exact rate confirmed after a free site visit.",
};

const HANGER_OFFER = {
  "@type": "Offer",
  priceCurrency: "INR",
  availability: "https://schema.org/InStock",
  priceSpecification: {
    "@type": "PriceSpecification",
    minPrice: 3500,
    priceCurrency: "INR",
  },
  description: "Standard 6-feet, 6-rod ceiling cloth hanger, from ₹3,500.",
};

export const serviceSchema = (params: {
  name: string;
  description: string;
  path: string;
  /** Which price to publish; defaults to invisible grill pricing. */
  pricing?: "grills" | "hanger" | "none";
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: params.name,
  description: params.description,
  url: `${SITE_URL}${params.path}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: SERVICE_AREAS.map((a) => a.name),
  serviceType: params.name,
  ...(params.pricing === "none"
    ? {}
    : { offers: params.pricing === "hanger" ? HANGER_OFFER : GRILL_OFFER }),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

export const offerSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Free Ceiling Cloth Hanger with Invisible Grill Installation",
  description: "Get free ceiling cloth hanger with installation on Invisible grill installation worth Rs.20,000 or more.",
  image: `${SITE_URL}/images/offer-poster.jpg`,
  priceCurrency: "INR",
  price: "0",
  availability: "https://schema.org/OnlineOnly",
  url: `${SITE_URL}/`,
  offeredBy: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  eligibleCustomerType: "Residential",
  applicableCountry: "IN",
  eligibleRegion: SERVICE_AREAS.map((a) => a.name).join(", "),
});

export const homeGraph = () => ({
  "@context": "https://schema.org",
  "@graph": [
    websiteSchema(),
    orgSchema(),
    localBusinessSchema(),
    offerSchema(),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Our Services",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `${SITE_URL}${s.path}`,
      })),
    },
  ],
});
