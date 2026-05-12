import { BUSINESS, SERVICES, SERVICE_AREAS } from "./constants";
import { SITE_URL, SITE_NAME } from "@/components/shared/Seo";

export const orgSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "SleekSecure",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
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
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+91 ${BUSINESS.phone}`,
    contactType: "Customer Service",
    areaServed: SERVICE_AREAS.map((a) => a.name),
  },
  sameAs: [],
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  alternateName: "SleekSecure",
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/favicon.png`,
  url: SITE_URL,
  telephone: `+91 ${BUSINESS.phone}`,
  email: BUSINESS.email,
  description: "Premium SS316 invisible grills and ceiling cloth hanger installation services.",
  priceRange: "₹₹",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "320",
    bestRating: "5",
    worstRating: "1",
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
  "@id": `${SITE_URL}/areas/${city.slug}#localbusiness`,
  name: `${SITE_NAME} — ${city.name}`,
  url: `${SITE_URL}/areas/${city.slug}`,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/favicon.png`,
  telephone: `+91 ${BUSINESS.phone}`,
  email: BUSINESS.email,
  description: `Premium SS316 invisible grills and ceiling cloth hangers in ${city.name}`,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: city.name,
    addressRegion: city.state,
    addressCountry: "IN",
  },
  areaServed: { "@type": "City", name: city.name },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
  },
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
    logo: `${SITE_URL}/favicon.png`,
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

export const serviceSchema = (params: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: params.name,
  description: params.description,
  url: `${SITE_URL}${params.path}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: SERVICE_AREAS.map((a) => a.name),
  serviceType: params.name,
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

export const homeGraph = () => ({
  "@context": "https://schema.org",
  "@graph": [
    websiteSchema(),
    orgSchema(),
    localBusinessSchema(),
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
