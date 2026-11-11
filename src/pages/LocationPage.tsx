import { Link, useLocation, Navigate } from "react-router-dom";
import { Phone, ShieldCheck, Eye, Sparkles, Wind, Home as HomeIcon, Wrench, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import Layout from "@/components/layout/Layout";
import Seo, { SITE_URL } from "@/components/shared/Seo";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BUSINESS, getLocationBusinessData } from "@/lib/constants";
import { getLocationBySlug, getNearbyLocations } from "@/lib/locations";
import { breadcrumbSchema, cityBusinessSchema, serviceSchema, faqSchema } from "@/lib/seo";
import { BLOG_POSTS } from "@/content/blog";
import { trackWhatsAppClick, trackCallClick } from "@/lib/gtm-tracking";
import heroImg from "@/assets/hero-luxury-balcony.webp";

const benefits = [
  { icon: ShieldCheck, title: "Child Safety", desc: "Tested 25mm child-safe spacing." },
  { icon: Eye, title: "Crystal Clear View", desc: "2mm SS316 wires — virtually invisible." },
  { icon: Wind, title: "Rust Resistant", desc: "Marine-grade. Built for monsoons." },
  { icon: Sparkles, title: "SS316 Stainless Steel", desc: "Premium grade. Lasts decades." },
  { icon: HomeIcon, title: "Modern Apartment Look", desc: "Designed for premium interiors." },
  { icon: Wrench, title: "Space-Saving Cloth Hangers", desc: "Ceiling-mounted. Effortless drying." },
];

const steps = [
  { n: "01", title: "Free Consultation", desc: "Talk to our team on WhatsApp or call." },
  { n: "02", title: "Site Visit", desc: "Free on-site assessment at your home." },
  { n: "03", title: "Measurements", desc: "Precise measurements & transparent quote." },
  { n: "04", title: "Professional Installation", desc: "Clean, fast, certified install team." },
];

