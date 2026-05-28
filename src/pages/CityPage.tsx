import { Link, useParams, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Seo, { SITE_URL } from "@/components/shared/Seo";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/shared/ContactForm";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CheckCircle2, MapPin, Phone, ArrowRight } from "lucide-react";
import { getCityBySlug } from "@/lib/cities";
import { SERVICES, BUSINESS } from "@/lib/constants";
import {
  breadcrumbSchema,
  cityBusinessSchema,
  faqSchema,
} from "@/lib/seo";

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = getCityBySlug(citySlug || "");

  if (!city) return <Navigate to="/" replace />;

  const path = `/areas/${city.slug}`;
  const title = `Invisible Grills in ${city.name} — SS316 Balcony & Window Safety | SleekSecure Invisible Grills`;
  const description = `Premium invisible grills, balcony & window safety, and ceiling cloth hangers in ${city.name}, ${city.state}. Free site visit, SS316 marine-grade wires, 10-year warranty.`;

  const cityFaqs = [
    {
      question: `How much do invisible grills cost in ${city.name}?`,
      answer: `Pricing in ${city.name} depends on the opening size, wire spacing, and frame configuration. We provide a free on-site measurement and a transparent written quote — typically within 24 hours.`,
    },
    {
      question: `Do you offer free site visits across ${city.name}?`,
      answer: `Yes. Our ${city.name} team offers free measurement visits in all major neighborhoods including ${city.popularAreas.slice(0, 3).join(", ")} and surrounding areas.`,
    },
    {
      question: `Are your grills suitable for ${city.region} weather?`,
      answer: `Absolutely. We use 316-grade marine stainless steel that resists corrosion, salt air, and extreme heat — ideal for the ${city.region} climate.`,
    },
    {
      question: `What is the installation timeline in ${city.name}?`,
      answer: `Most homes in ${city.name} are completed within a single day after measurement. Larger projects may take 1–2 days depending on the number of openings.`,
    },
  ];

  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        canonicalPath={path}
        ogImage={`https://www.sleeksecure.in/assets/hero-luxury-balcony.jpg`}
        jsonLd={[
          cityBusinessSchema({ name: city.name, slug: city.slug, state: city.state }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/#service-areas" },
            { name: city.name, path },
          ]),
          faqSchema(cityFaqs),
        ]}
      />

      <PageHero
        badge={`Service Area · ${city.region}`}
        title={`Invisible Grills in ${city.name}`}
        subtitle={city.intro}
        breadcrumbs={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-primary-foreground/60 hover:text-primary-foreground">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-foreground/40" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary-foreground">{city.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
      />

      {/* Highlights */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Why {city.name} Chooses Us
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
                Trusted Safety Solutions for {city.name} Homes
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{city.localContext}</p>
              <ul className="space-y-3">
                {city.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a href={`tel:${BUSINESS.phone}`}>
                  <Button size="lg" className="gradient-primary text-primary-foreground border-0 gap-2">
                    <Phone className="w-4 h-4" /> Call for Free Quote
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="gap-2">
                    Request Site Visit <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="card-gradient rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                Get a Free Quote in {city.name}
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Neighborhoods We Serve in {city.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {city.popularAreas.map((area) => (
              <div key={area} className="card-gradient rounded-xl p-4 text-center hover-lift flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services available in city */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Services Available in {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.id} to={s.path} className="card-gradient rounded-xl p-6 hover-lift block">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.shortDesc}</p>
                <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default CityPage;
