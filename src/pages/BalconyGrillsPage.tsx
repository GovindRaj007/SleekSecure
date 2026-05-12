import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Sparkles,
  CloudSun,
  Wrench,
  Award,
  CheckCircle2,
  XCircle,
  Star,
  Phone,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import Layout from "@/components/layout/Layout";
import Seo, { SITE_URL } from "@/components/shared/Seo";
import { breadcrumbSchema, faqSchema, serviceSchema, localBusinessSchema } from "@/lib/seo";
import FAQAccordion from "@/components/shared/FAQAccordian";
import LayeredImageGallery from "@/components/service/LayeredImageGallery";
import BeforeAfterSlider from "@/components/service/BeforeAfterSlider";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { BUSINESS, SERVICE_AREAS, SERVICE_PAGES_DISPLAY_AREAS } from "@/lib/constants";
import { SERVICE_CONTENT } from "@/lib/serviceContent";

const trustIcons = [Shield, Eye, Award, CloudSun, Wrench, Sparkles];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const BalconyGrillsPage = () => {
  const data = SERVICE_CONTENT["balcony-grills"];
  
  if (!data) {
    return (
      <Layout>
        <Seo title="Service Not Found — Sleek Secure" description="The requested service page does not exist." noindex />
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center pt-28">
          <h1 className="text-3xl font-heading font-bold mb-4">Service Not Found</h1>
          <Link to="/"><Button>Return Home</Button></Link>
        </div>
      </Layout>
    );
  }

  const canonicalPath = `/${data.slug}`;
  const wa = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    `Hi, I'm interested in ${data.title}. Please share more details and provide a free quote for my requirements.`,
  )}`;

  return (
    <Layout>
      <Seo
        title={data.metaTitle}
        description={data.metaDescription}
        canonicalPath={canonicalPath}
        keywords={data.keywords}
        ogImage={`${SITE_URL}/src/assets/showcase-pet-safety.jpg`}
        author="SleekSecure Invisible Grills"
        publisher="SleekSecure Invisible Grills"
        jsonLd={[
          serviceSchema({ name: data.title, description: data.subtitle, path: canonicalPath }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/#services" },
            { name: data.title, path: canonicalPath },
          ]),
          faqSchema(data.faqs),
          localBusinessSchema(),
        ]}
      />

      {/* HERO */}
      <section className="relative min-h-[88vh] md:min-h-[92vh] flex items-end overflow-hidden pb-20 md:pb-24 pt-24">
        <div className="absolute inset-0">
          <img src={data.heroImage} alt={`${data.title} — premium SS316 invisible safety solution`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/30" />
        </div>

        <div className="relative z-10 container-custom">
          <Breadcrumb className="mb-5">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-xs">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-foreground/40" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/#services" className="text-primary-foreground/70 hover:text-primary-foreground text-xs">Services</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-foreground/40" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary-foreground text-xs">{data.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/20 backdrop-blur-md border border-accent/40 text-accent text-[11px] font-semibold uppercase tracking-wider mb-4">
              {data.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-primary-foreground leading-[1.05] mb-4">
              {data.emotionalHeadline}
            </h1>
            <p className="text-base sm:text-lg text-primary-foreground/85 mb-6 max-w-xl leading-relaxed">
              {data.emotionalSub}
            </p>

            <div className="flex flex-wrap gap-2.5 mb-7">
              {data.trustBadges.map((b) => (
                <span key={b} className="px-3 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 text-primary-foreground text-xs font-medium">
                  ✓ {b}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a href={wa} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 px-6">
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container-custom max-w-4xl">
          <motion.div {...fadeUp} className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Premium Invisible Grills in Hyderabad – Safety Without Compromising Views
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Sleek Secure Grills provides <strong>high-quality invisible grills in Hyderabad</strong> that offer <strong>complete protection</strong> while preserving your beautiful views. Our <strong>stainless steel safety solutions</strong> are perfect for modern homes, offices, and high-rise buildings across the city.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
              Hyderabad's Trusted Invisible Grill Specialists
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              As <strong>leading grill contractors in Hyderabad</strong>, we specialize in <strong>child-proof window grills</strong> and <strong>balcony safety solutions</strong> that protect your loved ones while maintaining the elegance of your space. Our grills offer a <strong>seamless blend of security and aesthetics</strong> for both residential and commercial properties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* REAL INSTALLATIONS GALLERY */}
      <LayeredImageGallery
        images={data.gallery.map((img) => ({ src: img, alt: `${data.title} installation` }))}
        title="View Our Recent Projects"
      />

      {/* QUICK TRUST */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container-custom">
          <motion.h2 {...fadeUp} className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-3">
            Why Families Trust Us
          </motion.h2>
          <motion.p {...fadeUp} className="text-muted-foreground text-center max-w-xl mx-auto mb-10 text-sm md:text-base">
            Premium materials. Certified installation. Built for the way you live today.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {data.trustItems.map((t, i) => {
              const Icon = trustIcons[i % trustIcons.length];
              return (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="card-gradient rounded-2xl p-4 md:p-6 hover-lift"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-primary flex items-center justify-center mb-3 shadow-md">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-sm md:text-base mb-1">{t.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">The Upgrade</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              From Risky & Outdated → Safe & Beautiful
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <motion.div {...fadeUp} className="rounded-2xl p-6 md:p-8 bg-card border-2 border-destructive/20 shadow-md">
              <h3 className="font-heading text-lg md:text-xl font-bold text-destructive mb-5 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> The Problem
              </h3>
              <ul className="space-y-3">
                {data.problems.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                    <XCircle className="w-4 h-4 text-destructive shrink-0 mt-1" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeUp} className="rounded-2xl p-6 md:p-8 card-gradient-primary shadow-xl">
              <h3 className="font-heading text-lg md:text-xl font-bold text-primary-foreground mb-5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" /> Our Solution
              </h3>
              <ul className="space-y-3">
                {data.solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm md:text-base text-primary-foreground/95">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-secondary">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Before and After</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              See the Transformation
            </h2>
          </motion.div>
          <div className="w-full md:w-4/5 lg:w-3/5 mx-auto">
            <BeforeAfterSlider
              beforeImg={data.beforeAfter.before}
              afterImg={data.beforeAfter.after}
              beforeLabel="Before"
              afterLabel="After"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Why It's Worth It</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              Premium Benefits, Built In
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {data.benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="card-gradient rounded-2xl p-5 md:p-6 hover-lift"
              >
                <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-heading font-bold text-foreground text-base md:text-lg mb-1.5">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Applications */}
          <motion.div {...fadeUp} className="mt-16">
            <h3 className="font-heading font-bold text-foreground text-xl md:text-2xl mb-6 text-center">Common Applications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
              {data.applications.map((a) => (
                <div key={a} className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border/60">
                  <ArrowRight className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm md:text-base text-foreground">{a}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Specifications */}
          <motion.div {...fadeUp} className="mt-16 max-w-3xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-br from-primary/15 via-primary/10 to-accent/5 p-8 border border-primary/20 shadow-lg">
              <h3 className="mb-8 font-heading text-xl md:text-2xl font-bold text-foreground">Technical Specifications</h3>
              <dl className="space-y-5">
                {data.techDetails.map((spec, index) => {
                  const parts = spec.includes(':') ? spec.split(':').map(s => s.trim()) : [spec, '✓'];
                  const label = parts[0];
                  const value = parts[1] || '✓';
                  return (
                    <div key={index} className="flex justify-between items-start border-b border-primary/15 pb-3 gap-4">
                      <dt className="text-muted-foreground text-sm md:text-base font-medium flex-shrink-0">{label}</dt>
                      <dd className="font-semibold text-foreground text-sm md:text-base text-right break-words">{value}</dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INSTALLATION PROCESS */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container-custom max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">How It Works</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              Effortless 5-Step Installation
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-5 md:left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />
            <div className="space-y-5">
              {data.installationSteps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative pl-14 md:pl-20"
                >
                  <div className="absolute left-0 top-0 w-10 h-10 md:w-12 md:h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg ring-4 ring-background">
                    <span className="text-primary-foreground font-bold">{i + 1}</span>
                  </div>
                  <div className="card-gradient rounded-xl p-4 md:p-5">
                    <h3 className="font-heading font-bold text-foreground text-base md:text-lg mb-1">{s.step}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container-custom">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Loved by Families</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              4.9★ from 320+ Happy Homes
            </h2>
          </motion.div>
          <div className="-mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
              {data.testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="card-gradient rounded-2xl p-5 md:p-6 shrink-0 w-[85%] sm:w-[70%] md:w-auto snap-center hover-lift"
                >
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, k) => (
                      <Star key={k} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed mb-4">"{t.text}"</p>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" /> {t.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container-custom max-w-4xl text-center">
          <motion.div {...fadeUp}>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Service Areas</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-3">
              Premium {data.title} Across AP & Telangana
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-xl mx-auto">
              We install and service {data.title.toLowerCase()} across all major cities and surrounding regions.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-2 md:gap-3">
            {SERVICE_PAGES_DISPLAY_AREAS.map((a) => (
              <span key={a.slug} className="px-4 py-2 rounded-full bg-card border border-border text-foreground text-xs md:text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                <MapPin className="inline w-3 h-3 mr-1 text-accent" />
                {a.name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container-custom max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-8">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">FAQs</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <motion.div {...fadeUp}>
            <FAQAccordion faqs={data.faqs} />
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.heroImage} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/85 to-primary/85" />
        </div>
        <div className="relative z-10 container-custom text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 leading-tight">
              Upgrade Your Safety Today
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/85 max-w-xl mx-auto mb-8">
              Book your free site visit & quote in under 60 seconds. No obligation, fully transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button size="lg" className="w-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-primary-foreground font-semibold gap-2">
                  <WhatsAppIcon className="w-5 h-5" /> WhatsApp Now
                </Button>
              </a>
              <a href={`tel:${BUSINESS.phone}`} className="flex-1">
                <Button size="lg" className="w-full bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-md font-semibold gap-2">
                  <Phone className="w-5 h-5" /> Call Now
                </Button>
              </a>
              <Link to="/contact" className="flex-1">
                <Button size="lg" className="w-full gradient-gold text-accent-foreground border-0 font-semibold gap-2">
                  Free Consultation <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BalconyGrillsPage;