const LocationPage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/invisible-grills-/, "");
  const loc = getLocationBySlug(slug);
  if (!loc) return <Navigate to="/" replace />;

  // Get location-specific business data
  const locBusiness = getLocationBusinessData(loc.slug);
  const displayPhone = locBusiness.phone;
  const whatsappNumber = locBusiness.whatsapp;
  const isAP = loc.state === "Andhra Pradesh";

  const path = `/invisible-grills-${loc.slug}`;
  const title = loc.slug === "hyderabad"
    ? "Invisible Grills Near Me in Hyderabad | Every Area Covered - SleekSecure"
    : `Invisible Grills in ${loc.name}${isAP ? "" : ", Hyderabad"} | SS316, 10-Yr Warranty - SleekSecure`;
  const description = `Premium invisible grills & ceiling cloth hangers in ${loc.name}. SS316 marine-grade, child-safe 25mm spacing, 10-year warranty. Free site visit & quote. Call ${displayPhone}.`;
  const keywords = `invisible grills ${loc.name}, best invisible grills, SS316 grills ${loc.name}, child-safe grills, ceiling cloth hangers, balcony safety, apartment grills installation ${loc.name}`;

  const nearby = getNearbyLocations(loc.slug, 4);
  const isHub = loc.slug === "hyderabad";

  // Answer-first facts: short, quotable statements that search and AI engines can lift verbatim.
  const keyFacts = [
    { k: "Material", v: "SS316 marine-grade stainless steel cable, 2mm, nylon-coated" },
    { k: "Child-safe spacing", v: "25mm standard (customisable up to 40mm)" },
    { k: "Cable strength", v: "250kg breaking strength per cable, tension-tested on site" },
    { k: "Warranty", v: "10-year written warranty on invisible grills" },
    { k: "Installation time", v: "Usually 1 day per flat after measurement" },
    { k: "Price", v: "₹100 – ₹145 per sq ft (SS316)" },
    { k: "Site visit", v: `Free site visit and measured quote in ${loc.name}` },
  ];

  const localFaqs = [
    {
      question: `What is the cost of invisible grills in ${loc.name}?`,
      answer: `SleekSecure's SS316 invisible grills in ${loc.name} cost ₹100 to ₹145 per sq ft of the opening. A typical 10 ft × 9 ft balcony (90 sq ft) works out to about ₹9,000 to ₹13,050. The exact rate depends on spacing, opening size and shape, and floor access, and is confirmed in writing after a free site visit.`,
    },
    {
      question: `Who installs invisible grills near me in ${loc.name}?`,
      answer: `SleekSecure Invisible Grills installs SS316 invisible grills across ${isAP ? loc.state : `${loc.name} and the rest of Hyderabad`} with its own trained team, based in Kondapur, Hyderabad. Call or WhatsApp +91 99669 09927 for a free site visit.`,
    },
    {
      question: `Are invisible grills safe for children in ${loc.name} high-rise apartments?`,
      answer: `Yes, when they are installed correctly. SleekSecure uses 25mm cable spacing so a child's head or hand cannot pass through, and every 2mm SS316 cable has 250kg breaking strength. Invisible grills are a fall-protection barrier and should be used together with adult supervision.`,
    },
    {
      question: `Will my apartment society in ${loc.name} allow invisible grills?`,
      answer: `Most gated communities allow invisible grills because they do not change the building's elevation the way box grills do. Always check your association's facade rules first. SleekSecure can share specifications and photos for your committee's approval.`,
    },
    {
      question: `How long does invisible grill installation take in ${loc.name}?`,
      answer: `A typical 2BHK or 3BHK apartment in ${loc.name} is finished in one day after measurement. Large balconies or several flats in one tower can take 1 to 2 days.`,
    },
  ];

  const ogImageUrl = `${SITE_URL}/images/luxury-balcony-invisible-grills.jpg`;
  const wa = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I'm interested in invisible grills and ceiling cloth hangers for ${loc.name}. Please share details and quote.`)}`;

  const locationLabel = isAP ? `${loc.name}, ${loc.state}` : loc.slug === "hyderabad" ? "Hyderabad, Telangana" : `${loc.name}, Hyderabad`;

  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        keywords={keywords}
        canonicalPath={path}
        ogImage={ogImageUrl}
        author={locBusiness.name}
        publisher={BUSINESS.publisher}
        twitterHandle="@SleekSecure"
        locale="en_IN"
        jsonLd={[
          cityBusinessSchema({ name: locationLabel, slug: `${isAP ? 'ap' : 'hyd'}-${loc.slug}`, state: loc.state || "Telangana" }),
          faqSchema(localFaqs),
          serviceSchema({
            name: `Invisible Grills & Ceiling Cloth Hangers in ${loc.name}`,
            description,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/#service-areas" },
            { name: loc.name, path },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/20 via-background/10 to-transparent" />
        <div className="container-custom">
          <div className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-[hsl(200deg 7.91% 21.45%)] hover:text-foreground">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-foreground/40" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/#service-areas" className="text-[hsl(200deg 7.91% 21.45%)] hover:text-foreground">Locations</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-foreground/40" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-foreground">{loc.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              {loc.name} · {isAP ? loc.state : "Hyderabad"}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-4">
              Invisible Grills & Ceiling Cloth Hangers in {loc.name}
            </h1>
            <p className="text-base md:text-lg text-[hsl(200deg,20.55%,82.95%)] mb-8">
              Modern SS316 invisible grill and ceiling cloth hanger installation services for apartments and homes in {loc.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={wa} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('location_page_hero', 'whatsapp_button')}>
                <Button size="lg" className="w-full sm:w-auto bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-primary-foreground gap-2">
                  <WhatsAppIcon className="w-5 h-5" /> WhatsApp Now
                </Button>
              </a>
              <a href={`tel:${displayPhone}`} onClick={() => trackCallClick('location_page_hero', 'call_button')}>
                <Button size="lg" className="w-full sm:w-auto bg-primary/80 hover:bg-primary text-primary-foreground font-semibold gap-2">
                  <Phone className="w-5 h-5" /> Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-custom max-w-3xl space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            Sleek Secure delivers premium <strong className="text-foreground">invisible grills in {loc.name}</strong>, engineered for modern apartment living. Our SS316 marine-grade wires keep your balconies, windows and utility areas child-safe without blocking light, air or your view.
          </p>
          <p>{loc.context}</p>
          <p>
            Pair it with our <strong className="text-foreground">ceiling cloth hangers</strong> — a clean, space-saving alternative to floor stands. Together, they make every {loc.name} apartment safer, smarter and more liveable.
          </p>
        </div>
      </section>

      {/* KEY FACTS + LOCAL FAQ — answer-first content for search & AI overviews */}
      <section className="py-12 md:py-16 bg-secondary" aria-labelledby="key-facts">
        <div className="container-custom max-w-4xl">
          <h2 id="key-facts" className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
            Invisible Grills in {loc.name}: Key Facts
          </h2>
          <p className="text-foreground/90 mb-6">
            <strong className="text-foreground">Short answer:</strong> SleekSecure installs SS316 marine-grade invisible grills in {locationLabel} with 2mm cables, 25mm child-safe spacing, 250kg per-cable strength and a 10-year warranty, priced at ₹100–₹145 per sq ft. Site visits and quotes are free.
          </p>
          <dl className="grid sm:grid-cols-2 gap-3 mb-12">
            {keyFacts.map((f) => (
              <div key={f.k} className="rounded-xl border border-border/60 bg-background p-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-primary">{f.k}</dt>
                <dd className="text-foreground mt-1">{f.v}</dd>
              </div>
            ))}
          </dl>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
            Invisible Grills in {loc.name}: FAQs
          </h2>
          <div className="space-y-3">
            {localFaqs.map((f) => (
              <details key={f.question} className="group rounded-xl border border-border/60 bg-background p-4 open:shadow-sm">
                <summary className="cursor-pointer font-heading font-semibold text-foreground list-none [&::-webkit-details-marker]:hidden flex justify-between gap-4">
                  <h3 className="text-base">{f.question}</h3>
                  <span aria-hidden className="text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-heading font-bold text-foreground mb-4">
              {isHub ? "Invisible grills guides for Hyderabad homes" : `Helpful guides for ${loc.name} homeowners`}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {BLOG_POSTS.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link to={`/blog/${p.slug}`} className="text-primary hover:underline">{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Why Sleek Secure</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
              Premium Safety. Invisible Design.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-card rounded-2xl p-5 md:p-6 border border-border/60 hover:shadow-lg transition-shadow">
                <b.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-foreground text-base md:text-lg mb-1">{b.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Installation Process</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
              Simple. Clean. Fast.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.n} className="bg-card rounded-2xl p-6 border border-border/60">
                <div className="text-accent font-heading text-2xl font-bold mb-3">{s.n}</div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN SERVICE LINKS */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-custom max-w-3xl">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6 text-center">
            Explore Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/balcony-invisible-grills" className="bg-card border border-border/60 rounded-2xl p-5 hover:border-accent transition-colors flex items-center justify-between">
              <div>
                <h3 className="font-heading font-semibold text-foreground">Invisible Grills</h3>
                <p className="text-sm text-muted-foreground">Premium SS316 safety grills</p>
              </div>
              <ArrowRight className="w-5 h-5 text-accent" />
            </Link>
            <Link to="/ceiling-cloth-hangers" className="bg-card border border-border/60 rounded-2xl p-5 hover:border-accent transition-colors flex items-center justify-between">
              <div>
                <h3 className="font-heading font-semibold text-foreground">Ceiling Cloth Hangers</h3>
                <p className="text-sm text-muted-foreground">Space-saving drying solution</p>
              </div>
              <ArrowRight className="w-5 h-5 text-accent" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEARBY AREAS */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Nearby Areas</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
              We Also Serve Near {loc.name}
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                to={`/invisible-grills-${n.slug}`}
                className="bg-card rounded-xl p-4 border border-border/60 hover:border-accent transition-colors text-center"
              >
                <MapPin className="w-4 h-4 text-accent mx-auto mb-2" />
                <span className="text-sm font-medium text-foreground">Invisible Grills in {n.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/85 to-primary/85" />
        </div>
        <div className="relative z-10 container-custom text-center max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 leading-tight">
            Upgrade Your Home Safety Today
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/85 mb-8">
            Free site visit in {loc.name}. Transparent quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={wa} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('location_page_cta', 'whatsapp_button')}>
              <Button size="lg" className="w-full sm:w-auto bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-primary-foreground font-semibold gap-2">
                <WhatsAppIcon className="w-5 h-5" /> WhatsApp Now
              </Button>
            </a>
            <a href={`tel:${displayPhone}`} onClick={() => trackCallClick('location_page_cta', 'call_button')}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-primary-foreground/5 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/15 backdrop-blur-md font-semibold gap-2">
                <Phone className="w-5 h-5" /> Call Now
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto gradient-gold text-accent-foreground border-0 font-semibold gap-2">
                Free Consultation <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-xs text-primary-foreground/70 inline-flex items-center gap-1.5 justify-center">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary-foreground" /> 10-year warranty · Certified installers · 1,100+ installations
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default LocationPage;
