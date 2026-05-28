import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Seo, { SITE_URL } from "@/components/shared/Seo";
import { breadcrumbSchema, orgSchema } from "@/lib/seo";
import PageHero from "@/components/shared/PageHero";
import { Shield, Users, Award, Target } from "lucide-react";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const values = [
  { icon: Shield, title: "Safety First", desc: "Every product we install meets the highest safety standards to protect your family." },
  { icon: Users, title: "Customer Focused", desc: "We listen to your needs and provide customized solutions for your home." },
  { icon: Award, title: "Quality Assured", desc: "We use only premium-grade materials backed by comprehensive warranties." },
  { icon: Target, title: "Precision Work", desc: "Our trained technicians ensure flawless installation every single time." },
];

const About = () => {
  return (
    <Layout>
      <Seo
        title="About Sleek Secure — Trusted Invisible Grill Experts in Hyderabad, Telangana & Andhra Pradesh"
        description="6+ years of experience and 2,500+ successful installations. Learn about Sleek Secure's mission to deliver premium SS316 invisible grills and ceiling cloth hangers across Hyderabad, Telangana & Andhra Pradesh."
        canonicalPath="/about"
        ogImage={`${SITE_URL}/assets/hero-luxury-balcony.jpg`}
        jsonLd={[
          orgSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ]),
        ]}
      />
      <PageHero
        badge="About Us"
        title="Your Trusted Safety Partner"
        subtitle="With over 6 years of experience, we are the leading provider of invisible grills and home safety solutions across Hyderabad, Telangana & Andhra Pradesh."
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
                <BreadcrumbPage className="text-primary-foreground">About Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
                Protecting Homes, Preserving Views
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sleek Secure was founded with a simple mission: to provide modern, aesthetically pleasing safety solutions that don't compromise the beauty of your living spaces.
                </p>
                <p>
                  Over the past 6+ years, we have grown from a small team to the most trusted name in invisible grills installation across Hyderabad, Telangana and other major cities in Andhra Pradesh. Our commitment to quality, safety, and customer satisfaction has earned us the trust of over 2,500 families.
                </p>
                <p>
                  We use only the finest 316-grade marine stainless steel wires and employ trained professionals who understand the importance of precision in every installation.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2,500+", label: "Installations" },
                { value: "8+", label: "Years Experience" },
                { value: "5", label: "Cities" },
                { value: "100%", label: "Safety Record" },
              ].map((stat) => (
                <div key={stat.label} className="card-gradient-gold rounded-xl p-6 text-center hover-lift">
                  <div className="text-3xl font-heading font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-gradient rounded-xl p-6 text-center hover-lift">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-md">
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
