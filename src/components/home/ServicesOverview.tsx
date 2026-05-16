import { Link } from "react-router-dom";
import { ArrowRight, Fence, Wind, Shirt, Shield, Bird } from "lucide-react";
import { Button } from "@/components/ui/button";
import balconyImg from "@/assets/hero-balcony-invisible-grills.jpg";
import windowImg from "@/assets/window-invisible-grills.jpg";
import clothImg from "@/assets/cloth-hanger.jpg";
import childSafetyImg from "@/assets/showcase-children-safety.jpg";
import pigeonImg1 from "@/assets/invisible-grills-pigeons1.jpg";

const services = [
  {
    icon: Fence,
    title: "Invisible Grills for Balcony",
    description:
      "Premium balcony protection with crystal-clear views. Custom-fit solutions for all balcony types with child and pet safety as the priority.",
    href: "/services/balcony-grills",
    features: ["Crystal Clear Views", "Custom Fit", "Child-Safe"],
    image: balconyImg,
  },
  {
    icon: Shield,
    title: "Invisible Grills for Child Safety",
    description:
      "Certified child-safe invisible grills protecting your little ones with ISO 13126 tested spacing and unobstructed views.",
    href: "/services/child-safety-grills",
    features: ["ISO Certified", "25mm Safe Spacing", "Peace of Mind"],
    image: childSafetyImg,
  },
  {
    icon: Bird,
    title: "Pigeon-Safe Balcony Grills",
    description:
      "Advanced micro-mesh invisible grills keeping pigeons away while maintaining 99% view clarity for premium apartments.",
    href: "/services/pigeon-safe-grills",
    features: ["Pigeon-Proof", "99% View Clarity", "Premium Finish"],
    image: pigeonImg1,
  },
  {
    icon: Wind,
    title: "Invisible Grills for Windows",
    description:
      "Secure your windows with virtually invisible grills. Maximum safety for children and pets while maintaining natural ventilation.",
    href: "/services/window-grills",
    features: ["Window Safety", "Full Ventilation", "Child Protection"],
    image: windowImg,
  },
  {
    icon: Shirt,
    title: "Ceiling Cloth Hanger",
    description:
      "Space-saving pulley-operated cloth drying systems for modern apartments. Rust-proof stainless steel construction with easy operation.",
    href: "/services/ceiling-cloth-hangers",
    features: ["Pulley System", "Space Saving", "Rust-Proof"],
    image: clothImg,
  },
];

const ServicesOverview = () => {
  return (
    <section id="services" className="py-12 md:py-16 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Our Services
          </span>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Premium Safety Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive invisible grill and ceiling hanger solutions tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap gap-6 justify-center animate-fade-in">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.href} className="w-full sm:w-[18rem] md:w-80 min-w-[18rem]">
                <Link
                  to={service.href}
                  className="group relative overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col h-full bg-background border border-border hover:border-accent/50"
                >
                  {/* Service Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/40" />
                    {/* Icon Badge */}
                    <div className="absolute left-4 top-4 rounded-full bg-accent p-2.5 text-foreground shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Title */}
                    <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{service.description}</p>

                    {/* Features */}
                    <ul className="mb-4 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors group-hover:text-accent/80 mt-auto">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" className="gradient-gold text-accent-foreground hover:opacity-90 border-0 font-semibold" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              Request Free Site Visit
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
