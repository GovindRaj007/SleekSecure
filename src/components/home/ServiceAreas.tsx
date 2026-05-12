import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { TELANGANA_LOCATIONS, ANDHRA_PRADESH_LOCATIONS } from "@/lib/constants";

const ServiceAreas = () => {
  const telanganaAreas = TELANGANA_LOCATIONS.map((l) => ({
    name: l.name,
    to: `/invisible-grills-${l.slug}`,
  }));
  
  const apAreas = ANDHRA_PRADESH_LOCATIONS.map((a) => ({
    name: a.name,
    to: `/areas/${a.slug}`,
  }));

  const Pill = ({ name, to }: { name: string; to: string }) => (
    <Link
      to={to}
      aria-label={`Invisible grills in ${name}`}
      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shadow-sm"
    >
      <MapPin className="w-3.5 h-3.5 opacity-70" />
      {name}
    </Link>
  );

  return (
    <section id="service-areas" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Service Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Serving in Telangana & Andhra Pradesh
          </h2>
          <p className="text-muted-foreground">
            Premium invisible grills and ceiling cloth hangers — tap your area to explore.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 text-center md:text-left">
              Telangana
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {telanganaAreas.map((a) => (
                <Pill key={a.to} {...a} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 text-center md:text-left">
              Andhra Pradesh
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {apAreas.map((a) => (
                <Pill key={a.to} {...a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
