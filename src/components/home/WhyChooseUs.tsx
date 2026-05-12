import { Shield, Eye, Clock, Award, Wrench, HeartHandshake } from "lucide-react";

const features = [
  { icon: Shield, title: "Superior Quality Products", desc: "Engineered to withstand significant force, keeping your loved ones protected at all times." },
  { icon: Eye, title: "Invisible Yet Ultra Strong", desc: "Premium high-tensile SS316 wires provide strong safety and security while maintaining clear open views for modern homes and balconies." },
  { icon: Award, title: "Premium Quality", desc: "316-grade marine stainless steel wires that resist corrosion and last for decades." },
  { icon: Wrench, title: "Expert Installation", desc: "Professional installation by trained technicians with minimal disruption to your daily life." },
  { icon: Clock, title: "10-Year Warranty", desc: "Comprehensive warranty on materials and installation for your complete peace of mind." },
  { icon: HeartHandshake, title: "2,500+ Happy Families", desc: "Trusted by thousands of homeowners across Hyderabad, Telangana & Andhra Pradesh for reliable safety solutions." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Modern Safety for Modern Homes
          </h2>
          <p className="text-muted-foreground">
            Here's why families across Hyderabad, Telangana & Andhra Pradesh trust us for their home safety needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="card-gradient rounded-xl p-6 hover-lift"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-md">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
